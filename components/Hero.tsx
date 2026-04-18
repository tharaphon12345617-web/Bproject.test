export default function Hero() {
  return (
    <section className="pt-40 pb-32 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-400 font-semibold">Safety Officer Platform</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight leading-tight sm:text-6xl sm:max-w-4xl mx-auto sm:mx-0">Connect certified safety officers with trusted employers across Thailand</h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto sm:mx-0 text-slate-300">Build your professional profile, manage certifications, and access job opportunities for workplace safety and compliance roles.</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:justify-start">
          <a href="/register" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500">Join as Safety Officer</a>
          <a href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-white/15">View Services</a>
        </div>
      </div>
    </section>
  );
}
