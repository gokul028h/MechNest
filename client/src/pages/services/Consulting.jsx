import React from "react";
import { useNavigate } from "react-router-dom";

export default function Consulting() {
  const navigate = useNavigate();

  const handleContactRedirect = () => {
    navigate("/contact"); // make sure your contact route is "/contact"
  };

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Consulting & Custom Engineering
        </h1>
        <p className="text-gray-600 leading-relaxed">
          We bridge the gap between complex challenges and innovative solutions with strategic consulting 
          and bespoke engineering tailored to your unique operational needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Strategic Consulting</h3>
          <p className="text-gray-600 mb-4">
            Analyze challenges, identify opportunities, and create a roadmap for process optimization and technological integration.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Feasibility Studies & Analysis</li>
            <li>Technology Stack Assessment</li>
            <li>Workflow & Process Optimization</li>
            <li>Regulatory Compliance Guidance</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
          <h3 className="font-semibold text-xl mb-2">Custom Engineering</h3>
          <p className="text-gray-600 mb-4">
            Design, build, and deploy tailor-made hardware and software solutions where off-the-shelf products fall short.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Bespoke Machine & Tool Design</li>
            <li>Custom Software & Firmware</li>
            <li>System Integration & Automation</li>
            <li>Prototyping & Product Development</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <button
          onClick={handleContactRedirect}
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Discuss Your Project
        </button>
      </div>
    </section>
  );
}
