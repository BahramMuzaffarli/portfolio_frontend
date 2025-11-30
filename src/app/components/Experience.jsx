const items = [
  {
    title: "IT Business Analyst — Agile Solutions",
    time: "Apr 2025 – Present · Baku, Azerbaijan",
    bullets: [
      "Working with CRM, contact center, and cloud dialer systems for local and enterprise clients.",
      "Analysing system performance, gathering business requirements, and optimising OmniCloud platform usage.",
      "Collaborating with development teams to improve call flows, IVR, and telephony integrations.",
    ],
  },
  {
    title: "Junior Data Analyst — CTDI",
    time: "Nov 2024 – Jan 2025 · Warsaw, Poland",
    bullets: [
      "Collected, cleaned, and validated large datasets from multiple sources.",
      "Performed exploratory data analysis using SQL and Python to identify trends.",
      "Created dashboards and visualizations in Excel and Power BI for stakeholders.",
    ],
  },
  {
    title: "Loan Applications Administrator — Kontakt Home",
    time: "2019 – 2022 · Baku, Azerbaijan",
    bullets: [
      "Analysed customer employment and credit histories for decision-making.",
      "Prepared clear, data-driven reports on credit applications.",
    ],
  },
  {
    title: "IT Help Desk Intern — Optima",
    time: "2018 – 2019 · Baku, Azerbaijan",
    bullets: [
      "Installed and configured hardware, software, and peripherals.",
      "Resolved user issues related to hardware, software, and networking.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-4xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
        Experience
      </h2>

      <div className="relative border-l border-white/10 pl-6 space-y-10">
        {items.map((item, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-gray-950" />
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-400/60 transition-colors">
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 mb-3">
                {item.time}
              </p>
              <ul className="list-disc ml-5 space-y-1 text-gray-300 text-sm md:text-base">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
