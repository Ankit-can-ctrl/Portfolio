import React, { useState } from "react";

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full text-white overflow-hidden py-12 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Compact Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest uppercase text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Testimonials</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="flex items-center gap-4">
          {/* Previous button */}
          <button
            onClick={prevTestimonial}
            className="flex-shrink-0 rounded-lg border border-white/20 bg-white/10 p-2 text-white/80 backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-200"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Main testimonial card */}
          <div className="flex-1">
            <TestimonialCard testimonial={TESTIMONIALS[currentIndex]} />
          </div>

          {/* Next button */}
          <button
            onClick={nextTestimonial}
            className="flex-shrink-0 rounded-lg border border-white/20 bg-white/10 p-2 text-white/80 backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-200"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-1.5">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-cyan-400"
                  : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <div className="group relative">
      {/* Subtle glow on hover */}
      <div
        className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${testimonial.color} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-20`}
      />

      {/* Main card */}
      <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
        {/* Quote icon */}
        <div className="mb-4">
          <svg
            className="h-6 w-6 text-cyan-400/40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        </div>

        {/* Content */}
        <blockquote className="text-base text-white/80 leading-relaxed mb-6">
          "{testimonial.content}"
        </blockquote>

        {/* Author info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            {!avatarError ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-white/20"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div
                className={`h-12 w-12 rounded-full bg-gradient-to-r ${testimonial.color} opacity-30 flex items-center justify-center border-2 border-white/20`}
              >
                <span className="text-sm font-bold text-white/70">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            )}
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              {testimonial.name}
            </h4>
            <p className="text-xs text-white/60">{testimonial.role}</p>
            <p className="text-xs text-cyan-300 font-mono">
              {testimonial.company}
            </p>
          </div>
          
          {/* Rating */}
          <div className="ml-auto flex gap-0.5">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className="h-3 w-3 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
