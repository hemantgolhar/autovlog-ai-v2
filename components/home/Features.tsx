import { Wand2, Mic, Music, Share2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Wand2 className="w-10 h-10 text-green-600" />,
      title: "AI Story Generator",
      description:
        "AI automatically creates an engaging travel story from your photos and videos.",
    },
    {
      icon: <Mic className="w-10 h-10 text-green-600" />,
      title: "AI Voice Over",
      description:
        "Generate natural-sounding narration in multiple languages and voices.",
    },
    {
      icon: <Music className="w-10 h-10 text-green-600" />,
      title: "Background Music",
      description:
        "Automatically add cinematic music that matches your travel mood.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-green-600" />,
      title: "One-Click Export",
      description:
        "Export directly for Instagram Reels, YouTube Shorts, TikTok, or Full HD videos.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Everything You Need
        </h2>

        <p className="text-center text-gray-500 mt-4">
          AI handles everything from storytelling to video creation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              {feature.icon}

              <h3 className="text-xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}