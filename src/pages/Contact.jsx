import React, { useState } from "react";
import CardBox from "../components/common/CardBox";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-gray-700">
          Whether you are a company seeking engineering solutions or a
          professional looking to grow, MechNest Solutions is ready to
          collaborate and support your goals.
        </p>
      </div>

      <CardBox className="max-w-3xl mx-auto p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-700">
          <p>📩 Email: <a href="mailto:Chandru.mechnestsolutions@gmail.com" className="text-blue-900 underline">Chandru.mechnestsolutions@gmail.com</a></p>
          <p>📞 Phone: +91 - 9751006142</p>
          <p>
            📍 Location: No. 1/101, Mariyamman Koil street, Sethuvandai,
            Gudiyattam, Vellore District, Tamil Nadu – 635 803
          </p>
        </div>
      </CardBox>
    </section>
  );
}
