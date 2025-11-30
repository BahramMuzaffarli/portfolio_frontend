const projects = [
  {
    title: "Customer Churn Analysis",
    description:
      "Built a data pipeline and analytical model to identify churn patterns and risk segments based on historical customer behaviour.",
    stack: ["Python", "Pandas", "SQL", "Matplotlib"],
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Designed an interactive BI dashboard to track key KPIs such as revenue, product performance, and regional trends.",
    stack: ["Power BI", "DAX", "Excel"],
  },
  {
    title: "Contact Center Analytics",
    description:
      "Analysed call center data to optimise call flows, IVR performance, and agent efficiency for improved customer experience.",
    stack: ["SQL", "Python", "BI Tools"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col hover:border-blue-400/60 hover:-translate-y-1 transition-transform transition-colors duration-200"
          >
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-gray-300 flex-1 mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-200">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="px-2 py-1 rounded-full bg-slate-800 border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
