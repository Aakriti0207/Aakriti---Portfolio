import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

const SECTIONS = ["home", "projects", "skills", "about", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Highlight the nav link for whichever section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar active={activeSection} />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
