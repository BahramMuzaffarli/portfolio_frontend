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

  // Scroll to section
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="text-xl md:text-2xl font-extrabold cursor-pointer"
          onClick={scrollToTop}
        >
          Bahram <span className="text-blue-400">Muzaffarli</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {sections.map((s) => (
            <li
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="cursor-pointer hover:text-white transition"
            >
              {s.label}
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden bg-black/90 text-gray-200 px-6 pb-4 space-y-4">
          {sections.map((s) => (
            <li
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="border-b border-white/10 pb-2 cursor-pointer hover:text-white"
            >
              {s.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
