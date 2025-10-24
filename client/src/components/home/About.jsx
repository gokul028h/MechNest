import React from "react";

export default function About() {
  return (
    <section className="py-16 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
      <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed mb-6">
        At MechNest Solutions, we are committed to delivering innovative design,
        modeling, and analysis solutions for the mechanical engineering
        industry. We help industries solve complex challenges and empower
        students through professional training in CAD and CAE tools.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Mission</h3>
          <p className="text-gray-700">
            Deliver high-quality design, analysis, and training services that
            strengthen industries and empower professionals.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Vision</h3>
          <p className="text-gray-700">
            To shape the future of engineering by enabling industries to
            innovate and individuals to excel.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">
            Core Values
          </h3>
          <p className="text-gray-700">
            Quality · Integrity · Innovation · Empowerment · Collaboration
          </p>
        </div>
      </div>
    </section>
  );
}
