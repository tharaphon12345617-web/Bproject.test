interface ProjectCardProps {
  title: string;
  desc: string;
  result: string;
}

export function ProjectCard({ title, desc, result }: ProjectCardProps) {
  return (
    <div className="rounded-lg border shadow-sm p-5 bg-white hover:shadow-xl transition">
      <div className="h-40 bg-gray-200 rounded mb-4"></div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-dark/70 mb-3">{desc}</p>
      <p className="text-sm text-dark/50"><strong>Outcome:</strong> {result}</p>
    </div>
  );
}
