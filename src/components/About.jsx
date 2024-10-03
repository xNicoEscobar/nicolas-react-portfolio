import aboutImg from "../assets/about-me-nicolas.jpg";
import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-violet-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} className="rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {ABOUT_TEXT.map((about, index) => (
            <div
              className="flex justify-center flex-wrap lg:justify-center"
              key={index}
            >
              <p className="my-2 pt-6 max-w-xl font-light tracking-tight">
                {about.paragraph[0]}
              </p>
              <p className="my-2 pt-6 max-w-xl font-light tracking-tight">
                {about.paragraph[1]}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
