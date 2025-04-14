import React, { useState } from "react";

const ContactPage = () => {
  const services = [
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "Branding & Identity",
    "SEO & Performance",
    "Maintenance & Support",
    "Geo-Fencing Ads",
    "HTML Website Development",
    "WordPress Website Setup"
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://allverse-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Server error.");
    }
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/assets/logo.png" alt="Allverse Logo" className="h-16 w-auto object-contain" />
            <span className="text-white text-lg font-semibold hidden md:inline">Where Every Idea Finds It's Universe</span>
          </div>
          <nav className="space-x-6 text-gray-300 text-base font-medium">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About Us</a>
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/technologies" className="hover:text-white">Technologies</a>
            <a href="/contact" className="hover:text-white">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">We'd love to hear from you</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full border p-3 rounded" required />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full border p-3 rounded" required />

          <select name="service" value={formData.service} onChange={handleChange} className="w-full border p-3 rounded" required>
            <option value="">Select a Service</option>
            {services.map((service, idx) => (
              <option key={idx} value={service}>{service}</option>
            ))}
          </select>

          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full border p-3 rounded h-40" required />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
        </form>

        <div className="text-center mt-10 space-y-3">
          <a href="https://wa.me/919307661898" className="inline-block mt-2 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600">Message Us on WhatsApp</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center space-x-4">
            <img src="/assets/logo.png" alt="Allverse Logo" className="h-16 w-auto object-contain" />
            <span className="text-white text-lg font-semibold hidden md:inline">Where Every Idea Finds It's Universe</span>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/technologies" className="hover:underline">Technologies</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
            <p>Email: contact@allverse-studios.com</p>
            <p>Phone: +91-9307661898</p>
          </div>
        </div>
        <div className="text-center text-sm mt-10 text-gray-500">
          © {new Date().getFullYear()} Allverse Studios. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
