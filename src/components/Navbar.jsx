import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { heroDownloadCvDelay, heroSocialsDelay } from "../constants";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-neutral-900/90 z-50"
      variants={heroDownloadCvDelay(2)}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        <motion.div
          className="flex flex-shrink-0 items-center"
          variants={heroDownloadCvDelay(2.5)}
          initial="hidden"
          animate="visible"
        >
          <a
            href="/CV_Escobar_Nicolas.pdf"
            download
            className="bg-purple-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 flex items-center gap-2"
          >
            <FaDownload className="text-white" /> Download CV
          </a>
        </motion.div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <ul className="hidden lg:flex space-x-8 text-neutral-300">
          <li>
            <a href="#hero" className="hover:text-white transition-colors">
              Hero
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="hover:text-white transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <motion.div
          className="hidden lg:flex items-center justify-center gap-6 text-2xl"
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
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            href="https://github.com/xNicoEscobar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-neutral-100 transition-colors"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="https://wa.me/2995854889"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp className="text-4xl" />
          </a>
        </motion.div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-neutral-900 w-full py-5 px-8 ">
          <ul className="space-y-4 text-neutral-300">
            <li>
              <a
                href="#hero"
                className="block hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Hero
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="block hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="block hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-4 mt-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/escobar-nicolas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://github.com/xNicoEscobar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-neutral-100 transition-colors"
            >
              <FaGithub className="text-4xl" />
            </a>
            <a
              href="https://wa.me/2995854889"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-green-400 transition-colors"
            >
              <FaWhatsapp className="text-4xl" />
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
