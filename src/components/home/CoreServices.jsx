import React from "react";

const services = [
  {
    title: "Mechanical Design & Analysis",
    details:
      "We provide end-to-end CAD modeling, FEA, CFD, and product optimization solutions — ensuring designs are validated and optimized before manufacturing.",
  },
  {
    title: "Industrial Project Solutions",
    details:
      "Partnering with industries for concept-to-prototype execution, validation, and customized engineering reports to accelerate product development cycles.",
  },
  {
    title: "Training & Certification Programs",
    details:
      "Hands-on training in CAD/CAE tools, real-world projects, certification guidance, and placement assistance for students and professionals.",
  },
  {
    title: "Placement & Career Assistance",
    details:
      "Resume & interview preparation, placement assistance, and upskilling programs to bridge the gap between academics and industry needs.",
  },
];

export default function CoreServices() {
  return (
    <section className="py-16 bg-white text-center px-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              {s.title}
            </h3>
            <p className="text-gray-700 text-sm">{s.details}</p>
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto text-center mt-10">
        <p className="text-gray-700 mb-4">
          With a strong foundation in software-driven solutions and project-based
          learning, we bridge academic knowledge with real-world application.
        </p>
        <a href="/contact" className="inline-block bg-blue-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Contact Us</a>
      </div>
    </section>
  );
}
