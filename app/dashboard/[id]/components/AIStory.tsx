"use client";

interface AIStoryProps {
  story: string;
  generating: boolean;
  onGenerate: () => void;
}

export default function AIStory({
  story,
  generating,
  onGenerate,
}: AIStoryProps) {
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold">
        ✨ AI Travel Story
      </h2>

      <p className="text-gray-500 mt-2">
        Generate a cinematic travel story powered by AI.
      </p>

      <button
        onClick={onGenerate}
        disabled={generating}
        className="mt-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-semibold transition"
      >
        {generating
          ? "Generating AI Story..."
          : story
          ? "Regenerate AI Story"
          : "Generate AI Story"}
      </button>

      {story && (
        <>
          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-4">
              🌍 Your AI Story
            </h3>

            <p className="whitespace-pre-wrap leading-8 text-gray-700">
              {story}
            </p>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText(story);
              alert("Story copied!");
            }}
            className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
          >
            📋 Copy Story
          </button>
        </>
      )}

    </div>
  );
}