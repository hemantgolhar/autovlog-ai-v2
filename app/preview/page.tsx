"use client";

import { Player } from "@remotion/player";
import VlogComposition from "@/components/video/VlogComposition";

export default function PreviewPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900">
      <Player
  component={VlogComposition}
 inputProps={{
  images: [
    "https://res.cloudinary.com/raz41cg2/image/upload/v1784001875/autovlog-ai/v2onm0rx8b72fugwot9f.jpg",
    "https://res.cloudinary.com/raz41cg2/image/upload/v1784001876/autovlog-ai/xo1epkpbai4mi3opf0wc.jpg",
    "https://res.cloudinary.com/raz41cg2/image/upload/v1784001877/autovlog-ai/djxad2khn4dqympk0fov.jpg",
    "https://res.cloudinary.com/raz41cg2/image/upload/v1784001875/autovlog-ai/v2onm0rx8b72fugwot9f.jpg",
  ],
}}
  durationInFrames={300}
  compositionWidth={1080}
  compositionHeight={1920}
  fps={30}
  controls
  style={{
    width: 360,
    borderRadius: 20,
    overflow: "hidden",
  }}
/>
    </main>
  );
}