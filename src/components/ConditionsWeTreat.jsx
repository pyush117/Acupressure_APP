import React, { useState } from "react";
import { conditionsList } from "../utils/Constants";
import CalltoAction from "../components/CalltoAction";
import ConditionCard from "../components/ConditionCard";
import ConditionModal from "../components/ConditionModal";

const ConditionsWeTreat = () => {
  const [selectedCondition, setSelectedCondition] = useState(null);

  return (
    <div className="bg-gradient-to-r from-secondary-first to-primary-second text-supporting-second">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-secondary-first to-primary-second text-white text-center py-16">
     <div className=" max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 mb-8 relative group overflow-hidden w-auto">
  <h2 className="text-3xl font-bold text-center relative z-10 text-primary-first">
    Conditions We Treat
  </h2>
  <p className="mt-2 text-sm text-primary-first text-center relative z-10">
    Explore the wide range of health issues we address with holistic, natural therapies.
  </p>

  {/* Animated color overlay */}
  <div className="absolute inset-0 bg-primary-first opacity-20 pointer-events-none hidden group-hover:block animate-slide-left-to-right-once"></div>
</div>


        
      </header>

      {/* Conditions Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-r from-secondary-first to-primary-second">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {conditionsList.map((condition, idx) => (
            <ConditionCard
              key={idx}
              title={condition.name}
               cursorPointer={true}
              image={condition.image}
              onClick={() => setSelectedCondition(condition.name)} // open modal with this condition
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <ConditionModal
        condition={selectedCondition}
        onClose={() => setSelectedCondition(null)}
      />

      {/* Call to Action */}
      <CalltoAction />
    </div>
  );
};

export default ConditionsWeTreat;



