import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import AngelModel from "../Components/Angelmodel";
import Navbar from "../Layout/Navbar";
import Intro from "../Components/Intro";
import ProjectsSection from "../Layout/Projects";
import AboutMe from "../Layout/Aboutme";
import Footer from "../Layout/Footer";
import SponsorSection from "../Components/SponsorSection";

export default function Homepage() {
  const spotTarget = useRef();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[var(--bg-primary)] transition-colors duration-400">
      <Navbar />

      {/* Hero Section containing 3D Canvas */}
      <section className="relative w-full h-screen overflow-hidden">
        <Intro />

        {/* 3D Canvas Wrapper Container */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <Canvas
            // Caps pixel density at 1.5x to prevent lag on 4K / Retina displays
            dpr={[1, 1.5]}
            camera={{
              position: [0, 2, 10],
              fov: 45,
              near: 0.1,
              far: 100,
            }}
            gl={{
              antialias: false,
              alpha: true,
              powerPreference: "high-performance",
              stencil: false,
              depth: true,
            }}
          >
            {/* Dynamic ambient light */}
            <ambientLight
              intensity={isDark ? 0.35 : 1.2}
              color={isDark ? "#404040" : "#ffffff"}
            />

            {/* Key Light (Shadow maps removed for GPU speed) */}
            <directionalLight
              position={[10, 15, 5]}
              intensity={isDark ? 0.8 : 1.5}
              color="#ffffff"
            />

            {/* Accent SpotLight */}
            <spotLight
              position={[0, 10, 8]}
              angle={0.35}
              penumbra={0.5}
              intensity={isDark ? 3 : 1.5}
              color="#ffffff"
              target={spotTarget.current}
            />
            <object3D ref={spotTarget} position={[0, 3, 0]} />

            <Suspense fallback={null}>
              <AngelModel />
            </Suspense>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              target={[0, 3, 0]}
              autoRotate={false}
              enableDamping={true}
              dampingFactor={0.05}
              rotateSpeed={0.6}
            />
          </Canvas>
        </div>
      </section>

      {/* Page Sections */}
      <ProjectsSection />
      <AboutMe />
      <SponsorSection />
      <Footer />
    </div>
  );
}