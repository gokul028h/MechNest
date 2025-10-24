// src/components/common/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold mb-4 text-white">About</h3>
          <Link to="/about/our-story" className="block mb-2 hover:text-white">Our Story</Link>
          <Link to="/about/leadership" className="block mb-2 hover:text-white">Leadership</Link>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Services</h3>
          <Link to="/services/design-modeling" className="block mb-2 hover:text-white">Design & Modeling</Link>
          <Link to="/services/engineering-analysis" className="block mb-2 hover:text-white">Engineering Analysis</Link>
          <Link to="/services/industrial-project" className="block mb-2 hover:text-white">Industrial Projects</Link>
          <Link to="/services/consulting" className="block mb-2 hover:text-white">Consulting</Link>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Software</h3>
          <Link to="/software/cad" className="block mb-2 hover:text-white">CAD Software</Link>
          <Link to="/software/cae" className="block mb-2 hover:text-white">CAE Software</Link>
          <Link to="/software/autocad" className="block mb-2 hover:text-white">AutoCAD</Link>
          <Link to="/software/mscnastran" className="block mb-2 hover:text-white">MSC Nastran</Link>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Training & Resources</h3>
          <Link to="/training/cad" className="block mb-2 hover:text-white">CAD Training</Link>
          <Link to="/training/cae" className="block mb-2 hover:text-white">CAE Training</Link>
          <Link to="/training/placement" className="block mb-2 hover:text-white">Placement Assistance</Link>
          <Link to="/training/certification" className="block mb-2 hover:text-white">Certification Prep</Link>
          <Link to="/resources" className="block mb-2 hover:text-white">Resources</Link>
          <Link to="/demo" className="block mb-2 hover:text-white">Book a Demo</Link>
          <Link to="/contact" className="block mb-2 hover:text-white">Contact</Link>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>
          <p className="text-gray-300 mb-2">📩 <a href="mailto:Chandru.mechnestsolutions@gmail.com" className="hover:text-white">Chandru.mechnestsolutions@gmail.com</a></p>
          <p className="text-gray-300 mb-2">📞 +91 - 9751006142</p>
          <p className="text-gray-300">📍 No. 1/101, Mariyamman Koil street, Sethuvandai, Gudiyattam, Vellore District, Tamil Nadu – 635 803</p>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 mt-4">
        <p>© 2025 MechNest Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
