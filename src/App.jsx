import React from "react";

import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import WorkingOn from "./components/WorkingOn";
import Testimonials from "./components/Testimonial";
import ContactMe from "./components/ContactMe";

const App = () => {
  const sections = [
    { id: "hero", component: <HeroSection /> },
    { id: "skills", component: <Skills /> },
    { id: "experience", component: <Exp /> },
    { id: "projects", component: <Projects /> },
    { id: "working-on", component: <WorkingOn /> },
    { id: "testimonials", component: <Testimonials /> },
    { id: "contact", component: <ContactMe /> },
  ];

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
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-8">
        {/* Global Rounded Container */}
        <div className="relative w-full max-w-[1400px] rounded-lg md:rounded-xl lg:rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md shadow-2xl overflow-hidden">
          {/* Sections */}
          <div>
            {sections.map((section, index) => (
              <div key={section.id} id={section.id}>
                {section.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
