import React from "react";

export default function CertificationPrep() {
  const features = [
    "Instruction from Certified Experts",
    "Official Curriculum & Courseware",
    "Hands-On Labs & Practical Exercises",
    "Full-Length Mock Exams & Practice Tests",
    "Targeted Exam Objective Reviews",
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          Certification Preparations
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Go into your certification exam with confidence. Our targeted preparation
          courses are designed to bridge the gap between knowledge and exam success.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-10 rounded-xl shadow-lg max-w-6xl mx-auto">
        {/* Icon Area */}
        <div className="flex-shrink-0 text-center">
          <div className="text-8xl text-green-600">🎯</div>
        </div>

        {/* Text Area */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Pathway to Certification
          </h3>
          <p className="text-gray-600 mb-6">
            We provide a structured learning environment that focuses on the core
            competencies and skills required to pass your certification exams on the first attempt.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-1 gap-3 text-left">
            {features.map((feature) => (
              <li
                key={feature}
                className="relative pl-6 text-gray-800 before:absolute before:left-0 before:top-1 before:text-green-500 before:content-['✓']"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
