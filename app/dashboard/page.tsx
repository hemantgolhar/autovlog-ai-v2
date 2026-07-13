"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectGrid from "@/components/dashboard/ProjectGrid";

export default function DashboardPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setProjects(data || []);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading Projects...</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}