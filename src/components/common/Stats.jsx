// src/components/common/Stats.jsx
import React, { useEffect, useState } from "react";

const statsData = [
  { number: 50, label: "Happy Clients" },
  { number: 100, label: "Projects Delivered" },
  { number: 5, label: "Awards" },
  { number: 15, label: "Years of Experience" },
];

export default function Stats() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) =>
          val < statsData[i].number ? val + Math.ceil(statsData[i].number / 40) : statsData[i].number
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-blue-600">Impact</span> in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our journey of innovation, excellence, and trust built over the years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 border border-gray-100"
            >
              <h3 className="text-5xl font-extrabold text-blue-600 drop-shadow-sm">
                {counts[idx]}+
              </h3>
              <p className="text-gray-700 mt-3 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-200/30 blur-3xl rounded-full opacity-60 -z-10"></div>
    </section>
  );
}
