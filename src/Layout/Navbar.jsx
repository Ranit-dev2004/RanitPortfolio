import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"; // icons for 3 dots and close
import { assets } from "../assets";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 ml-10 left-0 w-full md:w-24 bg-black flex md:flex-col flex-row justify-between md:items-center items-center px-6 md:py-6 h-20 md:h-screen rounded-none md:rounded-2xl shadow-lg z-50">
      
      {/* Logo */}
      <motion.div
        className="w-20 h-20"
        whileHover={{ scale: 1.15, rotate: 6 }}
        transition={{ type: "spring", stiffness: 200 }}
        href="/"
      >
        <img src={assets.Logo} alt="Logo" className="w-full h-full object-contain pointer-events-none" />
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {open ? (
          <HiX size={32} className="text-white cursor-pointer" onClick={() => setOpen(false)} />
        ) : (
          <HiOutlineMenuAlt3 size={32} className="text-white cursor-pointer" onClick={() => setOpen(true)} />
        )}
      </div>

      {/* Links */}
      <motion.div
        className={`flex-col ml-5 gap-8 text-gray-400 text-lg items-center font-semibold 
        ${open ? "flex absolute top-20 left-0 w-full bg-black py-6" : "hidden"} 
        md:flex md:static`}
        style={{ fontFamily: "Sour Gummy, sans-serif" }}
      >
        {["Projects", "Details", "Articles", "Contact"].map((link, idx) => (
          <Link
            key={idx}
            to={link.toLowerCase()}
            smooth={true}
            duration={700}
            offset={-50}
            onClick={() => setOpen(false)} // close menu on click
            className="relative group text-lg md:text-xl lg:text-2xl cursor-pointer"
          >
            {link}
            <span className="absolute left-0 bottom-[-6px] w-0 h-[3px] bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff,0_0_20px_#00ffff] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </motion.div>

      {/* Socials */}
      <motion.div className="hidden md:flex flex-col gap-5 text-gray-400">
  {[
    { Icon: FaGithub, link: "https://github.com/Ranit-dev2004" },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/ranit-saha-7bba04226/" },
    { Icon: FaEnvelope, link: "mailto:iamtheceoof@datatreya.com" },
  ].map(({ Icon, link }, idx) => (
    <motion.a
      key={idx}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-10 h-10 flex items-center justify-center overflow-hidden rounded-full"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      {/* Water filling background */}
      <span className="absolute bottom-0 left-0 w-full h-0 bg-cyan-400 group-hover:h-full transition-all duration-500 ease-out" />

      {/* Icon */}
      <Icon
        size={28}
        className="relative z-20 text-gray-300 group-hover:text-black transition-colors duration-500"
      />
    </motion.a>
  ))}
</motion.div>
    </div>
  );
};

export default Navbar;
