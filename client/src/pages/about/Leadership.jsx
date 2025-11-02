import React from "react";

const leadershipTeam = [
  {
    name: "Chandran Nagendran",
    title: "Founder & CEO",
    bio: "Chandran is a seasoned Mechanical Engineer with over 20 years of expertise in design, simulation and vibration analysis. As the Founder of MechNest Solutions, he leads projects that transform innovative mechanical concepts into industry-ready engineering solutions.

With advanced proficiency in tools such as ANSYS, Hypermesh, Abaqus, CATIA, SolidWorks and Creo, Chandran brings a strong combination of technical accuracy and practical insight to every project. His work spans 3D modeling, finite element analysis (FEA) and dynamic system studies, consistently delivering results marked by precision, reliability and professional excellence.

At the core of his approach lies a commitment to quality, innovation and complete client satisfaction — making MechNest Solutions a trusted partner in mechanical design and analysis.",
    img: "/mechnest.jpg"
  }
];

export default function Leadership() {
  return (
    <section className="px-6 py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Our Leadership Team
        </h1>
        <p className="text-gray-600 mb-12">
          Meet the visionaries guiding MechNest Solutions towards a future of
          engineering excellence and innovation.
        </p>

        {/* Center the single card */}
        <div className="flex justify-center">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition transform hover:-translate-y-2 w-80"
            >
              <img
                src={member.img}
                alt={`Profile of ${member.name}`}
                className="h-32 w-32 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                {member.name}
              </h3>
              {/* Make Founder & CEO bold */}
              <p className="text-blue-600 font-bold mb-3">{member.title}</p>
              <p className="text-gray-500 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
