import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
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
        <button className="bg-purple-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 flex items-center gap-2">
          <FaDownload className="text-white" /> Download CV
        </button>
      </motion.div>
      <motion.div
        className="m-8 flex items-center justify-center gap-4 text-2xl"
        variants={heroSocialsDelay(2)}
        initial="hidden"
        animate="visible"
      >
        <FaLinkedin />
        <FaGithub />
        <BiLogoGmail />
        <FaWhatsapp />
      </motion.div>
    </nav>
  );
};

export default Navbar;
