import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import AngelModel from "../Components/Angelmodel";
import Navbar from "../Layout/Navbar";
import Intro from "../Components/Intro";
import ProjectsSection from "../Layout/Projects";
import * as THREE from "three";
import AboutMe from "../Layout/Aboutme";

export default function Homepage() {
  const spotTarget = useRef();

  return (
    <div className="w-full h-screen bg-black">
      <Navbar />
      <Intro />
      <Canvas
        camera={{
          position: [0, 2, 10],
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        {/* Softer ambient so spotlight is visible */}
        <ambientLight intensity={0.15} color="#404040" />

        {/* Fill directional light */}
        <directionalLight
          position={[10, 15, 5]}
          intensity={0.8}
          color="#ffffff"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* Spotlight that points at target */}
        <spotLight
          position={[0, 10, 8]}   // above & front
          angle={0.35}
          penumbra={0.5}
          intensity={4}           // brighter
          color="#ffffff"
          castShadow
          shadow-mapSize={[2048, 2048]}
          target={spotTarget.current}
        />

        {/* Invisible target for spotlight */}
        <object3D ref={spotTarget} position={[0, 3, 0]} />

        {/* Angel model */}
        <Suspense fallback={null}>
          <AngelModel />
        </Suspense>

        {/* Orbit controls */}
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
      <ProjectsSection />
      <AboutMe  />
    </div>
  );
}
