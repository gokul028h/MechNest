import React from "react";

export default function CADTraining() {
  const certifications = [
    {
      icon: "🔩",
      title: "Certified SolidWorks Professional",
      level: "Professional Level",
      description:
        "Prove your ability to design and analyze parametric parts and complex assemblies using a wide range of advanced SolidWorks features.",
      link: "https://www.solidworks.com/certifications/solidworks-cad-design-professional",
    },
    {
      icon: "📐",
      title: "AutoCAD Certified User",
      level: "Associate Level",
      description:
        "Demonstrate your fundamental knowledge and proficiency in 2D drafting, drawing, and design using the world's leading CAD software.",
      link: "https://www.onlc.com/blog/is-autocad-certification-worth-it/#:~:text=The%20AutoCAD%20Certified%20User%20(ACU,Adding%20and%20managing%20additional%20objects",
    },
    {
      icon: "✈️",
      title: "CATIA V5 Part Design Expert",
      level: "Expert Level",
      description:
        "Master advanced techniques including complex solid creation, surface modeling, and parametric design for high-end engineering.",
      link: "https://memko.com.au/training-certification/catiav5-certification/",
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">CAD Training & Certification</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Validate your expertise and advance your career with our official training programs, designed to prepare you for industry-recognized certifications.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certifications.map((cert) => (
          <div key={cert.title} className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 flex flex-col">
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{cert.title}</h3>
              <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4">{cert.level}</span>
              <p className="text-gray-600 flex-1">{cert.description}</p>
            </div>
            <div className="p-6 bg-gray-100 border-t border-gray-200">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Learn More & Enroll
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
