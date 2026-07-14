import React from "react";
import { AbsoluteFill, Img, useCurrentFrame } from "remotion";

type Props = {
  images: string[];
};

export default function VlogComposition({ images }: Props) {
  const frame = useCurrentFrame();

  // Change image every 90 frames (3 seconds at 30 FPS)
  const imageIndex = Math.floor(frame / 90) % images.length;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img
        src={images[imageIndex]}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </AbsoluteFill>
  );
}