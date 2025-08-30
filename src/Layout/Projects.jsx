import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import DecoderText from "../Components/decoder-text";

const projects = [
  {
    title: "Jodiac",
    desc: "Worked on developing an e-commerce app concept where users can upload their own clothing designs. My role focused on building the app structure and front-end flow.",
    link: "https://jodiac-7ahm.vercel.app/",
  },
  {
    title: "Datatreya",
    desc: "A personal initiative aiming to create a platform that connects startups and investors. I contributed by designing the MVP and shaping the idea into a structured project.",
    link: "http://datatreya.com/",
  },
  {
    title: "Vibe On Top",
    desc: "Worked on building an online presence for a fashion brand. My contribution included developing the digital side of the brand — from structuring the store to ensuring smooth customer interaction.",
    link: "https://www.vibeontop.com/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 90, damping: 12 },
  }),
};

// 🎯 Glass 3D Tilt Card Component
function GlassCard({ project, i }) {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const rotateX = (y / card.height - 0.5) * -20;
    const rotateY = (x / card.width - 0.5) * 20;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      key={i}
      custom={i}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl transition-all duration-300"
    >
      <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
      <div className="w-12 h-1 bg-gradient-to-r from-white/40 to-transparent mx-auto mb-4 rounded" />
      <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
      <motion.a
        href={project.link}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-5 py-2 border border-gray-600 text-gray-200 rounded-lg font-medium hover:bg-white hover:text-black transition"
      >
        View Project
      </motion.a>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 -z-10" />
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showDecoder, setShowDecoder] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShowDecoder(true);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="projects"
      className="w-full min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-16 text-center"
      >
        {showDecoder ? <DecoderText text="My Projects" delay={10} speed={30} /> : ""}
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
        {projects.map((p, i) => (
          <GlassCard key={i} project={p} i={i} />
        ))}
      </div>
    </section>
  );
}
