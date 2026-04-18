import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-600">About Safety Officer Hub</p>
                <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">Supporting safety officers from certification to on-site leadership</h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">We connect certified Safety Officers to trusted employers, manage professional credentials, and help safety leaders maintain compliance across industries like construction, manufacturing, and energy.</p>
              </div>

              <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-100 p-8">
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-slate-900">Our Vision</h2>
                  <p className="mt-3 text-slate-600">A safer workplace in every sector where safety officers are trusted leaders and every certificate is verified.</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
                  <p className="mt-3 text-slate-600">Empower safety officers with an easy-to-manage profile, certification tracking and trusted job placement.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Certified SO Matching",
                  description: "Connect licensed safety officers with employers that need experienced safety leadership.",
                },
                {
                  title: "Compliance Support",
                  description: "Provide audit-ready documentation and training records for ISO 45001 and workplace safety.",
                },
                {
                  title: "Career Growth",
                  description: "Support professional development through certificates, training and experience tracking.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-2xl">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold">Trusted by safety teams nationwide</h3>
                  <p className="mt-3 text-slate-300">Our platform strengthens workplace safety through certified officer placement, compliance tracking and training support.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-900 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Verified Licenses</p>
                    <p className="mt-4 text-3xl font-semibold">98%</p>
                  </div>
                  <div className="rounded-3xl bg-slate-900 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Partner Employers</p>
                    <p className="mt-4 text-3xl font-semibold">120+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}
