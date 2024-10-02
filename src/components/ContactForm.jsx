import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_i6sp58e",
          "template_05moq5g",
          formData,
          "ZDwb9Qxjt6yK5pvKZ"
        )
        .then((response) => {
          Toaster.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          Toaster.error("Failed to send message. Please try again.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="pb-5 p-4 lg:w-2/4 mx-auto" id="contact">
      <Toaster />
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Contact Me
      </motion.h2>
      <form onSubmit={handleSubmit}>
        <motion.div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full">
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-purple-900 bg-stone-900 px-3 py-2 text-sm text-stone-200 shadow-sm focus:border-purple-400 focus:outline-none"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
            />
            {errors.name && (
              <p className="text-sm text-stone-200 text-center  mt-2">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full appearance-none rounded-lg border border-purple-900 bg-stone-900 px-3 py-2 text-sm text-stone-200 shadow-sm focus:border-purple-400 focus:outline-none"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.75 }}
            />
            {errors.email && (
              <p className="text-sm text-stone-200 text-center mt-2">{errors.email}</p>
            )}
          </div>
        </motion.div>

        <div className="mb-6">
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-purple-900 bg-stone-900 px-3 py-2 text-sm text-stone-200 shadow-sm focus:border-purple-400 focus:outline-none"
            rows="6"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.25 }}
          />
          {errors.message && (
            <p className="text-sm text-stone-200 text-center  mt-2">{errors.message}</p>
          )}
        </div>

        <div className="flex justify-center lg:justify-end">
          <button
            type="submit"
            className={`rounded-lg bg-purple-900 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-stone-400 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"}
              <FiSend />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
