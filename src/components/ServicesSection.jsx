import React from "react";
import icon1 from "../assets/Website resouces/icons/1.png";
import icon2 from "../assets/Website resouces/icons/2.png";
import icon3 from "../assets/Website resouces/icons/3.png";
import icon4 from "../assets/Website resouces/icons/4.png";
import icon5 from "../assets/Website resouces/icons/5.png";
import icon6 from "../assets/Website resouces/icons/6.png";
import icon7 from "../assets/Website resouces/icons/7.png";
import icon8 from "../assets/Website resouces/icons/8.png";

export const services = [
  {
    icon: icon1,
    title: "3D Product Modeling",
    description: "Photo-real 3D models and animations that make viewers pause and remember.",
  },
  {
    icon: icon7,
    title: "Motion Design",
    description: "Every frame crafted to catch eyes and hold attention. Your story comes alive.",
  },
  {
    icon: icon6,
    title: "Static Design & Branding",
    description: "Posters, banners, brochures—clean visuals that hit the right spot every time.",
  },
  {
    icon: icon5,
    title: "Logo & Brand Guideline",
    description: "Full brand guide with colors, fonts, and usage rules for consistent visuals.",
  },
  {
    icon: icon4,
    title: "Fashion Design",
    description: "Sketches, patterns, and concepts that fit your brand's vibe perfectly.",
  },
  {
    icon: icon3,
    title: "UI/UX & Web Development",
    description: "Clean, simple interfaces that work seamlessly for anyone to use.",
  },
  {
    icon: icon8,
    title: "DevOps & Systems",
    description: "Keeping systems running smoothly with monitoring and updates in check.",
  },
  {
    icon: icon2,
    title: "Digital Marketing",
    description: "Campaigns and posts set up to reach the right people, the right way.",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl p-4 sm:p-5 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-600/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
        <img
          src={icon}
          alt={title}
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            End-to-end creative solutions to elevate your brand
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 gap-3 sm:gap-4">
          <a
            href="https://www.instagram.com/pairtopixel/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-6 text-sm uppercase tracking-wide rounded-lg transition-all duration-300 text-center"
          >
            Start Your Project
          </a>
          <a
            href="https://www.behance.net/pairtopixel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-2.5 px-6 text-sm uppercase tracking-wide rounded-lg transition-all duration-300 text-center"
          >
            See Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
