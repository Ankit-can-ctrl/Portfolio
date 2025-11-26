import React, { useState } from "react";

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
  {
    id: 8,
    title: "Solana dApp",
    category: "Web3",
    description: "Detects your wallet, send airdrop, send SOL",
    longDescription: "Interactive dApp allows to intract with your wallet.",
    image: "/projects/crypto.jpg",
    technologies: ["React", "Solana", "Tailwind"],
    github: "https://github.com/Ankit-can-ctrl/wallet-adapter",
    live: "https://wallet-adapter-beige.vercel.app/",
    status: "completed",
    year: "2025",
    color: "from-yellow-400 to-orange-500",
    features: [
      "Connect your wallet",
      "Send airdrop to devnet network",
      "Transfer SOL",
      "Transaction History",
    ],
  },
];

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend", "Web3"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter projects by category
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full text-white overflow-hidden py-12 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest uppercase text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Projects</span>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-3 py-1 text-xs font-mono transition-all duration-300 ${
                  activeCategory === category
                    ? "border-cyan-400/70 bg-cyan-500/20 text-cyan-200"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-400/50 hover:text-cyan-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Subtle glow on hover */}
      <div
        className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${
          project.color
        } opacity-0 blur-lg transition-opacity duration-300 ${
          isHovered ? "opacity-30" : "group-hover:opacity-20"
        }`}
      />

      {/* Main card */}
      <div
        className={`relative rounded-xl border backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          isHovered
            ? "border-cyan-400/50 bg-white/10 transform scale-[1.02]"
            : "border-white/10 bg-white/5 hover:border-white/20"
        }`}
      >
        {/* Project image/placeholder */}
        <div className="relative h-40 bg-gradient-to-br from-[#0f1720] to-[#0b0f14] overflow-hidden">
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
                className={`h-16 w-16 rounded-xl bg-gradient-to-br ${project.color} opacity-30 flex items-center justify-center`}
              >
                <span className="text-2xl font-mono text-white/70">
                  {"</>"}
                </span>
              </div>
            </div>
          )}

          {/* Status badge */}
          <div className="absolute top-2 right-2">
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-mono border backdrop-blur-md ${
                project.status === "completed"
                  ? "bg-green-500/20 text-green-200 border-green-400/30"
                  : "bg-yellow-500/20 text-yellow-200 border-yellow-400/30"
              }`}
            >
              {project.status === "completed" ? "Live" : "WIP"}
            </span>
          </div>

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white/10 border border-white/20 p-2 text-white/90 hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {project.status === "completed" && project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-500/90 border border-cyan-400/50 p-2 text-black hover:bg-cyan-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-base font-bold text-white mb-1 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-white/70 text-xs leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-xs font-mono text-white/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-xs font-mono text-white/60">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center rounded-lg border border-white/15 bg-white/5 px-2 py-1.5 text-xs font-medium text-white/90 transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              Code
            </a>
            {project.status === "completed" && project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center rounded-lg bg-cyan-500/90 px-2 py-1.5 text-xs font-medium text-black transition hover:bg-cyan-400"
              >
                Live
              </a>
            ) : (
              <div className="flex-1 text-center rounded-lg bg-white/5 border border-white/10 px-2 py-1.5 text-xs font-medium text-white/40">
                WIP
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
