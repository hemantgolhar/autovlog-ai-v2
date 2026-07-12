import { Upload, Sparkles, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-10 h-10 text-white" />,
      number: "01",
      title: "Upload",
      description:
        "Upload your travel photos and videos from your phone or computer.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white" />,
      number: "02",
      title: "AI Creates",
      description:
        "Our AI edits everything into a beautiful cinematic travel vlog.",
    },
    {
      icon: <Download className="w-10 h-10 text-white" />,
      number: "03",
      title: "Download & Share",
      description:
        "Download your vlog in HD and share it on Instagram, YouTube or TikTok.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            How It Works
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Create amazing travel videos in just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {steps.map((step) => (

            <div
              key={step.number}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >

              <div className="w-20 h-20 rounded-full bg-green-600 mx-auto flex items-center justify-center">
                {step.icon}
              </div>

              <p className="text-green-600 font-bold mt-6">
                STEP {step.number}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}