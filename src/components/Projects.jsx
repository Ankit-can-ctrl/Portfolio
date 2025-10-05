import React, { useState, useRef, useEffect } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Velocity-Pay",
    category: "Full Stack",
    description:
      "UPI-like digital payments app (Next.js, Node.js, TypeScript) Built a secure real-time payments platform enabling peer-to-peer money transfers via phone number or QR codes.",
    longDescription:
      "Developed a full-stack payments platform that allows users to send and receive money instantly using phone numbers or QR codes. Implemented secure authentication, wallet balance management, and detailed transaction history with filtering and search.",
    image:
      "https://drive.google.com/file/d/163c3YaYIcFrf58cZgXl42ptJgxFSEosS/view?usp=sharing",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "Vite",
    ],
    github: "https://github.com/Ankit-can-ctrl/velocity-pay",
    live: "#",
    status: "In Progress",
    year: "2025",
    color: "from-yellow-400 to-blue-500",
    features: [
      "User Authentication & Authorization – Secure login and signup flow with session/token management.",
      "QR Code Payments – Generate and scan QR codes for seamless peer-to-peer transfers.",
      "Instant Money Transfers – Send and receive money via phone number or UPI-like ID.",
      "Double-Spend Prevention – Implemented database transactions & locks to ensure the same wallet balance cannot be spent twice simultaneously.",
      "lazy loadiFloating-Point Round-Off Errors – Replaced floating-point calculations with fixed decimal precision (e.g., using integer-based representation for currency in paise/cents).",
    ],
  },
  {
    id: 2,
    title: "Cerebro (Second Brain)",
    category: "Full Stack",
    description:
      " Cerebro is an AI-powered personal knowledge hub that lets users capture and share diverse media with a responsive, searchable masonry UI. It features semantic search with vector embeddings, secure REST APIs, Cloudinary integration, and robust media embeds for a seamless experience.",
    longDescription:
      "Built a full‑stack app to capture and share links, videos, images, audio, docs, and tweets with a responsive masonry UI, filters, and search.Added share wher other people can view the content.",
    image:
      "https://drive.google.com/file/d/163c3YaYIcFrf58cZgXl42ptJgxFSEosS/view?usp=sharing",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "Vite",
      "Cloudinary",
    ],
    github: "https://github.com/Ankit-can-ctrl/Cerebro",
    live: "https://cerebro-iota-rose.vercel.app/",
    status: "completed",
    year: "2025",
    color: "from-cyan-400 to-blue-500",
    features: [
      "semantic search via vector embeddings and cosine similarity (top‑k retrieval, k/minScore params) with backfill/clear scripts.",
      "Designed secure REST APIs with auth, shareable hashed links and a read‑only public view",
      "integrated Cloudinary for upload by file/URL (image/audio)",
      "Engineered robust embeds (YouTube parser with timestamp, Twitter widgets)",
      "lazy loading for faster perceived performance",
    ],
  },
  {
    id: 3,
    title: "SnapEats (Food Delivery App)",
    category: "Frontend",
    description:
      "Food delivery app with seamless order tracking and real-time delivery status updates (React, Node.js, TypeScript).",
    longDescription:
      "A comprehensive weather application that goes beyond basic forecasts. Features interactive weather maps, severe weather alerts, and personalized recommendations based on weather conditions and user preferences.",
    image:
      "https://drive.google.com/file/d/163c3YaYIcFrf58cZgXl42ptJgxFSEosS/view?usp=sharing",
    technologies: [
      "React",
      "Stripe Payment Gateway",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "Tailwind",
      "Vite",
    ],
    github: "https://github.com/Ankit-can-ctrl/SnapEats",
    live: "https://snap-eats-frontend-two.vercel.app/",
    status: "completed",
    year: "2025",
    color: "from-green-400 to-emerald-500",
    features: [
      "Engineered a full-stack food delivery app with an admin dashboard, showcasing MERN stack proficiency.",
      "Implemented persistent cart functionality and integrated Stripe for secure payment processing.",
      "SeverDeveloped robust JWT authentication and authorization and enabled real-time order status tracking.",
      "Optimized database queries and API responses, significantly improving performance.",
    ],
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Frontend",
    description:
      "Portfolio website built with React.js. It showcases the developer's projects, skills, and experience.",
    longDescription:
      "A portfolio website built with React.js that showcases the developer's projects, skills, and experience.",
    image:
      "https://drive.google.com/file/d/163c3YaYIcFrf58cZgXl42ptJgxFSEosS/view?usp=sharing",
    technologies: ["React", "Tailwind", "JavaScript", "Tailwind", "Vite"],
    github: "https://github.com/Ankit-can-ctrl/SnapEats",
    live: "https://snap-eats-frontend-two.vercel.app/",
    status: "completed",
    year: "2025",
    color: "from-green-400 to-emerald-500",
    features: [
      "Engineered a portfolio website with a modern design and responsive layout.",
      "Implemented smooth animations and interactive elements to enhance user experience.",
      "SeverDeveloped robust JWT authentication and authorization and enabled real-time order status tracking, significantly improving performance.",
      "Optimized database queries and API responses, significantly improving performance.",
    ],
  },
  {
    id: 5,
    title: "Coinsphere (Crypto Dashboard)",
    category: "Frontend",
    description:
      "Coin-Sphere is a fully functional cryptocurrency tracking website built with React.js. It provides real-time market data, price charts, and statistics for thousands of coins. Users can explore trending coins, view historical data with interactive charts, and stay updated with the latest crypto news.",
    longDescription:
      "A comprehensive cryptocurrency tracking website built with React.js that provides real-time market data, price charts, and statistics for thousands of coins. Users can explore trending coins, view historical data with interactive charts, and stay updated with the latest crypto news.",
    image: "/projects/ai-chat.jpg",
    technologies: [
      "redux",
      "reactjs",
      "chartjs",
      "javscript",
      "tailwind",
      "reactrouterdom",
      "chartjs-2",
      "reduxtoo",
      "millify",
    ],
    github: "https://github.com/Ankit-can-ctrl/CoinSphere",
    live: "https://coin-sphere.vercel.app/",
    status: "completed",
    year: "2024",
    color: "from-orange-400 to-red-500",
    features: [
      "Live Market Data – Fetches real-time cryptocurrency prices, market cap, and volume",
      "Interactive Charts – Integrated with Chart.js to display historical price trends.",
      "Crypto News – Stay updated with the latest blockchain and crypto-related news.",
      "Search & Filter – Easily find specific cryptocurrencies by name or symbol.",
      "Responsive UI – Mobile-friendly design using Tailwind CSS.",
    ],
  },
  {
    id: 6,
    title: "Ochi-design (Clone)",
    category: "Frontend",
    description:
      "Ochi-design is a creative agency website built with React.js. It showcases the agency's portfolio, services, and team. It also includes a contact form and a blog section.",
    longDescription:
      "A creative agency website built with React.js that showcases the agency's portfolio, services, and team. It also includes a contact form and a blog section.",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/Ankit-can-ctrl/Ochi-design-",
    live: "https://ochi-design-sepia.vercel.app/",
    status: "completed",
    year: "2024",
    color: "from-indigo-400 to-purple-500",
    features: [
      "Interactive animations",
      "Responsive design",
      "Dark theme",
      "Smooth scrolling",
      "Modern UI/UX",
    ],
  },
  {
    id: 7,
    title: "SumitUp (AI article summarizer)",
    category: "Frontend",
    description:
      "AI article summarizer built with React.js. It allows users to summarize articles quickly and easily.",
    longDescription:
      "AI article summarizer built with React.js. It allows users to summarize articles quickly and easily.",
    image: "/projects/crypto.jpg",
    technologies: [
      "React",
      "Node.js",
      "WebSocket",
      "Chart.js",
      "CoinGecko API",
    ],
    github: "https://github.com/Ankit-can-ctrl/sumitUp",
    live: "https://sumit-up.vercel.app/",
    status: "completed",
    year: "2024",
    color: "from-yellow-400 to-orange-500",
    features: [
      "AI article summarizer built with React.js. It allows users to summarize articles quickly and easily.",
      "AI article summarizer built with React.js. It allows users to summarize articles quickly and easily.",
      "AI article summarizer built with React.js. It allows users to summarize articles quickly and easily.",
    ],
  },
];

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
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

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  // Parallax calculation
  const parallax = (factor) => ({
    transform: `translate3d(${mousePos.x * factor * 15}px, ${
      mousePos.y * factor * 15
    }px, 0)`,
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen w-full text-white overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-projects"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-projects)" />
        </svg>
      </div>

      {/* Floating ambient elements */}
      <div
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
        style={parallax(0.02)}
      />
      <div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl"
        style={parallax(-0.015)}
      />
      <div
        className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl"
        style={parallax(0.01)}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Projects</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Things I've Built
            </span>
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            A collection of projects showcasing my skills in modern web
            development
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-mono transition-all duration-300 backdrop-blur-sm ${
                  activeCategory === category
                    ? "border-cyan-400/70 bg-cyan-500/20 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-400/50 hover:text-cyan-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
              parallax={parallax}
            />
          ))}
        </div>

        {/* Floating Code Elements */}
        <FloatingElements mousePos={mousePos} />
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
  parallax,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={parallax(0.003 * (index + 1))}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${
          project.color
        } opacity-0 blur-xl transition-all duration-500 ${
          isHovered ? "opacity-40" : "group-hover:opacity-25"
        }`}
      />

      {/* Main card */}
      <div
        className={`relative rounded-3xl border backdrop-blur-sm overflow-hidden transition-all duration-500 ${
          isHovered
            ? "border-cyan-400/50 bg-white/10 transform scale-105"
            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
        }`}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-auto font-mono text-xs text-white/60">
            {project.title.toLowerCase().replace(/\s+/g, "-")}.app
          </span>
        </div>

        {/* Project image/placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-[#0f1720] to-[#0b0f14] overflow-hidden">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div
                className={`h-24 w-24 rounded-2xl bg-gradient-to-br ${project.color} opacity-30 flex items-center justify-center`}
              >
                <span className="text-3xl font-mono text-white/70">
                  {"</>"}
                </span>
              </div>
            </div>
          )}

          {/* Status badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`rounded-full px-2 py-1 text-xs font-mono border backdrop-blur-md ${
                project.status === "completed"
                  ? "bg-green-500/20 text-green-200 border-green-400/30"
                  : "bg-yellow-500/20 text-yellow-200 border-yellow-400/30"
              }`}
            >
              {project.status === "completed" ? "Live" : "In Progress"}
            </span>
          </div>

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 border border-white/20 p-3 text-white/90 hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {project.status === "completed" && project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-500/90 border border-cyan-400/50 p-3 text-black hover:bg-cyan-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : project.status === "In Progress" ? (
              <div className="rounded-full bg-yellow-500/20 border border-yellow-400/30 px-3 py-2 text-xs font-mono text-yellow-200">
                Not complete yet
              </div>
            ) : null}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-white/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-white/60">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              Code
            </a>
            {project.status === "completed" && project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center rounded-lg bg-cyan-500/90 px-3 py-2 text-sm font-medium text-black transition hover:bg-cyan-400"
              >
                Live Demo
              </a>
            ) : project.status === "In Progress" ? (
              <div className="flex-1 text-center rounded-lg bg-yellow-500/20 border border-yellow-400/30 px-3 py-2 text-sm font-medium text-yellow-200">
                Not complete yet
              </div>
            ) : null}
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute -top-2 -right-2 h-12 w-12 opacity-10 group-hover:opacity-20 transition-opacity">
          <div
            className={`h-full w-full rounded-full bg-gradient-to-br ${project.color} blur-lg`}
          />
        </div>
      </div>
    </div>
  );
};

const FloatingElements = ({ mousePos }) => {
  const elements = [
    { text: "npm", x: 5, y: 15, delay: 0 },
    { text: "git", x: 95, y: 20, delay: 0.5 },
    { text: "api", x: 10, y: 85, delay: 1 },
    { text: "jsx", x: 90, y: 80, delay: 1.5 },
    { text: "css", x: 50, y: 5, delay: 2 },
    { text: "js", x: 15, y: 50, delay: 2.5 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute font-mono text-cyan-400/15 text-lg select-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate3d(${mousePos.x * (8 + index * 3)}px, ${
              mousePos.y * (6 + index * 2)
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

export default Projects;
