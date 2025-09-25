import React from "react";

const ClinicMap = () => {
  return (
   <section
  id="map"
  className="w-full px-6 py-16 bg-gradient-to-r from-supporting-first to-primary-second"
>
  <div className="max-w-5xl mx-auto">
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-16 relative group overflow-hidden w-auto">
      <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
        Find Us at Our Clinic
      </h2>
      <p className="mt-2 text-sm text-primary-first text-center relative z-10">
        Visit us at Aghor Acupressure Upchar Kendra. We’re easy to find!
      </p>

      {/* Animated color overlay */}
      <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
    </div>

    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.6446081859804!2d85.09174871399863!3d25.605073231822228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5700529df9f5%3A0xc82ef50ae78cf573!2sAghor%20Acupressure%20Upchar%20Kendra!5e0!3m2!1sen!2sin!4v1758095270526!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Clinic Location"
      ></iframe>
    </div>
  </div>
</section>

  );
};

export default ClinicMap;
