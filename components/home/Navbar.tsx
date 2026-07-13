import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-green-600">
        🎥 AutoVlog AI
      </h1>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-green-600">
          Home
        </Link>

        <Link href="/login" className="hover:text-green-600">
          Login
        </Link>

        <Link
          href="/signup"
          className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}