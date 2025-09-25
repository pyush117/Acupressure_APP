import React from "react";
import {
  timelineData,
  certifications,
  ABOUT_US_PARAGRAPH,
} from "../utils/Constants";
import TimelineItem from "./TimelineItem";
import CertificationCard from "./CertificationCard";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-secondary-first to-primary-second text-supporting-second">
      {/* Section 1: Personal Philosophy */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center text-black">
        <h1 className="text-4xl font-bold mb-6">The Therapist’s Journey</h1>
        <p className="text-lg leading-relaxed text-justify">
          {ABOUT_US_PARAGRAPH[0]}
        </p>
      </section>

      {/* Section 2: Professional Timeline */}
      <section className="bg-gradient-to-r from-secondary-first to-primary-second py-16 flex flex-col items-center">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-8 overflow-hidden relative group">
          <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
            Personal Milestones
          </h2>

          {/* Animated color overlay, hidden by default */}
          <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
        </div>
        <div className="max-w-4xl w-full">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={idx !== timelineData.length - 1 ? "mb-8" : ""}
            >
              <TimelineItem
                {...item}
                isLast={idx === timelineData.length - 1}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Certifications */}
      <section className="bg-gradient-to-r from-secondary-first to-primary-second py-16 w-full -mb-10">
        {/* Centered heading */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-8 relative group overflow-hidden">
          <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
            Certifications & Diplomas
          </h2>

          {/* Animated color overlay */}
          <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
        </div>

        {/* Full-width grid */}
        <div className="w-full px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <CertificationCard key={idx} {...cert} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
