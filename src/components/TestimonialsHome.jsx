import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialsList } from "../utils/Constants";

const HomeTestimonials = () => {
  // Only show first 3 testimonials
  const displayedTestimonials = testimonialsList.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-r from-secondary-first to-primary-second text-center">
      {/* Title Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-8 overflow-hidden relative group">
        <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
          What Our Patients are Saying
        </h2>

        {/* Animated color overlay, hidden by default */}
        <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedTestimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            name={testimonial.name}
            city={testimonial.city}
            text={testimonial.text}
            video={testimonial.video} // will show video if present
          />
        ))}
      </div>

      {/* CTA Link */}
      <div className="mt-10">
        <a
          href="/testimonials"
          className="text-black font-semibold hover:underline"
        >
          Read More Testimonials →
        </a>
      </div>
    </section>
  );
};

export default HomeTestimonials;
