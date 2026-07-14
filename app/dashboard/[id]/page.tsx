"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id;

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
const [story, setStory] = useState("");

  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", projectId)
      .single();

    if (error) {
      console.error(error);
    } else {
      setProject(data);
      if (data.ai_story) {
  setStory(data.ai_story);
}
    }

    setLoading(false);
  }
async function generateStory() {
  setGenerating(true);

  try {
    const res = await fetch("/api/generate-story", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tripName: project.trip_name,
        destination: project.destination,
        travelStyle: project.travel_style,
        mood: project.mood,
        voice: project.voice,
        music: project.music,
      }),
    });

    const data = await res.json();

    if (!data.success) {
  console.error(data);
  alert(data.error);
  setGenerating(false);
  return;
}

    setStory(data.story);

    const { error } = await supabase
      .from("projects")
      .update({
        ai_story: data.story,
      })
      .eq("id", project.id);

    if (error) {
      console.error(error);
    }

    alert("🎉 AI Story Generated!");
 } catch (err: any) {
  console.error(err);
  alert(err?.message || "Something went wrong.");
}

  setGenerating(false);
}
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading Project...</h2>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto py-10 px-6">

        <h1 className="text-4xl font-bold text-green-600">
          {project.trip_name}
        </h1>

        <p className="text-gray-500 mt-2">
          📍 {project.destination}
        </p>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold">
            Project Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            <div>
              <p className="font-semibold">Travel Style</p>
              <p>{project.travel_style}</p>
            </div>

            <div>
              <p className="font-semibold">Mood</p>
              <p>{project.mood}</p>
            </div>

            <div>
              <p className="font-semibold">Voice</p>
              <p>{project.voice}</p>
            </div>

            <div>
              <p className="font-semibold">Music</p>
              <p>{project.music}</p>
            </div>

          </div>

        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold">
            AI Generation
          </h2>

          <p className="text-gray-500 mt-2">
            This is where AI will generate your travel story, narration,
            timeline, and final vlog.
          </p>

         <button
  onClick={generateStory}
  disabled={generating}
  className="mt-8 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 disabled:bg-gray-400"
>
{generating
  ? "Generating AI Story..."
  : story
  ? "Regenerate AI Story"
  : "Generate AI Story"}
</button>
{story && (
  <div className="mt-8 border rounded-xl p-6 bg-green-50">
    <h3 className="text-xl font-bold mb-4">
      ✨ AI Travel Story
    </h3>

    <p className="whitespace-pre-wrap leading-8 text-gray-700">
      {story}
    </p>
  </div>
)}
{story && (
  <button
    onClick={() => {
      navigator.clipboard.writeText(story);
      alert("Story copied!");
    }}
    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
  >
    Copy Story
  </button>
)}
        </div>

      </div>
    </main>
  );
}