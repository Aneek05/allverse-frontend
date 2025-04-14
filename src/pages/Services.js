import React from "react";

const ServicesPage = () => {
const services = [
  { title: "Website Development", desc: "Responsive, modern, fast-loading custom websites." },
  { title: "Mobile App Development", desc: "Cross-platform mobile apps built with React Native." },
  { title: "UI/UX Design", desc: "Beautiful and user-centered interfaces that convert." },
  { title: "Branding & Identity", desc: "Logo design, visual style guides, and brand kits." },
  { title: "SEO & Performance", desc: "Boost your visibility and site speed with technical optimization." },
  { title: "Maintenance & Support", desc: "Get ongoing tech support and product upgrades." },
  { title: "Geo-Fencing Ads", desc: "Targeted location-based promotions for maximum ROI." },
  { title: "HTML Website Development", desc: "Lightweight and responsive static websites using HTML, CSS, and JS." },
  { title: "WordPress Website Setup", desc: "Affordable and quick website creation using WordPress CMS." }
];

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
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
        <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
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

export default ServicesPage;
