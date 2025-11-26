import React from "react";

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
  return (
    <section
      id="experience"
      className="relative w-full text-white overflow-hidden py-12 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Compact Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest uppercase text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Experience</span>
          </div>
        </div>

        {/* Compact Experience Cards */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => (
            <CompactExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CompactExperienceCard = ({ experience }) => {
  return (
    <div className="group relative">
      {/* Subtle glow on hover */}
      <div
        className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${experience.color} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-20`}
      />

      {/* Compact card */}
      <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-white mb-1">
              {experience.role}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <span className="font-medium text-cyan-300">
                {experience.company}
              </span>
              <span className="hidden md:inline">•</span>
              <span>{experience.period}</span>
              <span className="hidden md:inline">•</span>
              <span>{experience.location}</span>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/70 w-fit">
            {experience.type}
          </span>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed mb-3">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exp;
