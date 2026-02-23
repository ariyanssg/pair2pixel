import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Import Swiper React components ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// --- Import Swiper styles ---
import 'swiper/css';
import 'swiper/css/navigation';

// --- Flag Images ---
import bangladeshFlag from '../assets/Website resouces/icons/bangladesh.png';
import maldivesFlag from '../assets/Website resouces/icons/maldives.png';
import usaFlag from '../assets/Website resouces/icons/usa.png';

// --- Client Images ---
import client1 from '../assets/Website resouces/Client pics/1.jpg';
import client2 from '../assets/Website resouces/Client pics/2.jpg';
import client3 from '../assets/Website resouces/Client pics/3.jpeg';
import client4 from '../assets/Website resouces/Client pics/4.png';
import client5 from '../assets/Website resouces/Client pics/5.jpg';
import client6 from '../assets/Website resouces/Client pics/6.jpg';

// --- Testimonials Data ---
const testimonialsData = [
  {
    name: 'Golam Sakline Ratul',
    title: 'Chairman, Headless Technologies Limited',
    country: bangladeshFlag,
    quote: 'Pair to Pixel has been incredible to work with for our core product "Diva". I had this idea for a sanitary pad vending machine, and they completely brought it to life with a beautiful 3D model and animation, way beyond what I imagined.',
    imageUrl: client1,
  },
  {
    name: 'M. Legend Brown',
    title: 'Film Director, Producer & Editor',
    country: usaFlag,
    quote: 'It was an awesome experience working with them. I got exactly what I was asking for. My movie poster is amazing.',
    imageUrl: client2,
  },
  {
    name: 'Brian Stoudt',
    title: 'Director, The Factory',
    country: maldivesFlag,
    quote: 'What an amazing job for such a great price too! They were quick, responsive, collaborative, and professional! Highly recommended!',
    imageUrl: client3,
  },
  {
    name: 'Sean Mara',
    title: 'Chief Operating Officer, WEEFI Studios',
    country: usaFlag,
    quote: 'Communicates super well and easy to work with! Extremely talented and versatile, would recommend to anyone.',
    imageUrl: client4,
  },
  {
    name: 'Ahmed Nasheed',
    title: 'Owner, E-store Maldives',
    country: maldivesFlag,
    quote: 'Pair to Pixel felt more like family than just a design team. They understood my ideas, added their own creative touch, and delivered results beyond my expectations. Working with them was effortless and genuinely enjoyable.',
    imageUrl: client5,
  },
  {
    name: 'Arifur Rahman',
    title: 'Owner, ZenScreen',
    country: bangladeshFlag,
    quote: ' Really happy with the work Pair to Pixel delivered.Everything was smooth, professional, and on point. I will definitely be coming back to them for future projects.',
    imageUrl: client6,
  },
];  

// --- UPDATED CARD ---
const TestimonialCard = ({ name, title, country, quote, imageUrl }) => (
  <div className="bg-red-600 rounded-xl p-8 flex flex-col items-center text-center text-white shadow-lg w-full max-w-[433px] h-[474px] mx-auto">
    <div>
      <img
        src={imageUrl}
        alt={name}
        className="w-28 h-28 rounded-full object-cover border-4 border-white mb-4 mx-auto"
      />
      <h3 className="text-3xl text-yellow-300 font-serif italic mb-1">{name}</h3>
      <p className="text-sm font-light">{title}</p>
      
      {/* Country flag */}
      <div className="my-3 h-6">
        {country && (
          <img src={country} alt="Country flag" className="h-full mx-auto" />
        )}
      </div>
    </div>
    <p className="text-base font-light leading-relaxed mt-2">
      "{quote}"
    </p>
  </div>
);

function Testimonial() {
  const testimonialRef = useRef(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section visible, enable autoplay
          setShouldAutoplay(true);
        } else {
          // Section hidden, disable autoplay
          setShouldAutoplay(false);
        }
      },
      { threshold: 0.3 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, []);

  return (
    <div ref={testimonialRef} className="w-full flex items-center justify-center p-4 sm:p-8 py-20">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-8">
        <button className="swiper-button-prev-custom text-red-600 p-2 rounded-full hover:bg-red-900 transition-colors disabled:opacity-25">
          <ChevronLeft size={40} /> 
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{ 
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={30}
          loop={true}
          autoplay={shouldAutoplay ? {
            delay: 3000,
            disableOnInteraction: false,
          } : false}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button className="swiper-button-next-custom text-red-600 p-2 rounded-full hover:bg-red-900 transition-colors disabled:opacity-25">
          <ChevronRight size={40} />
        </button>
      </div> 
    </div>
  );
}

export default Testimonial;
// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // --- Import Swiper React components ---
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';

// // --- Import Swiper styles ---
// import 'swiper/css';
// import 'swiper/css/navigation';

