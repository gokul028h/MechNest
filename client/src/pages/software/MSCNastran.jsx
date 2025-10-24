import React from "react";

export default function MSCNastran() {
  const capabilities = [
    "Linear & Non-linear Statics",
    "Normal Modes Analysis",
    "Dynamic & Frequency Response",
    "Acoustic & Aeroelasticity",
    "Structural Optimization",
    "Fatigue Analysis",
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Advanced Structural Analysis</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Leveraging MSC Nastran, the world's premier FEA solver, to deliver precise and reliable simulations for the most demanding engineering applications.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-lg border-l-4 border-blue-700">
        <div className="flex-shrink-0 text-center md:text-left">
          <div className="text-7xl text-blue-700">🛰️</div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">MSC Nastran Expertise</h3>
          <p className="text-gray-600 mb-6">
            Our team utilizes MSC Nastran to perform in-depth analysis of stress, vibration, and dynamics, ensuring your designs meet rigorous performance and safety standards, especially for aerospace and automotive sectors.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
            {capabilities.map((capability) => (
              <li key={capability} className="relative pl-6 text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-green-500 before:font-bold before:text-lg">
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
