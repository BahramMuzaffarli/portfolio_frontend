"use client";

import { useEffect, useState } from "react";
import "@/app/styles/hamster.css";

export default function GlobalLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* PAGE CONTENT — BLUR WHEN LOADING */}
      <div className={loading ? "blur-lg pointer-events-none select-none" : "blur-0"}>
        {children}
      </div>

      {/* LOADING OVERLAY */}
      {loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xl z-[99999] animate-fadeIn">

          {/* 🐹 Hamster Loader */}
          <div className="wheel-and-hamster scale-100 mb-6">
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

          {/* Loading Text */}
          <p className="text-gray-200 text-lg tracking-wide animate-pulse">
            Səhifə yüklənir...
          </p>
        </div>
      )}
    </>
  );
}
