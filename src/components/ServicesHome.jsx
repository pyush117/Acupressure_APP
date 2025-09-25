// Services.jsx
import ServiceCard from "./ServiceCard";
import { servicesData } from "../utils/Constants";

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary-first to-primary-second">
      {/* Title Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-8 overflow-hidden relative group">
        <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
          Our Services
        </h2>

        {/* Animated color overlay, hidden by default */}
        <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* CTA Link */}
      <div className="text-center mt-10">
        <a
          href="/TreatmentsAndServices"
          className="text-black font-semibold hover:underline"
        >
          Explore All Treatments →
        </a>
      </div>
    </section>
  );
};

export default Services;
