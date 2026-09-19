import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import DecoderText from "./decoder-text";

export default function SponsorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showDecoder, setShowDecoder] = useState(false);

  useEffect(() => {
    if (isInView) setShowDecoder(true);
  }, [isInView]);

  // Cursor glow on the terminal frame — transform-driven, no repaint cost.
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const [lit, setLit] = useState(false);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    glowX.set(e.clientX - r.left - 220);
    glowY.set(e.clientY - r.top - 220);
  };

  return (
    <section
      ref={ref}
      id="sponsor"
      className="relative w-full flex flex-col items-center justify-center
                 px-6 py-24 md:py-28 bg-white dark:bg-black
                 text-gray-900 dark:text-white overflow-hidden
                 transition-colors duration-400"
    >
      {/* faint dot grid, reads as "circuitry" without being literal */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.25]
                   [background-image:radial-gradient(currentColor_1px,transparent_1px)]
                   [background-size:28px_28px] text-gray-900/[0.06] dark:text-white/[0.08]"
      />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="inter relative text-[11px] tracking-wide text-cyan-600 dark:text-cyan-400 mb-4"
      >
        git commit -m "keep it open source"
      </motion.p>

      <h2 className="space-grotesk relative text-4xl sm:text-5xl md:text-6xl font-bold
                     tracking-tight text-center px-4 mb-6
                     text-gray-900 dark:text-white transition-colors duration-400">
        {showDecoder ? (
          <DecoderText text="Fuel My Next Commit" speed={30} delay={40} />
        ) : (
          "\u00A0"
        )}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="inter relative text-base sm:text-lg leading-relaxed
                   text-gray-600 dark:text-gray-400 mb-14 max-w-[54ch] text-center px-4
                   transition-colors duration-400"
      >
        My dream is to build powerful, private, and free open-source tools.
        Your support funds my work on projects like{" "}
        <span className="text-gray-900 dark:text-white font-semibold">Rai</span>{" "}
        — new features, and one step closer to that goal.
      </motion.p>

      {/* terminal-chrome frame around the GitHub sponsor card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        onMouseMove={handleMove}
        onMouseEnter={() => setLit(true)}
        onMouseLeave={() => setLit(false)}
        className="relative w-full max-w-[640px] rounded-2xl overflow-hidden
                   border border-black/10 dark:border-white/10
                   bg-[#f6f6f7] dark:bg-[#0d0d0f]"
      >
        <motion.div
          aria-hidden
          style={{ x: glowX, y: glowY, opacity: lit ? 1 : 0 }}
          className="pointer-events-none absolute top-0 left-0 w-[440px] h-[440px]
                     bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_65%)]
                     transition-opacity duration-500"
        />

        {/* title bar */}
        <div className="relative flex items-center gap-2 px-4 py-3
                        border-b border-black/10 dark:border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="inter ml-3 text-[11px] text-gray-500 dark:text-gray-500 truncate">
            gh sponsors --user ranit-dev2004
          </span>
        </div>

        <div className="relative flex justify-center p-4 sm:p-6">
          <iframe
            src="https://github.com/sponsors/Ranit-dev2004/card"
            title="Sponsor Ranit-dev2004"
            height="225"
            width="600"
            style={{ border: 0, maxWidth: "100%", colorScheme: "light" }}
            className="rounded-lg"
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="inter relative mt-6 text-[11px] text-gray-400 dark:text-gray-600"
      >
        Every tier helps — even the smallest one buys a coffee and a bug fix.
      </motion.p>
    </section>
  );
}