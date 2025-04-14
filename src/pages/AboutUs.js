import React from "react";

const AboutPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="mb-6 text-lg">
          Allverse Studios was born from the belief that every idea — big or small — deserves a digital universe to thrive in. From day one, we set out to simplify custom web and mobile development for startups, creators, and businesses who need reliable execution without unnecessary tech jargon.
        </p>
        <p className="mb-6 text-lg">
          Over the years, we've partnered with passionate founders, restaurant owners, e-commerce entrepreneurs, and corporates — delivering solutions that are clean, fast, scalable, and intuitive. We don’t just develop; we strategize, design, test, and support you every step of the way.
        </p>
        <p className="mb-6 text-lg">
          Whether you need a website, a mobile app, real-time tracking, QR-based tools, or even hyper-local geo-fencing ads — Allverse Studios is here to bring your ideas into the universe of reality.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Our Mission</h2>
        <p className="mb-6">To enable every idea to find its digital universe through intuitive design, robust development, and strategic technology.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Our Vision</h2>
        <p className="mb-6">To be the most trusted technology partner for entrepreneurs, creators, and enterprises across the globe.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom-built websites & apps (no templates)</li>
          <li>Professional UI/UX design</li>
          <li>Direct communication via WhatsApp & Email</li>
          <li>Future-proof tech stack</li>
          <li>Geo-fencing & proximity marketing support</li>
          <li>Fast delivery and post-launch support</li>
        </ul>
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

export default AboutPage;
