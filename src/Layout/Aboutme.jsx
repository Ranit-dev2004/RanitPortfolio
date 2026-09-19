import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import DecoderText from "../Components/decoder-text";
import { assets } from "../assets";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showDecoder, setShowDecoder] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (isInView) setShowDecoder(true);
  }, [isInView]);

  // Scroll Parallax Updates
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const frameY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const kanaY = useTransform(scrollYProgress, [0, 1], [90, -90]);

  // Interactive 3D Card Tilt Effect
  const tiltX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  const handleMove = (e) => {
    if (prefersReduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    tiltX.set(((e.clientY - r.top) / r.height - 0.5) * -12);
    tiltY.set(((e.clientX - r.left) / r.width - 0.5) * 12);
  };

  const handleLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      ref={ref}
      id="details"
      className="relative w-full min-h-screen bg-white dark:bg-neutral-950
                 text-gray-700 dark:text-gray-300 flex items-center justify-center
                 px-6 md:px-12 py-28 overflow-hidden transition-colors duration-500"
    >
      {/* Background Ambient Glow Effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-10
                   w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[100px]"
      />

      {/* Decorative Hairline Grid Accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden md:block
                   w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-neutral-800 to-transparent"
      />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
        {/* Content Column */}
        <div className="relative z-10 order-2 md:order-1">
          {/* Section Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                       bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 dark:border-cyan-400/20
                       text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Discover My Story
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-grotesk relative inline-block text-4xl sm:text-5xl md:text-6xl
                       font-extrabold tracking-tight text-gray-900 dark:text-white mb-8"
          >
            {showDecoder ? (
              <DecoderText text="A Journey Within" speed={30} delay={80} />
            ) : (
              "\u00A0"
            )}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full
                         bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-indigo-500"
            />
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="inter max-w-[56ch] space-y-6 text-base sm:text-lg leading-relaxed"
          >
            <p>
              Hey there!{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                I'm Ranit
              </span>{" "}
              — a developer and designer passionate about creating meaningful digital experiences. 
              To me, every project is a balance of aesthetics and functionality. My work combines{" "}
              <Accent>design</Accent>, <Accent>creative movement</Accent>, and modern{" "}
              <Accent>frontend architecture</Accent> to turn complex ideas into clean, engaging solutions.
            </p>

            <p className="border-l-2 border-cyan-500 dark:border-cyan-400 pl-5 italic text-gray-600 dark:text-gray-400">
              Beyond code, I draw inspiration from art, music, and diverse perspectives. 
              I believe great products don't just solve problems — they leave a lasting impression.
            </p>

            {/* Interactive Call-To-Action Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3
                           px-8 py-4 rounded-full font-semibold text-sm sm:text-base
                           text-white bg-gray-900 dark:bg-white dark:text-gray-900
                           shadow-lg shadow-gray-900/10 dark:shadow-white/5
                           hover:bg-cyan-600 dark:hover:bg-cyan-400 dark:hover:text-black
                           transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Share your thoughts with me</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Portrait Visual Column */}
        <div
          className="relative order-1 md:order-2 flex justify-center"
          style={{ perspective: "1200px" }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          {/* Decorative Offset Outer Frame */}
          <motion.div
            aria-hidden
            style={{ y: frameY }}
            className="pointer-events-none absolute top-4 -right-2 sm:right-4
                       w-[min(82%,340px)] h-[90%] rounded-3xl
                       border border-cyan-500/30 dark:border-cyan-400/20 bg-cyan-500/5 backdrop-blur-3xl"
          />

          {/* Interactive Tilt Container */}
          <motion.div
            style={{ y: imageY, rotateX: tiltX, rotateY: tiltY }}
            className="relative z-10 will-change-transform group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              <img
                src={assets.MyImage}
                alt="Ranit Saha"
                loading="lazy"
                className="max-h-[420px] sm:max-h-[520px] w-full max-w-sm sm:max-w-md object-cover
                           scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0
                           bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"
              />
            </div>
          </motion.div>

          {/* Kanji Decorative Background Watermark */}
          <motion.span
            aria-hidden
            style={{ y: kanaY }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="space-grotesk pointer-events-none select-none absolute
                       -bottom-10 right-0 md:-right-8 md:bottom-6
                       text-[5rem] sm:text-[7rem] md:text-[8rem] leading-none
                       font-black tracking-tighter text-black/5 dark:text-white/5
                       md:[writing-mode:vertical-rl] transition-colors duration-500"
          >
            ミライ
          </motion.span>
        </div>
      </div>
    </section>
  );
}

function Accent({ children }) {
  return (
    <span className="text-cyan-600 dark:text-cyan-400 font-semibold underline decoration-cyan-500/30 dark:decoration-cyan-400/30 underline-offset-4">
      {children}
    </span>
  );
}