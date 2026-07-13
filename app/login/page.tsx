import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-100">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-3xl font-bold text-center text-green-600">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to AutoVlog AI
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-xl px-4 py-3 mt-8"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-xl px-4 py-3 mt-4"
        />

        <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
          Login
        </button>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-600 font-semibold">
            Sign Up
          </Link>
        </p>

      </div>
    </main>
  );
}