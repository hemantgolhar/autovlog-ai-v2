"use client";

import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  trip_name: string;
  destination: string;
  created_at: string;
  files: string[];
  status: string;
}

interface ProjectGridProps {
  projects?: Project[]; // <-- make it optional
}

export default function ProjectGrid({
  projects = [], // <-- default empty array
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          No Projects Yet
        </h2>

        <p className="text-gray-500 mt-3">
          Create your first AI travel vlog to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          tripName={project.trip_name}
          destination={project.destination}
          createdAt={project.created_at}
          files={project.files || []}
          status={project.status}
        />
      ))}
    </div>
  );
}