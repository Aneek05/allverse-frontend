import React from "react";

const technologies = {
  Frontend: [
    {
      name: "React",
      desc: "Build dynamic, component-based UIs for web and mobile apps."
    },
    {
      name: "Next.js",
      desc: "Server-side rendered React apps with SEO optimization."
    },
    {
      name: "HTML5",
      desc: "Foundation for structured content on the web."
    },
    {
      name: "CSS3",
      desc: "Styling for web pages with responsive design."
    },
    {
      name: "JavaScript",
      desc: "Logic and interactivity for web applications."
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-first CSS framework for fast, custom designs."
    },
    {
      name: "Bootstrap",
      desc: "Popular CSS library for responsive UI components."
    }
  ],
  Backend: [
    {
      name: "Node.js",
      desc: "Server-side JavaScript runtime for scalable applications."
    },
    {
      name: "Express.js",
      desc: "Minimal web framework for building APIs and server logic."
    }
  ],
  Database: [
    {
      name: "MongoDB",
      desc: "NoSQL database for flexible document storage."
    },
    {
      name: "Firebase",
      desc: "Cloud-based backend with real-time data and authentication."
    }
  ],
  CMS: [
    {
      name: "WordPress",
      desc: "Content management system for blogs, websites, and business sites."
    }
  ],
  Payment: [
    {
      name: "Razorpay",
      desc: "Seamless online payment gateway for Indian businesses."
    }
  ],
  Deployment: [
    {
      name: "Vercel",
      desc: "Optimized deployment for frontend frameworks like Next.js."
    },
    {
      name: "Netlify",
      desc: "Hosting for static sites with CI/CD and serverless functions."
    },
    {
      name: "cPanel",
      desc: "Traditional web hosting dashboard for managing WordPress/HTML sites."
    }
  ],
  Other: [
    {
      name: "Geo-fencing APIs",
      desc: "Send location-based ads when users enter specific areas."
    },
    {
      name: "Google Maps API",
      desc: "Embed location and routing features into apps and websites."
    },
    {
      name: "Twilio",
      desc: "SMS, OTP, and voice communication APIs for user verification."
    },
    {
      name: "AOS",
      desc: "Library to animate elements on scroll for a modern feel."
    }
  ]
};

const TechnologiesPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Technologies We Use</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b pb-2">{category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {techs.map((tech, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
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

export default TechnologiesPage;
