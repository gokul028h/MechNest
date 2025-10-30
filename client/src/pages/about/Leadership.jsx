import React from "react";

const leadershipTeam = [
  {
    name: "Rohan Verma",
    title: "Founder & CEO",
    bio: "With over 20 years in mechanical design, Rohan founded MechNest to bridge the gap between theoretical engineering and practical, industry-ready solutions.",
    img: "/src/assets/images/mechnest.jpg?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Anjali Mehta",
    title: "Chief Technology Officer (CTO)",
    bio: "Anjali is a pioneer in CAE and simulation technologies. She leads our technical teams, ensuring we leverage the most advanced software to solve complex challenges.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Sameer Khan",
    title: "Head of Operations",
    bio: "Sameer's expertise in project management and operational efficiency ensures that every client project is delivered on time, within budget, and to the highest quality standards.",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop",
  },
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
