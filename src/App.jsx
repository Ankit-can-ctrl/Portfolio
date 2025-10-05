import React, { useState, useEffect } from "react";
import AboutMe from "./components/AboutMe";
import AboutMeSection from "./components/AboutMESection";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonial";
import Blogs from "./components/Blogs";
import ContactMe from "./components/ContactMe";

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: "hero", component: <HeroSection />, name: "Home" },
    { id: "about", component: <AboutMe />, name: "About" },
    { id: "skills", component: <Skills />, name: "Skills" },
    { id: "experience", component: <Exp />, name: "Experience" },
    { id: "projects", component: <Projects />, name: "Projects" },
    { id: "testimonials", component: <Testimonials />, name: "Testimonials" },
    { id: "blog", component: <Blogs />, name: "Blog" },
    { id: "contact", component: <ContactMe />, name: "Contact" },
  ];

  const scrollToSection = (sectionIndex) => {
    if (sectionIndex < 0 || sectionIndex >= sections.length) return;

    const targetElement = document.getElementById(sections[sectionIndex].id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (currentSection !== index) {
              setCurrentSection(index);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <div className="relative">
      {/* Fixed background that stays in place */}
      <div className="fixed inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e13] via-[#0b0f14] to-[#0c1016]" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-3/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          {/* Gradient overlays for depth */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-900/5 via-transparent to-purple-900/5" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/5 via-transparent to-indigo-900/5" />
        </div>
      </div>

      {/* All content above the fixed background */}
      <div className="relative z-10">
        {/* Navigation Dots */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="group relative cursor-pointer"
              onClick={() => scrollToSection(index)}
            >
              <div
                className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                  currentSection === index
                    ? "border-cyan-400 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    : "border-white/30 bg-white/10 hover:border-cyan-400/70 hover:bg-cyan-400/20"
                }`}
              />
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm border border-white/10">
                  {section.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"
            style={{
              width: `${((currentSection + 1) / sections.length) * 100}%`,
            }}
          />
        </div>

        {/* Sections */}
        <div>
          {sections.map((section, index) => (
            <div key={section.id} id={section.id}>
              {section.component}
            </div>
          ))}
        </div>

        {/* Section Counter */}
        <div className="fixed bottom-6 right-6 z-40">
          <div className="bg-black/50 text-white text-sm px-3 py-2 rounded-full backdrop-blur-sm border border-white/10 font-mono">
            {String(currentSection + 1).padStart(2, "0")} /{" "}
            {String(sections.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
