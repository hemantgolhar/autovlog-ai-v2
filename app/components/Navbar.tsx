import Link from "next/link";
import { Video } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">

      <div className="flex items-center gap-3">
        <Video className="w-8 h-8 text-green-600" />
        <h1 className="text-2xl font-bold">
          AutoVlog AI
        </h1>
      </div>

      <div className="flex items-center gap-6">

        <Link href="/login">
          Login
        </Link>

        <Link
          href="/signup"
          className="bg-green-600 text-white px-5 py-2 rounded-xl"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}