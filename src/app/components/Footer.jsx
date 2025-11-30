export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-xs md:text-sm text-gray-500 mt-10">
      © {new Date().getFullYear()} Bahram Muzaffarli — All rights reserved.
    </footer>
  );
}
