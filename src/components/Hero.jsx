import React from "react";
import { HERO_CONTENT, heroTransitionDelay } from "../constants";
import profilePic from "../assets/nicolasProfilePic.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-violet-800 pb-4 lg:mb-35 sm:mt-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-center">
            <motion.h1
              variants={heroTransitionDelay(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Escobar Nicolas
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-violet-400 to-violet-700 bg-clip-text text-3xl tracking-tight text-transparent"
              variants={heroTransitionDelay(0.5)}
              initial="hidden"
              animate="visible"
            >
              Front End Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              variants={heroTransitionDelay(1)}
              initial="hidden"
              animate="visible"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              src={profilePic}
              alt="Escobar Nicolas"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
