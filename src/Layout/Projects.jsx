import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { useState, useRef, useEffect, useLayoutEffect, memo } from "react";
import DecoderText from "../Components/decoder-text";

const projects = [
  {
    title: "Jodiac",
    year: "2025",
    role: "Front-end / App structure",
    desc: "An e-commerce concept where people upload their own clothing designs. I built the app structure and the front-end flow.",
    link: "https://jodiac-7ahm.vercel.app/",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Datatreya",
    year: "2025",
    role: "MVP design / Product",
    desc: "A personal initiative connecting startups with investors. I designed the MVP and shaped a loose idea into a structured project.",
    link: "https://dattatyeaweb.vercel.app/",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Vibe On Top",
    year: "2024",
    role: "Storefront / Digital",
    desc: "The online presence for a fashion brand. I built the digital side, from structuring the store to the customer flow.",
    link: "https://www.vibeontop.com/",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Rai",
    year: "2025",
    role: "AI Assistant / Desktop",
    desc: "A local AI assistant built around LM Studio. Rai can understand voice commands, respond naturally, and interact with the computer through local tools.",
    link: "https://github.com/Ranit-dev2004/Rai.git",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "InvestHind",
    year: "2026",
    role: "Product / Investor Platform",
    desc: "An investor discovery platform designed to help founders present their ideas, track milestones and connect with potential investors, mentors and experts.",
    link: "https://investhind.com/",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  },
];

