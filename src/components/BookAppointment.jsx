import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AppointmentButton = ({
  text = "Book an Appointment",
  padding = "px-10 py-4",
  margin = "",
  scrollTo = null,
  className = "",
  type = "button",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (type === "submit") return;

    const scrollToElement = () => {
      const section = document.getElementById(scrollTo);
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 100; // offset if needed
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (location.pathname === "/contact" && scrollTo) {
      // Already on contact page, just scroll
      scrollToElement();
    } else {
      // Navigate to /contact first, then scroll after render
      navigate("/contact", { state: { scrollToCalendar: scrollTo } });
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`
        ${padding} 
        ${margin} 
        bg-white
        text-secondary-first
        font-bold 
        rounded-lg 
        shadow-md 
        hover:bg-secondary-second
        hover:text-black
        transition duration-300
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default AppointmentButton;
