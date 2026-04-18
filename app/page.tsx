import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">Safety Officer Hub</p>
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">Build your trusted safety officer profile</h2>
              <p className="text-lg text-slate-600">Connect with employers that need licensed safety officers, manage certifications, and showcase real workplace safety experience.</p>
              <div className="flex flex-wrap gap-4">
                <a href="/register" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500">
                  Join as Safety Officer
                </a>
                <a href="/profile" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500">
                  View your Profile
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="space-y-6">
                <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-inner">
                  <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Safety Credentials</p>
                  <h3 className="mt-3 text-2xl font-bold">Maintain verified qualifications</h3>
                  <p className="mt-2 text-slate-300">Keep your licenses, certificates and training records in one secure profile.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Verified SO</p>
                    <p className="mt-4 text-3xl font-semibold text-slate-900">98%</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Trusted Employers</p>
                    <p className="mt-4 text-3xl font-semibold text-slate-900">120+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Safety Officer Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "SO Recruitment", desc: "Find and place certified safety officers across industries." },
              { title: "Safety Audit", desc: "Comprehensive inspection and compliance reporting." },
              { title: "Training & Certification", desc: "Train teams on ISO 45001 and workplace risk control." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by Safety Teams Nationwide</h2>
          <p className="mx-auto max-w-2xl text-slate-300">Our platform supports safety officers in construction, manufacturing, energy, and logistics with verified credentials and workplace compliance services.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
