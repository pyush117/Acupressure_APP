import React from "react";
import AppointmentButton from "./BookAppointment";

const ContactHeader = () => {
  return (
    <section className="bg-gradient-to-r from-secondary-first to-primary-second text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Wellness Journey Begins Here 🌿
          </h1>
          <p className="text-lg mb-8">
            Book your appointment with ease and let us guide you toward natural
            healing, balance, and relief.  
            Whether you have a question or are ready to start, we’re here for you.
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src="/images/contact-header.png" // replace with your illustration/photo
            alt="Healing Illustration"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;