const DeckCard = memo(function DeckCard({ project, i, count, scrollYProgress }) {
  const center = count > 1 ? i / (count - 1) : 0.5;
  const step = count > 1 ? 1 / (count - 1) : 1;
  const range = [center - step, center, center + step];

  const scrollRotateY = useTransform(scrollYProgress, range, [18, 0, -18]);
  const scale = useTransform(scrollYProgress, range, [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, range, [0.4, 1, 0.4]);

  const numeralX = useTransform(scrollYProgress, range, [80, 0, -80]);
  const titleX = useTransform(scrollYProgress, range, [30, 0, -30]);
  const bodyX = useTransform(scrollYProgress, range, [15, 0, -15]);

  const tiltX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const rotateY = useTransform([scrollRotateY, tiltY], ([s, t]) => s + t);

  const [lit, setLit] = useState(false);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(350px circle at ${glowX}% ${glowY}%, rgba(34,211,238,0.22), transparent 70%)`;

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    tiltX.set((py - 0.5) * -10);
    tiltY.set((px - 0.5) * 10);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const handleLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    setLit(false);
  };

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseEnter={() => setLit(true)}
      onMouseLeave={handleLeave}
      style={{
        scale,
        opacity,
        rotateX: tiltX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative shrink-0 w-[85vw] max-w-[460px] h-[480px]
                 rounded-[28px] border border-black/15 dark:border-white/10
                 bg-gray-900 shadow-2xl overflow-hidden transform-gpu transition-all duration-500"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-50 dark:opacity-40 
                     transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>
      <motion.div
        aria-hidden
        style={{ backgroundImage: glow, opacity: lit ? 1 : 0 }}
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
      />

      <motion.span
        aria-hidden
        style={{ x: numeralX, transform: "translateZ(-30px)" }}
        className="space-grotesk pointer-events-none absolute -bottom-8 -right-2 z-10
                   text-[11rem] leading-none font-bold tracking-tighter
                   text-white/10 select-none"
      >
        {i + 1}
      </motion.span>

      <div className="relative h-full flex flex-col justify-end p-8 z-20">
        <motion.p
          style={{ x: bodyX }}
          className="inter text-xs tracking-wider uppercase font-semibold text-cyan-400 mb-auto"
        >
          {project.year} &nbsp;/&nbsp; {project.role}
        </motion.p>

        <motion.h3
          style={{ x: titleX, transform: "translateZ(40px)" }}
          className="space-grotesk text-3xl sm:text-4xl font-bold tracking-tight
                     text-white mb-3"
        >
          {project.title}
        </motion.h3>

        <motion.p
          style={{ x: bodyX }}
          className="inter text-sm leading-relaxed text-gray-200 max-w-[38ch] mb-6"
        >
          {project.desc}
        </motion.p>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{ transform: "translateZ(30px)" }}
          className="inter self-start px-6 py-2.5 rounded-full font-medium text-sm
                     border border-white/30 text-white bg-white/10 backdrop-blur-md
                     hover:bg-white hover:text-black
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 
                     transition-colors duration-200"
        >
          Visit {project.title}
        </motion.a>
      </div>
    </motion.article>
  );
});

function StaticDeck() {
  return (
    <div className="flex flex-col gap-6 px-4 py-8 w-full max-w-lg mx-auto">
      {projects.map((p) => (
        <article
          key={p.title}
          className="relative w-full rounded-[24px] p-6 sm:p-8 overflow-hidden
                     border border-black/10 dark:border-white/10 bg-gray-900 shadow-lg"
        >
          <div className="absolute inset-0 z-0">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          </div>

          <div className="relative z-10">
            <p className="inter text-xs tracking-wider uppercase font-semibold text-cyan-400 mb-4">
              {p.year} &nbsp;/&nbsp; {p.role}
            </p>
            <h3 className="space-grotesk text-2xl sm:text-3xl font-bold text-white mb-3">
              {p.title}
            </h3>
            <p className="inter text-sm leading-relaxed text-gray-200 mb-6">
              {p.desc}
            </p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inter inline-block px-5 py-2 rounded-full text-sm font-medium
                         border border-white/30 text-white bg-white/10 backdrop-blur-md"
            >
              Visit {p.title}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const prefersReduced = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [travel, setTravel] = useState(0);
  const [active, setActive] = useState(0);

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });
  const [showDecoder, setShowDecoder] = useState(false);

  useEffect(() => {
    if (isInView) setShowDecoder(true);
  }, [isInView]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop) return;
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setTravel(Math.max(0, el.scrollWidth - el.clientWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isDesktop]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const x = useSpring(rawX, { stiffness: 45, damping: 15, mass: 0.2 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.round(v * (projects.length - 1)));
  });

  const pinned = isDesktop && !prefersReduced;

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{ height: pinned ? `${projects.length * 90}vh` : "auto" }}
      className="relative w-full bg-white dark:bg-[var(--bg-primary)] transition-colors duration-500 py-12 md:py-0"
    >
      <div
        className={`${
          pinned ? "sticky top-0 h-screen overflow-hidden flex flex-col justify-center" : "h-auto w-full"
        }`}
      >
<motion.div className="flex flex-col items-center mb-8 md:mb-12">
          <motion.h2
            ref={headingRef}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-grotesk text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight
                       text-gray-900 dark:text-white text-center pb-3"
          >
            {showDecoder ? <DecoderText text="My Projects" delay={10} speed={30} /> : "\u00A0"}
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] w-24 sm:w-32 bg-gradient-to-r from-transparent via-gray-900 dark:via-white to-transparent origin-center rounded-full"
          />
        </motion.div>

        {pinned ? (
          <>
            <div
              ref={trackRef}
              style={{ perspective: "1200px" }}
              className="w-full overflow-hidden"
            >
              <motion.div
                style={{ x }}
                className="flex gap-8 items-center will-change-transform
                           px-[calc(50vw-min(42vw,230px))]"
              >
                {projects.map((p, i) => (
                  <DeckCard
                    key={p.title}
                    project={p}
                    i={i}
                    count={projects.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </motion.div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {projects.map((p, i) => (
                <span
                  key={p.title}
                  className={`h-[2px] rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-12 bg-gray-900 dark:bg-white"
                      : "w-5 bg-gray-300 dark:bg-white/20"
                  }`}
                />
              ))}
              <span className="inter ml-4 text-xs text-gray-400 dark:text-gray-500">
                Keep scrolling
              </span>
            </div>
          </>
        ) : (
          <StaticDeck />
        )}
      </div>
    </section>
  );
}