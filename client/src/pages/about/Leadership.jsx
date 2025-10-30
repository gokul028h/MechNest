import React from "react";

const leadershipTeam = [
  {
    name: "Chandran Nagendran",
    title: "Founder & CEO",
    bio: "With over 20 years in mechanical design, Rohan founded MechNest to bridge the gap between theoretical engineering and practical, industry-ready solutions.",
    img: "/mechnest.jpg"
  }
];

export default function Leadership() {
  return (
    <section className="px-6 py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Our Leadership Team</h1>
        <p className="text-gray-600 mb-12">
          Meet the visionaries guiding MechNest Solutions towards a future of engineering excellence and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <img
                src={member.img}
                alt={`Profile of ${member.name}`}
                className="h-32 w-32 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow"
              />
              <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.title}</p>
              <p className="text-gray-500 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
