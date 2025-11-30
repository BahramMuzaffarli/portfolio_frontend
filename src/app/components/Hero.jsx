"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left text */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-blue-400 mb-4">
            IT Business Analyst · Data Analyst
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Turning <span className="text-blue-400">data</span> into{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              decisions
            </span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8">
            I help businesses improve performance and customer experience by
            transforming raw data into clear, actionable insights through
            analytics, visualization, and data-driven decision-making.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/bahram_resume.pdf"
              download
              className="px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-medium text-sm md:text-base shadow-lg shadow-blue-500/30 transition-transform transform hover:-translate-y-0.5"
            >
              Download CV
            </a>
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (!el) return;
                const y =
                  el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
              className="px-5 py-3 rounded-full border border-gray-500 text-sm md:text-base text-gray-200 hover:border-blue-400 hover:text-white transition-colors"
            >
              View Projects
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-400">
            <span className="px-3 py-1 rounded-full border border-white/10">
              Python · SQL · R
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10">
              Power BI · Tableau
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10">
              Advanced Analytics – Big Data
            </span>
          </div>
        </div>

        {/* Right side – fancy card */}
        <div className="md:justify-self-end w-full max-w-md mx-auto">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-950 p-6 shadow-2xl shadow-blue-900/40">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs text-gray-400">Current role</p>
                <p className="text-sm font-semibold">
                  IT Business Analyst @ Agile Solutions
                </p>
              </div>
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </div>

            <div className="space-y-3 text-sm text-gray-300">
              <p>
                Working with CRM, contact center, and cloud-based dialer
                platforms to optimize customer communication and operational
                efficiency.
              </p>
              <p>
                Strong experience in data extraction, cleaning, and visualization
                through Python, SQL, and BI tools across projects in Azerbaijan
                and Poland.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-gray-300">
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <p className="text-[11px] text-gray-400 mb-1">Focus</p>
                <p>Analytics & BI</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <p className="text-[11px] text-gray-400 mb-1">Location</p>
                <p>Baku, Azerbaijan</p>
              </div>
              <div className="rounded-xl bg-white/5 p-3 border border-white/5">
                <p className="text-[11px] text-gray-400 mb-1">Languages</p>
                <p>AZ · EN · RU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
