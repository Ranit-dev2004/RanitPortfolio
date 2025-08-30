import { motion } from "framer-motion";
import DecoderText from "../Components/decoder-text";
import { assets } from "../assets";

export default function AboutMe() {
  return (
    <section id="details" className="relative w-full min-h-screen bg-black text-gray-300 flex items-center justify-center px-8 py-24 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left - Text */}
<div className="relative z-10">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-8 ml-12"
  >
    <DecoderText text="A Journey Within" speed={30} delay={80} />

    {/* Animated underline */}
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
      className="absolute left-0 -bottom-1 h-[3px] bg-cyan-400 rounded"
    />
  </motion.h2>

  <p className="text-lg leading-relaxed mb-6 ml-12">
    Hey there! <span className="text-white font-semibold">I'm Ranit</span> — not just a builder of code, 
    but a seeker of meaning through creation. To me, every line of logic, every interface, 
    every design is a dialogue between the self and the infinite. 
    My path weaves through 
    <span className="text-cyan-400"> design</span>, 
    <span className="text-cyan-400"> movement</span>, and 
    <span className="text-cyan-400"> development</span>, 
    each an expression of the same impulse: to bring clarity and harmony out of complexity.
  </p>

  <p className="text-lg leading-relaxed mb-6 ml-12">
    Beyond the screen, I wander into worlds of art, music, myth, and reflection.  
    I believe creation is not only about what we build — but also about how it transforms us.  
    In curiosity, I find freedom; in challenges, I find growth; and in each moment, 
    I search for the subtle balance between chaos and order.
  </p>

  {/* Links */}
 <div className="flex flex-col gap-3 ml-12">
  <a
    href="#contact"
    className="relative inline-flex justify-center items-center w-80 px-6 py-3 rounded-full font-semibold text-cyan-400 border border-cyan-400 overflow-hidden group transition"
  >
    {/* Glow sweep effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-700 [mask-image:linear-gradient(to_right,transparent,black,transparent)] animate-glow rounded-full" />

    {/* Button text */}
    <span className="relative flex items-center gap-2 z-10">
      ➤ Share your thoughts with me
    </span>
  </a>
</div>
</div>
        {/* Right - Image */}
        <div className="relative flex justify-center">
          <img 
            src={assets.MyImage} // 🖼️ your photo here
            alt="Me"
            className="rounded-2xl mr-40 shadow-2xl max-h-[500px] object-cover relative z-10"
          />

          {/* Japanese glyphs background */}
          <motion.div
            initial={{ opacity: 5, x: 100 }}
            animate={{ opacity: 0.2, x: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute left-52 top-4/5 -translate-y-1/2 text-white text-[7rem] leading-none font-extrabold rotate-90 opacity-80 select-none pointer-events-none"
          >
            ミライ
          </motion.div>
        </div>
      </div>
    </section>
  );
}
