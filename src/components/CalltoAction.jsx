import AppointmentButton from "./BookAppointment";
import { FaPhoneAlt,FaMapMarkerAlt,FaClock } from "react-icons/fa";

const CalltoAction = () => (
  <section className="py-16 bg-gradient-to-r from-secondary-first to-primary-second text-center -mb-10">
      <h2 className="text-3xl font-bold mb-4 text-white">
        Ready to Begin Your Path to Wellness?
      </h2>

      <p className="mb-6 text-lg text-black flex flex-col md:flex-row items-center justify-center gap-4">
        <span className="flex items-center gap-2">
          <FaPhoneAlt className="text-white" />
          +91 7870557878
        </span>

        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-white" />
          Durga Ashram Gali, opposite Pillar 81, Sheikhpura, Patna, Bihar 800014
        </span>

        <span className="flex items-center gap-2">
          <FaClock className="text-white" />
          Mon–Sun, 4PM–7PM
        </span>
      </p>

      <AppointmentButton />
    </section>
);

export default CalltoAction;
