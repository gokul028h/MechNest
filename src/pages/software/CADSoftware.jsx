import React from "react";

export default function CADSoftware() {
  const cadTools = [
    {
      name: "PTC Creo",
      description:
        "Expertise in parametric and direct modeling for large, complex assemblies and robust mechanical design, ensuring flexibility and rapid iteration.",
      color: "text-red-600",
    },
    {
      name: "Dassault SolidWorks",
      description:
        "The industry standard for product design. We utilize its intuitive interface and powerful simulation tools to accelerate development and validation.",
      color: "text-red-600",
    },
    {
      name: "Dassault CATIA",
      description:
        "Specialized in high-end applications, including complex surfacing and systems engineering, primarily for the automotive and aerospace industries.",
      color: "text-blue-800",
    },
    {
      name: "Siemens NX",
      description:
        "A fully integrated solution for advanced design, simulation (CAE), and manufacturing (CAM), enabling a seamless product development lifecycle.",
      color: "text-blue-600",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Our Core CAD Platforms</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We leverage industry-leading CAD software to deliver precision, innovation, and efficiency in every project, from initial concept to final production.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {cadTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2 border-b-4"
          >
            <div className={`text-4xl font-bold mb-4 ${tool.color}`}>{tool.name.split(" ")[0]}</div>
            <h3 className="font-semibold text-xl mb-2">{tool.name}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
