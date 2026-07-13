"use client";

import { useState } from "react";
import UploadSection from "@/components/create-project/UploadSection";
export default function CreateProjectPage() {
  const [files, setFiles] = useState<FileList | null>(null);

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
              placeholder="Trip Name"
              className="border rounded-xl px-4 py-3"
            />

            <input
              placeholder="Destination"
              className="border rounded-xl px-4 py-3"
            />

            <select className="border rounded-xl px-4 py-3">
              <option>Adventure</option>
              <option>Family</option>
              <option>Luxury</option>
            </select>

            <select className="border rounded-xl px-4 py-3">
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
            <select className="border rounded-xl px-4 py-3">
              <option>Female Voice</option>
              <option>Male Voice</option>
            </select>

            <select className="border rounded-xl px-4 py-3">
              <option>Cinematic Music</option>
              <option>Adventure Music</option>
              <option>Relaxing Music</option>
            </select>

            <select className="border rounded-xl px-4 py-3">
              <option>Instagram Reel</option>
              <option>YouTube</option>
              <option>TikTok</option>
            </select>
          </div>
        </div>

        {/* Upload Section */}
        <UploadSection
          onFilesSelected={(selectedFiles) =>
            setFiles(selectedFiles)
          }
        />

        {/* Selected Files */}
        {files && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Selected Files
            </h2>

            <div className="space-y-3">
              {Array.from(files).map((file, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border rounded-xl p-4"
                >
                  <span>{file.name}</span>

                  <span className="text-green-600 font-semibold">
                    Ready ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}