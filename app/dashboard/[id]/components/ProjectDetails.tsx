interface ProjectDetailsProps {
  travelStyle: string;
  mood: string;
  voice: string;
  music: string;
}

export default function ProjectDetails({
  travelStyle,
  mood,
  voice,
  music,
}: ProjectDetailsProps) {
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">
        Project Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-2xl p-5">
          <p className="text-gray-500 text-sm">
            Travel Style
          </p>

          <h3 className="font-bold text-xl mt-2">
            {travelStyle}
          </h3>
        </div>

        <div className="border rounded-2xl p-5">
          <p className="text-gray-500 text-sm">
            Mood
          </p>

          <h3 className="font-bold text-xl mt-2">
            {mood}
          </h3>
        </div>

        <div className="border rounded-2xl p-5">
          <p className="text-gray-500 text-sm">
            Voice
          </p>

          <h3 className="font-bold text-xl mt-2">
            {voice}
          </h3>
        </div>

        <div className="border rounded-2xl p-5">
          <p className="text-gray-500 text-sm">
            Music
          </p>

          <h3 className="font-bold text-xl mt-2">
            {music}
          </h3>
        </div>

      </div>
    </div>
  );
}