import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Spotify from "./components/Spotify";
import Education from "./components/Education";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-950 text-white min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Spotify />
      </main>
      <Footer />
    </>
  );
}
