import Link from "next/link";
import { Video, User, Mail, Lock } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white p-12 flex flex-col justify-center">

          <Video className="w-14 h-14 mb-6" />

          <h1 className="text-5xl font-bold leading-tight">
            Turn Memories Into Movies
          </h1>

          <p className="mt-6 text-lg text-green-100">
            Upload your travel photos and videos.
            AutoVlog AI creates beautiful cinematic travel stories
            in just a few clicks.
          </p>

          <div className="mt-10 space-y-4 text-lg">
            <p>✈️ AI Video Editing</p>
            <p>🎙️ AI Voice Over</p>
            <p>🎵 Auto Music</p>
            <p>📱 Export for Instagram & YouTube</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-12 flex flex-col justify-center">

          <div className="flex flex-col items-center">

            <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center shadow-lg">
              <Video className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl font-bold mt-5 text-center">
              Create Your Free Account
            </h2>

            <p className="text-gray-500 mt-2 text-center">
              Turn your travel memories into cinematic stories with AI.
            </p>

          </div>

          <div className="mt-10 space-y-5">

            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition">
              Create Free Account
            </button>

            <div className="text-center text-gray-400">
              OR
            </div>

            <button className="w-full border py-3 rounded-xl hover:bg-gray-50 transition">
              Continue with Google
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-green-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}