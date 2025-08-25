import { useGLTF, ContactShadows, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function AngelModel() {
  const { scene } = useGLTF("/models/cemetery_angel_-_miller.glb");
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.elapsedTime;

      // floating animation
      modelRef.current.position.y = -2 + Math.sin(t) * 0.12;

      // smooth follow mouse (pointer.x and pointer.y are between -1 and 1)
      const mouseX = state.pointer.x * 2; // scale sensitivity
      const mouseY = state.pointer.y * 1.5;

      // interpolate for smoothness
      modelRef.current.position.x += (mouseX - modelRef.current.position.x) * 0.05;
      modelRef.current.rotation.y += (mouseX * 0.5 - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.x += (mouseY * -0.3 - modelRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group>
      {/* Angel model */}
      <primitive
        ref={modelRef}
        object={scene}
        scale={3.0}
        position={[0, 10, 0]}
        rotation={[0, Math.PI * 0.1, 0]}
        castShadow
        receiveShadow
      />

      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.65}
        scale={25}
        blur={4.5}
        far={6}
        color="#000000"
      />

      {/* Ambient base light */}
      <ambientLight intensity={0.25} />

      {/* Warm key light */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={1.4}
        color="#ffb580"
        castShadow
      />

      {/* Cool fill light */}
      <directionalLight
        position={[-6, 4, 6]}
        intensity={0.8}
        color="#64b5f6"
      />

      {/* Rim light */}
      <spotLight
        position={[0, 10, -10]}
        angle={0.5}
        penumbra={1}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />

      {/* HDRI environment */}
      <Environment preset="sunset" />
    </group>
  );
}

export default AngelModel;
