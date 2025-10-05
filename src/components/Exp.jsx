import React, { useState, useRef, useEffect } from "react";

const EXPERIENCES = [
  {
    id: 1,
    company: "Explified",
    role: "Full Stack Developer(Intern)",
    period: "May 2025 - September 2025",
    location: "Remote",
    type: "Full-time",
    description:
      "Engineered and deployed multiple Chrome extensions using the MERN stack with a strong focus on UI/UX, performance, and functionality.",
    achievements: [
      "Developed and implemented multiple AI tools and platforms, creating automation workflows to streamline processes.",
      "Spearheaded product-engineering collaboration as a Technical Product Manager, ensuring product alignment and timely feature delivery.",
      "Managed requirements and implemented agile methodologies to translate product ideas into user-focused solutions delivered on time and within scope.",
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AI"],
    color: "from-cyan-400 to-blue-500",
  },
];

const Exp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Parallax calculation
  const parallax = (factor) => ({
    transform: `translate3d(${mousePos.x * factor * 20}px, ${
      mousePos.y * factor * 20
    }px, 0)`,
  });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen w-full text-white overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Experience</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              My Professional Journey
            </span>
          </h2>

          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            From startups to enterprise, here's how I've grown as a developer
          </p>
        </div>

        {/* Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {EXPERIENCES.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                parallax={parallax}
              />
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-8">
            <ExperienceCard
              experience={EXPERIENCES[activeIndex]}
              parallax={parallax}
            />
          </div>
        </div>

        {/* Floating Code Elements */}
        <FloatingCodeElements mousePos={mousePos} />
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, index, isActive, onClick, parallax }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer transition-all duration-300 ${
        isActive ? "scale-105" : "hover:scale-102"
      }`}
      style={parallax(0.005 * (index + 1))}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${
          experience.color
        } opacity-0 blur-xl transition-opacity duration-300 ${
          isActive ? "opacity-30" : "group-hover:opacity-20"
        }`}
      />

      {/* Card */}
      <div
        className={`relative rounded-2xl border backdrop-blur-sm p-4 transition-all duration-300 ${
          isActive
            ? "border-cyan-400/50 bg-white/10"
            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
        }`}
      >
        {/* Timeline dot */}
        <div className="absolute -left-2 top-6 flex items-center">
          <div
            className={`h-4 w-4 rounded-full border-2 transition-colors ${
              isActive
                ? "border-cyan-400 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                : "border-white/30 bg-white/10"
            }`}
          />
          {index < EXPERIENCES.length - 1 && (
            <div className="absolute top-4 left-2 h-16 w-px bg-gradient-to-b from-white/20 to-transparent" />
          )}
        </div>

        <div className="ml-6">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3
                className={`font-bold transition-colors ${
                  isActive ? "text-cyan-300" : "text-white/90"
                }`}
              >
                {experience.role}
              </h3>
              <p className="text-white/70 text-sm">{experience.company}</p>
            </div>
            <span
              className={`rounded-full px-2 py-1 text-xs font-mono transition-colors flex items-center justify-center ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-200 border border-cyan-400/30"
                  : "bg-white/5 text-white/60 border border-white/10"
              }`}
            >
              {experience.type}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-white/60">
            <span>{experience.period}</span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, parallax }) => {
  return (
    <div className="group relative" style={parallax(0.008)}>
      {/* Glow */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${experience.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-30`}
      />

      {/* Main card */}
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-auto font-mono text-xs text-white/60">
            experience/{experience.company.toLowerCase().replace(/\s+/g, "-")}
            .json
          </span>
        </div>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {experience.role}
              </h3>
              <div className="flex items-center gap-3 text-white/70">
                <span className="text-lg font-semibold">
                  {experience.company}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>{experience.period}</span>
              </div>
            </div>
            <div
              className={`rounded-xl border border-white/20 bg-gradient-to-r ${experience.color} bg-opacity-10 px-4 py-2`}
            >
              <span className="text-sm font-mono text-white/90">
                {experience.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/80 leading-relaxed mb-6">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mb-6">
            <h4 className="text-cyan-300 font-semibold mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-white/70"
                >
                  <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-purple-300 font-semibold mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm font-mono text-white/80 hover:border-purple-400/50 hover:bg-purple-500/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute -top-2 -right-2 h-16 w-16 opacity-10 group-hover:opacity-20 transition-opacity">
          <div
            className={`h-full w-full rounded-full bg-gradient-to-br ${experience.color} blur-xl`}
          />
        </div>
      </div>
    </div>
  );
};

const FloatingCodeElements = ({ mousePos }) => {
  const elements = [
    { text: "{ }", x: 10, y: 20, delay: 0 },
    { text: "=>", x: 85, y: 15, delay: 0.5 },
    { text: "( )", x: 15, y: 80, delay: 1 },
    { text: "</>", x: 90, y: 75, delay: 1.5 },
    { text: "[ ]", x: 50, y: 10, delay: 2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute font-mono text-cyan-400/20 text-2xl select-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate3d(${mousePos.x * (10 + index * 5)}px, ${
              mousePos.y * (8 + index * 3)
            }px, 0)`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.text}
        </div>
      ))}
    </div>
  );
};

export default Exp;
