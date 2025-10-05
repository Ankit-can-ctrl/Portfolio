import React, { useState, useRef, useEffect } from "react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Building Scalable React Applications with Modern Architecture",
    slug: "scalable-react-architecture",
    excerpt:
      "Learn how to structure large React applications using modern patterns, state management solutions, and performance optimization techniques that scale with your team.",
    content:
      "In this comprehensive guide, we'll explore the architectural patterns that make React applications maintainable and scalable...",
    category: "React",
    tags: ["React", "Architecture", "Performance", "State Management"],
    author: "Ankit",
    publishedAt: "2024-01-15",
    readingTime: 8,
    featured: true,
    image: "/blog/react-architecture.jpg",
    color: "from-cyan-400 to-blue-500",
    likes: 142,
    comments: 23,
    views: 1847,
  },
  {
    id: 2,
    title: "The Complete Guide to TypeScript in 2024",
    slug: "typescript-guide-2024",
    excerpt:
      "Master TypeScript with this comprehensive guide covering advanced types, generics, decorators, and the latest features that make your JavaScript bulletproof.",
    content:
      "TypeScript has become an essential tool for modern web development. Let's dive deep into its powerful features...",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Types", "Best Practices"],
    author: "Ankit",
    publishedAt: "2024-01-08",
    readingTime: 12,
    featured: true,
    image: "/blog/typescript-guide.jpg",
    color: "from-blue-400 to-indigo-500",
    likes: 89,
    comments: 15,
    views: 1234,
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    slug: "css-grid-flexbox-layouts",
    excerpt:
      "Create stunning, responsive layouts with CSS Grid and Flexbox. Learn when to use each technique and how to combine them for powerful design systems.",
    content:
      "CSS Grid and Flexbox are powerful layout systems that have revolutionized web design...",
    category: "CSS",
    tags: ["CSS", "Grid", "Flexbox", "Layout", "Responsive Design"],
    author: "Ankit",
    publishedAt: "2024-01-01",
    readingTime: 6,
    featured: false,
    image: "/blog/css-layouts.jpg",
    color: "from-green-400 to-emerald-500",
    likes: 67,
    comments: 12,
    views: 892,
  },
  {
    id: 4,
    title: "Building Real-time Applications with WebSockets",
    slug: "websockets-realtime-apps",
    excerpt:
      "Dive into WebSocket technology and learn how to build real-time applications with instant communication, live updates, and seamless user experiences.",
    content:
      "Real-time communication is crucial for modern web applications. WebSockets provide the perfect solution...",
    category: "JavaScript",
    tags: ["WebSockets", "Real-time", "Node.js", "Socket.io"],
    author: "Ankit",
    publishedAt: "2023-12-20",
    readingTime: 10,
    featured: false,
    image: "/blog/websockets.jpg",
    color: "from-purple-400 to-pink-500",
    likes: 134,
    comments: 28,
    views: 1567,
  },
  {
    id: 5,
    title: "Next.js 14: What's New and How to Upgrade",
    slug: "nextjs-14-whats-new",
    excerpt:
      "Explore the latest features in Next.js 14 including App Router improvements, Server Components enhancements, and new performance optimizations.",
    content:
      "Next.js 14 brings exciting new features and improvements that enhance developer experience and application performance...",
    category: "Next.js",
    tags: ["Next.js", "React", "Server Components", "Performance"],
    author: "Ankit",
    publishedAt: "2023-12-15",
    readingTime: 7,
    featured: false,
    image: "/blog/nextjs-14.jpg",
    color: "from-orange-400 to-red-500",
    likes: 98,
    comments: 19,
    views: 1123,
  },
  {
    id: 6,
    title: "AI-Powered Development: Tools That Will Change Your Workflow",
    slug: "ai-development-tools",
    excerpt:
      "Discover the latest AI tools that are transforming how we write code, debug applications, and optimize performance. The future of development is here.",
    content:
      "Artificial Intelligence is revolutionizing software development. From code generation to automated testing...",
    category: "AI",
    tags: ["AI", "Development Tools", "Productivity", "Future"],
    author: "Ankit",
    publishedAt: "2023-12-10",
    readingTime: 9,
    featured: true,
    image: "/blog/ai-tools.jpg",
    color: "from-indigo-400 to-purple-500",
    likes: 201,
    comments: 45,
    views: 2341,
  },
  {
    id: 7,
    title: "Database Design Patterns for Modern Web Apps",
    slug: "database-design-patterns",
    excerpt:
      "Learn essential database design patterns, normalization techniques, and how to choose between SQL and NoSQL solutions for your applications.",
    content:
      "Proper database design is crucial for application performance and scalability. Let's explore proven patterns...",
    category: "Database",
    tags: ["Database", "SQL", "NoSQL", "Design Patterns"],
    author: "Ankit",
    publishedAt: "2023-12-05",
    readingTime: 11,
    featured: false,
    image: "/blog/database-design.jpg",
    color: "from-yellow-400 to-orange-500",
    likes: 76,
    comments: 14,
    views: 945,
  },
  {
    id: 8,
    title: "Microservices vs Monoliths: When to Choose What",
    slug: "microservices-vs-monoliths",
    excerpt:
      "Navigate the complex decision between microservices and monolithic architectures. Learn the trade-offs, benefits, and when each approach makes sense.",
    content:
      "The choice between microservices and monolithic architectures is one of the most important decisions in system design...",
    category: "Architecture",
    tags: ["Microservices", "Monoliths", "Architecture", "Scalability"],
    author: "Ankit",
    publishedAt: "2023-11-28",
    readingTime: 13,
    featured: false,
    image: "/blog/microservices.jpg",
    color: "from-teal-400 to-cyan-500",
    likes: 156,
    comments: 32,
    views: 1876,
  },
];

