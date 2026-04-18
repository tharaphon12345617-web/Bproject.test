export function ServiceCard({ title, desc, points }) {
  return (
    <div className="border p-6 rounded-lg shadow-sm hover:shadow-xl transition bg-white">
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-dark/70 mb-4">{desc}</p>
      <ul className="list-disc ml-6 space-y-1 text-dark/70">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}