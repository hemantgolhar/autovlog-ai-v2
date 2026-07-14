"use client";

import AISceneTimeline from "./components/AISceneTimeline";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  getProject,
  saveStory,
  saveScenes,
  saveMediaMap,
} from "./services/projectService";
import { useParams } from "next/navigation";

import ProjectHeader from "./components/ProjectHeader";
import ProjectDetails from "./components/ProjectDetails";
import AIStory from "./components/AIStory";

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id;

  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
const [story, setStory] = useState("");
const [scenes, setScenes] = useState("");
const [generatingScenes, setGeneratingScenes] = useState(false);
const [mediaMap, setMediaMap] = useState("");
const [matchingMedia, setMatchingMedia] = useState(false);
const [userPrompt, setUserPrompt] = useState("");
  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    const { data, error } = await getProject(projectId);
    if (error) {
      console.error(error);
    } else {
      setProject(data);
      if (data.ai_story) {
  setStory(data.ai_story);
}

if (data.ai_scenes) {
  setScenes(data.ai_scenes);
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
         userPrompt,
      }),
    });

    const data = await res.json();

    if (!data.success) {
  console.error(data);
  alert(data.error);
  setGenerating(false);
  return;
}
async function generateScenes() {
  if (!story) {
    alert("Please generate the AI Story first.");
    return;
  }

  setGeneratingScenes(true);

  try {
    const res = await fetch("/api/generate-scenes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        story,
        userPrompt,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.error);
      setGeneratingScenes(false);
      return;
    }
   async function matchProjectMedia() {
        console.log("Match Media button clicked");
console.log(project);
  if (!story || !scenes) {
    alert("Generate Story and Scene Timeline first.");
    return;
  }

  if (!project.files || project.files.length === 0) {
    alert("No uploaded media found.");
    return;
  }

  setMatchingMedia(true);

  try {
    const res = await fetch("/api/match-media", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        story,
        scenes,
        files: project.files,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.error);
      setMatchingMedia(false);
      return;
    }

    setMediaMap(data.mediaMap);

   const { error } = await saveStory(project.id, data.story);

if (error) {
  console.error(error);
}
    alert("🎥 Media Matched Successfully!");
  } catch (err: any) {
    console.error(err);
    alert(err?.message || "Something went wrong.");
  }

  setMatchingMedia(false);
}

    setScenes(data.scenes);

   const { error } = await saveScenes(project.id, data.scenes);

if (error) {
  console.error(error);
}
    alert("🎬 Scene Timeline Generated!");
  } catch (err: any) {
    console.error(err);
    alert(err?.message || "Something went wrong.");
  }

  setGeneratingScenes(false);
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

async function generateScenes() {
  if (!story) {
    alert("Please generate the AI Story first.");
    return;
  }

  setGeneratingScenes(true);

  try {
    const res = await fetch("/api/generate-scenes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        story,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.error);
      setGeneratingScenes(false);
      return;
    }

    setScenes(data.scenes);

    const { error } = await supabase
      .from("projects")
      .update({
        ai_scenes: data.scenes,
      })
      .eq("id", project.id);

    if (error) {
      console.error(error);
    }

    alert("🎬 Scene Timeline Generated!");
  } catch (err: any) {
    console.error(err);
    alert(err?.message || "Something went wrong.");
  }

  setGeneratingScenes(false);
}

async function matchProjectMedia() {
  console.log("Match Media button clicked");
  console.log(project);

  if (!story || !scenes) {
    alert("Generate Story and Scene Timeline first.");
    return;
  }

  if (!project.files || project.files.length === 0) {
    alert("No uploaded media found.");
    return;
  }

  setMatchingMedia(true);

  try {
    const res = await fetch("/api/match-media", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        story,
        scenes,
        files: project.files,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.error);
      setMatchingMedia(false);
      return;
    }

    setMediaMap(data.mediaMap);

   const { error } = await saveMediaMap(project.id, data.mediaMap);

if (error) {
  console.error(error);
}

    alert("🎉 Media matched successfully!");
  } catch (err: any) {
    console.error(err);
    alert(err?.message || "Something went wrong.");
  }

  setMatchingMedia(false);
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

        <ProjectHeader
  tripName={project.trip_name}
  destination={project.destination}
/>

        <ProjectDetails
  travelStyle={project.travel_style}
  mood={project.mood}
  voice={project.voice}
  music={project.music}
/>
        <AIStory
  story={story}
  generating={generating}
  onGenerate={generateStory}
  
/>
<div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
  <h2 className="text-xl font-bold">
    ✍️ Describe your video (Optional)
  </h2>

  <p className="text-gray-500 mt-2">
    Example: Create a cinematic travel film with emotional storytelling,
    smooth transitions, slow motion and epic music.
  </p>

  <textarea
    value={userPrompt}
    onChange={(e) => setUserPrompt(e.target.value)}
    rows={5}
    className="w-full mt-4 border rounded-xl p-4"
    placeholder="Describe your dream video..."
  />
</div>
        <AISceneTimeline
  scenes={scenes}
  generating={generatingScenes}
  onGenerate={generateScenes}
/>
<button
  onClick={() => {
    console.log("BUTTON CLICKED");
    matchProjectMedia();
  }}
  disabled={matchingMedia}
  className="mt-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl"
>
  {matchingMedia
    ? "Matching Media..."
    : "🎥 Match Media with Scenes"}
</button>

{mediaMap && (
  <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
    <h2 className="text-2xl font-bold mb-4">
      🎬 AI Media Matching
    </h2>

    <pre className="whitespace-pre-wrap text-gray-700 leading-8">
      {mediaMap}
    </pre>
  </div>
)}
    </div>
  </main>
);
}