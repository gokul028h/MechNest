import React from "react";
import CardBox from "../common/CardBox";

export default function SoftwareExpertise() {
  return (
    <section className="py-16 bg-gray-50 text-center px-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Software Expertise
      </h2>
      <p className="max-w-4xl mx-auto text-gray-700 mb-8">
        We bring together the most powerful CAD and CAE platforms to deliver
        world-class design and analysis services. From Creo and SolidWorks to
        ANSYS and Abaqus, we use the right tool for every engineering challenge.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Creo",
              "SolidWorks",
              "CATIA",
              "ANSYS",
              "AutoCAD",
              "Siemens NX",
              "HyperMesh",
              "MSC Nastran",
              "Abaqus",
            ].map((name, idx) => (
              <CardBox key={idx} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
                <p className="text-gray-700 text-sm mt-2">
                  High-performance tool for mechanical design and analysis.
                </p>
              </CardBox>
            ))}
      </div>
    </section>
  );
}
