


import React from "react";

const ConditionCard = ({ title, image, onClick, cursorPointer = false }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-cover bg-center rounded-lg shadow-md p-6 flex items-end justify-center text-white hover:shadow-lg transition h-40 ${
        cursorPointer ? "cursor-pointer" : ""
      }`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className="font-semibold text-lg bg-black/40 px-2 py-1 rounded">
        {title}
      </h3>
    </div>
  );
};



export default ConditionCard;
