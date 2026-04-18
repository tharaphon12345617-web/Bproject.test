export default function Careers() {
  return (
    <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl text-primary font-bold mb-6">
        Careers at BProfessional
      </h1>

      <p className="text-dark/70 max-w-2xl mb-10">
        Join a team of passionate innovators helping shape the future of business
        and technology across Asia.
      </p>

      <div className="space-y-10">
        <div className="p-6 border rounded bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-primary">Frontend Developer</h2>
          <p className="text-dark/70 mt-3">
            Work with React, Next.js, Tailwind to build enterprise applications.
          </p>
          <a
            href="/contact"
            className="text-primary underline mt-3 inline-block"
          >
            Apply Now
          </a>
        </div>

        <div className="p-6 border rounded bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-primary">Backend Developer</h2>
          <p className="text-dark/70 mt-3">
            Develop APIs, microservices, and cloud deployments.
          </p>
          <a
            href="/contact"
            className="text-primary underline mt-3 inline-block"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}