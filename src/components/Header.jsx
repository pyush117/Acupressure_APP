import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AppointmentButton from "./BookAppointment";
import {  navItems } from "../utils/Constants";
import APP_LOGO from "../assets/Images/APP_LOGO.png";

const Header = () => {
  const location = useLocation(); // to know current page
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-secondary-first to-primary-second  md: sticky md:top-0 md:left-0 md:w-full md:z-50">
      {/* Header Container */}
      <div className="flex justify-between items-center px-4 py-4 md:px-8">
        <div className="h-25 w-25 rounded-full overflow-hidden flex items-center justify-center shadow-md">
          <img
            src={APP_LOGO}
            alt="Aghor Acupressure Logo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Desktop Navigation + Appointment Button */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 font-bold text-xl">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path; // check active page
              return (
                <li
                  key={item.name}
                  className={`transition-transform transform hover:scale-115
                    ${
                      isActive
                        ? "text-black"
                        : "text-supporting-second hover:text-black"
                    }`}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <AppointmentButton margin="ml-4" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-supporting-second"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-primary-first text-supporting-second px-4 pb-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`block transition 
                  ${
                    isActive
                      ? "text-secondary-second"
                      : "text-supporting-second hover:text-secondary-first"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <AppointmentButton className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
