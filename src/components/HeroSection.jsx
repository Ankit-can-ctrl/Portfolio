import React, { useEffect, useRef, useState } from "react";

const keywords = [
  "const",
  "let",
  "function",
  "return",
  "async",
  "await",
  "try",
  "catch",
  "if",
  "else",
  "for",
  "while",
  "class",
  "new",
  "import",
  "export",
];

const codeSnippets = [
  "console.log('Hello, world!')",
  "const sum = (a, b) => a + b",
  "await fetch('/api')",
  "JSON.parse('{}')",
  "Array.from({length: 5})",
  "Math.random().toString(36)",
];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);
  const containerRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse parallax + playful cursor trail of code tokens
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      // spawn a floating token
      const token = document.createElement("span");
      token.textContent = keywords[Math.floor(Math.random() * keywords.length)];
      token.className =
        "pointer-events-none fixed text-xs md:text-sm font-mono text-cyan-400/60 select-none will-change-transform";
      const startX = e.clientX + (Math.random() * 16 - 8);
      const startY = e.clientY + (Math.random() * 16 - 8);
      token.style.left = `${startX}px`;
      token.style.top = `${startY}px`;
      token.style.transform = "translate3d(0,0,0)";
      document.body.appendChild(token);
      trailRef.current.push(token);

      // animate upward + fade
      const driftX = (Math.random() - 0.5) * 40;
      const driftY = -40 - Math.random() * 20;
      const duration = 800 + Math.random() * 600;
      const start = performance.now();
      const animate = (t) => {
        const p = Math.min(1, (t - start) / duration);
        token.style.opacity = String(1 - p);
        token.style.transform = `translate(${driftX * p}px, ${driftY * p}px)`;
        if (p < 1) requestAnimationFrame(animate);
        else {
          token.remove();
          trailRef.current = trailRef.current.filter((el) => el !== token);
        }
      };
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typewriter effect cycling fun codey taglines
  useEffect(() => {
    const text = codeSnippets[snippetIndex % codeSnippets.length];
    setTypedText("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTypedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setTimeout(
          () => setSnippetIndex((v) => (v + 1) % codeSnippets.length),
          1200
        );
      }
    }, 45);
    return () => clearInterval(id);
  }, [snippetIndex]);

  // Parallax layers react to cursor
  const parallax = (factor) => ({
    transform: `translate3d(${
      (cursorPos.x - window.innerWidth / 2) * factor
    }px, ${(cursorPos.y - window.innerHeight / 2) * factor}px, 0)`,
  });

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* Main content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div
          className={`text-center max-w-3xl ${
            mounted ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-widest uppercase text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Live coding</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent">
              Building delightful code
            </span>
          </h1>

          <p className="mt-4 font-mono text-cyan-300/80 text-base md:text-lg">
            <span className="text-cyan-400">$</span> {typedText}
            <span className="ml-1 inline-block w-3 h-5 align-[-2px] bg-cyan-300 animate-pulse" />
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            {"<>".split("").map((ch, i) => (
              <span
                key={i}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-sm text-white/80"
                style={parallax(i % 2 === 0 ? 0.02 : -0.02)}
              >
                {ch}
              </span>
            ))}
            <span
              className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-sm text-white/80"
              style={parallax(0.018)}
            >
              {"{ }"}
            </span>
            <span
              className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-sm text-white/80"
              style={parallax(-0.016)}
            >
              ()
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-6 py-3 font-medium text-black shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.6)]"
            >
              <span>View Projects</span>
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Floating draggable badge */}
      <DraggableBadge />
    </section>
  );
};

const DraggableBadge = () => {
  const ref = useRef(null);
  const [drag, setDrag] = useState({
    active: false,
    x: 24,
    y: 24,
    dx: 0,
    dy: 0,
  });

  useEffect(() => {
    const handleMove = (e) => {
      if (!drag.active || !ref.current) return;
      setDrag((d) => ({ ...d, dx: e.clientX - d.x, dy: e.clientY - d.y }));
    };
    const handleUp = () =>
      setDrag((d) => ({
        ...d,
        active: false,
        x: d.x + d.dx,
        y: d.y + d.dy,
        dx: 0,
        dy: 0,
      }));
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [drag.active, drag.x, drag.y]);

  return (
    <button
      ref={ref}
      onMouseDown={(e) =>
        setDrag((d) => ({
          ...d,
          active: true,
          x: e.clientX - d.dx,
          y: e.clientY - d.dy,
        }))
      }
      className="fixed z-20 select-none rounded-full border border-white/15 bg-white/10 px-4 py-2 font-mono text-xs text-white/80 backdrop-blur-md shadow-lg active:cursor-grabbing cursor-grab"
      style={{ left: drag.x + drag.dx, top: drag.y + drag.dy }}
    >
      drag me · npm i cool-ideas
    </button>
  );
};

export default HeroSection;
