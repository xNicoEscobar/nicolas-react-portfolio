import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-0 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/escobar-nicolas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/xNicoEscobar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-100 transition-colors"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://wa.me/2995854889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </div>
        <p className="text-neutral-500 text-sm mt-4">© 2024 Escobar Nicolas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
