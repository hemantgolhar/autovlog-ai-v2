export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Simple Pricing
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Choose the perfect plan for your travel adventures.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* FREE */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border">
            <h3 className="text-3xl font-bold text-center">
              Free
            </h3>

            <p className="text-center text-5xl font-bold mt-6">
              ₹0
            </p>

            <p className="text-center text-gray-500 mt-2">
              Forever Free
            </p>

            <ul className="space-y-4 mt-8">
              <li>✅ 3 AI Vlogs / Month</li>
              <li>✅ AI Story Generator</li>
              <li>✅ Cloud Upload</li>
              <li>✅ HD Export</li>
              <li>❌ Premium Voices</li>
            </ul>

            <button className="w-full mt-10 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
              Get Started
            </button>
          </div>

          {/* PRO */}
          <div className="bg-green-600 text-white rounded-3xl shadow-2xl p-8 scale-105">

            <div className="text-center mb-4">
              <span className="bg-white text-green-600 px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </span>
            </div>

            <h3 className="text-3xl font-bold text-center">
              Pro
            </h3>

            <p className="text-center text-5xl font-bold mt-6">
              ₹999
            </p>

            <p className="text-center mt-2">
              per month
            </p>

            <ul className="space-y-4 mt-8">
              <li>✅ Unlimited AI Vlogs</li>
              <li>✅ Premium AI Story</li>
              <li>✅ AI Voice Over</li>
              <li>✅ Cinematic Music</li>
              <li>✅ Full HD Export</li>
              <li>✅ No Watermark</li>
            </ul>

            <button className="w-full mt-10 bg-white text-green-700 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
              Upgrade Now
            </button>
          </div>

          {/* ENTERPRISE */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border">

            <h3 className="text-3xl font-bold text-center">
              Enterprise
            </h3>

            <p className="text-center text-5xl font-bold mt-6">
              Custom
            </p>

            <p className="text-center text-gray-500 mt-2">
              For Agencies & Teams
            </p>

            <ul className="space-y-4 mt-8">
              <li>✅ Unlimited Everything</li>
              <li>✅ Team Workspace</li>
              <li>✅ API Access</li>
              <li>✅ White Label</li>
              <li>✅ Priority Support</li>
              <li>✅ Dedicated Account Manager</li>
            </ul>

            <button className="w-full mt-10 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}