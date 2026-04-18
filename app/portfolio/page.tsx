import Footer from "../../components/Footer";
import { ProjectCard } from "../../components/ProjectCard";

export default function Portfolio() {
  return (
    <>
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Trusted Safety Officer</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Explore our recent work supporting workplace safety, compliance programs, and certification operations across Thailand.</p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Certified Compliance Platform"
              desc="Built a secure system for managing safety officer credentials, inspections, and audit records."
              result="Cut audit prep time by 40%."
            />

            <ProjectCard
              title="Safety Training Portal"
              desc="Developed a training dashboard for tracking certification renewal and course completion."
              result="Increased certification compliance by 72%."
            />

            <ProjectCard
              title="Site Risk Assessment Toolkit"
              desc="Delivered a mobile-first toolkit for hazard reporting and follow-up action tracking."
              result="Reduced incident response time by 55%."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}