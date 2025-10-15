import React from "react";

const features = [
  "Surgical Instruments Design",
  "Implantable & Prosthetic Devices",
  "Diagnostic Equipment",
  "Biocompatible Materials Analysis",
  "Microfluidics & Disposables",
  "Regulatory Compliance Support",
];

export default function MedicalDevices() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Medical Devices</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide precision engineering for the MedTech sector, adhering to strict regulatory
            standards (FDA, ISO 13485) to develop safe, effective, and innovative medical devices
            that improve patient outcomes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-2xl shadow-lg border-l-4 border-teal-400 gap-8">
          <div className="flex-shrink-0 text-center md:text-left">
            <div className="text-8xl text-teal-400">⚕️</div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Applications</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none">
              {features.map((feature, idx) => (
                <li key={idx} className="relative pl-6 text-gray-700">
                  <span className="absolute left-0 top-1 text-green-600 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
