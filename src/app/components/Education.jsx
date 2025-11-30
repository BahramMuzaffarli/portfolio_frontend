"use client";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 max-w-5xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
        Education
      </h2>

      <div className="space-y-8">
        {/* Master's */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-400/60 transition-colors duration-200">
          <h3 className="text-xl font-semibold">
            Master’s in Big Data – Advanced Analytics
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Warsaw School of Economics (SGH), Poland · 2022–2025
          </p>
          <p className="text-gray-300 text-sm mt-3 leading-6">
            Advanced analytical training focused on data processing, modeling,
            and business-oriented decision-making using tools such as Python,
            SQL, Power BI, R, and big data technologies.
          </p>
        </div>

        {/* Bachelor's */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-400/60 transition-colors duration-200">
          <h3 className="text-xl font-semibold">
            Bachelor’s in Automation Engineering
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Azerbaijan State Oil and Industry University (ASOIU) · 2018–2022
          </p>
          <p className="text-gray-300 text-sm mt-3 leading-6">
            Studied industrial systems, automation processes, engineering
            fundamentals, and technical problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
