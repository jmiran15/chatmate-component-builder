import { useEffect } from "react";
import { useState } from "react";
import { supabaseClient } from "../utilsv2/supabase";
import { Project } from "../componentsv2/ProjectCard";

export default function useProjects(userId: string | null | undefined) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (userId) {
      supabaseClient
        .from("projects")
        .select("*")
        .eq("user", userId)
        .order("created_at", { ascending: false })
        .then(({ data, error }) => {
          if (error) {
            console.log({ error });
            return;
          }
          if (data) {
            setProjects(data);
          }
        });
    }
  }, [userId]);

  return projects;
}