// // --- Flag Images ---
// import bangladeshFlag from '../assets/Website resouces/icons/bangladesh.png';
// import maldivesFlag from '../assets/Website resouces/icons/maldives.png';
// import usaFlag from '../assets/Website resouces/icons/usa.png';

// // --- Client Images ---
// import client1 from '../assets/Website resouces/Client pics/1.jpg';
// import client2 from '../assets/Website resouces/Client pics/2.jpg';
// import client3 from '../assets/Website resouces/Client pics/3.jpeg';
// import client4 from '../assets/Website resouces/Client pics/4.png';
// import client5 from '../assets/Website resouces/Client pics/5.jpg';
// import client6 from '../assets/Website resouces/Client pics/6.jpg';

// // --- Testimonials Data ---
// const testimonialsData = [
//   {
//     name: 'Golam Sakline Ratul',
//     title: 'Chairman, Headless Technologies Limited',
//     country: bangladeshFlag,
//     quote: 'Pair to Pixel has been incredible to work with for our core product "Diva". I had this idea for a sanitary pad vending machine, and they completely brought it to life with a beautiful 3D model and animation, way beyond what I imagined.',
//     imageUrl: client1,
//   },
//   {
//     name: 'M. Legend Brown',
//     title: 'Film Director, Producer & Editor',
//     country: usaFlag,
//     quote: 'It was an awesome experience working with them. I got exactly what I was asking for. My movie poster is amazing.',
//     imageUrl: client2,
//   },
//   {
//     name: 'Brian Stoudt',
//     title: 'Director, The Factory',
//     country: maldivesFlag,
//     quote: 'What an amazing job for such a great price too! They were quick, responsive, collaborative, and professional! Highly recommended!',
//     imageUrl: client3,
//   },
//   {
//     name: 'Sean Mara',
//     title: 'Chief Operating Officer, WEEFI Studios',
//     country: usaFlag,
//     quote: 'Communicates super well and easy to work with! Extremely talented and versatile, would recommend to anyone.',
//     imageUrl: client4,
//   },
//   {
//     name: 'Ahmed Nasheed',
//     title: 'Owner, E-store Maldives',
//     country: maldivesFlag,
//     quote: 'Pair to Pixel felt more like family than just a design team. They understood my ideas, added their own creative touch, and delivered results beyond my expectations. Working with them was effortless and genuinely enjoyable.',
//     imageUrl: client5,
//   },
//   {
//     name: 'Arifur Rahman',
//     title: 'Owner, ZenScreen',
//     country: bangladeshFlag,
//     quote: 'Really happy with the work Pair to Pixel delivered.Everything was smooth, professional, and on point. I’ll definitely be coming back to them for future projects.',
//     imageUrl: client6,
//   },
// ];  
 
// // --- UPDATED CARD: Conditionally renders the flag image ---
// const TestimonialCard = ({ name, title, country, quote, imageUrl }) => (
//   <div className="bg-red-800 rounded-xl p-8 flex flex-col items-center text-center text-white shadow-lg w-full max-w-[433px] h-[474px] mx-auto">
//     <div>
//       <img
//         src={imageUrl}
//         alt={name}
//         className="w-28 h-28 rounded-full object-cover border-4 border-white mb-4 mx-auto"
//       />
//       <h3 className="text-3xl text-yellow-300 font-serif italic mb-1">{name}</h3>
//       <p className="text-sm font-light">{title}</p>
      
//       {/* This div will only render its content IF a country is provided */}
//       <div className="my-3 h-6"> {/* h-6 ensures consistent spacing even if flag is absent */}
//         {country && (
//           <img src={country} alt="Country flag" className="h-full mx-auto" />
//         )}
//       </div>

//     </div>
//     <p className="text-base font-light leading-relaxed mt-2">
//       "{quote}"
//     </p>
//   </div>
// );


// function Testimonial() {
//   return (
//     <div className=" w-full flex items-center justify-center p-4 sm:p-8 py-20">
//       <div className="container mx-auto flex items-center justify-center gap-2 md:gap-8">
//         <button className="swiper-button-prev-custom text-red-600 p-2 rounded-full hover:bg-red-900 transition-colors disabled:opacity-25">
//           <ChevronLeft size={40} /> 
//         </button>

//         <Swiper
//           modules={[Autoplay, Navigation]}
//           navigation={{ 
//             nextEl: '.swiper-button-next-custom',
//             prevEl: '.swiper-button-prev-custom',
//           }}
//           spaceBetween={30}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             1024: { slidesPerView: 2 },
//             1280: { slidesPerView: 3 },
//           }}
//           className="w-full"
//         >
//           {testimonialsData.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <TestimonialCard {...testimonial} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
        
//         <button className="swiper-button-next-custom text-red-600 p-2 rounded-full hover:bg-red-900 transition-colors disabled:opacity-25">
//           <ChevronRight size={40} />
//         </button>
//       </div> 
//     </div>
//   );
// }

// export default Testimonial;