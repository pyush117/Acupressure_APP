import React from "react";


const TestimonialCard = ({ name, city, text, video }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col h-full">
      {/* Top: Video + Text */}
      <div>
        {video && (
          <video
            src={video}
            className="rounded-lg w-full max-h-64 object-cover mb-4"
            controls
          />
        )}
        <p className="text-black">{text}</p>
      </div>

      {/* Bottom: Name + City */}
      <div className="mt-auto pt-4">
        <span className="font-semibold block">{name}</span>
        <span className="text-sm text-gray-500">{city}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
