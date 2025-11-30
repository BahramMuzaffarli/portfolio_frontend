export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold">Bahram Muzaffarli</h1>
      <h2 className="text-xl mt-3 text-gray-300">
        Data Analyst / IT Business Analyst
      </h2>

      <p className="max-w-2xl mt-6 text-gray-400">
        Data-driven decision making, analytics, business process optimization və
        böyük verilənlərlə işləmə sahəsində təcrübəli mütəxəssis.
      </p>

      <a
        href="/bahram_resume.pdf"
        download
        className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
