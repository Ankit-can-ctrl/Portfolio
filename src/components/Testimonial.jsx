import React, { useState, useRef, useEffect } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Kushal J.",
    role: "Founder",
    company: "Explified.com",
    avatar: "/avatars/sarah.jpg",
    content:
      "We truly loved Ankit’s work and his tenure with us. His ability to deliver at pace while maintaining excellent design and UI quality stood out throughout the internship. Ankit consistently contributed across different areas, stepping in wherever the team needed support, even beyond his core domain. His adaptability, dedication, and creativity made a real impact on our projects. We would be delighted to have him back once he completes his degree.",
    rating: 5,

    color: "from-cyan-400 to-blue-500",
    technologies: ["React", "Node.js", "JavaScript", "Tailwind", "Vite"],
  },
  {
    id: 2,
    name: "Gaurav Kaushik",
    role: "Manager",
    company: "Explified.com",
    avatar: "/avatars/marcus.jpg",
    content:
      "It was a pleasure working with Ankit during his internship. He impressed us with his speed of execution, strong sense of design/UI, and willingness to take ownership of tasks beyond his primary role. Ankit adapted quickly to challenges, supported the team wherever needed, and consistently delivered high-quality work. I would be glad to work with him again once he completes his degree.",
    rating: 5,
    project: "",
    color: "from-purple-400 to-pink-500",
    technologies: ["TypeScript", "React", "Socket.io"],
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Design Lead",
    company: "Creative Studios",
    avatar: "/avatars/emily.jpg",
    content:
      "Finally, a developer who truly understands design! They brought our Figma mockups to life with stunning animations and micro-interactions. The collaboration was seamless and the final product was beyond beautiful.",
    rating: 5,
    project: "Portfolio Website",
    color: "from-green-400 to-emerald-500",
    technologies: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "InnovateLab",
    avatar: "/avatars/david.jpg",
    content:
      "Outstanding work on our AI integration project. They handled complex API integrations with ease and delivered a user experience that our customers absolutely love. Highly recommend for any modern web project.",
    rating: 5,
    project: "AI Chat Assistant",
    color: "from-orange-400 to-red-500",
    technologies: ["Next.js", "OpenAI", "Prisma"],
  },
  {
    id: 5,
    name: "Jennifer Liu",
    role: "VP Engineering",
    company: "DataFlow Systems",
    avatar: "/avatars/jennifer.jpg",
    content:
      "Exceptional developer with a keen eye for performance optimization. They transformed our sluggish dashboard into a lightning-fast, responsive application. The real-time features work flawlessly.",
    rating: 5,
    project: "Analytics Dashboard",
    color: "from-indigo-400 to-purple-500",
    technologies: ["Vue.js", "D3.js", "WebSocket"],
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Lead Developer",
    company: "FinTech Solutions",
    avatar: "/avatars/alex.jpg",
    content:
      "Professional, reliable, and incredibly skilled. They delivered our crypto tracking platform ahead of schedule with features we didn't even know we needed. The code is clean, well-documented, and maintainable.",
    rating: 5,
    project: "Crypto Tracker",
    color: "from-yellow-400 to-orange-500",
    technologies: ["React", "Chart.js", "WebSocket"],
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

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
    transform: `translate3d(${mousePos.x * factor * 12}px, ${
      mousePos.y * factor * 12
    }px, 0)`,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative min-h-screen w-full text-white overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what amazing people I've
            worked with have to say.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main testimonial card */}
          <div className="relative mx-auto max-w-4xl">
            <TestimonialCard
              testimonial={TESTIMONIALS[currentIndex]}
              parallax={parallax}
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white/80 backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white/80 backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-200"
          >
            <svg
              className="w-6 h-6"
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

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard
            number="50+"
            label="Happy Clients"
            parallax={parallax}
            factor={0.005}
          />
          <StatCard
            number="100%"
            label="Success Rate"
            parallax={parallax}
            factor={0.007}
          />
          <StatCard
            number="5.0"
            label="Average Rating"
            parallax={parallax}
            factor={0.006}
          />
          <StatCard
            number="24/7"
            label="Support"
            parallax={parallax}
            factor={0.008}
          />
        </div> */}

        {/* Floating Quote Elements */}
        <FloatingQuotes mousePos={mousePos} />
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, parallax }) => {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="group relative" style={parallax(0.005)}>
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${testimonial.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-30`}
      />

      {/* Main card */}
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-auto font-mono text-xs text-white/60">
            testimonial/{testimonial.name.toLowerCase().replace(/\s+/g, "-")}
            .json
          </span>
        </div>

        <div className="p-8 md:p-12">
          {/* Quote icon */}
          <div className="mb-6">
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${testimonial.color} opacity-20`}
            >
              <svg
                className="h-6 w-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <blockquote className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-8">
            "{testimonial.content}"
          </blockquote>

          {/* Author info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              {!avatarError ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover border-2 border-white/20"
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div
                  className={`h-16 w-16 rounded-full bg-gradient-to-r ${testimonial.color} opacity-30 flex items-center justify-center border-2 border-white/20`}
                >
                  <span className="text-xl font-bold text-white/70">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-[#0b0f14] flex items-center justify-center">
                <svg
                  className="h-3 w-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {testimonial.name}
              </h4>
              <p className="text-white/70">{testimonial.role}</p>
              <p className="text-cyan-300 text-sm font-mono">
                {testimonial.company}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-sm">5.0 out of 5</span>
          </div>

          {/* Project and technologies */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/10">
            <div>
              <span className="text-white/60 text-sm">Project: </span>
              <span className="text-cyan-300 font-mono text-sm">
                {testimonial.project}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {testimonial.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-white/80"
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
            className={`h-full w-full rounded-full bg-gradient-to-br ${testimonial.color} blur-xl`}
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ number, label, parallax, factor }) => {
  return (
    <div className="text-center group" style={parallax(factor)}>
      <div className="relative inline-block">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-white bg-clip-text mb-2">
            {number}
          </div>
          <div className="text-white/70 text-sm font-mono">{label}</div>
        </div>
      </div>
    </div>
  );
};

const FloatingQuotes = ({ mousePos }) => {
  const quotes = [
    { text: '"', x: 8, y: 25, delay: 0 },
    { text: '"', x: 92, y: 30, delay: 0.5 },
    { text: "★", x: 15, y: 75, delay: 1 },
    { text: "★", x: 85, y: 70, delay: 1.5 },
    { text: "♦", x: 50, y: 15, delay: 2 },
    { text: "♦", x: 25, y: 85, delay: 2.5 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className="absolute text-cyan-400/15 text-3xl select-none"
          style={{
            left: `${quote.x}%`,
            top: `${quote.y}%`,
            transform: `translate3d(${mousePos.x * (6 + index * 2)}px, ${
              mousePos.y * (4 + index * 2)
            }px, 0)`,
            animationDelay: `${quote.delay}s`,
          }}
        >
          {quote.text}
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
