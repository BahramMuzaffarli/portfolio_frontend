const techSkills = [
  "Python",
  "R",
  "SQL",
  "MS Excel",
  "Power BI",
  "Tableau",
  "PostgreSQL",
];

const softSkills = ["Adaptability", "Time Management", "Critical Thinking"];

const languages = [
  "Azerbaijani (Native)",
  "English (Fluent)",
  "Russian (Intermediate)",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-5xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Skills</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 className="font-semibold mb-4 text-lg">Technical</h3>
          <div className="flex flex-wrap gap-2 text-sm text-gray-200">
            {techSkills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 className="font-semibold mb-4 text-lg">Soft Skills</h3>
          <div className="flex flex-wrap gap-2 text-sm text-gray-200">
            {softSkills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-slate-700/60 border border-white/20"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 className="font-semibold mb-4 text-lg">Languages</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
