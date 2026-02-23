// src/components/OfferSection.jsx
import React, { useState } from 'react';
import { TrendingUp, Eye, ShieldCheck, Box, Video, Palette, PenTool, Scissors, Globe, Server, Megaphone, Send } from 'lucide-react';

// ─────────────────────────── HERO BANNER ───────────────────────────
const OfferHero = ({ onClaimClick }) => (
  <section className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-28 md:py-36 px-4 sm:px-6">
    {/* Decorative 3D-style red cubes */}
    <div className="absolute top-10 left-[5%] w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-red-600/30 to-red-900/10 rounded-xl rotate-12 blur-sm pointer-events-none" />
    <div className="absolute top-1/3 right-[8%] w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500/25 to-red-800/10 rounded-xl -rotate-12 blur-sm pointer-events-none" />
    <div className="absolute bottom-16 left-[15%] w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600/20 to-red-900/5 rounded-xl rotate-45 blur-sm pointer-events-none" />
    <div className="absolute bottom-10 right-[12%] w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500/20 to-red-700/10 rounded-lg -rotate-6 blur-sm pointer-events-none" />
    <div className="absolute top-[20%] left-[45%] w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-red-600/15 to-transparent rounded-lg rotate-[30deg] blur-sm pointer-events-none" />

    <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
      {/* Logo */}
      <div className="flex justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
          <span className="text-white font-bold text-2xl sm:text-3xl">P</span>
        </div>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 rounded-full px-4 py-1.5 sm:px-5 sm:py-2">
        <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
          Limited Offer — 50% Off for New Clients
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
        Get <span className="text-red-500">50% OFF</span><br />Your First Project
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Upgrade your brand with strategic 3D animation, motion graphics, and premium design.
      </p>

      {/* CTA Button */}
      <div>
        <button
          onClick={onClaimClick}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 sm:px-10 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 cursor-pointer"
        >
          Claim My 50% Discount
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-gray-500 text-xs sm:text-sm">
        *Applies to projects with a minimum order value of $500
      </p>
    </div>
  </section>
);

// ─────────────────────────── STATS SECTION ───────────────────────────
const statsData = [
  {
    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />,
    value: '94%',
    description: 'of first impressions are design-related',
  },
  {
    icon: <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />,
    value: '3×',
    description: 'higher conversions with premium visuals',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />,
    value: '75%',
    description: 'of users judge credibility by design',
  },
];

