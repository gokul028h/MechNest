import React from "react";
import { Link } from "react-router-dom";

export default function DemoSection() {
  return (
    <section className="bg-blue-900 text-white py-16 text-center px-8">
      <h2 className="text-3xl font-bold mb-4">Book a Free Demo Today</h2>
      <p className="max-w-3xl mx-auto mb-8">
        Get a complimentary 30-minute session with an expert. Share your idea,
        receive insights, and get a preliminary quote.
      </p>
      <Link
        to="/demo"
        className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
      >
        Book an Appointment →
      </Link>
    </section>
  );
}
