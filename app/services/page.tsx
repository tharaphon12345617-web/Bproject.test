import Footer from "../../components/Footer";
import { ServiceCard } from "../../components/ServiceCard";

export default function Services() {
  return (
    <>
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">Safety Officer Services</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Services that support certified safety officers</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">From officer placement to compliance and training, our service suite is built for workplace safety professionals and their organizations.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              { label: "Trusted SO Network", value: "120+" },
              { label: "License Verified", value: "98%" },
              { label: "Training Sessions", value: "300+" },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                <p className="mt-4 text-3xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <ServiceCard
              title="Safety Officer Placement"
              desc="Connect certified safety officers with employers that need experienced safety leadership."
              points={[
                "จป.หัวหน้างาน / จป.วิชาชีพเฉพาะ matching",
                "License and certificate validation",
                "Fast placement for high-demand roles",
              ]}
            />

            <ServiceCard
              title="Compliance & Audit Support"
              desc="Provide site inspections, risk assessments and audit-ready documentation for workplace safety."
              points={[
                "ISO 45001 readiness",
                "Hazard control plans",
                "Incident prevention guidance",
              ]}
            />

            <ServiceCard
              title="Training & Certification"
              desc="Support safety officers with professional development and certificate management."
              points={[
                "Safety training workshops",
                "Certificate renewal alerts",
                "Skill development tracking",
              ]}
            />

            <ServiceCard
              title="Workplace Risk Management"
              desc="Help officers design safer workflows, enforce procedures, and reduce on-site hazards."
              points={[
                "Safety observation programs",
                "Emergency response planning",
                "Preventive maintenance checks",
              ]}
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold">Why Safety Officers Choose Us</h2>
            <p className="mt-4 text-slate-300">Our platform is tailored to safety professionals who need verified certification management, trusted job matching, and practical support for workplace safety operations.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: "Verified Profiles", detail: "Build trust with compliance-ready SO profiles." },
                { title: "Job-ready Credentials", detail: "Keep your licensures and certificates up to date." },
                { title: "Safety Expertise", detail: "Find roles that match your level and experience." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-slate-900 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}