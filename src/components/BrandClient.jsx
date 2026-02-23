import React, { useState, useEffect, useRef } from 'react';

// --- Imports (No changes here) ---
import aristoq from '../assets/Website resouces/for web logo/aristoq.png';
import cillox from '../assets/Website resouces/for web logo/cillox.png';
import deenLogo from '../assets/Website resouces/for web logo/Deen-Logo.png';
import deshmart from '../assets/Website resouces/for web logo/deshmart.png';
import dip from '../assets/Website resouces/for web logo/dip.png';
import divaLogo from '../assets/Website resouces/for web logo/Diva-logo.png';
import engazeLogo from '../assets/Website resouces/for web logo/engaze logo.png';
import eStore from '../assets/Website resouces/for web logo/e-store.png';
import frutika from '../assets/Website resouces/for web logo/frutika.png';
import getway from '../assets/Website resouces/for web logo/getway.png';
import greenHouse from '../assets/Website resouces/for web logo/green-house.png';
import headlessLogo from '../assets/Website resouces/for web logo/Headless logo.png';
import icy from '../assets/Website resouces/for web logo/ICY.png';
import loxtyle from '../assets/Website resouces/for web logo/loxtyle.png';
import modestCreation from '../assets/Website resouces/for web logo/modest-creation.png';
import obee from '../assets/Website resouces/for web logo/obee.png';
import phincafe from '../assets/Website resouces/for web logo/phincafe.png';
import potrani from '../assets/Website resouces/for web logo/potrani.png';
import pranLogo from '../assets/Website resouces/for web logo/Pran-Logo.png';
import qcoom from '../assets/Website resouces/for web logo/qcoom.png';
import rfl from '../assets/Website resouces/for web logo/RFL.png';
import sibc from '../assets/Website resouces/for web logo/sibc.png';
import tessil from '../assets/Website resouces/for web logo/tessil.png';
import topper from '../assets/Website resouces/for web logo/topper.png';
import wonder from '../assets/Website resouces/for web logo/wonder.png';
import zenScreen from '../assets/Website resouces/for web logo/zen-screen.png'; 

// --- Data arrays (No changes here) ---
const allLogos = [
  headlessLogo, engazeLogo, divaLogo, pranLogo, frutika, getway,   rfl, topper, greenHouse, 
  aristoq, cillox, deenLogo, deshmart, dip, eStore, icy, loxtyle, modestCreation, obee,
  phincafe, potrani, qcoom, sibc, tessil, wonder, zenScreen
];
const midIndex = Math.ceil(allLogos.length / 2);
const row1Logos = allLogos.slice(0, midIndex);
const row2Logos = allLogos.slice(midIndex);

// --- Reusable Ticker Row Component ---
const TickerRow = ({ logos, direction }) => {
  const tickerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker || isPaused) return;

    let animationFrameId;
    const speed = 0.5; // You can adjust speed here

    const animate = () => {
      const firstSetWidth = ticker.scrollWidth / 2;

      if (direction === 'left') {
        positionRef.current -= speed;
        if (Math.abs(positionRef.current) >= firstSetWidth) {
          positionRef.current = 0;
        }
      } else { // direction === 'right'
        if (positionRef.current === 0) {
            positionRef.current = -firstSetWidth;
        }
        positionRef.current += speed;
        if (positionRef.current >= 0) {
          positionRef.current = -firstSetWidth;
        }
      }
      
      ticker.style.transform = `translateX(${positionRef.current}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, logos, direction]);

  return (
    <div 
      className="flex whitespace-nowrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={tickerRef} className="flex">
        {[...logos, ...logos].map((logo, index) => (
          // CHANGE 2: Set fixed size for the logo container and center the image inside.
          <div key={index} className="mx-4 flex-shrink-0 w-[118px] h-[106px] flex items-center justify-center">
            <img 
              src={logo} 
              alt={`Client Logo ${index + 1}`} 
              // CHANGE 1: Removed the filter classes to show original colors.
              // Added max-w-full and max-h-full to ensure logo fits inside the box.
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main BrandClient Component ---
function BrandClient() {
  return (
    <section className="  text-white py-16 md:py-24 overflow-hidden">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 md:mb-16 tracking-wider">
          OUR CLIENTS
        </h2></div>
    <div className="bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 to-black text-white py-16 md:py-24 overflow-hidden">

        <div>
        {/* CHANGE 3: Added a max-width container to control how many logos are visible */}
        <div className="container mx-auto">
          <div 
            className="relative w-full overflow-hidden space-y-8"
            // The mask-image creates the fade effect on the edges
            style={{ maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)' }}
          >
            <TickerRow logos={row1Logos} direction="right" />
            <TickerRow logos={row2Logos} direction="left" />
          </div>
        </div>

      </div>
    </div>
    </section>
  );
}

export default BrandClient;