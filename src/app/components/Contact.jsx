"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
        Contact
      </h2>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">

        {/* Description */}
        <p className="text-gray-300 text-center mb-6 text-sm">
          Feel free to reach out for collaborations or professional connections.
        </p>

        {/* CONTACT ITEMS */}
        <div className="grid gap-4">

          {/* EMAIL */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:border-blue-400/40 hover:scale-[1.02] transition">
            <div className="bg-blue-600/30 p-2.5 rounded-lg">
              <svg
                className="h-5 w-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 6.03L12 13l9.99-6.97A2 2 0 0 0 20 4H4a2 2 0 0 0-1.99 2.03z" />
                <path d="M22 8.98l-10 7-10-7V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.98z" />
              </svg>
            </div>

            <div>
              <p className="text-gray-400 text-xs">Email</p>
              <a
                href="mailto:bahram.muzaffarli@gmail.com"
                className="text-white text-sm font-medium hover:text-blue-400 transition"
              >
                bahram.muzaffarli@gmail.com
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:border-green-400/40 hover:scale-[1.02] transition">
            <div className="bg-green-600/30 p-2.5 rounded-lg">
              <svg
                className="h-5 w-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.59.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.29 22 2 13.71 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.19 2.47.57 3.59a1 1 0 0 1-.24 1l-2.21 2.2z"/>
              </svg>
            </div>

            <div>
              <p className="text-gray-400 text-xs">Phone</p>
              <a
                href="tel:+994556660050"
                className="text-white text-sm font-medium hover:text-green-400 transition"
              >
                +994 51 584 58 68
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:border-purple-400/40 hover:scale-[1.02] transition">
            <div className="bg-purple-600/30 p-2.5 rounded-lg">
              <svg
                className="h-5 w-5 text-purple-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
            </div>

            <div>
              <p className="text-gray-400 text-xs">Location</p>
              <p className="text-white text-sm font-medium">Baku, Azerbaijan</p>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-5 mt-8">

          {/* GitHub */}
          <a
            href="https://github.com/BahramMuzaffarli"
            target="_blank"
            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:scale-110 transition"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
            >
              <path d="M12 .5C5.648.5.5 5.65.5 12.002c0 5.088 3.292 9.397 7.868 10.919.575.106.786-.25.786-.558v-1.96c-3.2.696-3.873-1.39-3.873-1.39-.523-1.33-1.277-1.684-1.277-1.684-1.045-.714.08-.699.08-.699 1.157.082 1.766 1.188 1.766 1.188 1.028 1.763 2.695 1.253 3.351.957.104-.744.402-1.253.732-1.543-2.553-.29-5.238-1.277-5.238-5.687 0-1.256.448-2.284 1.184-3.09-.119-.29-.513-1.457.112-3.04 0 0 .965-.31 3.16 1.18a10.98 10.98 0 0 1 2.877-.387c.975.005 1.957.132 2.877.387 2.193-1.49 3.155-1.18 3.155-1.18.627 1.583.234 2.75.114 3.04.737.806 1.18 1.834 1.18 3.09 0 4.42-2.69 5.393-5.254 5.677.41.353.78 1.048.78 2.114v3.14c0 .313.207.674.79.557 4.57-1.523 7.86-5.832 7.86-10.918C23.5 5.65 18.352.5 12 .5z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bahram-muzaffarli-bhrmmuz/"
            target="_blank"
            className="p-3 rounded-xl bg-blue-600/40 border border-blue-500/60 hover:border-blue-300 hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white"
            >
              <path d="M4.98 3.5C3.32 3.5 2 4.82 2 6.48c0 1.66 1.32 2.98 2.98 2.98h.02c1.66 0 2.98-1.32 2.98-2.98C7.98 4.82 6.66 3.5 4.98 3.5zM2.4 21.6h5.16V9H2.4v12.6zm7.92 0h5.16v-6.72c0-1.6.03-3.66 2.23-3.66 2.23 0 2.23 1.73 2.23 3.74v6.64h5.16v-7.12c0-3.52-.75-6.23-4.8-6.23-1.96 0-3.28 1.08-3.82 2.12h.06V9H10.32c.07 1.18 0 12.6 0 12.6z"/>
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
}
