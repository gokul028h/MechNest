import React from "react";

const features = [
  "Industrial & Product Design",
  "Rapid Prototyping & 3D Printing",
  "Ergonomics & Human Factors",
  "Plastics & Enclosure Design",
  "Finite Element Analysis (FEA)",
  "Design for Manufacturing (DFM)",
];

export default function ConsumerProducts() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Consumer Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help bring innovative ideas to market faster. Our end-to-end product development services focus on aesthetics, functionality, and manufacturability to create products that delight consumers.
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-2xl shadow-lg border-l-4 border-green-500 gap-8">
          {/* Icon Area */}
          <div className="flex-shrink-0 text-center md:text-left">
            <div className="text-8xl text-green-500">💡</div>
          </div>

          {/* Text & Feature List */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Applications</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
              {features.map((feature, idx) => (
                <li key={idx} className="relative pl-6 text-gray-700">
                  <span className="absolute left-0 top-1 text-green-600 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
