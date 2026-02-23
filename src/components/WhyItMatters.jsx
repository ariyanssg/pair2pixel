

// export default WhyItMatters;
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// import thumbnail1 from '../assets/Rectangle 3.png';
import thumbnail1 from '../assets/Video1.jpg';
import thumbnail2 from '../assets/Video2.png';
import thumbnail3 from '../assets/Video3.jpg';

// Data structure with YouTube links
const cardData = [
  {
    id: 1,


      image: thumbnail3,
    title: "The Secret Weapon Behind Successful Businesses | 3D Product Modeling & Animation | Pair to Pixel",
    description: "Bring your products to life with stunning 3D animation that grabs attention and builds trust. From startups to established brands, it’s the secret to standing out and driving sales.",
    delay: 0.3,
    videoLink: 'https://youtu.be/VzUFvC6pdsk?si=tHWMAeglV_W1FV1q',
  },
    {
    id: 2,
    image: thumbnail2,
    title: ' Stop Wasting Money on Photoshoots — Try 3D Product Visualization',
    description: 'No location, no studio, no hassle for your product photoshoots. Just premium 3D visuals that make your product shine.',
    delay: 0.1,
    videoLink: 'https://youtu.be/qu5PbSOY6kY?si=5h9XLaAhDPfbCZO9',
  },
  {
    id: 3,
    image: thumbnail1,
    title: "The #1 Visual Mistake That’s Costing You Clients (And How to Fix It)",
    description: "Discover why average designs cost usinesses real clients, and how powerful visuals can grab attention, build trust, and boost sales.",
    delay: 0.5,
    videoLink: 'https://youtu.be/F7mLAPKjR9I?si=ae1gZcc2fAqewqOY',
  }, 

]; 

const VideoCard = ({ image, title, description, delay, videoLink }) => {
  const cardRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.a
      ref={cardRef}
      href={videoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03] group w-full cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {/* Thumbnail Container - 16:9 Aspect Ratio */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={image}
          alt={`Thumbnail for ${title}`}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-80">
          <svg className="w-14 h-14 sm:w-16 sm:h-16 text-red-600 drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow bg-gray-900">
        <h3 className="text-base sm:text-lg font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

const WhyItMatters = () => {
  const sectionRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center lg:text-left"
        initial={{ opacity: 0, x: -20 }}
        animate={shouldRender ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-red-500">WHY</span> IT MATTERS
      </motion.h2>

      {/* Centered container with max width */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-6 lg:gap-8">
          {cardData.map((card) => (
            <VideoCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              delay={card.delay}
              videoLink={card.videoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;