import React from "react";
import CardBox from "../components/common/CardBox";

const sections = [
  {
    title: "From the Blog",
    icon: "📖",
    items: [
      {
        tag: "Automotive",
        title: "The Future of FEA in Electric Vehicle Chassis Design",
        excerpt:
          "Discover how advanced simulation with tools like MSC Nastran is crucial for optimizing the structural integrity and weight of EV platforms.",
        link: "#",
      },
      {
        tag: "Training",
        title: "5 Common Mistakes to Avoid in Your SolidWorks Certification Exam",
        excerpt:
          "Our certified instructors share key tips and common pitfalls to help you prepare effectively and pass your CSWP exam with confidence.",
        link: "#",
      },
      {
        tag: "Aerospace",
        title: "Advanced Composites: Simulating Material Behavior in CATIA",
        excerpt:
          "A deep dive into the specialized tools within CATIA for designing and analyzing the behavior of composite materials in aerostructures.",
        link: "#",
      },
    ],
  },
  {
    title: "Case Studies",
    icon: "📈",
    items: [
      {
        tag: "Aerospace",
        title: "Project: Weight Reduction of an Aircraft Bracket by 30%",
        excerpt:
          "How we utilized topology optimization in Siemens NX and validation with Ansys to redesign a critical bracket, saving weight without compromising safety.",
        link: "#",
      },
      {
        tag: "Industrial Machinery",
        title: "Project: Automation of a Manufacturing Assembly Line",
        excerpt:
          "A detailed look at the design and implementation of a custom robotic arm and conveyor system, improving production efficiency by 200%.",
        link: "#",
      },
      {
        tag: "Medical Devices",
        title: "Project: Prototyping a New Surgical Instrument",
        excerpt:
          "From initial concept in SolidWorks to 3D-printed prototypes, we followed strict ISO 13485 guidelines to accelerate the development of a novel device.",
        link: "#",
      },
    ],
  },
  {
    title: "Success Stories",
    icon: "🏆",
    items: [
      {
        tag: "Placement",
        title: "From Trainee to Design Engineer at a Top Automotive OEM",
        excerpt:
          '"The hands-on training in CATIA and the placement assistance program were invaluable. I felt completely prepared for the technical interviews and landed my dream job." - A. Kumar',
        link: "#",
      },
      {
        tag: "Certification",
        title: "Passing the Ansys FEA Certification on the First Attempt",
        excerpt:
          '"The mock exams and expert guidance were key. I was able to master complex topics in thermal and structural analysis and confidently pass the certification." - S. Patel',
        link: "#",
      },
    ],
  },
  {
    title: "Downloads",
    icon: "📥",
    items: [
      {
        tag: "Whitepaper",
        title: "The Role of Simulation in Modern Product Development",
        excerpt:
          "An in-depth look at how CAE tools are transforming industries by reducing the need for physical prototypes and accelerating innovation.",
        link: "#",
      },
      {
        tag: "eBook",
        title: "Beginner's Guide to Parametric Modeling in Creo",
        excerpt:
          "Our comprehensive eBook covering the fundamental principles, tools, and best practices for getting started with PTC Creo.",
        link: "#",
      },
    ],
  },
];

export default function Resources() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Knowledge & Resources
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Explore our latest insights, detailed project analyses, success stories,
          and valuable downloads to stay ahead in the engineering industry.
        </p>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            <span className="text-4xl mr-2">{section.icon}</span>
            {section.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {section.items.map((item, idx) => (
              <CardBox key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 flex-grow mb-4">{item.excerpt}</p>

                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                  
                </div>
              </CardBox>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
