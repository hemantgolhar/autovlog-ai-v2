import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProjectGrid from "@/components/dashboard/ProjectGrid";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <ProjectGrid />
    </main>
  );
}