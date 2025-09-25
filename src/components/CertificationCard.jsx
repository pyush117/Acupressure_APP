import React from "react";

const CertificationCard = ({ title, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
    </div>
  );
};

export default CertificationCard;
