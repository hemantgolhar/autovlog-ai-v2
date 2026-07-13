import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-6xl font-extrabold leading-tight">
          Turn Your Photos & Videos into
          <span className="text-green-600"> AI Travel Vlogs</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Upload your travel memories and let AI automatically create a
          cinematic vlog with storytelling, voice-over, music, and beautiful
          transitions.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/signup"
            className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700"
          >
            Get Started Free
          </Link>

          <Link
            href="/login"
            className="border border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-50"
          >
            Login
          </Link>
        </div>

      </div>
    </section>
  );
}