"use client";

import { useEffect, useState } from "react";

interface SelectedFilesProps {
  files: FileList | null;
}

export default function SelectedFiles({
  files,
}: SelectedFilesProps) {
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    if (!files) return;

    const urls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  if (!files) return null;

  return (
    <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">
        Selected Files
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {Array.from(files).map((file, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow"
          >
            {file.type.startsWith("image") ? (
              <img
                src={previews[index]}
                alt={file.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <video
                src={previews[index]}
                controls
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <p className="font-semibold truncate">
                {file.name}
              </p>

              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

              <p className="text-green-600 mt-2 font-semibold">
                ✓ Uploaded
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}