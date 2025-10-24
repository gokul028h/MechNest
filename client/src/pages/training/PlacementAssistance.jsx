import React from "react";

export default function PlacementAssistance() {
  const supportItems = [
    "Resume Building Workshops",
    "Mock Interview Sessions",
    "Technical & Aptitude Tests",
    "Access to Exclusive Job Portals",
    "On-Campus Recruitment Drives",
    "Career Counseling",
  ];

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          Career & Placement Assistance
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your journey doesn't end with training. We are committed to helping
          you launch your career by connecting your new skills with the right
          opportunities.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-10 rounded-xl shadow-lg max-w-6xl mx-auto">
        {/* Icon Area */}
        <div className="flex-shrink-0 text-center">
          <div className="text-8xl text-blue-600">💼</div>
        </div>

        {/* Text Area */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Bridging Training and Employment
          </h3>
          <p className="text-gray-600 mb-6">
            Our dedicated placement cell works to prepare you for the professional world and connect you with our network of top engineering and technology companies.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {supportItems.map((item) => (
              <li key={item} className="relative pl-6 text-gray-800 before:absolute before:left-0 before:top-1 before:text-green-500 before:content-['✓']">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
