import Footer from "../../components/Footer";

export default function Jobs() {
  return (
    <>
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Career Opportunities</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Open Roles for Safety Officers</h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Browse our current job openings for certified safety professionals across leading employers in Thailand.</p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">Full-time</span>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950">Safety Officer (Professional Level)</h2>
              <p className="mt-3 text-slate-600">Bangkok | ISO 45001 & workplace safety compliance experience required.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Lead safety inspections and risk mitigation programs</li>
                <li>• Coordinate training and certification activities</li>
                <li>• Support internal audits and corrective actions</li>
              </ul>
              <button className="mt-8 w-full md:inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-white transition hover:bg-slate-800">Apply Now</button>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">Contract</span>
              <h2 className="mt-6 text-2xl font-semibold text-slate-950">Safety Supervisor</h2>
              <p className="mt-3 text-slate-600">Chonburi | Oversight of site safety operations and compliance enforcement.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Supervise field safety teams</li>
                <li>• Maintain incident reporting and follow-up</li>
                <li>• Drive continuous safety improvement</li>
              </ul>
              <button className="mt-8 w-full md:inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-white transition hover:bg-slate-800">Apply Now</button>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}