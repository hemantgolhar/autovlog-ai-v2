export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for trying AutoVlog AI.",
      features: [
        "3 AI Vlogs / Month",
        "720p Export",
        "AI Music",
        "Watermark",
      ],
      button: "Start Free",
      featured: false,
    },
    {
      name: "Pro",
      price: "₹999",
      description: "Best for travel creators.",
      features: [
        "Unlimited AI Vlogs",
        "4K Export",
        "No Watermark",
        "AI Voice Over",
        "Priority Processing",
      ],
      button: "Get Pro",
      featured: true,
    },
    {
      name: "Business",
      price: "₹2999",
      description: "For agencies and travel companies.",
      features: [
        "Everything in Pro",
        "Team Members",
        "Brand Kit",
        "API Access",
        "Priority Support",
      ],
      button: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Simple Pricing
          </h2>

          <p className="mt-5 text-xl text-gray-600">
            Choose the perfect plan for your travel stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 shadow-xl border ${
                plan.featured
                  ? "bg-green-600 text-white scale-105"
                  : "bg-white"
              }`}
            >
              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <p className="text-5xl font-bold mt-6">
                {plan.price}
                <span className="text-lg">/mo</span>
              </p>

              <p className="mt-4">{plan.description}</p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature}>✅ {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full mt-10 py-3 rounded-xl font-semibold ${
                  plan.featured
                    ? "bg-white text-green-600"
                    : "bg-green-600 text-white"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}