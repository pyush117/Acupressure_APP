import React from "react";
import { X } from "lucide-react";
import { modalDescription } from "../utils/Constants";

const ConditionModal = ({ condition, onClose }) => {
  if (!condition) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Blur Background */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full p-8 z-50 overflow-y-auto max-h-[80vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {condition}
        </h2>

        {/* Description */}
        {/* Description */}
        <div className="text-gray-600 text-center leading-relaxed max-w-2xl mx-auto overflow-y-auto max-h-[60vh] px-2 break-words">
          {modalDescription[condition]}
        </div>
      </div>
    </div>
  );
};

export default ConditionModal;
