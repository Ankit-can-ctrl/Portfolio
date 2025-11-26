import React, { useMemo, useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSolana,
} from "react-icons/si";

import { FaGithub, FaDocker } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "web3", label: "Web3" },
];

const SKILLS = [
  // Frontend
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 92, category: "frontend" },
  { name: "React.js", level: 92, category: "frontend" },
  { name: "Redux", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },
  { name: "Tanstack Query", level: 82, category: "frontend" },
  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "RESTful APIs", level: 90, category: "backend" },
  { name: "JWT Authentication", level: 85, category: "backend" },
  { name: "Websockets", level: 78, category: "backend" },
  // Database
  { name: "MongoDB", level: 85, category: "database" },
  { name: "Firebase", level: 80, category: "database" },
  { name: "MySQL", level: 75, category: "database" },
  { name: "PostgreSQL", level: 78, category: "database" },
  // Tools & Platforms
  { name: "Solana", level: 92, category: "web3" },
];

const ICONS = [
  { label: "React", glyph: "⚛️" },
  { label: "TypeScript", glyph: <SiTypescript className="text-cyan-400" /> },
  {
    label: "JavaScript",
    glyph: <SiJavascript className="text-yellow-300" />,
  },
  { label: "Node.js", glyph: <FaNode className="text-green-300" /> },
  { label: "Next.js", glyph: <RiNextjsFill className="text-white" /> },
  { label: "Solana", glyph: <SiSolana className="text-white" /> },

  { label: "Tailwind", glyph: <RiTailwindCssFill className="text-blue-300" /> },
  { label: "MongoDB", glyph: <SiMongodb className="text-green-300" /> },
  { label: "Postgres", glyph: <SiPostgresql className="text-blue-300" /> },
  { label: "Git", glyph: <FaGithub className="text-gray-300" /> },
  { label: "Docker", glyph: <FaDocker className="text-blue-300" /> },
  { label: "Figma", glyph: <FaFigma className="text-pink-300" /> },
];

const Skills = () => {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return SKILLS;
    return SKILLS.filter((s) => s.category === active);
  }, [active]);

  return (
    <section id="skills" className="relative h-full w-full text-white">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeFast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col px-6 py-16 md:py-20">
        {/* Header */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Skills</span>
          </div>

          {/* Filters */}
          {/* <div className="hidden sm:flex items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`rounded-full border px-3 py-1 text-xs font-mono transition backdrop-blur-sm ${
                  active === cat.key
                    ? "border-cyan-400/70 bg-cyan-500/20 text-cyan-200"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-400/50 hover:text-cyan-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Full-width marquee of icons */}
      <div className="relative w-full overflow-hidden border-y border-white/10 bg-white/5 py-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0f14] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0f14] to-transparent z-10" />
        <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite] md:animate-[marquee_30s_linear_infinite]">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>

      {/* Skills List */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <SkillsList />
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => {
  const hue = useMemo(
    () => 170 + Math.round((skill.level / 100) * 60),
    [skill.level]
  );
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-white/10">
      {/* Glow */}
      <div
        className="pointer-events-none absolute -inset-1 -z-10 opacity-0 blur-2xl transition group-hover:opacity-60"
        style={{
          background: `radial-gradient(800px circle at 50% 0%, hsl(${hue} 80% 60% / 0.25), transparent 35%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-white/80">{skill.name}</span>
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-white/60">
          {skill.category}
        </span>
      </div>

      {/* Creative: orbit ring and code ticker */}
      <div className="mt-4 grid grid-cols-3 items-center gap-3">
        <div className="col-span-1">
          <div className="relative mx-auto h-20 w-20">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div
              className="absolute inset-0 rounded-full opacity-70"
              style={{
                background: `conic-gradient(from 0deg, hsl(${hue} 90% 65% / 0.4), transparent 40%, hsl(${hue} 90% 65% / 0.4))`,
              }}
            />
            <div className="absolute inset-0 animate-[spinSlow_8s_linear_infinite]">
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
            </div>
          </div>
        </div>
        <div className="col-span-2 overflow-hidden rounded-md border border-white/10 bg-white/5">
          <div
            className="flex whitespace-nowrap text-[11px] text-white/70"
            style={{ animation: "marquee 12s linear infinite" }}
          >
            <TickerRow />
            <TickerRow />
          </div>
        </div>
      </div>

      {/* Corner token */}
      <div className="pointer-events-none absolute -right-2 -top-2 rotate-12 select-none text-white/10 transition group-hover:text-cyan-200/20">
        <span className="font-mono text-5xl">{`</>`}</span>
      </div>
    </div>
  );
};

const MarqueeRow = () => (
  <div className="flex items-center gap-8 px-8 py-4">
    {ICONS.map((it) => (
      <div
        key={it.label}
        className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-400/30 text-lg font-bold text-white/90">
          {it.glyph}
        </span>
        <span className="font-mono text-sm text-white/80">{it.label}</span>
      </div>
    ))}
  </div>
);

const TickerRow = () => (
  <div className="flex items-center gap-3 px-3 py-1">
    {[
      "const",
      "await",
      "()=>",
      "{ }",
      "</>",
      "Promise",
      "import",
      "export",
    ].map((t, i) => (
      <span
        key={`${t}-${i}`}
        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono"
      >
        {t}
      </span>
    ))}
  </div>
);

const SkillsList = () => {
  const skillsByCategory = useMemo(() => {
    return CATEGORIES.slice(1).reduce((acc, category) => {
      acc[category.key] = SKILLS.filter(
        (skill) => skill.category === category.key
      );
      return acc;
    }, {});
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(skillsByCategory).map(([categoryKey, skills]) => {
        const category = CATEGORIES.find((cat) => cat.key === categoryKey);

        return (
          <div
            key={categoryKey}
            className="rounded-lg border border-white/10 bg-white/5 p-4"
          >
            <h4 className="text-white/90 font-mono text-sm mb-3">
              {category.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-white/70"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
