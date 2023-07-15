import { createClient } from "@supabase/supabase-js";
import { embed } from "./openai";

const supabaseClient = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_API_KEY
);

export async function fetchSupabase(query) {
  const embedding = await embed(query);

  const { error, data } = await supabaseClient.rpc("match_docs", {
    embedding: embedding.data[0].embedding,
    match_count: 1,
    filter: {},
  });

  if (error) {
    console.log("error", error);
  }

  console.log("data", data);
  return data;
}

// {
//   metadata: {

//   },
//   content: "This is a test",
// }
export async function insert(documents) {
  let num = 0;

  // delete everything before pushing
  const { error } = await supabaseClient
    .from("documents")
    .delete()
    .neq("id", 0);

  if (error) {
    console.log("error", error);
  }

  for (const document of documents) {
    let embedding = await embed(document.content);
    console.log("embedding", embedding);

    try {
      const { error, data } = await supabaseClient
        .from("documents")
        .insert({
          content: document.content,
          metadata: document.metadata,
          embedding: embedding.data[0].embedding,
        })
        .select()
        .limit(1)
        .single();

      console.log("data", data);
      console.log("error", error);
    } catch (error) {
      console.log("error", error);
    }

    console.log("iteration: ", num++);
  }

  console.log("Done");
}
