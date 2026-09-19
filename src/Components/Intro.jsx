import React, { useState, useEffect } from "react";
import DecoderText from "./decoder-text";

const roles = [
  "Software Developer",
  "UI/UX Innovator",
  "Entrepreneur",
];

export default function Intro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:items-end md:px-20 text-center md:text-right pointer-events-none">
      <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold cormorant tracking-tight mb-4 md:mb-6 text-gray-900 dark:text-white transition-colors duration-400">
        <DecoderText text="Ranit Saha" delay={300} speed={25} />
      </div>

      <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold libertinus text-gray-600 dark:text-gray-300 transition-colors duration-400">
        <DecoderText
          key={roles[index]}
          text={roles[index]}
          delay={300}
          speed={30}
        />
      </div>
    </div>
  );
}