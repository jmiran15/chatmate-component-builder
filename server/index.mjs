import express from "express";
import multer from "multer";
import PDFParser from "pdf2json";
import util from "util";
import fs from "fs";
import cors from "cors";

const upload = multer({ dest: "uploads/" });
const app = express();
app.use(cors());

app.post("/upload", upload.array("files"), async (req, res) => {
  const files = Array.isArray(req.files) ? req.files : [req.files];

  const filenames = Array.isArray(req.body.filenames)
    ? req.body.filenames
    : [req.body.filenames];

  if (!files.length) {
    return res.status(400).json({ error: "File blobs are required." });
  }

  const fileContentPromises = files.map(async (file, index) => {
    const filename = filenames[index];
    const fileExtension = filename.split(".").pop();
    var fileContent = "";
    let fileContentPromise;

    switch (fileExtension) {
      case "txt":
      case "csv":
      case "html":
      case "json":
      case "md":
      case "mdx":
        const buffer = await util.promisify(fs.readFile)(file.path);
        fileContent = buffer.toString("utf8");
        fileContentPromise = Promise.resolve();
        break;
      case "pdf":
        const fileBuffer = await util.promisify(fs.readFile)(file.path);
        const pdfParser = new PDFParser(this, 1);

        pdfParser.on("pdfParser_dataError", (errData) =>
          console.error(errData)
        );

        fileContentPromise = new Promise((resolve, reject) => {
          pdfParser.on("pdfParser_dataReady", (pdfData) => {
            fileContent = pdfParser.getRawTextContent();
            resolve();
          });

          pdfParser.on("pdfParser_dataError", (errData) => reject(errData));
        });

        pdfParser.parseBuffer(fileBuffer);

        break;
      default:
        fileContent = "Unsupported file type";
        fileContentPromise = Promise.resolve();
        break;
    }

    return fileContentPromise
      .then(() => ({ file: filename, content: fileContent }))
      .catch(() => ({ file: filename, content: fileContent }));
  });

  const fileContents = await Promise.all(fileContentPromises);

  return res.json({ files: fileContents });
});

app.listen(5000, () => console.log("Server started on port 5000"));

app.use((err, req, res, next) => {
  console.error("Error uploading files:", err.stack);
  res.status(500).json({ message: "Error uploading files" });
});
