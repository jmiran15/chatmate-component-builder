// Configures the Supabase client

import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  process.env.REACT_APP_SUPABASE_URL || "",
  process.env.REACT_APP_SUPABASE_API_KEY || ""
);

// import { createClient } from "@supabase/supabase-js";
// import { embed } from "./openai";

// const supabaseClient = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_API_KEY
// );

// export async function fetchSupabase(query) {
//   const embedding = await embed(query);

//   const { error, data } = await supabaseClient.rpc("match_docs", {
//     embedding: embedding.data[0].embedding,
//     match_count: 1,
//     filter: {},
//   });

//   if (error) {
//     console.log("error", error);
//   }

//   console.log("data", data);
//   return data;
// }

// export async function insert(documents, tableId) {
//   // embed all documents
//   let embeddingResponses = await Promise.all(
//     documents.map((document) => embed(document.content))
//   );
//   console.log("embeddingResponses", embeddingResponses);

//   // insert all documents
//   const { data, error } = await supabaseClient
//     .from("documents")
//     .insert(
//       documents.map((document, index) => ({
//         content: document.content,
//         metadata: document.metadata,
//         embedding: embeddingResponses[index].data[0].embedding,
//         table: tableId,
//       }))
//     )
//     .select();

//   // for (const document of documents) {
//   //   let embedding = await embed(document.content);
//   //   console.log("embedding", embedding);

//   //   try {
//   //     const { error, data } = await supabaseClient
//   //       .from("documents")
//   //       .insert({
//   //         content: document.content,
//   //         metadata: document.metadata,
//   //         embedding: embedding.data[0].embedding,
//   //       })
//   //       .select()
//   //       .limit(1)
//   //       .single();

//   //     console.log("data", data);
//   //     console.log("error", error);
//   //   } catch (error) {
//   //     console.log("error", error);
//   //   }

//   //   console.log("iteration: ", num++);
//   // }

//   console.log("Done");
// }

// export async function fetchTable(tableId) {
//   try {
//     let { data: documents, error } = await supabaseClient
//       .from("documents")
//       .select("id, metadata, content")
//       .eq("table", tableId);
//     return documents;
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// export async function deleteTable(tableId) {
//   try {
//     const { error } = await supabaseClient
//       .from("documents")
//       .delete()
//       .eq("table", tableId);
//     console.log("deleted table: ", tableId);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// export async function createProject(name, userId) {
//   try {
//     const { data, error } = await supabaseClient
//       .from("projects")
//       .insert([{ name, userId, components: { nodes: {} } }])
//       .select();

//     console.log("create new project", data, error);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// export async function fetchProjects(userId) {
//   try {
//     let { data: projects, error } = await supabaseClient
//       .from("projects")
//       .select("*")

//       // Filters
//       .eq("userId", userId);
//     return projects;
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// export async function fetchProject(projectId, userId) {
//   try {
//     let { data: projects, error } = await supabaseClient
//       .from("projects")
//       .select("*")

//       // Filters
//       .eq("id", projectId)
//       .eq("userId", userId);

//     return projects;
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// export async function updateProjectComponents(projectId, userId, components) {
//   try {
//     const { data, error } = await supabaseClient
//       .from("projects")
//       .update({ components })
//       .eq("userId", userId)
//       .eq("id", projectId)
//       .select();

//     console.log("update project components", data, error);
//   } catch (error) {
//     console.log("error", error);
//   }
// }
