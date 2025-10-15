import React from "react";

export default function IndustrialProject() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Industrial Project Support
        </h1>
        <p className="text-gray-600 leading-relaxed">
          MechNest Solutions partners with companies to execute projects of all scales — from concept design to final implementation. 
          We help industries optimize processes, reduce development cycles, and enhance product performance.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">On-Site Engineering</h3>
          <p className="text-gray-600">
            Our experts assist at your facility for implementation, troubleshooting, and process optimization.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Supplier Coordination</h3>
          <p className="text-gray-600">
            We coordinate with vendors to ensure components meet quality standards and timelines.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Installation & Commissioning</h3>
          <p className="text-gray-600">
            Providing guidance during equipment setup and critical launch phases.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Tooling & Fixture Design</h3>
          <p className="text-gray-600">
            Designing custom jigs, fixtures, and tooling for accurate and efficient assembly.
          </p>
        </div>
      </div>
    </section>
  );
}
