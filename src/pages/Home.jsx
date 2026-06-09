import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/ProjectSection";
import DevOpsDashboard from "../components/DevOpsDashboard";
import CloudArchitecture from "../components/CloudArchitecture";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DevOpsDashboard />
      <CloudArchitecture />
      <Contact />
      <Footer />
    </div>
  );
}