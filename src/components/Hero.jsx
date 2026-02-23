// src/components/Hero.jsx
import React, { useRef, useEffect, useState } from 'react';
import heroVideo from '../assets/heroBG_video.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

 
  const phoneNumber = "8801604176228";  
  const message = "Hi Pair to Pixel, I want to start a project!"; // ডিফল্ট মেসেজ
  
  // WhatsApp লিংক তৈরি করা হচ্ছে
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play().catch(err => console.log('Video play error:', err));
          }
          setIsVisible(true);
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroSectionRef} className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 sm:object-cover object-center"
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
        <div className="w-full max-w-lg space-y-4 sm:space-y-6 md:space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              HI,<br />WE'RE PAIR TO PIXEL!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light italic text-orange-400">
              A Digital Service Agency
            </p>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-gray-300">
            Pair to Pixel isn't just a name, it's a promise. We believe every
            brand has a story worth telling, and every pixel has a role to
            play. Our job? To pair them perfectly. From crafting bold
            identities to building immersive 3D visuals, we design work that
            doesn't just look good, it sticks in people's minds. Businesses
            around the world trust us because we don't do cookie-cutter. We do
            thoughtful, striking, and scroll-stopping. If you're ready for design
            that feels alive, welcome, you've just found your creative partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            
            {/* ২. এই বাটনটি এখন WhatsApp এ নিয়ে যাবে */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            > 
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-md font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-200 cursor-pointer">
                Start Your Project
              </button>
            </a>

            {/* Claim 50% Offer - scrolls to offer section */}
            <a href='#offer' className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-md font-bold text-white bg-gray-600 rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
                Claim 50% Offer
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// export default Hero;
// src/components/Hero.jsx
// import React from 'react';
// import heroVideo from '../assets/heroBG_video.mp4';

// const Hero = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black text-white">
//       {/* Video Background */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-50 sm:object-cover object-center"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src={heroVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Hero Content */}
//       <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
//         <div className="w-full max-w-lg space-y-4 sm:space-y-6 md:space-y-8">
//           <div className="space-y-2">
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
//               HI,<br />WE'RE PAIR TO PIXEL!
//             </h1>
//             <p className="text-lg sm:text-xl md:text-2xl font-light italic text-orange-400">
//               An Advertising Agency
//             </p>
//           </div>
//           <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-gray-300">
//             Pair to Pixel isn't just a name, it's a promise. We believe every
//             brand has a story worth telling, and every pixel has a role to
//             play. Our job? To pair them perfectly. From crafting bold
//             identities to building immersive 3D visuals, we design work that
//             doesn't just look good, it sticks in people's minds. Businesses
//             around the world trust us because we don't do cookie-cutter. We do
//             thoughtful, striking, and scroll-stopping. If you're ready for design
//             that feels alive, welcome, you've just found your creative partner.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <a href="https://www.facebook.com/pairtopixel" className="w-full sm:w-auto"> 
//               <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-md font-bold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-200">
//                 Start Your Project
//               </button>
//             </a>
//             <a href="https://www.facebook.com/pairtopixel" className="w-full sm:w-auto">
//               <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-md font-bold text-white bg-gray-600 rounded-md hover:bg-gray-700 transition-colors duration-200">
//                 Get 50% Off
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;