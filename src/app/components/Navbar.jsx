"use client";

import { useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });

    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10" role="navigation" aria-label="Main">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* LOGO + NAME */}
        <button
          className="cursor-pointer hover:opacity-80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          onClick={scrollToTop}
          aria-label="Bahram Muzaffarli - Back to home"
          >
            <span className="text-lg md:text-xl font-extrabold">
              Bahram <span className="text-blue-400">Muzaffarli</span>
            </span>
          </button>


        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm text-gray-300">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  className="cursor-pointer hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-2 py-1"
                  onClick={() => handleScroll(s.id)}
                  aria-label={`Navigate to ${s.label}`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/BahramMuzaffarli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[6px] rounded-xl border border-white/10 bg-white/5 hover:border-white/30 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="GitHub profile"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                <path d="M12 .5C5.648.5.5 5.65.5 12.002c0 5.088 3.292 9.397 7.868 10.919.575.106.786-.25.786-.558v-1.96c-3.2.696-3.873-1.39-3.873-1.39-.523-1.33-1.277-1.684-1.277-1.684-1.045-.714.08-.699.08-.699 1.157.082 1.766 1.188 1.766 1.188 1.028 1.763 2.695 1.253 3.351.957.104-.744.402-1.253.732-1.543-2.553-.29-5.238-1.277-5.238-5.687 0-1.256.448-2.284 1.184-3.09-.119-.29-.513-1.457.112-3.04 0 0 .965-.31 3.16 1.18a10.98 10.98 0 0 1 2.877-.387c.975.005 1.957.132 2.877.387 2.193-1.49 3.155-1.18 3.155-1.18.627 1.583.234 2.75.114 3.04.737.806 1.18 1.834 1.18 3.09 0 4.42-2.69 5.393-5.254 5.677.41.353.78 1.048.78 2.114v3.14c0 .313.207.674.79.557 4.57-1.523 7.86-5.832 7.86-10.918C23.5 5.65 18.352.5 12 .5z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/bahram-muzaffarli-bhrmmuz/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[6px] rounded-xl border border-blue-500/30 bg-blue-600/30 hover:border-blue-400 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                <path d="M4.98 3.5C3.32 3.5 2 4.82 2 6.48c0 1.66 1.32 2.98 2.98 2.98h.02c1.66 0 2.98-1.32 2.98-2.98C7.98 4.82 6.66 3.5 4.98 3.5zM2.4 21.6h5.16V9H2.4v12.6zm7.92 0h5.16v-6.72c0-1.6.03-3.66 2.23-3.66 2.23 0 2.23 1.73 2.23 3.74v6.64h5.16v-7.12c0-3.52-.75-6.23-4.8-6.23-1.96 0-3.28 1.08-3.82 2.12h.06V9H10.32c.07 1.18 0 12.6 0 12.6z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-2xl text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10" id="mobile-menu">

          <ul className="flex flex-col px-6 py-4 gap-4 text-gray-200 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleScroll(s.id)}
                  className="border-b border-white/10 pb-2 w-full text-left hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded px-1"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          {/* MOBILE SOCIAL ICONS */}
          <div className="flex items-center gap-4 px-6 pb-4">

            <a
              href="https://github.com/BahramMuzaffarli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/10 bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="GitHub profile"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                <path d="M12 .5C5.648.5.5 5.65.5 12.002c0 5.088 3.292 9.397 7.868 10.919.575.106.786-.25.786-.558v-1.96c-3.2.696-3.873-1.39-3.873-1.39-.523-1.33-1.277-1.684-1.277-1.684-1.045-.714.08-.699.08-.699 1.157.082 1.766 1.188 1.766 1.188 1.028 1.763 2.695 1.253 3.351.957.104-.744.402-1.253.732-1.543-2.553-.29-5.238-1.277-5.238-5.687 0-1.256.448-2.284 1.184-3.09-.119-.29-.513-1.457.112-3.04 0 0 .965-.31 3.16 1.18a10.98 10.98 0 0 1 2.877-.387c.975.005 1.957.132 2.877.387 2.193-1.49 3.155-1.18 3.155-1.18.627 1.583.234 2.75.114 3.04.737.806 1.18 1.834 1.18 3.09 0 4.42-2.69 5.393-5.254 5.677.41.353.78 1.048.78 2.114v3.14c0 .313.207.674.79.557 4.57-1.523 7.86-5.832 7.86-10.918C23.5 5.65 18.352.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/bahram-muzaffarli-bhrmmuz/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-blue-500/30 bg-blue-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                <path d="M4.98 3.5C3.32 3.5 2 4.82 2 6.48c0 1.66 1.32 2.98 2.98 2.98h.02c1.66 0 2.98-1.32 2.98-2.98C7.98 4.82 6.66 3.5 4.98 3.5zM2.4 21.6h5.16V9H2.4v12.6zm7.92 0h5.16v-6.72c0-1.6.03-3.66 2.23-3.66 2.23 0 2.23 1.73 2.23 3.74v6.64h5.16v-7.12c0-3.52-.75-6.23-4.8-6.23-1.96 0-3.28 1.08-3.82 2.12h.06V9H10.32c.07 1.18 0 12.6 0 12.6z" />
              </svg>
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
