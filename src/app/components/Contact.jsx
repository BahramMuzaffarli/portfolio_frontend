export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-3xl mx-auto text-center scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Contact</h2>
      <p className="text-gray-300 mb-6 text-base md:text-lg">
        If you’d like to discuss data projects, analytics roles, or
        collaboration opportunities, feel free to reach out.
      </p>

      <div className="space-y-2 text-gray-200 text-sm md:text-base">
        <p>
          Email:{" "}
          <a
            href="mailto:muzefferlibehram@gmail.com"
            className="text-blue-400 hover:underline"
          >
            muzefferlibehram@gmail.com
          </a>
        </p>
        <p>Phone: +994 51 584 58 68</p>
        <p>Baku, Azerbaijan</p>
      </div>
    </section>
  );
}
