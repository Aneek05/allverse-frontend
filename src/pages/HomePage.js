import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

const clientLogos = [
  "/assets/client1.png",
  "/assets/client2.png",
  "/assets/client3.png",
  "/assets/client4.png",
];

const serviceData = [
  {
    title: "Website Development",
    desc: "Custom websites tailored to your brand.",
    icon: "/assets/web-dev.png"
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform apps for Android and iOS.",
    icon: "/assets/mobile-dev.png"
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive and modern user experiences.",
    icon: "/assets/uiux.png"
  },
  {
    title: "Branding",
    desc: "Logo, visual identity & digital presence.",
    icon: "/assets/branding.png"
  },
  {
    title: "SEO Optimization",
    desc: "Improve visibility on search engines.",
    icon: "/assets/seo.png"
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing support and updates.",
    icon: "/assets/support.png"
  },
  {
    title: "Geo-Fencing Ads",
    desc: "Targeted location-based promotions to reach the right customers at the right time.",
    icon: "/assets/geofencing.png"
  },
  {
    title: "HTML Website Development",
    desc: "Lightweight and responsive static websites using HTML, CSS, and JS.",
    icon: "/assets/html.png"
  },
  {
    title: "WordPress Website Setup",
    desc: "Affordable and quick website creation using WordPress CMS.",
    icon: "/assets/wordpress.png"
  },
];

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-gray-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/logo.png"
              alt="Allverse Logo"
              className="h-16 w-auto object-contain"
            />
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

      {/*Hero Section */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold">Got an Idea?</h2>
          <p className="mt-4 text-xl">Let Allverse Studios transform it into digital reality</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div>
            <img src="/assets/thinks.png" alt="Thinks" className="mx-auto h-24 mb-4" />
            <h4 className="font-bold text-lg">THINKS</h4>
            <p className="text-gray-300">about a great solution?</p>
          </div>
          <div>
            <img src="/assets/imagines.png" alt="Imagines" className="mx-auto h-24 mb-4" />
            <h4 className="font-bold text-lg">IMAGINES</h4>
            <p className="text-gray-300">how it could look online?</p>
          </div>
          <div>
            <img src="/assets/tries.png" alt="Tries" className="mx-auto h-24 mb-4" />
            <h4 className="font-bold text-lg">TRIES</h4>
            <p className="text-gray-300">to build but gets stuck?</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-lg mb-4">Let <span className="text-cyan-400 font-semibold">Allverse Studios</span> be your tech partner in success.</p>
          <a href="/contact" className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-cyan-600 transition">Make It Real</a>
        </div>
      </section>

      {/* Customer Quote */}
      <section className="py-10 bg-white text-center px-6">
        <blockquote className="text-xl italic font-medium text-gray-700">
          "Your business deserves more than just a website — it deserves a powerful digital experience. Let Allverse Studios bring your vision to life."
        </blockquote>
      </section>

      {/* What We Do */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">What We Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.map((item, idx) => (
              <div key={idx} className="bg-white shadow p-6 rounded-xl hover:shadow-lg transition text-center">
                <img src={item.icon} alt={item.title} className="h-14 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Technologies We Use</h3>
          <div className="flex flex-wrap justify-center gap-10 text-gray-600 text-lg">
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>Tailwind CSS</span>
            <span>Firebase</span>
            <span>Razorpay</span>
            <span>HTML5</span>
            <span>WordPress</span>
            <span>BootStrap</span>
            <span>CPanel</span>
            <span>GEO APIs</span>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Our Clients</h3>
          <Swiper
            autoplay={{ delay: 2000 }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            spaceBetween={30}
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img src={logo} alt={`Client ${index + 1}`} className="h-16 mx-auto transition duration-300" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-10">
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

export default HomePage;