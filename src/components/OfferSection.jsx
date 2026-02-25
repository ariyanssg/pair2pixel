import React, { useState } from 'react';
import { Send } from 'lucide-react';

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

    setIsSubmitting(true);
    setResult('Submitting...');

    const formData = new FormData(e.target);
    formData.append('access_key', 'ca18e7a8-9e2f-4eda-8853-44bd24098070');
    formData.append('subject', '50% Discount Application - Pair to Pixel');
    if (selectedServices.length > 0) {
      formData.append('services_needed', selectedServices.join(', '));
    }

    const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      const [web3Response, sheetResponse] = await Promise.allSettled([
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        }),
        googleScriptUrl && googleScriptUrl !== 'your_web_app_url_here'
          ? fetch(googleScriptUrl, {
              method: 'POST',
              body: formData,
              mode: 'no-cors',
            })
          : Promise.resolve({ status: 'fulfilled', value: { ok: true } }),
      ]);

      let web3Success = false;
      let errorMessage = 'Something went wrong!';
      if (web3Response.status === 'fulfilled' && web3Response.value.ok) {
        try {
          const data = await web3Response.value.json();
          web3Success = data.success;
          errorMessage = data.message || errorMessage;
        } catch {
          web3Success = web3Response.value.ok;
        }
      }

      void sheetResponse;

      if (web3Success) {
        setResult('Application Submitted Successfully! We will contact you soon.');
        e.target.reset();
        setSelectedServices([]);
        setAgreed(false);
        setTimeout(() => setResult(''), 6000);
      } else {
        setResult(errorMessage);
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
    <section id="offer-form" className="bg-[#0a0a0a] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-red-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Limited Offer — 50% Off
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Apply for Your <span className="text-red-500">50%</span> Discount
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            50% discount for new clients on projects $500+. Subject to approval after consultation.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <input type="hidden" name="from_name" value="50% Offer Application" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="full_name" placeholder="Full Name *" required className={inputClass} />
            <input type="email" name="email" placeholder="Business Email" className={inputClass} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="tel" name="phone" placeholder="Phone / WhatsApp *" required className={inputClass} />
            <input type="text" name="company" placeholder="Company Name" className={inputClass} />
          </div>

          <select name="business_type" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
            <option value="" disabled>Select your business type *</option>
            <option value="ecommerce">E-commerce</option>
            <option value="saas">SaaS / Tech</option>
            <option value="agency">Agency</option>
            <option value="startup">Startup</option>
            <option value="enterprise">Enterprise</option>
            <option value="personal_brand">Personal Brand</option>
            <option value="other">Other</option>
          </select>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Services Needed</label>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((svc) => {
                const active = selectedServices.includes(svc);
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleService(svc)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
                      ${active
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

          <textarea
            name="project_description"
            placeholder="Tell us about your project..."
            rows={4}
            className={`${inputClass} resize-none`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select name="budget_range" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled>Budget Range *</option>
              <option value="under-500">Under $500</option>
              <option value="500-1000">$500 – $1,000</option>
              <option value="1000-2500">$1,000 – $2,500</option>
              <option value="2500-5000">$2,500 – $5,000</option>
              <option value="5000-10000">$5,000 – $10,000</option>
              <option value="10000+">$10,000+</option>
            </select>

            <select name="timeline" required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
              <option value="" disabled>Timeline *</option>
              <option value="1-2_weeks">1 – 2 Weeks</option>
              <option value="2-4_weeks">2 – 4 Weeks</option>
              <option value="1-2_months">1 – 2 Months</option>
              <option value="2-3_months">2 – 3 Months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1 w-4 h-4 accent-red-600 cursor-pointer"
            />
            <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              I agree to submit this application for the 50% discount offer.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-3 sm:py-3.5 rounded-lg text-base transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          {result && (
            <p className={`text-center font-semibold text-sm ${result.includes('Success') ? 'text-green-400' : 'text-yellow-400'}`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const OfferSection = () => <ApplicationForm />;

export default OfferSection;
