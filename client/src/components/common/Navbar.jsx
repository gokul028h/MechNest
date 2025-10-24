import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar = React.forwardRef(function Navbar(_, ref) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Dropdown items
  const dropdownItems = {
    about: [
      { name: "Our Story", path: "/about/our-story" },
      { name: "Leadership", path: "/about/leadership" },
    ],
    services: [
      { name: "Design Modeling", path: "/services/design-modeling" },
      { name: "Engineering Analysis", path: "/services/engineering-analysis" },
      { name: "Industrial Project", path: "/services/industrial-project" },
      { name: "Consulting", path: "/services/consulting" },
    ],
    software: [
      { name: "CAD Software", path: "/software/cad" },
      { name: "CAE Software", path: "/software/cae" },
      { name: "AutoCAD", path: "/software/autocad" },
      { name: "MSC Nastran", path: "/software/mscnastran" },
    ],
    training: [
      { name: "CAD Training", path: "/training/cad" },
      { name: "CAE Training", path: "/training/cae" },
      { name: "Placement Assistance", path: "/training/placement" },
      { name: "Certification Prep", path: "/training/certification" },
    ],
    resources: [{ name: "Resources", path: "/resources" }],
    industries: [
      { name: "Overview", path: "/industries" },
      { name: "Automotive", path: "/industries/automotive" },
      { name: "Aerospace", path: "/industries/aerospace" },
      { name: "Consumer Products", path: "/industries/consumer-products" },
      { name: "Industrial Machinery", path: "/industries/industrial-machinery" },
      { name: "Energy & Power", path: "/industries/energy-power" },
      { name: "Medical Devices", path: "/industries/medical-devices" },
    ],
  };

  return (
    <header ref={ref} className="bg-white/90 backdrop-blur-md shadow-md fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 tracking-wide hover:text-blue-800 transition no-underline hover:no-underline"
          style={{ textDecoration: 'none' }}
        >
          🔧 MechNest<span className="text-gray-800"> Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {Object.keys(dropdownItems).map((key) => {
            const items = dropdownItems[key];
            // If only one child (like resources), render a direct link
            if (items.length === 1) {
              const item = items[0];
              return (
                <Link
                  key={key}
                  to={item.path}
                  className="text-gray-700 font-medium hover:text-blue-700 transition"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              );
            }

            return (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={() => setOpenDropdown((prev) => (prev === key ? null : prev))}
              >
                <button
                  className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-700 transition"
                  onFocus={() => setOpenDropdown(key)}
                  onKeyDown={(e) => e.key === "Escape" && setOpenDropdown(null)}
                  aria-expanded={openDropdown === key}
                  aria-controls={`dropdown-${key}`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {items.length > 1 && (
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === key ? "rotate-180" : ""}`} />
                  )}
                </button>

                {/* Dropdown */}
                {items.length > 1 && (
                  <div
                    id={`dropdown-${key}`}
                    className={`absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg pointer-events-auto transition-all duration-200 z-50 ${
                      openDropdown === key ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                    }`}
                    onFocus={() => setOpenDropdown(key)}
                  >
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Contact */}

          <Link
            to="/contact"
            className="ml-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium shadow hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition no-underline hover:no-underline"
            style={{ textDecoration: 'none' }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {Object.keys(dropdownItems).map((key) => (
            <div key={key} className="flex flex-col gap-2">
              <span className="text-gray-700 font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
              <div className="flex flex-col pl-4 gap-1">
                {dropdownItems[key].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-700 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md font-medium shadow hover:shadow-lg transition no-underline hover:no-underline"
            style={{ textDecoration: 'none' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
});

export default Navbar;
