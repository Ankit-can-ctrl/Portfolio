import React, { useState, useRef, useEffect } from "react";

const CONTACT_INFO = {
  email: "ak537664@gmail.com",
  phone: "+91-8079053482",
  location: "Greater Noida, UP",
  availability: "Available for new opportunities",
  timezone: "IST (UTC+5:30)",
};

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Ankit-can-ctrl",
    icon: "github",
    color: "from-gray-400 to-gray-600",
    username: "@Ankit-can-ctrl",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ankit969/",
    icon: "linkedin",
    color: "from-blue-400 to-blue-600",
    username: "/in/Ankit-can-ctrl",
  },
  {
    name: "X",
    url: "https://x.com/AnkitDontDotha",
    icon: "x",
    color: "from-sky-400 to-blue-500",
    username: "@AnkitDontDotha",
  },
  {
    name: "Email",
    url: `mailto:${CONTACT_INFO.email}`,
    icon: "email",
    color: "from-red-400 to-red-600",
    username: CONTACT_INFO.email,
  },
  {
    name: "Phone",
    url: `tel:${CONTACT_INFO.phone}`,
    icon: "phone",
    color: "from-green-400 to-green-600",
    username: CONTACT_INFO.phone,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1mPGmEgV6os5hxWrHpE_WsRfPlzJ5ZpqO/view?usp=sharing",
    icon: "download",
    color: "from-purple-400 to-purple-600",
    username: "Download CV",
  },
];

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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
    transform: `translate3d(${mousePos.x * factor * 8}px, ${
      mousePos.y * factor * 8
    }px, 0)`,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full text-white overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Contact</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          {/* <div className="order-2 lg:order-1">
            <ContactForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              submitStatus={submitStatus}
              parallax={parallax}
            />
          </div> */}

          {/* Contact Information */}
          {/* <div className="order-1 lg:order-2">
            <ContactInfo parallax={parallax} />
          </div> */}
        </div>

        {/* Social Links */}
        <div className="mt-20">
          <SocialLinks parallax={parallax} />
        </div>

        {/* Floating Elements */}
        <FloatingContactElements mousePos={mousePos} />
      </div>
    </section>
  );
};

const ContactForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
  submitStatus,
  parallax,
}) => {
  return (
    <div className="group relative" style={parallax(0.005)}>
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

      {/* Form container */}
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-auto font-mono text-xs text-white/60">
            contact/message.form
          </span>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group/btn w-full flex items-center justify-center gap-3 rounded-lg px-6 py-4 font-medium transition-all ${
                isSubmitting
                  ? "bg-white/10 text-white/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transition-transform group-hover/btn:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </>
              )}
            </button>

            {/* Status messages */}
            {submitStatus === "success" && (
              <div className="rounded-lg border border-green-400/30 bg-green-500/20 px-4 py-3 text-green-200">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-lg border border-red-400/30 bg-red-500/20 px-4 py-3 text-red-200">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>
                    Something went wrong. Please try again or contact me
                    directly.
                  </span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ parallax }) => {
  return (
    <div className="space-y-8">
      {/* Contact details card */}
      <div className="group relative" style={parallax(0.003)}>
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-green-400/70" />
            <span className="ml-auto font-mono text-xs text-white/60">
              contact/info.json
            </span>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              Get In Touch
            </h3>

            <div className="space-y-6">
              <ContactInfoItem
                icon="email"
                label="Email"
                value={CONTACT_INFO.email}
                href={`mailto:${CONTACT_INFO.email}`}
              />
              <ContactInfoItem
                icon="phone"
                label="Phone"
                value={CONTACT_INFO.phone}
                href={`tel:${CONTACT_INFO.phone}`}
              />
              <ContactInfoItem
                icon="location"
                label="Location"
                value={CONTACT_INFO.location}
              />
              <ContactInfoItem
                icon="clock"
                label="Timezone"
                value={CONTACT_INFO.timezone}
              />
            </div>

            <div className="mt-8 p-4 rounded-lg border border-green-400/30 bg-green-500/10">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-200 font-medium">
                  {CONTACT_INFO.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          number="24h"
          label="Response Time"
          parallax={parallax}
          factor={0.006}
        />
        <StatCard
          number="100%"
          label="Client Satisfaction"
          parallax={parallax}
          factor={0.008}
        />
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon, label, value, href }) => {
  const IconComponent = ({ className }) => {
    const iconMap = {
      email: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      phone: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      location: (
        <svg
          className={className}
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
      ),
      clock: (
        <svg
          className={className}
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
      ),
    };

    return iconMap[icon] || null;
  };

  const content = (
    <div className="flex items-center gap-4 group/item">
      <div className="flex-shrink-0 h-12 w-12 rounded-lg border border-white/20 bg-white/10 flex items-center justify-center group-hover/item:border-cyan-400/50 transition-colors">
        <IconComponent className="h-6 w-6 text-white/80 group-hover/item:text-cyan-300 transition-colors" />
      </div>
      <div>
        <p className="text-sm text-white/60">{label}</p>
        <p className="text-white font-medium group-hover/item:text-cyan-300 transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition-transform hover:translate-x-1">
      {content}
    </a>
  ) : (
    <div className="transition-transform hover:translate-x-1">{content}</div>
  );
};

const SocialLinks = ({ parallax }) => {
  return (
    <div className="text-center" style={parallax(0.004)}>
      {/* <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
        <span className="h-2 w-2 rounded-full bg-cyan-400" />
        Connect With Me
      </h3> */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {SOCIAL_LINKS.map((social, index) => (
          <SocialLinkCard key={social.name} social={social} index={index} />
        ))}
      </div>
    </div>
  );
};

const SocialLinkCard = ({ social, index }) => {
  const IconComponent = ({ className }) => {
    const iconMap = {
      github: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      linkedin: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      x: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      email: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      phone: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      download: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    };

    return iconMap[social.icon] || null;
  };

  return (
    <a
      href={social.url}
      target={
        social.name !== "Email" && social.name !== "Phone"
          ? "_blank"
          : undefined
      }
      rel={
        social.name !== "Email" && social.name !== "Phone"
          ? "noopener noreferrer"
          : undefined
      }
      className="group relative block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${social.color} opacity-0 blur-xl transition-opacity group-hover:opacity-40`}
      />

      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105">
        <div className="flex flex-col items-center gap-3">
          <div
            className={`h-12 w-12 rounded-lg ${
              social.icon === "x"
                ? "bg-black border border-white/20"
                : `bg-gradient-to-r ${social.color}`
            } p-3 flex items-center justify-center`}
          >
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-white">{social.name}</h4>
            <p className="text-xs text-white/60 mt-1 font-mono">
              {social.username}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

const StatCard = ({ number, label, parallax, factor }) => {
  return (
    <div className="text-center group" style={parallax(factor)}>
      <div className="relative inline-block">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <div className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-300 to-white bg-clip-text mb-1">
            {number}
          </div>
          <div className="text-white/70 text-xs font-mono">{label}</div>
        </div>
      </div>
    </div>
  );
};

const FloatingContactElements = ({ mousePos }) => {
  const elements = [
    { text: "@", x: 10, y: 20, delay: 0 },
    { text: "📧", x: 90, y: 15, delay: 0.5 },
    { text: "📱", x: 15, y: 80, delay: 1 },
    { text: "💼", x: 85, y: 75, delay: 1.5 },
    { text: "🌐", x: 50, y: 10, delay: 2 },
    { text: "📄", x: 25, y: 60, delay: 2.5 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute text-cyan-400/15 text-2xl select-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate3d(${mousePos.x * (5 + index * 2)}px, ${
              mousePos.y * (3 + index * 2)
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

export default ContactMe;
