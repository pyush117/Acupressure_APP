
import { useState } from "react";
const CertificationCard = ({ title, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 overflow-auto"
          onClick={() => setIsOpen(false)} // close when clicking outside
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl z-10"
            >
              ✕
            </button>
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-md"
            />
            {title && (
              <p className="text-center text-lg font-semibold mt-3">
                {title}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};





export default CertificationCard;
