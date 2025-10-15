import React from "react";

const trainings = [
  {
    icon: "⚡",
    title: "Ansys Training",
    description:
      "From structural mechanics to fluid dynamics, learn to solve complex multi-physics problems with the industry's leading simulation software.",
    link: "https://www.ansys.com/en-in/training-center",
    colorClass: "text-yellow-500",
  },
  {
    icon: "🕸️",
    title: "HyperMesh Training",
    description:
      "Become an expert in pre-processing. Master high-quality meshing techniques for complex geometries to ensure accurate and reliable FEA results.",
    link: "https://learn.altair.com/courses/getting-started-with-hypermesh-elearning",
    colorClass: "text-blue-600",
  },
  {
    icon: "🌉",
    title: "Abaqus Training",
    description:
      "Specialize in advanced non-linear analysis. Learn to simulate complex material behaviors, contact interactions, and large deformations with precision.",
    link: "https://pigsolearning.com/abaqus-training/",
    colorClass: "text-blue-800",
  },
];

export default function CAETraining() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">CAE Software Training</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Develop practical, in-demand skills with our expert-led training programs. Master simulation to validate designs and predict real-world performance.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {trainings.map((training) => (
          <div
            key={training.title}
            className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 flex flex-col hover:translate-y-2 transition-transform"
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className={`text-4xl mb-4 ${training.colorClass}`}>{training.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{training.title}</h3>
              <p className="text-gray-600 flex-1">{training.description}</p>
            </div>
            <div className="p-6 bg-gray-100 border-t border-gray-200">
              <a
                href={training.link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 font-semibold hover:text-blue-800 inline-block transition"
              >
                View Course Details &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-10 text-gray-700">
        <h3 className="text-xl font-semibold mb-3">Training & Careers</h3>
        <p className="mb-3">
          Our programs are designed to bridge the gap between academic knowledge and industry requirements. We provide hands-on learning, guidance for industry-recognized certification exams, and placement assistance to help students and professionals achieve their career goals.
        </p>
        <p>
          Services include resume & interview preparation, placement assistance in mechanical industries, and upskilling programs for working professionals.
        </p>
      </div>
    </section>
  );
}
