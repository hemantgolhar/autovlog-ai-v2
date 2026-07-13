"use client";
import { useState } from "react";
import UploadSection from "@/components/create-project/UploadSection";
import SelectedFiles from "@/components/create-project/SelectedFiles";
import { supabase } from "@/lib/supabase";

export default function CreateProjectPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [travelStyle, setTravelStyle] = useState("Adventure");
  const [mood, setMood] = useState("Cinematic");

  const [voice, setVoice] = useState("Female Voice");
  const [music, setMusic] = useState("Cinematic Music");
  const [outputFormat, setOutputFormat] = useState("Instagram Reel");

  const [loading, setLoading] = useState(false);

  const saveProject = async () => {
    if (!tripName.trim()) {
      alert("Please enter Trip Name");
      return;
    }

    if (!destination.trim()) {
      alert("Please enter Destination");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          trip_name: tripName,
          destination,
          travel_style: travelStyle,
          mood,
          voice,
          music,
          output_format: outputFormat,
          files: uploadedUrls,
          status: "draft",
        },
      ])
      .select();

    setLoading(false);

    if (error) {
      console.error(error);
      alert(error.message);
      return;
    }

    alert("🎉 Project created successfully!");

    console.log(data);

    // Reset Form
    setTripName("");
    setDestination("");
    setTravelStyle("Adventure");
    setMood("Cinematic");
    setVoice("Female Voice");
    setMusic("Cinematic Music");
    setOutputFormat("Instagram Reel");
    setFiles(null);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto py-10 px-6">
        <h1 className="text-4xl font-bold text-green-600">
          Create New AI Travel Vlog
        </h1>

        <p className="text-gray-500 mt-2">
          Upload your travel memories and let AI create a cinematic vlog.
        </p>

        {/* Trip Details */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold">
            Trip Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            <input
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              placeholder="Trip Name"
              className="border rounded-xl px-4 py-3"
            />

            <input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination"
              className="border rounded-xl px-4 py-3"
            />

            <select
              value={travelStyle}
              onChange={(e) => setTravelStyle(e.target.value)}
              className="border rounded-xl px-4 py-3"
            >
              <option>Adventure</option>
              <option>Family</option>
              <option>Luxury</option>
            </select>

            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="border rounded-xl px-4 py-3"
            >
              <option>Cinematic</option>
              <option>Happy</option>
              <option>Emotional</option>
            </select>

          </div>
        </div>

        {/* AI Settings */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold">
            AI Settings
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">

            <select
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className="border rounded-xl px-4 py-3"
            >
              <option>Female Voice</option>
              <option>Male Voice</option>
            </select>

            <select
              value={music}
              onChange={(e) => setMusic(e.target.value)}
              className="border rounded-xl px-4 py-3"
            >
              <option>Cinematic Music</option>
              <option>Adventure Music</option>
              <option>Relaxing Music</option>
            </select>

            <select
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value)}
              className="border rounded-xl px-4 py-3"
            >
              <option>Instagram Reel</option>
              <option>YouTube</option>
              <option>TikTok</option>
            </select>

          </div>
        </div>

        {/* Upload Section */}
        <UploadSection
          onFilesSelected={(selectedFiles) => setFiles(selectedFiles)}
          onUploadComplete={setUploadedUrls}
        />

        {/* Selected Files */}
        <SelectedFiles files={files} />

        {/* Create Project Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={saveProject}
            disabled={loading}
            className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? "Creating Project..." : "Create Project"}
          </button>
        </div>
      </div>
    </main>
  );
}