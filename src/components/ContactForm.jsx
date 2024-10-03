import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
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
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="md:pb-20 lg:pb-20 p-4 lg:w-2/4 py-20 mx-auto" id="contact">
      <Toaster
        toastOptions={{
          style: {
            border: "2px solid purple",
          },
        }}
      />
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
              className="w-full appearance-none rounded-lg border border-violet-900 bg-neutral-900 bg-opacity-90 px-3 py-2 text-md text-stone-200 shadow-sm focus:border-violet-400 focus:outline-none"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
            />
            {errors.name && (
              <p className="text-sm text-stone-200 text-center  mt-2">
                {errors.name}
              </p>
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
              className="w-full appearance-none rounded-lg border border-violet-900 bg-neutral-900 bg-opacity-90 px-3 py-2 text-md text-stone-200 shadow-sm focus:border-violet-400 focus:outline-none"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.75 }}
            />
            {errors.email && (
              <p className="text-sm text-stone-200 text-center mt-2">
                {errors.email}
              </p>
            )}
          </div>
        </motion.div>

        <div className="mb-10">
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-violet-900 bg-neutral-900 bg-opacity-90 px-3 py-2 text-md text-stone-200 shadow-sm focus:border-violet-400 focus:outline-none"
            rows="6"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.25 }}
          />
          {errors.message && (
            <p className="text-sm text-stone-200 text-center  mt-2">
              {errors.message}
            </p>
          )}
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.button
            type="submit"
            className={`rounded-lg bg-violet-900 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-stone-400 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"}
              <FiSend />
            </div>
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
