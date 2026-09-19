import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Logo from "../Components/Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Projects", type: "scroll" },
    { name: "Details", type: "scroll" },
    { name: "Skills", type: "page", path: "/skills" },
    { name: "Contact", type: "page", path: "/contact" },
  ];

  const socialLinks = [
    { Icon: FaGithub, link: "https://github.com/Ranit-dev2004" },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/ranit-saha-7bba04226/" },
    { Icon: FaEnvelope, link: "mailto:iamtheceoof@datatreya.com" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full md:w-24 md:left-6 md:top-6 md:h-[calc(100vh-3rem)] z-50">
      {/* Main Navbar Bar */}
      <div className="w-full h-20 md:h-full bg-white/70 dark:bg-black/60 backdrop-blur-md flex flex-row md:flex-col justify-between items-center px-6 md:py-8 rounded-b-2xl md:rounded-2xl border-b md:border border-gray-200/20 dark:border-gray-800/50 shadow-lg">
        
        {/* Logo */}
        <motion.div
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 6 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Logo className="w-full h-full" />
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-col gap-6 text-gray-800 dark:text-gray-300 font-semibold space-grotesk items-center">
          {navLinks.map((link, idx) =>
            link.type === "scroll" ? (
              <Link
                key={idx}
                to={link.name.toLowerCase()}
                smooth={true}
                duration={700}
                offset={-50}
                className="relative group text-lg cursor-pointer [writing-mode:vertical-rl] rotate-180 py-2"
              >
                {link.name}
                <span className="absolute left-[-4px] top-0 w-[3px] h-0 bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff] transition-all duration-300 group-hover:h-full" />
              </Link>
            ) : (
              <NavLink
                key={idx}
                to={link.path}
                className="relative group text-lg cursor-pointer [writing-mode:vertical-rl] rotate-180 py-2"
              >
                {link.name}
                <span className="absolute left-[-4px] top-0 w-[3px] h-0 bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff] transition-all duration-300 group-hover:h-full" />
              </NavLink>
            )
          )}
        </div>

        {/* Desktop Controls (Theme + Social) */}
        <div className="hidden md:flex flex-col gap-4 items-center">
          <motion.button
            onClick={() => setDarkMode((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200/50 dark:bg-gray-800/50"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FaSun className="text-cyan-400 text-lg drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]" />
            ) : (
              <FaMoon className="text-slate-800 text-lg" />
            )}
          </motion.button>

          <div className="flex flex-col gap-3">
            {socialLinks.map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-800/50"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FaSun className="text-cyan-400 text-xl" />
            ) : (
              <FaMoon className="text-slate-800 text-xl" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            {open ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 left-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/50 py-8 px-6 shadow-2xl flex flex-col items-center gap-6"
          >
            {navLinks.map((link, idx) =>
              link.type === "scroll" ? (
                <Link
                  key={idx}
                  to={link.name.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={-50}
                  onClick={() => setOpen(false)}
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <NavLink
                  key={idx}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </NavLink>
              )
            )}

            <div className="w-16 h-[1px] bg-gray-300 dark:bg-gray-800 my-2" />

            {/* Mobile Social Links */}
            <div className="flex gap-6">
              {socialLinks.map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;