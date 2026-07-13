"use client";

import { useState } from "react";

interface UploadSectionProps {
  onFilesSelected: (files: FileList) => void;
  onUploadComplete: (urls: string[]) => void;
}

export default function UploadSection({
  onFilesSelected,
  onUploadComplete,
}: UploadSectionProps) {
  const [uploading, setUploading] = useState(false);
async function handleFiles(files: FileList) {
  onFilesSelected(files);

  setUploading(true);

  const uploadedUrls: string[] = [];

  try {
    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      uploadedUrls.push(data.url);
    }

    onUploadComplete(uploadedUrls);

    alert("All files uploaded successfully!");
  } catch (error) {
    console.error(error);
    alert("Upload failed.");
  }

  setUploading(false);
}

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold">
        Upload Your Memories
      </h2>

      <p className="text-gray-500 mt-2">
        Upload your travel photos and videos.
      </p>

      <div className="mt-8 border-2 border-dashed border-green-500 rounded-2xl p-12 text-center bg-green-50">
        <div className="text-6xl">📷</div>

        <h3 className="text-2xl font-bold mt-4">
          Drag & Drop Photos & Videos
        </h3>

        <p className="mt-3 text-gray-500">
          or click below to browse files
        </p>

        <input
          type="file"
          multiple
          accept="image/*,video/*"
          className="hidden"
          id="file-upload"
          onChange={(e) => {
            if (e.target.files) {
              handleFiles(e.target.files);
            }
          }}
        />

        <label
          htmlFor="file-upload"
          className="inline-block mt-6 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 cursor-pointer"
        >
          {uploading ? "Uploading..." : "Browse Files"}
        </label>

        <p className="mt-6 text-sm text-gray-500">
          Supports JPG • PNG • MP4 • MOV
        </p>
      </div>
    </div>
  );
}