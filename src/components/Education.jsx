import React from "react";

import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-violet-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <h6 className="mb-2 font-semibold">
                {education.role} -{" "}
                <span className="text-sm text-purple-400">
                  {education.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
