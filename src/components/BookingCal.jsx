import React from "react";

const BookingCal = () => {
  return (
    <section id="bookingCalendar" className="relative py-20 bg-gradient-to-r from-supporting-first to-primary-second">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-16 relative group overflow-hidden w-auto">
          <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
            Book an Appointment Online
          </h2>
          <p className="mt-2 text-sm text-primary-first text-center relative z-10">
            Choose a time that works best for you and start your healing journey
            today.
          </p>

          {/* Animated color overlay */}
          <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
        </div>

        {/* Calendar Card */}
        <div className="w-[95%] aspect-[16/10] mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/30">
          <iframe
            src="https://cal.com/acupressure/clinic-appointment"
            className="w-full h-full border-0"
            title="Booking Calendar"
          ></iframe>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-first/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default BookingCal;
