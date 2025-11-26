import React from "react";

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
  return (
    <section
      id="contact"
      className="relative w-full text-white overflow-hidden py-12 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Compact Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest uppercase text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Contact</span>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </section>
  );
};

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {SOCIAL_LINKS.map((social) => (
        <SocialLinkCard key={social.name} social={social} />
      ))}
    </div>
  );
};

const SocialLinkCard = ({ social }) => {
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
    >
      <div
        className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${social.color} opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30`}
      />

      <div className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all group-hover:border-white/20 group-hover:bg-white/10">
        <div className="flex flex-col items-center gap-2">
          <div
            className={`h-10 w-10 rounded-lg ${
              social.icon === "x"
                ? "bg-black border border-white/20"
                : `bg-gradient-to-r ${social.color}`
            } p-2 flex items-center justify-center`}
          >
            <IconComponent className="h-5 w-5 text-white" />
          </div>
          <div className="text-center">
            <h4 className="text-sm font-semibold text-white">{social.name}</h4>
            <p className="text-xs text-white/50 mt-0.5 font-mono truncate max-w-full">
              {social.username}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ContactMe;
