"use client";

export default function Certificates() {
  const certificates = [
    {
      id: "sas",
      title: "SAS Certified Big Data Professional Using SAS 9",
      issuer: "SAS & Warsaw School of Economics",
      description:
        "Gained advanced knowledge in data manipulation, statistical analysis, and predictive modeling using SAS tools. Demonstrated expertise in data management and big data analytics workflows.",
      link: "https://www.linkedin.com/in/bahram-muzaffarli-bhrmmuz/details/certifications/1738229518442/single-media-viewer/?profileId=ACoAADFo9uwBN5uUSmMM1FCNeYuVbGWokzp_5tg",
    },
    {
      id: "julia",
      title: "Introduction to DataFrames.jl",
      issuer: "Julia Academy",
      description:
        "Learned data handling, transformation, and analysis techniques using the DataFrames.jl package in Julia for efficient analytical workflow.",
      link: "https://www.linkedin.com/in/bahram-muzaffarli-bhrmmuz/details/certifications/1738605398965/single-media-viewer/?profileId=ACoAADFo9uwBN5uUSmMM1FCNeYuVbGWokzp_5tg",
    },
    {
      id: "ielts",
      title: "IELTS",
      issuer: "British Council",
      description:
        "Completed English language proficiency training with focus on academic and professional communication.",
      link: "https://www.linkedin.com/in/bahram-muzaffarli-bhrmmuz/details/certifications/1709032402204/single-media-viewer/?profileId=ACoAADFo9uwBN5uUSmMM1FCNeYuVbGWokzp_5tg",
    },
    {
      id: "sabah",
      title: "Sabah Groups Program",
      issuer: "Azerbaijan Science and Education Ministry",
      description:
        "Selected participant in a national academic excellence program promoting innovation, leadership, and interdisciplinary education.",
      link: "https://www.linkedin.com/in/bahram-muzaffarli-bhrmmuz/details/certifications/?profileId=ACoAADFo9uwBN5uUSmMM1FCNeYuVbGWokzp_5tg",
    },
    {
      id: "uefa",
      title: "Volunteer",
      issuer: "UEFA & AFFA",
      description:
        "Contributed to organizational support and logistics during international football events, enhancing teamwork and communication skills in high-pressure environments.",
      link: "https://www.linkedin.com/in/bahram-muzaffarli-bhrmmuz/details/certifications/1709032422794/single-media-viewer/?profileId=ACoAADFo9uwBN5uUSmMM1FCNeYuVbGWokzp_5tg",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-24 px-6 max-w-6xl mx-auto scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
        Certifications
      </h2>

      <div className="space-y-6">
        {certificates.map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-400/60 transition-colors cursor-pointer"
          >
            <div>
              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1 font-medium">
                {cert.issuer}
              </p>
              <p className="text-gray-300 text-sm mt-3 leading-6">
                {cert.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