const StatsSection = () => (
  <section className="bg-[#0a0a0a] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto text-center space-y-10 sm:space-y-14">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Design Is <span className="text-red-500 italic">Not</span> Optional
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Strong visuals don't just look good — they build trust, drive conversions, and set you apart from competitors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
        {statsData.map((stat, i) => (
          <div
            key={i}
            className="bg-[#111111] border border-gray-800 rounded-xl p-6 sm:p-8 space-y-3 hover:border-red-600/40 transition-colors duration-300"
          >
            <div className="flex justify-center">{stat.icon}</div>
            <p className="text-red-500 text-3xl sm:text-4xl font-bold">{stat.value}</p>
            <p className="text-gray-400 text-sm sm:text-base">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────── WHAT WE CREATE SECTION ─────────────────────
const servicesData = [
  {
    icon: <Box className="w-7 h-7 text-red-400" />,
    title: '3D Product Modeling & Animation',
    desc: 'Bring your products to life with stunning 3D models and captivating animations.',
  },
  {
    icon: <Video className="w-7 h-7 text-red-400" />,
    title: 'Motion Graphics',
    desc: 'Dynamic motion design that tells your brand story with impact and style.',
  },
  {
    icon: <Palette className="w-7 h-7 text-red-400" />,
    title: 'Static Design & Branding Visuals',
    desc: 'Eye-catching static designs that strengthen your brand identity across all platforms.',
  },
  {
    icon: <PenTool className="w-7 h-7 text-red-400" />,
    title: 'Logo Design & Brand Guideline',
    desc: 'Memorable logos and comprehensive brand guidelines that define your visual identity.',
  },
  {
    icon: <Scissors className="w-7 h-7 text-red-400" />,
    title: 'Fashion Design',
    desc: 'Creative fashion design solutions from concept to visual presentation.',
  },
  {
    icon: <Globe className="w-7 h-7 text-red-400" />,
    title: 'UI/UX Design & Web Development',
    desc: 'User-centered digital experiences that convert visitors into loyal customers.',
  },
  {
    icon: <Server className="w-7 h-7 text-red-400" />,
    title: 'DevOps & System Administration',
    desc: 'Reliable infrastructure and deployment pipelines to keep your digital assets running.',
  },
  {
    icon: <Megaphone className="w-7 h-7 text-red-400" />,
    title: 'Digital Marketing',
    desc: 'Strategic digital marketing campaigns that amplify your reach and drive results.',
  },
];

const WhatWeCreateSection = () => (
  <section className="bg-[#0a0a0a] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          What We <span className="text-red-500">Create</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          End-to-end creative services designed to elevate your brand at every touchpoint.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {servicesData.map((svc, i) => (
          <div
            key={i}
            className="bg-[#111111] border border-gray-800 rounded-xl p-6 space-y-3 hover:border-red-600/40 transition-colors duration-300"
          >
            <div className="bg-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center">
              {svc.icon}
            </div>
            <h3 className="text-white font-semibold text-base">{svc.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────── APPLICATION FORM ───────────────────────────
const serviceOptions = [
  '3D Product Animation',
  'Motion Graphics',
  'Branding & Logo Design',
  'UI/UX & Website Design',
  'Marketing Creatives',
];

const ApplicationForm = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [agreed, setAgreed] = useState(false);
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (svc) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      setResult('Please agree to the terms first.');
      return;
    }

    if (selectedServices.length === 0) {
      setResult('Please select at least one service.');
      return;
    }

    setIsSubmitting(true);
    setResult('Submitting...');

    const formData = new FormData(e.target);
    formData.append('access_key', 'ca18e7a8-9e2f-4eda-8853-44bd24098070');
    formData.append('subject', '50% Discount Application - Pair to Pixel');
    formData.append('services_needed', selectedServices.join(', '));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult('Application Submitted Successfully! We will contact you soon.');
        e.target.reset();
        setSelectedServices([]);
        setAgreed(false);
        setTimeout(() => setResult(''), 6000);
      } else {
        setResult(data.message || 'Something went wrong!');
      }
    } catch {
      setResult('Error submitting form. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full p-3 bg-[#111111] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all';

  return (
    <section id="offer-form" className="bg-[#0a0a0a] py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Apply for Your <span className="text-red-500">50%</span> Discount
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            50% discount is valid for projects with a minimum order value of $500 and subject to approval after consultation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <input type="hidden" name="from_name" value="50% Offer Application" />

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <input type="text" name="full_name" placeholder="Full Name *" required className={inputClass} />
            <input type="email" name="email" placeholder="Business Email *" required className={inputClass} />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <input type="tel" name="phone" placeholder="Phone / WhatsApp *" required className={inputClass} />
            <input type="text" name="company" placeholder="Company Name *" required className={inputClass} />
          </div>

          {/* Business Type */}
          <select name="business_type" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
            <option value="" disabled>
              Select your business type *
            </option>
            <option value="ecommerce">E-commerce</option>
            <option value="saas">SaaS / Tech</option>
            <option value="agency">Agency</option>
            <option value="startup">Startup</option>
            <option value="enterprise">Enterprise</option>
            <option value="personal_brand">Personal Brand</option>
            <option value="other">Other</option>
          </select>

          {/* Services Needed */}
          <div className="space-y-3">
            <label className="text-gray-300 text-sm font-medium">Services Needed *</label>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {serviceOptions.map((svc) => {
                const active = selectedServices.includes(svc);
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleService(svc)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
                      ${
                        active
                          ? 'bg-red-600 border-red-600 text-white shadow-md shadow-red-600/20'
                          : 'bg-transparent border-gray-600 text-gray-300 hover:border-red-500/50 hover:text-white'
                      }`}
                  >
                    {svc}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Description */}
          <textarea
            name="project_description"
            placeholder="Tell us about your project... *"
            required
            rows={5}
            className={`${inputClass} resize-none`}
          />

          {/* Row: Budget + Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <select name="budget_range" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled>
                Budget Range *
              </option>
              <option value="500-1000">$500 – $1,000</option>
              <option value="1000-2500">$1,000 – $2,500</option>
              <option value="2500-5000">$2,500 – $5,000</option>
              <option value="5000-10000">$5,000 – $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>

            <select name="timeline" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled>
                Timeline *
              </option>
              <option value="1-2_weeks">1 – 2 Weeks</option>
              <option value="2-4_weeks">2 – 4 Weeks</option>
              <option value="1-2_months">1 – 2 Months</option>
              <option value="2-3_months">2 – 3 Months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          {/* Agreement Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1 w-4 h-4 accent-red-600 cursor-pointer"
            />
            <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              I understand the minimum project value is $500 to qualify for the 50% discount.
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-3.5 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          {/* Result message */}
          {result && (
            <p
              className={`text-center font-semibold text-sm sm:text-base ${
                result.includes('Success') ? 'text-green-400' : 'text-yellow-400'
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

// ─────────────────────── MAIN EXPORT ───────────────────────────────
const OfferSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById('offer-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <OfferHero onClaimClick={scrollToForm} />
      <StatsSection />
      <WhatWeCreateSection />
      <ApplicationForm />
    </div>
  );
};

export default OfferSection;
