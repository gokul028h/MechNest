import React from "react";

export default function CAESoftware() {
  const caeTools = [
    {
      name: "Ansys",
      icon: "⚡",
      description:
        "Proficiency in multi-physics simulation, including structural, thermal, and fluid dynamics (CFD), to solve complex engineering challenges with high fidelity.",
      color: "text-yellow-500",
    },
    {
      name: "Altair HyperMesh",
      icon: "🕸️",
      description:
        "Expertise in high-performance finite element pre-processing, delivering high-quality meshing for the most complex geometries to ensure accurate analysis.",
      color: "text-blue-700",
    },
    {
      name: "Dassault Abaqus",
      icon: "🌉",
      description:
        "Specialized in advanced non-linear analysis, material modeling, and contact simulations for predicting the sophisticated behavior of materials and assemblies.",
      color: "text-blue-800",
    },
    {
      name: "Core FEA Expertise",
      icon: "📈",
      description:
        "Foundation in Finite Element Analysis principles, allowing for solver-agnostic problem solving and a deep understanding of simulation results and their implications.",
      color: "text-gray-700",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">CAE Simulation & Analysis</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We leverage advanced Computer-Aided Engineering (CAE) tools to validate designs, predict performance, and optimize products for real-world conditions, reducing development time and costs.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {caeTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2 border border-gray-200"
          >
            <div className={`text-4xl mb-4 ${tool.color}`}>{tool.icon}</div>
            <h3 className="font-semibold text-xl mb-2">{tool.name}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
