import React, { useRef, useState } from "react";
import profile from "../assets/profile.jpg";

const PERSONAL_INFO = {
  name: "Ankit Kumar",
  title: "Full Stack Developer",
  location: "Greater Noida, UP",
  experience: "2+ Years",
  bio: "I execute ideas using code, crafting exceptional UIs and robust backends. With a passion for problem-solving and web3 innovation, I transform concepts into scalable, user-centric solutions that push the boundaries of what's possible.",
};

const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    school: "Galgotias College of Engineering and Technology",
    year: "2022 - 2026",
    gpa: "8.3/10",
    honors: "Bachelor of Technology",
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Machine Learning",
    ],
    color: "from-red-400 to-red-600",
  },
  {
    id: 2,
    degree: "Upper secondary school (12th)",
    school: "Army public school, Nasirabad, Rajasthan",
    year: "2021",
    gpa: "9.38/10",
    honors: "Maths, physics and chemistry with Computer Science",
    // duration: "12 months",
    projects: [
      "Information Technology",
      "Physics",
      "Chemistry",
      "Maths",
      "English",
      "Social Science",
    ],
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 3,
    degree: "Lower secondary school (10th)",
    school: "Army public school, Nasirabad, Rajasthan",
    year: "2019",
    gpa: "9.46/10",
    honors: "Maths, Science and Social Science",
    type: "Professional Certification",
    skills: [
      "Information Technology",
      "Physics",
      "Chemistry",
      "Maths",
      "English",
      "Social Science",
    ],
    color: "from-orange-400 to-orange-600",
  },
];

const AboutMe = () => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 10; // rotateY
    const rx = (0.5 - py) * 8; // rotateX
    setTilt({ rx, ry });
  };

  const handleLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section id="about" className="relative w-full h-full text-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Image card */}
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="group relative"
            style={{
              transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: "transform 120ms ease-out",
            }}
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-purple-500/30 blur-xl opacity-60 group-hover:opacity-80 transition" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <span className="ml-auto font-mono text-xs text-white/60">
                  about/profile.jpg
                </span>
              </div>
              <div className="relative p-4 md:p-6">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0f1720] to-[#0b0f14]">
                  {/* Fallback gradient circle behind image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-gradient-to-tr from-cyan-400/30 to-purple-400/30" />
                  </div>
                  <img
                    src={profile}
                    alt="Profile"
                    loading="lazy"
                    className="relative z-10 h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>About Me</span>
            </div>

            {/* Name and Title */}
            <div className="mt-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-sky-200 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm mb-4">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                  {PERSONAL_INFO.title}
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {PERSONAL_INFO.location}
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {PERSONAL_INFO.experience}
                </span>
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
                I execute ideas through code & innovation
              </span>
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed md:text-lg">
              {PERSONAL_INFO.bio}
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Exceptional UI/UX Development",
                "Robust Backend Architecture",
                "Web3 & Blockchain Solutions",
                "Creative Problem Solving",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span className="font-mono">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                Contact me
              </a>
              <a
                href="https://drive.google.com/file/d/1mPGmEgV6os5hxWrHpE_WsRfPlzJ5ZpqO/view?usp=sharing"
                target="_blank"
                className="group relative inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.6)]"
              >
                <span>Download CV</span>
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300 mb-4">
              <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
              <span>Education</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-purple-300 via-pink-200 to-white bg-clip-text text-transparent">
                Academic Journey
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDUCATION.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ education, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${
          education.color
        } opacity-0 blur-xl transition-all duration-500 ${
          isHovered ? "opacity-30" : "group-hover:opacity-20"
        }`}
      />

      {/* Main card */}
      <div
        className={`relative rounded-3xl border backdrop-blur-sm overflow-hidden transition-all duration-500 ${
          isHovered
            ? "border-white/30 bg-white/10 transform scale-105"
            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
        }`}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-auto font-mono text-xs text-white/60">
            education/{education.id}.json
          </span>
        </div>

        <div className="p-6">
          {/* Institution Icon */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`h-12 w-12 rounded-lg bg-gradient-to-r ${education.color} p-3 flex items-center justify-center`}
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg leading-tight">
                {education.degree}
              </h4>
              <p className="text-white/70 text-sm">{education.school}</p>
            </div>
          </div>

          {/* Year and additional info */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-cyan-300 text-sm font-mono">
              {education.year}
            </span>
            {education.duration && (
              <>
                <span className="text-white/40">•</span>
                <span className="text-white/60 text-sm">
                  {education.duration}
                </span>
              </>
            )}
            {education.type && (
              <>
                <span className="text-white/40">•</span>
                <span className="text-white/60 text-sm">{education.type}</span>
              </>
            )}
          </div>

          {/* GPA or Honors */}
          {(education.gpa || education.honors) && (
            <div className="mb-4">
              {education.gpa && (
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-white/80 text-sm">
                    GPA: {education.gpa}
                  </span>
                </div>
              )}
              {education.honors && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 16L3 21l5.25-1.25L12 21l3.75-1.25L21 21l-2-5H5zm2.5-5c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6 5 7.12 5 8.5 6.12 11 7.5 11zm9 0c1.38 0 2.5-1.12 2.5-2.5S17.88 6 16.5 6 14 7.12 14 8.5 15.12 11 16.5 11z" />
                  </svg>
                  <span className="text-white/80 text-sm">
                    {education.honors}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Coursework or Skills */}
          {(education.coursework || education.skills || education.projects) && (
            <div className="mb-4">
              <h5 className="text-white/90 text-sm font-medium mb-2">
                {education.coursework
                  ? "Key Coursework:"
                  : education.skills
                  ? "Skills:"
                  : "Projects:"}
              </h5>
              <div className="flex flex-wrap gap-2">
                {(
                  education.coursework ||
                  education.skills ||
                  education.projects
                )
                  ?.slice(0, 3)
                  .map((item, index) => (
                    <span
                      key={index}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                {(
                  education.coursework ||
                  education.skills ||
                  education.projects
                )?.length > 3 && (
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-white/60">
                    +
                    {(
                      education.coursework ||
                      education.skills ||
                      education.projects
                    ).length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Decorative corner element */}
        <div className="absolute -top-2 -right-2 h-8 w-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <div
            className={`h-full w-full rounded-full bg-gradient-to-br ${education.color} blur-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
