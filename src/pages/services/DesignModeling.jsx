import React from "react";

export default function DesignModeling() {
  const services = [
    {
      title: "3D CAD Modeling",
      description: "High-quality 3D models for components, assemblies, and products.",
    },
    {
      title: "Parametric Design",
      description: "Flexible parametric models that allow quick modifications and optimization.",
    },
    {
      title: "Product Optimization",
      description: "Designs optimized for cost, durability, and performance before manufacturing.",
    },
    {
      title: "Prototype Preparation",
      description: "Models ready for rapid prototyping and testing workflows.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">Design & Modeling</h1>
        <p className="text-gray-600 leading-relaxed">
          Our design and modeling services provide precise 3D CAD models, parametric designs, and assemblies for mechanical components and systems. 
          We focus on creating designs that are manufacturable, optimized, and ready for analysis.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
