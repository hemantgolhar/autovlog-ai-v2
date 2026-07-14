interface ProjectHeaderProps {
  tripName: string;
  destination: string;
}

export default function ProjectHeader({
  tripName,
  destination,
}: ProjectHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-10 text-white shadow-xl">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        {tripName}
      </h1>

      <p className="mt-4 text-xl opacity-90">
        📍 {destination}
      </p>
    </div>
  );
}