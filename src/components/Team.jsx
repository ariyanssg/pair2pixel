import React from 'react';

// --- Imports (No changes here) ---
import ceoImage from '../assets/Website resouces/Team/ceo.png';
import coFounderImage from '../assets/Website resouces/Team/co founder.png';
import designImage from '../assets/Website resouces/Team/design.png';
import devopsImage from '../assets/Website resouces/Team/devops.png';
import softwareImage from '../assets/Website resouces/Team/software.png';
import marketingImage from '../assets/Website resouces/Team/marketing.png';

// --- Data (No changes here) ---
const teamMembers = [
  {
    name: 'Maidul Islam Khan',
    title: 'CEO & Founder',
    imageUrl: ceoImage,
  },
  {
    name: 'Tasfia Mehenaz',
    title: 'Co-Founder & Managing Director',
    imageUrl: coFounderImage, 
  },
  {
    name: 'Muktadir Udoy',
    title: 'Software Developer',
    imageUrl: softwareImage,
  },
  {
    name: 'Ismail Hossain',
    title: 'DevOps SysAdmin',
    imageUrl: devopsImage,
  },
  {
    name: 'Tasriba Mehenaz',
    title: 'Fashion Designer',
    imageUrl: designImage,
  },
  
  
  {
    name: 'Minhaz Shoheb',
    title: 'Marketing Manager',
    imageUrl: marketingImage,
  },
];

// --- Reusable Card Component (No changes here) ---
function TeamMemberCard({ name, title, imageUrl, specialBorder }) {
  const glowStyle = specialBorder
    ? 'from-yellow-400 via-red-500 to-blue-500'
    : 'from-red-600 to-red-800';

  return (
    <div className="relative w-full h-full">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${glowStyle} rounded-3xl blur-lg opacity-60 transition-opacity duration-300 group-hover:opacity-80`}
      ></div>
      <div
        className="relative w-full h-full bg-cover bg-center rounded-3xl overflow-hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-center">
          <h3 className="text-white font-bold text-2xl sm:text-3xl drop-shadow-md">
            {name}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm mt-1 drop-shadow-md">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

// --- Main Team Section Component ---
// The only change is the card size for large screens.
function Team() {
  return (
    <section className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/30 to-black text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 tracking-wider">
          MEET OUR TEAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {teamMembers.map((member) => (
            // =========================================================================
            // SIZE ADJUSTMENT: Card size is now 420px by 550px on large screens.
            <div
              key={member.name}
              className="w-full max-w-md md:max-w-none aspect-[3/4] lg:aspect-auto lg:w-[420px] lg:h-[550px] group"
            >
            {/* ========================================================================= */}
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;