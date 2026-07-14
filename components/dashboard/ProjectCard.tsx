"use client";

import Link from "next/link";
import {
  Calendar,
  MapPin,
  Images,
  ArrowRight,
} from "lucide-react";

interface ProjectCardProps {
  id: number;
  tripName: string;
  destination: string;
  createdAt: string;
  files: string[];
  status: string;
}

export default function ProjectCard({
  id,
  tripName,
  destination,
  createdAt,
  files,
  status,
}: ProjectCardProps) {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {tripName}
          </h2>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {status}
          </span>
        </div>

        <div className="mt-5 space-y-3 text-gray-600">

          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{destination}</span>
          </div>

          <div className="flex items-center gap-2">
            <Images size={18} />
            <span>{files.length} Media Files</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>

        </div>

        <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold">
          Continue Editing
          <ArrowRight size={18} />
        </div>

      </div>
    </Link>
  );
}