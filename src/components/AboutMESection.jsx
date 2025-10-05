import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const AboutMeSection = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const particlesRef = useRef(null);
  const geometryObjectsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef();
  const clockRef = useRef(new THREE.Clock());

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Size to container instead of window for better responsiveness
    const { width: initW, height: initH } =
      mountRef.current.getBoundingClientRect();
    renderer.setSize(initW || window.innerWidth, initH || window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Camera position
    camera.position.z = 6;

    // Create network-like particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = (Math.random() - 0.5) * 15;
      positions[i + 2] = (Math.random() - 0.5) * 8;

      velocities[i] = (Math.random() - 0.5) * 0.015;
      velocities[i + 1] = (Math.random() - 0.5) * 0.015;
      velocities[i + 2] = (Math.random() - 0.5) * 0.01;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4f46e5,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = {
      mesh: particles,
      geometry: particleGeometry,
      velocities: velocities,
    };

    // Create floating code-like geometric objects
    const geometries = [
      new THREE.BoxGeometry(0.3, 0.3, 0.3),
      new THREE.ConeGeometry(0.2, 0.6, 6),
      new THREE.CylinderGeometry(0.15, 0.15, 0.5, 8),
      new THREE.SphereGeometry(0.2, 8, 6),
      new THREE.TorusGeometry(0.2, 0.08, 8, 16),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0x6366f1,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
    ];

    geometryObjectsRef.current = [];

    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 12;
      mesh.position.y = (Math.random() - 0.5) * 8;
      mesh.position.z = (Math.random() - 0.5) * 6;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;

      mesh.userData = {
        initialX: mesh.position.x,
        initialY: mesh.position.y,
        initialZ: mesh.position.z,
        rotationSpeed: 0.5 + Math.random() * 0.5,
        floatSpeed: 0.3 + Math.random() * 0.4,
        floatAmplitude: 0.2 + Math.random() * 0.3,
      };

      scene.add(mesh);
      geometryObjectsRef.current.push(mesh);
    }

    // Mouse move handler
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Resize handler (container-based)
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current)
        return;
      const { width, height } = mountRef.current.getBoundingClientRect();
      if (width > 0 && height > 0) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    // Observe container size changes for responsive canvas
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const elapsedTime = clockRef.current.getElapsedTime();

      // Update particles
      if (particlesRef.current && particlesRef.current.geometry) {
        const positions =
          particlesRef.current.geometry.attributes.position.array;
        const velocities = particlesRef.current.velocities;

        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1];
          positions[i + 2] += velocities[i + 2];

          // Boundary check
          if (Math.abs(positions[i]) > 8) {
            velocities[i] *= -0.9;
            positions[i] = Math.sign(positions[i]) * 8;
          }
          if (Math.abs(positions[i + 1]) > 8) {
            velocities[i + 1] *= -0.9;
            positions[i + 1] = Math.sign(positions[i + 1]) * 8;
          }
          if (Math.abs(positions[i + 2]) > 4) {
            velocities[i + 2] *= -0.9;
            positions[i + 2] = Math.sign(positions[i + 2]) * 4;
          }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;

        // Subtle particle rotation
        particlesRef.current.mesh.rotation.x =
          Math.sin(elapsedTime * 0.1) * 0.1;
        particlesRef.current.mesh.rotation.y = elapsedTime * 0.05;
      }

      // Animate geometric objects
      geometryObjectsRef.current.forEach((mesh, index) => {
        if (mesh && mesh.userData) {
          // Rotation
          mesh.rotation.x += 0.005 * mesh.userData.rotationSpeed;
          mesh.rotation.y += 0.008 * mesh.userData.rotationSpeed;
          mesh.rotation.z += 0.003 * mesh.userData.rotationSpeed;

          // Mouse interaction (subtle)
          const targetX = mesh.userData.initialX + mouseRef.current.x * 0.5;
          const targetY = mesh.userData.initialY + mouseRef.current.y * 0.5;

          mesh.position.x += (targetX - mesh.position.x) * 0.01;
          mesh.position.y += (targetY - mesh.position.y) * 0.01;

          // Floating effect
          const floatX =
            Math.sin(elapsedTime * mesh.userData.floatSpeed + index) *
            mesh.userData.floatAmplitude;
          const floatY =
            Math.cos(elapsedTime * mesh.userData.floatSpeed * 0.7 + index) *
            mesh.userData.floatAmplitude;

          mesh.position.x =
            mesh.userData.initialX + floatX + mouseRef.current.x * 0.1;
          mesh.position.y =
            mesh.userData.initialY + floatY + mouseRef.current.y * 0.1;
        }
      });

      // Subtle camera movement
      if (cameraRef.current) {
        camera.position.x +=
          (mouseRef.current.x * 0.1 - camera.position.x) * 0.02;
        camera.position.y +=
          (mouseRef.current.y * 0.1 - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    const startAnimation = () => {
      animate();
      setIsLoaded(true);
    };

    setTimeout(startAnimation, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Cleanup observers & events
      try {
        // ResizeObserver might already be disconnected
        resizeObserver.disconnect();
      } catch {}
      window.removeEventListener("mousemove", handleMouseMove);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      if (particlesRef.current?.geometry) {
        particlesRef.current.geometry.dispose();
      }

      geometryObjectsRef.current.forEach((mesh) => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) mesh.material.dispose();
      });

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (mountRef.current && rendererRef.current.domElement) {
          try {
            mountRef.current.removeChild(rendererRef.current.domElement);
          } catch (e) {
            console.log("Canvas already removed");
          }
        }
      }
    };
  }, []);

  const skills = [
    {
      name: "Frontend Development",
      level: 95,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Backend Development",
      level: 88,
      color: "from-green-500 to-emerald-400",
    },
    { name: "UI/UX Design", level: 85, color: "from-purple-500 to-pink-400" },
    {
      name: "DevOps & Cloud",
      level: 78,
      color: "from-orange-500 to-yellow-400",
    },
    {
      name: "Mobile Development",
      level: 82,
      color: "from-indigo-500 to-blue-400",
    },
  ];

  const experiences = [
    {
      year: "2024 - Present",
      role: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
    },
    {
      year: "2022 - 2024",
      role: "Full Stack Developer",
      company: "StartupXYZ",
    },
    {
      year: "2020 - 2022",
      role: "Frontend Developer",
      company: "WebSolutions Ltd.",
    },
    {
      year: "2019 - 2020",
      role: "Junior Developer",
      company: "CodeCraft Agency",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900">
      {/* Three.js Canvas */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0"
        style={{ background: "transparent" }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-[70vh] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div
          className={`max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Side - Image and Quick Info */}
          <div className="text-center lg:text-left">
            {/* Profile Image */}
            <div className="relative mb-8 inline-block">
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-indigo-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  {/* Replace this div with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl text-gray-400">
                    👨‍💻
                  </div>
                  {/* Uncomment and use this for actual image:
                  <img 
                    src="/path-to-your-image.jpg" 
                    alt="Your Name" 
                    className="w-full h-full object-cover rounded-full"
                  />
                  */}
                </div>
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-indigo-500 rounded-full animate-ping opacity-40"></div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
              <div className="text-center p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                <div className="text-lg sm:text-2xl font-bold text-cyan-400">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                <div className="text-lg sm:text-2xl font-bold text-purple-400">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Projects Done
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                <div className="text-lg sm:text-2xl font-bold text-indigo-400">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="text-cyan-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                with over 5 years of experience crafting digital solutions that
                bridge creativity and functionality. My journey in tech has been
                driven by an insatiable curiosity and love for solving complex
                problems.
              </p>
              <p>
                From building scalable web applications to creating immersive
                user experiences, I specialize in modern technologies like{" "}
                <span className="text-purple-400 font-semibold">
                  React, Node.js, Python, and Three.js
                </span>
                . I believe in writing clean, maintainable code that not only
                works but tells a story.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group cursor-pointer"
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`font-medium transition-colors duration-300 ${
                          activeSkill === index
                            ? "text-cyan-400"
                            : "text-gray-300"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isLoaded ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 200}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 rounded-lg bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-300 ${
                      isLoaded
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <div className="font-semibold text-white">{exp.role}</div>
                      <div className="text-cyan-400 text-sm">{exp.company}</div>
                    </div>
                    <div className="text-gray-400 text-sm">{exp.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse opacity-70"></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse opacity-60"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse opacity-50"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  );
};

export default AboutMeSection;
