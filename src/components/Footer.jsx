import { Link } from "react-router-dom";
import { brandDetails } from "../config";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            {brandDetails.name}
          </h2>
          <p className="text-sm leading-relaxed">
            Experience deep relaxation and rejuvenation at {brandDetails.name},
            where premium massage and spa therapies meet a calm, luxurious
            environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/appointment" className="hover:text-primary-500">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Full Body Massage</li>
            <li>Thai Massage</li>
            <li>Couples Massage</li>
            <li>Swedish Massage</li>
            <li>Signature Spa Therapy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              📍 {brandDetails.address}
            </li>
            <li>
              📞{" "}
              <a href={`tel:${brandDetails.phone}`} className="hover:text-primary-500">
                {brandDetails.phone}
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href={`mailto:${brandDetails.email}`}
                className="hover:text-primary-500"
              >
                {brandDetails.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {brandDetails.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
