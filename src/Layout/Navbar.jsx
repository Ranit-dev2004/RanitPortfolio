import React from "react";
import { FaGithub, FaDribbble, FaTwitter } from "react-icons/fa";
import { assets } from "../assets";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Navbar = () => {
  return (
    <div className="fixed top-0 left-2 sm:left-4 md:left-6 lg:left-10 h-screen w-24 bg-black flex flex-col justify-between items-center py-6 rounded-2xl shadow-lg z-50">
      {/* Logo */}
      <motion.div
        className="w-20 h-20"
        whileHover={{ scale: 1.15, rotate: 6 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src={assets.Logo}
          alt="Logo"
          className="w-full h-full object-contain pointer-events-none"
        />
      </motion.div>

      {/* Links */}
      <motion.div
        className="flex flex-col gap-8 text-gray-400 text-lg items-center font-semibold"
        style={{ fontFamily: "Sour Gummy, sans-serif" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {["Projects", "Details", "Articles", "Contact"].map((link, idx) => (
          <motion.a
            key={idx}
            href={`#${link.toLowerCase()}`}
            className="ml-5 relative group text-lg md:text-xl lg:text-2xl inline-block cursor-pointer"
            variants={linkVariants}
            whileHover={{
              scale: 1.2,
              color: "#0ff",
              textShadow: "0px 0px 12px rgba(0,255,255,0.8)",
            }}
          >
            {link}
            <span className="absolute left-0 bottom-[-6px] w-0 h-[3px] bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff] transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </motion.div>

      {/* Socials */}
      <motion.div
        className="flex flex-col gap-5 text-gray-400"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[FaTwitter, FaDribbble, FaGithub].map((Icon, idx) => (
          <motion.a
            key={idx}
            href="#"
            className="cursor-pointer"
            whileHover={{
              scale: 1.4,
              rotate: 12,
              color: "#0ff",
              textShadow: "0px 0px 12px rgba(0,255,255,0.9)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon size={28} className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;
