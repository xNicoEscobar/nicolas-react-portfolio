import React from "react";
import { RiReactjsLine, RiJavascriptLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs, FaCss3Alt, FaFigma, FaSlack } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
import { iconVariants } from "../constants";

const Technologies = () => {
  return (
    <div className="border-b border-purple-900 pb-24">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        IT Skills
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <RiJavascriptLine className="text-5xl" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <TbBrandTypescript className="text-5xl text-blue-600" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <FaCss3Alt className="text-5xl text-cyan-500" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <TbBrandNextjs className="text-5xl text-neutral-500" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <FaNodeJs className="text-5xl text-green-500" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <FaGitAlt className="text-5xl text-orange-600" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <SiFirebase className="text-5xl text-orange-700" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <FaFigma className="text-5xl" />
        </motion.div>
        <motion.div className="p-2" variants={iconVariants} initial="initial" whileHover="hover">
          <FaSlack className="text-5xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
