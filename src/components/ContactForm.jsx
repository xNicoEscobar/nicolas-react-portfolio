import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        className="my-10 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
    </div>
  );
};

export default ContactForm;
