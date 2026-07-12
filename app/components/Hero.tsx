export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-green-50 via-white to-blue-100 flex items-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-8">

        {/* LEFT SIDE */}
        <div>

          <p className="text-green-600 font-semibold mb-4">
            🎥 AI Travel Video Creator
          </p>

          <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
            Turn Every Journey Into
            <span className="text-green-600">
              {" "}Cinematic Stories
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-8">
            Upload your travel photos and videos.
            AutoVlog AI edits them into beautiful travel vlogs with
            AI voice-over, captions, music and cinematic transitions.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold">
              Start Free
            </button>

            <button className="border border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-50 font-semibold">
              Watch Demo
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">

            <div className="h-56 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              📱 App Preview
            </div>

            <div className="mt-6 space-y-3">

              <div className="bg-gray-100 rounded-xl p-3">
                📷 Upload Photos & Videos
              </div>

              <div className="bg-gray-100 rounded-xl p-3">
                🤖 AI Processing...
              </div>

              <div className="bg-gray-100 rounded-xl p-3">
                🎬 Download Final Vlog
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}