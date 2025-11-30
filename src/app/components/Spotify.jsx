"use client";

import { useState } from "react";
import "@/app/styles/hamster.css";

export default function Spotify() {
  const playlists = [
    {
      id: "2G5q0iNROwN0WMqR6M7OpG",
      name: "USA / GB",
      description: "English playlist",
    },
    {
      id: "0uEFVQGdXtiQURFikrY958",
      name: "AZE",
      description: "Azerbaijani playlist",
    },
    {
      id: "5k2f62r4rC2s421yDBXlnq",
      name: "TR",
      description: "Turkish playlist",
    },
  ];

  const [current, setCurrent] = useState(playlists[0].id);
  const [loading, setLoading] = useState(false);

  const changePlaylist = (id) => {
    setLoading(true);
    setCurrent(id);
  };

  return (
    <section
      id="spotify-playlists"
      className="py-16 px-6 max-w-4xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
        My Spotify Playlists
      </h2>

      <p className="text-gray-400 text-sm mb-6">
        Music I listen to while working, studying, or training.
      </p>

      {/* Playlist Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {playlists.map((p) => (
          <button
            key={p.id}
            onClick={() => changePlaylist(p.id)}
            className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 relative ${
              current === p.id
                ? "bg-green-600 text-white shadow-lg shadow-green-500/40"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center py-10">
          <div className="wheel-and-hamster scale-75">
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__body">
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
        </div>
      )}

      {/* Spotify Player */}
      <div
        className={`rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/30 transition-opacity duration-300 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <iframe
          key={current}
          src={`https://open.spotify.com/embed/playlist/${current}`}
          width="100%"
          height="400"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy"
          className="w-full rounded-xl"
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
    </section>
  );
}
