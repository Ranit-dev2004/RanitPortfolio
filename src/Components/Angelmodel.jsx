import { useGLTF, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import * as THREE from "three";

export default function AngelModel() {
  const { scene } = useGLTF("/models/cemetery_angel_-_miller.glb");
  const modelRef = useRef();

  // Traverse the scene once on load to optimize materials & disable unnecessary shadow passes
  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Lower texture sampling load while maintaining visual quality
        if (child.material.map) {
          child.material.map.anisotropy = 2;
        }
        // Force materials to use lighter shading calculations
        child.material.precision = "mediump";
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (!modelRef.current) return;

    const t = state.clock.elapsedTime;

    // Y-axis floating animation
    modelRef.current.position.y = -2 + Math.sin(t) * 0.12;

    // Delta-based interpolation ensures consistent animation speed across 60Hz, 120Hz, and mobile displays
    const damping = 1 - Math.exp(-4 * delta);

    const targetX = state.pointer.x * 1.5;
    const targetY = state.pointer.y * 1.0;

    modelRef.current.position.x += (targetX - modelRef.current.position.x) * damping;
    modelRef.current.rotation.y += (targetX * 0.4 - modelRef.current.rotation.y) * damping;
    modelRef.current.rotation.x += (targetY * -0.2 - modelRef.current.rotation.x) * damping;
  });

  return (
    <group>
      <primitive
        ref={modelRef}
        object={scene}
        scale={3.0}
        position={[0, -2, 0]}
        rotation={[0, Math.PI * 0.1, 0]}
      />

      {/* Lightweight directional & ambient lighting */}
      <ambientLight intensity={0.4} />

      {/* Warm key light */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={1.2}
        color="#ffb580"
      />

      {/* Cool fill light */}
      <directionalLight
        position={[-6, 4, 6]}
        intensity={0.6}
        color="#64b5f6"
      />

      {/* Rim light */}
      <spotLight
        position={[0, 10, -10]}
        angle={0.5}
        penumbra={1}
        intensity={0.8}
        color="#ffffff"
      />

      {/* HDRI lighting reflection */}
      <Environment preset="city" />
    </group>
  );
}

// Preload the GLTF binary so there's no frame drop when mounting
useGLTF.preload("/models/cemetery_angel_-_miller.glb");