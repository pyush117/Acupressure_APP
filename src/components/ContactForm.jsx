import React, { useState } from "react";
import AppointmentButton from "./BookAppointment";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    referral: "",
  });

  const [status, setStatus] = useState(""); // success / error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending...");

    try {
      const response = await fetch("https://formspree.io/f/mrbawlrw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", referral: "" });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-supporting-first to-primary-second">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className=" max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-16 relative group overflow-hidden w-auto">
          <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-primary-first text-center relative z-10">
            Have questions or want to book directly? Fill out the form below and
            we’ll get back to you soon.
          </p>

          {/* Animated color overlay */}
          <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 space-y-6 border border-white/30"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-first shadow-inner"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-first shadow-inner"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-first shadow-inner"
          />

          {/* Referral Note */}
          <input
            type="text"
            name="referral"
            placeholder="Referral Note (if any)"
            value={formData.referral}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary-first shadow-inner"
          />

          {/* Submit Button */}
          <div className="text-center">
            <AppointmentButton text="Send Message" type="submit" />
          </div>

          {/* Status Message */}
          {status && (
            <p className="text-center text-sm mt-4 text-gray-700">{status}</p>
          )}
        </form>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-first/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactForm;
