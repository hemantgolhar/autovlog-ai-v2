export default function HowItWorks() {
  const steps = [
    {
      title: "1. Upload",
      description: "Upload your travel photos and videos.",
    },
    {
      title: "2. AI Creates",
      description: "AI generates a story, voice-over, music, and transitions.",
    },
    {
      title: "3. Export",
      description: "Download your cinematic vlog in one click.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-green-600">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}