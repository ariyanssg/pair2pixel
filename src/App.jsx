// // src/App.jsx
// import React, { useState } from "react";
// import Hero from "./components/Hero";
// import Sidebar from "./components/Sidebar";
// import ServicesSection from "./components/ServicesSection";
// import backgroundImage from "./assets/Website resouces/Frame-1.png"; // Ensure this path is correct
// import PowerbankScene from './components/PowerbankScene'; 
// import WhyItMatters from './components/WhyItMatters'; 
// import ProductShowcase from "./components/ProductShowcase";
// import About from "./components/About";
// import Testimonial from "./components/Testimonial";

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <div className="relative flex min-h-screen bg-gradient-to-br from-[#1E1E1E] via-[#2B1C1C] to-[#000000] text-white transition-all duration-500 ease-in-out">
      
//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       {/* Main Content that shifts right when sidebar opens */}
//       <main
//         className={`flex-1 transition-all duration-500 ease-in-out 
//           bg-no-repeat bg-cover bg-center
//           ${isOpen ? "ml-64" : "ml-20"}
//         `}
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           // Image-er actual size maintain korbe (this comment is preserved)
//         }}
//       >
//         <Hero />
//          <ProductShowcase />
//         <ServicesSection />
//         <WhyItMatters /> 
//         <About />
//         <Testimonial/>
//       </main>
//     </div>
//   );
// };
// export default App;

// src/App.jsx
// import React, { useState } from "react";
// import Hero from "./components/Hero";
// import Sidebar from "./components/Sidebar";
// import ServicesSection from "./components/ServicesSection";
// import backgroundImage from "./assets/Website resouces/Frame-1.png";
// import WhyItMatters from './components/WhyItMatters'; 
// import ProductShowcase from "./components/ProductShowcase";
// import About from "./components/About";
// import Testimonial from "./components/Testimonial";
// import Team from "./components/Team";
// import BrandClient from "./components/BrandClient";
// import Contact from "./components/Contact";
 
// const App = () => {
//   // --- SHUDHU EI LINE TA CHANGE KORUN ---
//   const [isOpen, setIsOpen] = useState(false); // Changed from true to false
//   // ------------------------------------

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-[#1E1E1E] via-[#2B1C1C] to-[#000000] text-white overflow-x-hidden w-full">
      
//       {/* Sidebar (z-index: 50) */}
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

//       {/* Mobile Overlay (z-index: 40) */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={toggleSidebar}
//         />
//       )}

//       {/* Main Content (z-index: 10) */}
//       <main
//         className={`
//           relative z-10 
//           flex-1
//           min-h-screen transition-all duration-500 ease-in-out
//           bg-no-repeat bg-cover bg-center
//           ml-0
//           ${isOpen ? 'lg:ml-64' : 'lg:ml-20'}
//         `}
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >
//         <Hero />
//         <ProductShowcase />
        
//         <ServicesSection />
//         <WhyItMatters /> 
//         <About />
//         <BrandClient/>
//         <Testimonial />
//         <Team></Team>
//         <Contact/>
//       </main>
//     </div>
//   );
// };
// export default App;

// src/App.jsx
// src/App.jsx
import React, { useState } from "react";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import ServicesSection from "./components/ServicesSection";
import backgroundImage from "./assets/Website resouces/Frame-1.png";
import WhyItMatters from './components/WhyItMatters'; 
import ProductShowcase from "./components/ProductShowcase";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import BrandClient from "./components/BrandClient";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import OfferSection from "./components/OfferSection";
 
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1E1E1E] via-[#2B1C1C] to-[#000000] text-white overflow-x-hidden w-full">
      
      {/* Sidebar (z-index: 50) */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Mobile Overlay (z-index: 40) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content (z-index: 10) */}
      <main
        className={`
          relative z-10 
          flex-1
          min-h-screen transition-all duration-500 ease-in-out
          bg-no-repeat bg-cover bg-center
          ml-0
          ${isOpen ? 'lg:ml-64' : 'lg:ml-20'}
        `}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div id="home">
          <Hero />
        </div>

        <div id="portfolio">
          <ProductShowcase />
        </div>
        
        <div id="services">
          <ServicesSection />
        </div>

        <div id="why-it-matters">
          <WhyItMatters /> 
        </div>

        <div id="about">
          <About />
        </div>

        <BrandClient/>

        <div id="testimonials">
          <Testimonial />
        </div>

        <div id="team">
          <Team />
        </div>

        <div id="offer">
          <OfferSection />
        </div>

        <div id="contact">
          <Contact/>
        </div>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default App;