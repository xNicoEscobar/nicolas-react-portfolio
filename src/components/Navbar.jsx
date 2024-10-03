import { FaLinkedin, FaGithub, FaWhatsapp, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { heroDownloadCvDelay, heroSocialsDelay } from "../constants";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    const sections = [
      "hero",
      "about",
      "skills",
      "experience",
      "education",
      "contact",
    ];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        const offsetBottom = offsetTop + element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
        }
      }
    });
  };

  const handleMenuClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black/60 z-50"
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
          <motion.button
            onClick={toggleMenu}
            className="text-purple-700 text-3xl focus:outline-none"
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        <ul className="hidden lg:flex space-x-8 text-neutral-300">
          {[
            "hero",
            "about",
            "skills",
            "experience",
            "education",
            "contact",
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`hover:text-white transition-colors relative ${
                  activeSection === section ? "text-white" : ""
                }`}
                onClick={() => handleMenuClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}

                {activeSection === section && (
                  <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-purple-500" />
                )}
              </a>
            </li>
          ))}
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
        <motion.div
          ref={menuRef}
          className="lg:hidden bg-neutral-990/90 w-full py-5 px-8"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ul className="space-y-4 text-neutral-300">
            {[
              "hero",
              "about",
              "skills",
              "experience",
              "education",
              "contact",
            ].map((section, index) => (
              <li
                key={index}
                className="relative flex justify-center border-b border-black"
              >
                <a
                  href={`#${section}`}
                  className={`block w-1/2 mx-auto text-center hover:text-white transition-colors ${
                    activeSection === section
                      ? "text-white border-b-2 border-purple-700"
                      : ""
                  }`}
                  onClick={() => handleMenuClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
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
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
