import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import { heroDownloadCvDelay, heroSocialsDelay } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
        className="flex flex-shrink-0 items-center"
        variants={heroDownloadCvDelay(2)}
        initial="hidden"
        animate="visible"
      >
        <a
          href="/cv_nicolas_escobar.pdf"
          download
          className="bg-purple-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 flex items-center gap-2"
        >
          <FaDownload className="text-white" /> Download CV
        </a>
      </motion.div>
      <motion.div
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        variants={heroSocialsDelay(2)}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
    </nav>
  );
};

export default Navbar;
