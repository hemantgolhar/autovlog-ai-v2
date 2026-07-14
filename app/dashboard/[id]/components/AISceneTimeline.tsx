"use client";

interface AISceneTimelineProps {
  scenes: string;
  generating: boolean;
  onGenerate: () => void;
}

export default function AISceneTimeline({
  scenes,
  generating,
  onGenerate,
}: AISceneTimelineProps) {
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold">
        🎬 AI Scene Timeline
      </h2>

      <p className="text-gray-500 mt-2">
        AI converts your travel story into a cinematic shot list.
      </p>

      <button
        onClick={onGenerate}
        disabled={generating}
        className="mt-6 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-semibold"
      >
        {generating
          ? "Generating Scenes..."
          : scenes
          ? "Regenerate Scene Timeline"
          : "Generate Scene Timeline"}
      </button>

      {scenes && (
        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-2xl p-6">
          <pre className="whitespace-pre-wrap leading-8 text-gray-700 font-sans">
            {scenes}
          </pre>
        </div>
      )}

    </div>
  );
}