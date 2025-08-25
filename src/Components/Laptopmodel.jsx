// LaptopModel.jsx
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

export default function LaptopModel() {
  const gltf = useGLTF("/models/macbook-pro.glb"); // public/models/macbook-pro.glb
  const groupRef = useRef();
  const lidRef = useRef();
  const [open, setOpen] = useState(false);

  // Automatically find lid and body from GLB
  const [body, setBody] = useState(null);

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name.toLowerCase().includes("lid")) lidRef.current = child;
          if (child.name.toLowerCase().includes("body")) setBody(child);
        }
      });
    }
  }, [gltf]);

  // Animate lid
  useFrame(() => {
    if (lidRef.current) {
      const targetRotation = open ? -Math.PI / 2.5 : 0;
      lidRef.current.rotation.x += (targetRotation - lidRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={1.5} position={[0, 0, 0]}>
      {body && <primitive object={body} />}
      {lidRef.current && <primitive object={lidRef.current} />}

      {/* Invisible clickable mesh to toggle lid */}
      <mesh
        onClick={() => setOpen(!open)}
        visible={false}
        position={[0, 0, 0]}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
}

// Preload model
useGLTF.preload("/models/macbook-pro.glb");
