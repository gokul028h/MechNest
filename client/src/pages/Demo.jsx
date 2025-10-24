import React, { useState } from "react";
import CardBox from "../components/common/CardBox";

export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || "Failed to submit demo request");
    }

    console.log("Success:", data);
    alert(data.message);

    // Reset form
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      date: "", 
      message: "" 
    });

  } catch (error) {
    console.error("Error:", error);
    alert(error.message || "Failed to submit demo request.");
  }
};

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Book a Free Demo</h1>
        <p className="text-gray-700 text-lg">
          Schedule a 30-minute session with our expert engineers. Share your idea, receive insights, and get a preliminary quote tailored for your project.
        </p>
      </div>

      <CardBox className="max-w-3xl mx-auto p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Brief description of your project / requirements"
            rows={4}
            className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
          >
            Submit Request
          </button>
        </form>
      </CardBox>

      <div className="max-w-4xl mx-auto mt-10 text-gray-700 text-center">
        <p>Prefer direct contact? Reach us at:</p>
        <p className="mt-2">📩 <a href="mailto:Chandru.mechnestsolutions@gmail.com" className="text-blue-900 underline">Chandru.mechnestsolutions@gmail.com</a></p>
        <p className="mt-1">📞 +91 - 9751006142</p>
      </div>
    </section>
  );
}
