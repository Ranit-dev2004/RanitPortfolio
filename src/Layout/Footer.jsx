import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 text-center py-4">
      © {new Date().getFullYear()} Ranit Saha. All rights reserved.
    </footer>
  );
};

export default Footer;
