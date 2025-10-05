import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const PortfolioHero = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    console.log("Setting up Three.js scene...");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      console.log("WebGL renderer created successfully");
    } catch (error) {
      console.error("Failed to create WebGL renderer:", error);
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      console.log("Renderer canvas appended to mount point");
    } else {
      console.error("Mount ref is null");
      return;
    }

    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Camera position
    camera.position.z = 15;
    console.log("Camera positioned at z:", camera.position.z);

    // Hero Section - Floating Particles with Galaxy Effect
    const createHeroAnimation = () => {
      const scene = sceneRef.current;
      const camera = cameraRef.current;
      const renderer = rendererRef.current;

      console.log(
        "Animation setup - Scene:",
        scene,
        "Camera:",
        camera,
        "Renderer:",
        renderer
      );

      if (!scene || !camera || !renderer) {
        console.error("Missing Three.js components");
        return;
      }

      // Clear previous objects
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }

      // Create particle system with more visible settings
      const particlesCount = 1000; // Reduced for better performance
      const positions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        // Position particles in a sphere around origin
        positions[i] = (Math.random() - 0.5) * 10; // x
        positions[i + 1] = (Math.random() - 0.5) * 10; // y
        positions[i + 2] = (Math.random() - 0.5) * 10; // z

        // Set bright colors
        colors[i] = Math.random() * 0.5 + 0.5; // r
        colors[i + 1] = Math.random() * 0.5 + 0.5; // g
        colors[i + 2] = Math.random() * 0.5 + 0.5; // b
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.3, // Larger size for visibility
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: false, // Keep consistent size regardless of distance
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      console.log(
        "Particles created:",
        particlesCount,
        "Added to scene:",
        particles
      );

      // Add brighter ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      // Test with a simple cube to ensure rendering works
      const testGeometry = new THREE.BoxGeometry(1, 1, 1);
      const testMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      });
      const testCube = new THREE.Mesh(testGeometry, testMaterial);
      testCube.position.set(0, 0, 0);
      scene.add(testCube);
      console.log("Test cube added");

      let time = 0;
      let frameCount = 0;
      const animate = () => {
        // Check if component is still mounted
        if (!mountRef.current) {
          console.log("Component unmounted, stopping animation");
          return;
        }

        time += 0.01;
        frameCount++;

        // Log every 60 frames (about once per second at 60fps)
        if (frameCount % 60 === 0) {
          console.log("Animation running, frame:", frameCount, "time:", time);
        }

        // Rotate particles
        particles.rotation.x = time * 0.2;
        particles.rotation.y = time * 0.1;

        // Rotate test cube
        testCube.rotation.x = time;
        testCube.rotation.y = time;

        // Update particle positions
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(time + positions[i]) * 0.001;
        }
        particles.geometry.attributes.position.needsUpdate = true;

        try {
          renderer.render(scene, camera);
          animationRef.current = requestAnimationFrame(animate);
        } catch (error) {
          console.error("Render error:", error);
        }
      };

      console.log("Starting animation loop");
      animate();
    };

    // Resize handler
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Start animation with a small delay to ensure everything is initialized
    const startAnimation = () => {
      console.log("Starting hero animation...");
      createHeroAnimation();
      setIsLoaded(true);
    };

    setTimeout(startAnimation, 100);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      // Dispose of Three.js objects
      if (sceneRef.current) {
        sceneRef.current.children.forEach((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (mountRef.current && rendererRef.current.domElement) {
          try {
            mountRef.current.removeChild(rendererRef.current.domElement);
          } catch (e) {
            // Element might already be removed
            console.log("Canvas already removed");
          }
        }
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Three.js Canvas */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0"
        style={{ background: "transparent" }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div
          className={`text-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Heading */}
          <h1 className="mb-6 text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
            John Doe
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Full Stack Developer & Creative Technologist
          </p>

          {/* Description */}
          <p className="mb-12 text-gray-400 max-w-2xl mx-auto px-4 text-lg leading-relaxed">
            Crafting digital experiences with cutting-edge technology and
            innovative design. Transforming ideas into interactive reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-8 py-4 border-2 border-gray-600 rounded-full text-gray-300 font-semibold text-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
              Get In Touch
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Floating badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-70">
            {["React", "Three.js", "Node.js", "TypeScript"].map(
              (tech, index) => (
                <div
                  key={tech}
                  className={`px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm transition-all duration-1000 hover:border-cyan-400 hover:text-cyan-400 ${
                    isLoaded
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-gray-400 animate-bounce">
          <span className="text-sm mb-2 tracking-wide">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default PortfolioHero;
