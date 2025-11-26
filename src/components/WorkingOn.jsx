import React from "react";

const CURRENT_PROJECTS = [
  {
    id: 1,
    title: "Token Launchpad",
    description:
      "User can connect wallet and launch their own token to blockchain.",
    status: "Working",
    technologies: ["Solana", "Typescript", "React"],
    startDate: "Nov 2025",
    githubUrl: "https://github.com/Ankit-can-ctrl/token-launchpad",
  },
];

const WorkingOn = () => {
  return (
    <section
      id="working-on"
      className="relative w-full text-white overflow-hidden py-12 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest uppercase text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>What i'm working on</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
          {CURRENT_PROJECTS.map((project) => (
            <WorkingOnCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkingOnCard = ({ project }) => {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block cursor-pointer"
    >
      {/* Main card */}
      <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:border-white/20">
        <div className="p-5">
          {/* Header with status */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                {/* GitHub icon */}
                <svg
                  className="w-4 h-4 text-white/60 group-hover:text-white/90 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
                <span>Started {project.startDate}</span>
              </div>
            </div>

            {/* Status badge */}
            <div
              className={`rounded-full px-2 py-1 text-xs font-mono border flex-shrink-0
                  bg-blue-500/20 text-blue-200 border-blue-400/30
              }`}
            >
              {project.status}
            </div>
          </div>

          {/* Description */}
          <p className="text-white/70 text-sm leading-relaxed mb-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-mono text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkingOn;
