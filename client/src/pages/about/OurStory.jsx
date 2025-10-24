import React from "react";
import { Link } from "react-router-dom";

export default function OurStory() {
  return (
    <div className="bg-gray-50 min-h-screen font-inter">
      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Your Strategic Partner in Mechanical Engineering
            </h1>
            <p className="text-gray-700 mb-4">
              Choosing the right engineering partner is crucial for success. At
              MechNest Solutions, we are more than just a service provider; we
              are an extension of your team, dedicated to turning your most
              complex challenges into powerful, market-ready solutions.
            </p>
            <p className="text-gray-700 mb-6">
              Our foundation is built on a deep understanding of mechanical
              principles, combined with a relentless pursuit of innovation. We
              integrate seamlessly into your workflow to ensure every project
              milestone is met with precision and excellence.
            </p>

            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-1">✓</span>
                <div>
                  <strong>Unrivaled Expertise:</strong> Our team consists of
                  seasoned engineers and industry specialists with a proven
                  track record across diverse sectors.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-1">✓</span>
                <div>
                  <strong>Client-Centric Approach:</strong> We believe in
                  collaborative partnerships. We listen, adapt, and deliver
                  tailored solutions that align perfectly with your goals.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-1">✓</span>
                <div>
                  <strong>Cutting-Edge Technology:</strong> We leverage the
                  latest CAD, CAE, and simulation software to ensure maximum
                  accuracy, efficiency, and innovation in every design.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-1">✓</span>
                <div>
                  <strong>End-to-End Solutions:</strong> From initial concept
                  and design to rigorous analysis and project support, we offer
                  a comprehensive suite of services under one roof.
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
              alt="Engineers collaborating on a project"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* Detailed Company Content */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At MechNest Solutions, we are committed to delivering innovative
            design, modeling, and analysis solutions for the mechanical
            engineering industry. Our expertise spans solving complex
            engineering challenges, executing projects for leading mechanical
            companies, and providing advanced simulation and product design
            services that drive efficiency and performance.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            In addition to our engineering services, we empower students and
            professionals through specialized training in mechanical design and
            analysis software. Our programs build practical skills, enhance
            employability, and prepare individuals for industry-recognized
            certifications. With dedicated placement assistance and career
            guidance, we ensure learners are equipped to thrive in today’s
            competitive engineering landscape.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Mission</h3>
          <p className="text-gray-700 mb-4">
            Deliver high-quality design, analysis, and training services that
            strengthen industries and empower professionals.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Vision</h3>
          <p className="text-gray-700 mb-4">
            To shape the future of engineering by enabling industries to
            innovate and individuals to excel.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">Core Values</h3>
          <p className="text-gray-700 mb-6">Quality · Integrity · Innovation · Empowerment · Collaboration</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900">Mechanical Design & Analysis</h4>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>CAD Modeling – 3D design of mechanical components and systems.</li>
                <li>Finite Element Analysis (FEA) – Stress, strain, vibration, and failure analysis.</li>
                <li>Computational Fluid Dynamics (CFD) – Fluid flow, thermal performance, and aerodynamics.</li>
                <li>Product Validation & Optimization – Ensuring efficiency, durability, and cost-effectiveness.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900">Industrial Project Solutions</h4>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                <li>Concept-to-Prototype Support</li>
                <li>Design Validation & Simulation Reports</li>
                <li>Customized Engineering Solutions and project execution</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Training & Careers</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Beyond engineering solutions, MechNest Solutions is dedicated to
            shaping the next generation of mechanical engineers and upskilling
            professionals. Our training programs are hands-on, industry-focused,
            and include certification guidance and placement assistance to help
            students and professionals achieve their career goals.
          </p>

          <div className="mt-8 text-gray-700">
            <p className="mb-1">📩 Email: <a className="text-blue-900 underline" href="mailto:Chandru.mechnestsolutions@gmail.com">Chandru.mechnestsolutions@gmail.com</a></p>
            <p className="mb-1">📞 Phone: +91 - 9751006142</p>
            <p className="mb-1">📍 Location: No. 1/101, Mariyamman Koil street, Sethuvandai, Gudiyattam, Vellore District, Tamil Nadu – 635 803</p>
          </div>

          <div className="mt-10">
            <Link to="/demo" className="inline-block bg-yellow-400 text-blue-900 px-5 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition">Book a Free Demo</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
