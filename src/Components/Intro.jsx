import React, { useState, useEffect } from "react";
import DecoderText from "./decoder-text"; // adjust path

const roles = [
  "Software Developer",
  "UI/UX Innovator",
  "Entrepreneur",
  "Tech Educator",
];


export default function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500); // change every 3.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute right-20 top-1/2 -translate-y-1/2 text-white text-right">
      {/* Big Name */}
      <div className="text-7xl md:text-8xl font-extrabold libertinus tracking-tight mb-6">
        <DecoderText text="RANIT SAHA" delay={300} speed={25} />
      </div>

      {/* Rotating roles (smaller) */}
      <div className="text-5xl md:text-3xl font-bold libertinus text-gray-300">
        <DecoderText
          key={roles[index]} // re-render to animate
          text={roles[index]}
          delay={300}
          speed={30}
        />
      </div>
    </div>
  );
}
