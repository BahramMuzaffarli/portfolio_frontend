"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/BahramMuzaffarli/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(
          data.filter((repo) =>
            [
              "Forecasting-Sales-Revenue-Using-LSTM-Models",
              "Book-Delivery-Management-System-",
              "SQL-Queries",
              "portfolio_frontend"
            ].includes(repo.name)
          )
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Projects</h2>

      {loading ? (
        <p className="text-gray-400">Loading projects...</p>
      ) : repos.length === 0 ? (
        <p className="text-gray-400">No projects found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-400/60 transition-colors"
            >
              <h3 className="font-semibold text-lg mb-1">
                {repo.name.replace(/-/g, " ")}
              </h3>

              <p className="text-sm text-gray-300 mb-4 h-16 overflow-hidden">
                {repo.description || "No description provided."}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-gray-200">
                {repo.language && (
                  <span className="px-2 py-1 rounded-full bg-slate-800 border border-white/10">
                    {repo.language}
                  </span>
                )}
                <span className="px-2 py-1 rounded-full bg-slate-800 border border-white/10">
                  ⭐ {repo.stargazers_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
