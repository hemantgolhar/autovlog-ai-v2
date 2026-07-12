export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-green-50">
      <div className="text-center max-w-4xl px-6">

        <h1 className="text-6xl font-bold text-gray-900">
          Turn Every Journey Into
          <span className="text-green-600"> Cinematic Stories</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Upload your travel photos and videos.
          AutoVlog AI automatically creates beautiful travel vlogs
          with AI editing, captions, music and voice-over.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700">
            Start Free
          </button>

          <button className="border border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-50">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}