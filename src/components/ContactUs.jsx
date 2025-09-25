import React from "react";
import ContactHeader from "./ContactHeader";
import BookingCal from "./BookingCal";
import ContactForm from "./ContactForm";
import ClinicMap from "./ClinicInfo";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import CalltoAction from "./CalltoAction";

const ContactUs = () => {
  const location = useLocation();

  useEffect(() => {
  // Scroll to booking calendar if requested
  if (location.state?.scrollToCalendar) {
    const calendarSection = document.getElementById("bookingCalendar");
    if (calendarSection) {
      const top = calendarSection.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  // Scroll to map section if requested
  if (location.state?.scrollToMap) {
    const mapSection = document.getElementById("map");
    if (mapSection) mapSection.scrollIntoView({ behavior: "smooth" });
  }
}, [location]);


  
  return (
    <div>
      <ContactHeader />
      {/* Booking Calendar with scroll target */}

      <BookingCal id="bookingCalendar" />

      <ContactForm />
      <ClinicMap />
      <CalltoAction />
    </div>
  );
};

export default ContactUs;
