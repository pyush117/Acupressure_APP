import { FaFacebook, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleAddressClick = () => {
    navigate("/contact", { state: { scrollToMap: true } });
  };

  return (
    <footer className="bg-primary-first text-supporting-second py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* Logo & Mission Statement */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Aghor Acupressure Upchar Kendra
          </h3>
          <p className="text-sm leading-relaxed break-words">
            We believe in holistic, patient-centered care. Our mission is to
            provide compassionate treatments with modern medical practices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-black">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/TreatmentsAndServices"
                className="hover:text-black"
              >
                Treatments and Services
              </a>
            </li>
            <li>
              <a
                href="/conditionsWeTreat"
                className="hover:text-black"
              >
                Conditions We Treat
              </a>
            </li>
            <li>
              <a href="/testimonials" className="hover:text-black">
                Testimonials
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-black">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <div className="block text-sm hover:underline cursor-pointer"  onClick={handleAddressClick}>
            Durga Ashram Gali, opposite Pillar 81, Sheikhpura, Patna, Bihar
            800014
          </div>

          <div className="block text-sm">Phone: +91 7870557878</div>

          <div className="block text-sm">
            Email: acupressureupcharkendra@gmail.com
          </div>
        </div>

        {/* Social Media & Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-black">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-black">
              <FaInstagram />
            </a>
          </div>
          <div className="text-sm space-y-2">
            <div
              className="block hover:text-black cursor-pointer"
              onClick={() => navigate("/privacypolicy")}
            >
              Privacy Policy
            </div>
            <div
              className="block hover:text-black cursor-pointer"
              onClick={() => navigate("/TermsAndConditions")}
            >
              Terms and Conditions
            </div>
           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-supporting-second mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Clinic Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
