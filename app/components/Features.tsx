import { Wand2, Mic, Music, Share2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Wand2 className="w-10 h-10 text-green-600" />,
      title: "AI Video Editing",
      description:
        "Automatically edit your travel photos and videos into beautiful cinematic stories.",
    },
    {
      icon: <Mic className="w-10 h-10 text-green-600" />,
      title: "AI Voice Over",
      description:
        "Generate natural AI narration for every travel memory.",
    },
    {
      icon: <Music className="w-10 h-10 text-green-600" />,
      title: "Auto Music",
      description:
        "Perfect background music selected automatically for your vlog.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-green-600" />,
      title: "One Click Export",
      description:
        "Export directly for Instagram, YouTube and TikTok.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Powerful AI Features
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Everything you need to create amazing travel videos automatically.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {feature.icon}

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}