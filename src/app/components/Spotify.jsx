"use client";

import { useState } from "react";

export default function Spotify() {
  const playlists = [
    { id: "2G5q0iNROwN0WMqR6M7OpG", name: "🇬🇧 English" },
    { id: "0uEFVQGdXtiQURFikrY958", name: "🇦🇿 Azerbaijan" },
    { id: "5k2f62r4rC2s421yDBXlnq", name: "🇹🇷 Turkish" },
  ];

  const [current, setCurrent] = useState(playlists[0].id);
  const [loading, setLoading] = useState(true);

  const handleChange = (id) => {
    setCurrent(id);
    setLoading(true); // iframe yenidən yüklənir
  };

  return (
    <section id="spotify" className="py-16 px-6 max-w-4xl mx-auto scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3">My Spotify Playlists</h2>
      <p className="text-gray-400 text-sm mb-6">Music I listen to while working, studying, or training.</p>

      {/* Playlist Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {playlists.map((p) => (
          <button
            key={p.id}
            onClick={() => handleChange(p.id)}
            className={`relative px-5 py-2.5 rounded-lg text-[15px] font-medium tracking-wide border-2 overflow-hidden transition-all duration-300 ${
              current === p.id
                ? "border-[#1BFD9C] text-[#1BFD9C] shadow-[inset_0_0_10px_rgba(27,253,156,0.6)] scale-[1.03]"
                : "border-[#1BFD9C] text-[#1BFD9C] opacity-70 hover:opacity-100"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* LOADING SKELETON */}
      {loading && (
        <div className="w-full h-[400px] rounded-xl border border-white/10 bg-white/5 animate-pulse"></div>
      )}

      {/* SPOTIFY PLAYER */}
      <iframe
        key={current}
        src={`https://open.spotify.com/embed/playlist/${current}`}
        width="100%"
        height="400"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        className={`w-full rounded-xl border border-white/10 shadow-lg shadow-black/20 transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
      ></iframe>
    </section>
  );
}
