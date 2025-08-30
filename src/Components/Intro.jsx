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
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:items-end md:px-20 text-white text-center md:text-right">
      {/* Big Name */}
      <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold libertinus tracking-tight mb-4 md:mb-6">
        <DecoderText text="RANIT SAHA" delay={300} speed={25} />
      </div>

      {/* Rotating roles */}
      <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold libertinus text-gray-300">
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
