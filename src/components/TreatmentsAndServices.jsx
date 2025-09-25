import React from "react";
import { therapiesData } from "../utils/Constants";
import TherapySection from "./TherapySection";
import CalltoAction from "./CalltoAction";

const Treatments = () => {
  return (
    <div className="bg-gradient-to-r from-secondary-first to-primary-second text-supporting-second">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/assets/images/treatments-hero.jpg')" }}
      >
        <div className="mx-auto bg-white bg-opacity-50 rounded-xl shadow-lg p-4 mb-8 relative group overflow-hidden w-auto">
  <h2 className="text-3xl font-bold text-primary-first text-center relative z-10 mb-2">
    Treatments & Services
  </h2>
  <p className="text-sm text-primary-first text-center relative z-10">
    Discover holistic therapies designed to heal your body, mind, and spirit —
    rooted in centuries-old traditions, tailored for today’s lifestyle.
  </p>

  {/* Optional animated overlay */}
  <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
</div>

      </section>

      {/* Therapy Sections */}
      {/* Therapy Sections */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {therapiesData.map((therapy, idx) => (
          <TherapySection key={idx} {...therapy} />
        ))}
      </section>
      <CalltoAction/>
    </div>
  );
};

export default Treatments;