const CATEGORIES = [
  "All",
  "React",
  "TypeScript",
  "CSS",
  "JavaScript",
  "Next.js",
  "AI",
  "Database",
  "Architecture",
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredPost, setHoveredPost] = useState(null);
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

  // Filter posts by category and search term
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Separate featured and regular posts
  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  // Parallax calculation
  const parallax = (factor) => ({
    transform: `translate3d(${mousePos.x * factor * 10}px, ${
      mousePos.y * factor * 10
    }px, 0)`,
  });

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative min-h-screen w-full text-white overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Blog</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Thoughts & Insights
            </span>
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Sharing knowledge about modern web development, best practices, and
            the latest technologies
          </p>

          {/* Search and filters */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/60 backdrop-blur-sm transition focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-3 py-1 text-sm font-mono transition-all duration-300 backdrop-blur-sm ${
                    activeCategory === category
                      ? "border-cyan-400/70 bg-cyan-500/20 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-400/50 hover:text-cyan-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Featured Posts
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  isHovered={hoveredPost === post.id}
                  onHover={() => setHoveredPost(post.id)}
                  onLeave={() => setHoveredPost(null)}
                  parallax={parallax}
                  featured={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              All Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  isHovered={hoveredPost === post.id}
                  onHover={() => setHoveredPost(post.id)}
                  onLeave={() => setHoveredPost(null)}
                  parallax={parallax}
                  featured={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* No results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No posts found
            </h3>
            <p className="text-white/70">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Floating Elements */}
        <FloatingBlogElements mousePos={mousePos} />
      </div>
    </section>
  );
};

const BlogCard = ({
  post,
  index,
  isHovered,
  onHover,
  onLeave,
  parallax,
  featured,
}) => {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article
      className={`group relative cursor-pointer ${
        featured ? "lg:col-span-1" : ""
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={parallax(0.002 * (index + 1))}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${
          post.color
        } opacity-0 blur-xl transition-all duration-500 ${
          isHovered ? "opacity-30" : "group-hover:opacity-20"
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
            blog/{post.slug}.md
          </span>
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-6 right-4 z-10">
            <span className="rounded-full bg-yellow-500/20 border border-yellow-400/30 px-2 py-1 text-xs font-mono text-yellow-200 backdrop-blur-md">
              Featured
            </span>
          </div>
        )}

        {/* Post image/placeholder */}
        <div
          className={`relative ${
            featured ? "h-64" : "h-48"
          } bg-gradient-to-br from-[#0f1720] to-[#0b0f14] overflow-hidden`}
        >
          {!imageError ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div
                className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${post.color} opacity-30 flex items-center justify-center`}
              >
                <span className="text-2xl font-mono text-white/70">📝</span>
              </div>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`rounded-full bg-gradient-to-r ${post.color} bg-opacity-20 border border-white/20 px-2 py-1 text-xs font-mono text-white backdrop-blur-md`}
            >
              {post.category}
            </span>
          </div>

          {/* Stats overlay on hover */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-sm">{post.likes}</span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-sm">{post.comments}</span>
              </div>
              <div className="flex items-center gap-2">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span className="text-sm">{post.views}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
            <span>{formatDate(post.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>

          <h3
            className={`font-bold text-white mb-3 line-clamp-2 ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {post.title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-white/80"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-white/60">
                +{post.tags.length - 3}
              </span>
            )}
          </div>

          {/* Read more button */}
          <button className="group/btn flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-cyan-400/60 hover:text-cyan-300">
            <span>Read More</span>
            <svg
              className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Decorative corner element */}
        <div className="absolute -top-2 -right-2 h-12 w-12 opacity-10 group-hover:opacity-20 transition-opacity">
          <div
            className={`h-full w-full rounded-full bg-gradient-to-br ${post.color} blur-lg`}
          />
        </div>
      </div>
    </article>
  );
};

const FloatingBlogElements = ({ mousePos }) => {
  const elements = [
    { text: "md", x: 8, y: 20, delay: 0 },
    { text: "js", x: 92, y: 25, delay: 0.5 },
    { text: "css", x: 15, y: 80, delay: 1 },
    { text: "html", x: 85, y: 75, delay: 1.5 },
    { text: "api", x: 50, y: 10, delay: 2 },
    { text: "dev", x: 25, y: 60, delay: 2.5 },
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
            transform: `translate3d(${mousePos.x * (6 + index * 2)}px, ${
              mousePos.y * (4 + index * 2)
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

export default Blogs;
