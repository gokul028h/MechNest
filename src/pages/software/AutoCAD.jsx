import React from "react";

export default function AutoCAD() {
  const services = [
    "2D Technical Drawings",
    "Manufacturing & Assembly Plans",
    "3D Model to 2D Conversion",
    "Bill of Materials (BOM)",
    "Piping & Instrumentation (P&ID)",
    "Legacy Drawing Digitization",
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">AutoCAD & Precision Drafting</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We transform your engineering concepts into precise, standardized technical drawings ready for manufacturing, assembly, and documentation.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex-shrink-0 text-center md:text-left">
          <div className="text-8xl md:text-7xl text-blue-600">📐</div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">From Concept to Blueprint</h3>
          <p className="text-gray-600 mb-6">
            Our drafting experts use AutoCAD to produce clear and accurate 2D drawings that adhere to the highest industry standards (ASME, ISO). We ensure every detail is captured for flawless execution in production.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
            {services.map((service) => (
              <li key={service} className="relative pl-6 text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold before:text-lg">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
