// src/pages/industries/Industries.jsx
import React from "react";
import { Link } from "react-router-dom";

const industries = [
  {
    name: "Automotive",
    path: "/industries/automotive",
    description:
      "Delivering simulation and design solutions for automotive manufacturing, component design, and performance optimization.",
  },
  {
    name: "Aerospace",
    path: "/industries/aerospace",
    description:
      "Providing advanced modeling, simulation, and analysis for aircraft and spacecraft design, improving performance, safety, and efficiency.",
  },
  {
    name: "Consumer Products",
    path: "/industries/consumer-products",
    description:
      "Enhancing product design, usability, and manufacturability with cutting-edge simulation and analysis tools for consumer goods.",
  },
  {
    name: "Industrial Machinery",
    path: "/industries/industrial-machinery",
    description:
      "Optimizing heavy machinery design, performance, and durability through advanced simulations and engineering solutions.",
  },
  {
    name: "Energy & Power",
    path: "/industries/energy-power",
    description:
      "Delivering innovative engineering solutions for renewable energy, power generation, and energy efficiency optimization.",
  },
  {
    name: "Medical Devices",
    path: "/industries/medical-devices",
    description:
      "Providing design and simulation solutions for safe, reliable, and high-performance medical devices and healthcare equipment.",
  },
];

export default function Industries() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-12 text-gray-800">
          Industries We Serve
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              to={industry.path}
              className="block p-6 border rounded-lg shadow hover:shadow-lg transition-shadow bg-gray-50"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {industry.name}
              </h2>
              <p className="text-gray-600">{industry.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
