import { supabase } from "@/lib/supabase";

export async function getProject(id: any) {
  return await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();
}

export async function saveStory(id: any, story: string) {
  return await supabase
    .from("projects")
    .update({
      ai_story: story,
    })
    .eq("id", id);
}

export async function saveScenes(id: any, scenes: string) {
  return await supabase
    .from("projects")
    .update({
      ai_scenes: scenes,
    })
    .eq("id", id);
}

export async function saveMediaMap(id: any, mediaMap: string) {
  return await supabase
    .from("projects")
    .update({
      ai_media_map: mediaMap,
    })
    .eq("id", id);
}