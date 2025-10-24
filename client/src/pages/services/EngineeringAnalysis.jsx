import React from "react";

export default function EngineeringAnalysis() {
  return (
    <section className="px-6 py-16 bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Engineering Analysis</h1>
        <p className="text-gray-600 leading-relaxed">
          Delivering precision-driven design validation and performance optimization for mechanical industries. 
          Our simulations and analyses ensure products meet safety, efficiency, and reliability standards.
        </p>
      </div>

      {/* Expertise Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Finite Element Analysis (FEA)</h3>
          <p className="text-gray-600">
            Structural stress, strain, and vibration analysis for components and assemblies.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Computational Fluid Dynamics (CFD)</h3>
          <p className="text-gray-600">
            Fluid flow, thermal performance, and aerodynamic simulations.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Thermal & Vibration Analysis</h3>
          <p className="text-gray-600">
            Ensure product reliability under thermal loads and dynamic conditions.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Optimization & Validation</h3>
          <p className="text-gray-600">
            Improve efficiency, reduce failure risks, and validate designs before production.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-2 text-blue-900">Ready to Transform Your Designs?</h3>
        <p className="text-gray-600 mb-6">
          Partner with MechNest Solutions to bring your engineering ideas to life with precision and confidence.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          📩 Contact Us Today
        </a>
      </div>
    </section>
  );
}
