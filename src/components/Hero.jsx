// src/components/Hero.jsx
import React, { useRef, useEffect } from 'react';
import heroVideo from '../assets/heroBG_video.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const heroSectionRef = useRef(null);

 
  const phoneNumber = "8801604176228";  
  const message = "Hi Pair to Pixel, I want to start a project!"; // ডিফল্ট মেসেজ
  
  // WhatsApp লিংক তৈরি করা হচ্ছে
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

useEffect(() => {
    const sectionRef = heroSectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play().catch(err => console.log('Video play error:', err));
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    return () => {
      if (sectionRef) {
        observer.unobserve(sectionRef);
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
<div className="w-full max-w-lg space-y-3 sm:space-y-4 md:space-y-5">
          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
              Creative Design Agency<br /><span className="text-red-500">Pair to Pixel</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light italic text-orange-400">
              3D Animation & Digital Services
            </p>
          </div>
          <p className="text-xs sm:text-sm font-light leading-relaxed text-gray-300">
            Transform your brand with stunning 3D product modeling, motion graphics, and premium design solutions. We create scroll-stopping visuals that build trust and drive conversions for businesses worldwide.
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
<a href='#offer-form' className="w-full sm:w-auto">
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