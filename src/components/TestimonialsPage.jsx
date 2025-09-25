import React, { useState } from "react";
import { testimonialsList } from "../utils/Constants";
import TestimonialCard from "./TestimonialCard"; // import your card
import CalltoAction from "./CalltoAction"; // import CalltoAction

const TestimonialsPage = () => {
  const [showAll, setShowAll] = useState(false);

  // Show 3 by default, or all if showAll is true
  const displayedTestimonials = showAll ? testimonialsList : testimonialsList.slice(0, 3);

  return (
    <>
      <section className="w-full mx-auto px-6 py-16 bg-gradient-to-r from-secondary-first to-primary-second -mb-10">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>

        <div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              name={testimonial.name}
              city={testimonial.city}
              text={testimonial.text}
              video={testimonial.video} // if any
            />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-black font-semibold underline hover:underline"
            >
              See More
            </button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="text-black font-semibold underline hover:underline"
            >
              Show Less
            </button>
          </div>
        )}
      </section>

      {/* Call to Action Section */}
      <CalltoAction />
    </>
  );
};

export default TestimonialsPage;
