import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black text-gray-600 dark:text-gray-400 text-center py-4 transition-colors duration-400">
      © {new Date().getFullYear()} Ranit Saha. All rights reserved.
    </footer>
  );
};

export default Footer;