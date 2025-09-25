import React from "react";
import AppointmentButton from "./BookAppointment";

const TherapySection = ({
  name,
  image,
  whatIsIt,
  howItWorks,
  treats,
  whatToExpect,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Image */}
      <div className="flex-1 mt-20">
        <img
          src={image}
          alt={name}
          className="rounded-2xl shadow-lg w-full h-96 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold text-black">{name}</h2>

        <div>
          <h3 className="font-semibold text-lg text-black">What is it?</h3>
          <p className="text-black">{whatIsIt}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-black">How does it work?</h3>
          <p className="text-black">{howItWorks}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-black">What does it treat?</h3>
          <ul className="list-disc list-inside">
            {treats.map((item, idx) => (
              <li className="text-black" key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-black">What to expect?</h3>
          <p className="text-black">{whatToExpect}</p>
        </div>
      </div>
    </div>
  );
};

export default TherapySection;
