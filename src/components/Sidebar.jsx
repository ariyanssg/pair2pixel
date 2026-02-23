// // src/components/Sidebar.jsx
// import React from "react";
// import logo from "../assets/mainLogo.png";
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { Home, Settings, Briefcase, Info, Mail, Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "#home", icon: Home },
//   { name: "Services", href: "#services", icon: Settings },
//   { name: "Portfolio", href: "#portfolio", icon: Briefcase },
//   { name: "About", href: "#about", icon: Info },
//   { name: "Contact", href: "#contact", icon: Mail },
// ];

// const socialLinks = [
//   { icon: FaFacebook, href: "https://facebook.com/pairtopixel", color: "bg-[#1877F2]" },
//   { icon: FaInstagram, href: "https://instagram.com/pairtopixel", color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
//   { icon: FaLinkedin, href: "https://linkedin.com/company/pairtopixel", color: "bg-[#0A66C2]" },
//   { icon: FaYoutube, href: "https://youtube.com/@pairtopixel", color: "bg-[#FF0000]" },
// ];

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <>
//       {/* Mobile Toggle Button - Fixed top-left, ONLY on small screens */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-[60] lg:hidden p-3 rounded-lg bg-[#2A1919]/90 backdrop-blur-md text-white hover:bg-[#4d3232] transition-colors shadow-lg"
//         aria-label="Toggle Sidebar"
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed top-0 left-0 z-50 h-screen 
//           backdrop-blur-md bg-[#2A1919]/90 
//           border-r border-[#4A2F2F]/30 shadow-2xl 
//           flex flex-col items-center 
//           transition-all duration-500 ease-in-out
//           w-64 // Base width for mobile slide-in
//           lg:w-20 // Collapsed width for desktop
//           ${isOpen ? "translate-x-0 lg:!w-64" : "-translate-x-full lg:translate-x-0"} // The core logic
//         `}
//       >
//         {/* Logo Container (clickable for desktop toggle) */}
//         <div
//           className="flex flex-col items-center mt-8 mb-10 cursor-pointer"
//           onClick={toggleSidebar}
//         >
//           <img
//             src={logo}
//             alt="Pair to Pixel Logo"
//             className={`transition-all duration-500 ease-in-out rounded-full shadow-md
//               ${isOpen ? "w-24 h-24" : "w-12 h-12"}
//             `}
//           />
//           <div
//             className={`mt-3 text-center transition-opacity duration-300 delay-200
//               ${isOpen ? "opacity-100" : "opacity-0 h-0 pointer-events-none"}
//             `}
//           >
//             <span className="text-xl font-semibold text-[#FFD700] tracking-wide whitespace-nowrap">
//               Pair to Pixel
//             </span>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-col space-y-3 w-full px-4">
//           {navLinks.map((link) => {
//             const Icon = link.icon;
//             return (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => window.innerWidth < 1024 && toggleSidebar()} // Close on mobile link click
//                 className={`flex items-center space-x-4 py-3 px-3 rounded-xl transition-all duration-300 hover:bg-[#4A2F2F]/60 hover:text-[#FFD700] ${isOpen ? "justify-start" : "justify-center"}`}
//               >
//                 <Icon className="w-5 h-5 flex-shrink-0" />
//                 <span className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
//                   {link.name}
//                 </span>
//               </a>
//             );
//           })}
//         </nav>

//         <div className="flex-1" />

//         {/* Social Icons */}
//         <div className={`flex mb-6 transition-all duration-500 ${isOpen ? "space-x-3" : "flex-col space-y-3"}`}>
//           {socialLinks.map((social, index) => (
//             <a
//               key={index}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`p-2 rounded-full ${social.color} text-white hover:scale-110 transition-transform`}
//             >
//               <social.icon size={18} />
//             </a>
//           ))}
//         </div>

//         {/* Website Link */}
//         <p className={`text-xs text-gray-400 mb-5 tracking-wide transition-opacity duration-300 delay-200 whitespace-nowrap ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
//           pairtopixel.com
//         </p>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

// src/components/Sidebar.jsx
import React from "react";
import logo from "../assets/mainLogo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Home, Settings, Briefcase, Info, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Services", href: "#services", icon: Settings },
  { name: "Portfolio", href: "https://www.behance.net/pairtopixel", icon: Briefcase },
  { name: "About", href: "#about", icon: Info },
  { name: "Contact", href: "#contact", icon: Mail },
];

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/pairtopixel", color: "bg-[#1877F2]" },
  { icon: FaInstagram, href: "https://www.instagram.com/pairtopixel/", color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/pair-to-pixel", color: "bg-[#0A66C2]" },
  { icon: FaYoutube, href: "https://www.youtube.com/@pairtopixel", color: "bg-[#FF0000]" },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* --- HAMBURGER ICON --- */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-[60] lg:hidden p-3 rounded-lg bg-[#2A1919]/90 backdrop-blur-md text-white hover:bg-[#4d3232] transition-colors shadow-lg"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen 
          backdrop-blur-md bg-[#2A1919]/90 
          border-r border-[#4A2F2F]/30 shadow-2xl 
          flex flex-col items-center 
          transition-all duration-500 ease-in-out
          w-64 lg:w-20
          ${isOpen ? "translate-x-0 lg:!w-64" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo Container */}
        <div
          className="flex flex-col items-center mt-8 mb-10 cursor-pointer"
          onClick={toggleSidebar}
        >
          <img
            src={logo}
            alt="Pair to Pixel Logo"
            className={`transition-all duration-500 ease-in-out rounded-full shadow-md
              ${isOpen ? "w-24 h-24" : "w-12 h-12"}
            `}
          />
          {isOpen && (
            <div className="mt-3 text-center">
              <span className="text-xl font-semibold text-[#FFD700] tracking-wide whitespace-nowrap">
                Pair to Pixel
              </span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-3 w-full px-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                className={`flex items-center space-x-4 py-3 px-3 rounded-xl transition-all duration-300 hover:bg-[#4A2F2F]/60 hover:text-[#FFD700] ${isOpen ? "justify-start" : "justify-center"}`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isOpen && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    {link.name}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex-1" />

        {/* Social Icons */}
        <div className={`flex mb-6 transition-all duration-500 ${isOpen ? "space-x-3" : "flex-col space-y-3"}`}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${social.color} text-white hover:scale-110 transition-transform`}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        {/* Website Link */}
        {isOpen && (
          <p className="text-xs text-gray-400 mb-5 tracking-wide whitespace-nowrap">
            pairtopixel.com
          </p>
        )}
      </aside>
    </>
  );
};

export default Sidebar;