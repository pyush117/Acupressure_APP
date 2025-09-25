import { conditionsData } from "../utils/Constants";
import ConditionCard from "./ConditionCard";

const Conditions = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary-first to-primary-second">
      {/* Title Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-8 overflow-hidden relative group">
        <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
          Conditions We Treat
        </h2>

        {/* Animated color overlay, hidden by default */}
        <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
      </div>

      {/* Condition Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {conditionsData.map((condition, idx) => (
          <ConditionCard key={idx} {...condition} />
        ))}
      </div>

      {/* CTA Link */}
      <div className="text-center mt-10">
        <a
          href="/conditionsWeTreat"
          className="text-black font-semibold hover:underline"
        >
          See All Conditions →
        </a>
      </div>
    </section>
  );
};

export default Conditions;
