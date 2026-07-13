"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
      <div>
        <h1 className="text-4xl font-bold text-green-600">
          My Travel Projects
        </h1>

        <p className="text-gray-500 mt-2">
          Create, manage and generate AI travel vlogs.
        </p>
      </div>

      <Link
        href="/create-project"
        className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
      >
        <Plus size={20} />
        New Project
      </Link>
    </div>
  );
}