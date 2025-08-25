import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import LaptopModel from "../Components/Laptopmodel";

export default function Homepage() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <LaptopModel />
      </Suspense>
    </Canvas>
  );
}
