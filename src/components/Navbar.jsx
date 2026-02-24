import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { brandDetails } from "../config";

// slug helper
const makeSlug = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/70 backdrop-blur-md shadow-md"
        : "bg-secondary-50"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt={brandDetails.name}
            className="h-20 drop-shadow-md transition-transform hover:scale-105 duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-dark-800">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          <DesktopMenu
            label="Massage Services"
            basePath="/massage"
            items={[
              "Balance Massage",
              "Sandwich Massage",
              "Jacuzzi Massage",
              "Turkish Massage",
              "Scrub Massage",
              "Normal Aroma Massage",
              "Deep Tissue Massage",
              "Foot Massage",
              "Nuru Massage",
              "Swedish Massage",
            ]}
            name="massage"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />

          <DesktopMenu
            label="Spa Services"
            basePath="/spa"
            items={[
              "Chocolate Massage",
              "Balinese Massage",
              "Lomi Lomi Massage",
              "Relaxation Massage",
              "Ayurvedic Massage",
              "Shiatsu Massage",
              "Oil Massage",
              "Potli Massage",
              "Jacuzzi Honey Bath",
              "Jacuzzi Milk Bath",
              "Signature Massage",
            ]}
            name="spa"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />

          <a
            href={brandDetails.socialLinks.whatsapp}
            target="_blank"
            className="text-primary-700 font-medium"
          >
            WhatsApp
          </a>

          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl text-dark-800"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>

        {/* CTA */}
        <Link
          to="/appointment"
          className="hidden lg:block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Make Appointment
        </Link>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 lg:hidden">
          <div className="w-[85%] max-w-sm h-full bg-dark-900 text-white overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
              <img
                src={logo}
                alt={brandDetails.name}
                className="h-24 drop-shadow-lg transition-transform hover:scale-105 duration-300"
              />
              <button
                className="text-2xl"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="divide-y divide-gray-800">
              <MobileLink to="/" label="Home" setMobileOpen={setMobileOpen} />
              <MobileLink to="/about" label="About Us" setMobileOpen={setMobileOpen} />

              <MobileAccordion
                title="Massage Services"
                open={mobileAccordion === "massage"}
                onClick={() =>
                  setMobileAccordion(
                    mobileAccordion === "massage" ? null : "massage"
                  )
                }
                items={[
                  "Balance Massage",
                  "Sandwich Massage",
                  "Jacuzzi Massage",
                  "Turkish Massage",
                  "Scrub Massage",
                  "Normal Aroma Massage",
                  "Deep Tissue Massage",
                  "Foot Massage",
                  "Nuru Massage",
                  "Swedish Massage",
                ]}
                basePath="/massage"
                setMobileOpen={setMobileOpen}
              />

              <MobileAccordion
                title="Spa Services"
                open={mobileAccordion === "spa"}
                onClick={() =>
                  setMobileAccordion(
                    mobileAccordion === "spa" ? null : "spa"
                  )
                }
                items={[
                  "Chocolate Massage",
                  "Balinese Massage",
                  "Lomi Lomi Massage",
                  "Relaxation Massage",
                  "Ayurvedic Massage",
                  "Shiatsu Massage",
                  "Oil Massage",
                  "Potli Massage",
                  "Jacuzzi Honey Bath",
                  "Jacuzzi Milk Bath",
                  "Signature Massage",
                ]}
                basePath="/spa"
                setMobileOpen={setMobileOpen}
              />

              <MobileLink to="/contact" label="Contact Us" setMobileOpen={setMobileOpen} />
              <MobileLink
                to="/appointment"
                label="Make Appointment"
                highlight
                setMobileOpen={setMobileOpen}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ================= DESKTOP DROPDOWN ================= */
function DesktopMenu({ label, items, name, openMenu, setOpenMenu, basePath }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(name)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <button className="flex items-center gap-1 py-2">
        {label}
        <span>{openMenu === name ? "−" : "+"}</span>
      </button>

      {openMenu === name && (
        <div className="absolute top-full left-0 w-72">
          <div className="h-3" />
          <div className="bg-white rounded-md shadow-xl border overflow-hidden">
            {items.map((item) => (
              <Link
                key={item}
                to={`${basePath}/${makeSlug(item)}`}
                className="block px-5 py-3 text-sm hover:bg-primary-600 hover:text-white border-b last:border-0 transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= MOBILE COMPONENTS ================= */
function MobileLink({ to, label, setMobileOpen, highlight }) {
  return (
    <Link
      to={to}
      onClick={() => setMobileOpen(false)}
      className={`block px-5 py-4 font-semibold ${highlight
        ? "bg-primary-600 text-white"
        : "hover:bg-gray-800"
        }`}
    >
      {label}
    </Link>
  );
}

function MobileAccordion({ title, open, onClick, items, basePath, setMobileOpen }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center px-5 py-4 font-semibold ${open
          ? "bg-accent-500 text-black"
          : "hover:bg-gray-800"
          }`}
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="bg-[#1a1a1a]">
          {items.map((item) => (
            <Link
              key={item}
              to={`${basePath}/${makeSlug(item)}`}
              onClick={() => setMobileOpen(false)}
              className="block px-7 py-3 text-sm text-gray-200 hover:bg-gray-700"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
