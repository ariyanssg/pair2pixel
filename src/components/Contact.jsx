// src/components/Contact.jsx
import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Contact() {
  const [result, setResult] = useState("");
  
  // 1. মেসেজ এবং লিমিটের জন্য স্টেট
  const [message, setMessage] = useState(""); 
  const CHAR_LIMIT = 1000; // ১০০০ অক্ষরের লিমিট সেট করা হলো

  const onSubmit = async (event) => {
    event.preventDefault();

    // Time Limit Check
    const lastSubmitTime = localStorage.getItem('lastSubmitTime');
    const currentTime = Date.now();
    const oneHour = 60 * 60 * 1000; 

    if (lastSubmitTime && (currentTime - lastSubmitTime < oneHour)) {
      setResult("You have already sent a message. Please wait 1 hour.");
      return; 
    }

    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "ca18e7a8-9e2f-4eda-8853-44bd24098070"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset(); 
        setMessage(""); // 2. সফল হলে মেসেজ বক্স খালি করা হচ্ছে
        localStorage.setItem('lastSubmitTime', Date.now());

        setTimeout(() => {
           setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      setResult("Error submitting form. Please check your internet connection.");
    }
  };

  // 3. ইনপুট হ্যান্ডলার (লিমিট চেক করার জন্য)
  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= CHAR_LIMIT) {
      setMessage(text);
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF size={22} />, href: 'https://www.facebook.com/pairtopixel', bg: 'bg-[#1877F2]' },
    { icon: <FaInstagram size={22} />, href: 'https://www.instagram.com/pairtopixel/', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' },
    { icon: <FaLinkedinIn size={22} />, href: 'https://www.linkedin.com/company/pair-to-pixel', bg: 'bg-[#0A66C2]' },
    { icon: <FaYoutube size={22} />, href: 'https://www.youtube.com/@pairtopixel', bg: 'bg-[#FF0000]' },
  ];

  return (
    <div className="text-white min-h-screen font-sans">
      <div className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="bg-gradient-to-br from-red-900/50 to-black p-2 rounded-xl border border-red-900/30">
            <form onSubmit={onSubmit} className="p-6 sm:p-8 rounded-md space-y-5 text-white">
              
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  required 
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all bg-black/40 text-white placeholder-gray-400" 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all bg-black/40 text-white placeholder-gray-400" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all bg-black/40 text-white placeholder-gray-400" 
                />
              </div>
              
              {/* 4. Textarea আপডেটেড */}
              <div>
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  rows="6"
                  required 
                  value={message}
                  onChange={handleMessageChange}
                  maxLength={CHAR_LIMIT} // HTML Native limit
                  className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none bg-black/40 text-white placeholder-gray-400"
                ></textarea>
                
                {/* 5. ক্যারেক্টার কাউন্টার ডিসপ্লে */}
                <div className="flex justify-end mt-1">
                  <span className={`text-xs ${message.length >= CHAR_LIMIT ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                    {message.length} / {CHAR_LIMIT} characters
                  </span>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-yellow-400/50"
              >
                SEND MESSAGE
              </button>

              {result && (
                <p className={`text-center mt-4 font-semibold ${result.includes("Success") ? "text-green-400" : "text-yellow-400"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-red-800 p-5 rounded-xl flex items-center gap-5 hover:bg-red-700 transition-colors">
              <div className="bg-blue-500 p-4 rounded-full shadow-lg">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Contact</h3>
                <p className="text-gray-200">+8801754593323</p>
              </div>
            </div>
            
            <div className="bg-red-800 p-5 rounded-xl flex items-center gap-5 hover:bg-red-700 transition-colors">
              <div className="bg-green-500 p-4 rounded-full shadow-lg">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">WhatsApp</h3>
                <p className="text-gray-200">+8801604176228</p>
              </div>
            </div>

            <div className="bg-red-800 p-5 rounded-xl flex items-center gap-5 hover:bg-red-700 transition-colors">
              <div className="bg-white p-3 rounded-full flex items-center justify-center shadow-lg">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 5.88V18.12C22 19.71 20.69 21 19 21H5C3.31 21 2 19.71 2 18.12V5.88C2 4.98 2.5 4.17 3.25 3.73L11.25 8.73C11.66 8.94 12.34 8.94 12.75 8.73L20.75 3.73C21.5 4.17 22 4.98 22 5.88Z" fill="#EA4335"/>
                    <path d="M3.25 3.73L12 8.5L20.75 3.73C20.41 3.29 19.94 3 19.4 3H4.6C4.06 3 3.59 3.29 3.25 3.73Z" fill="#4285F4"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-200">info@pairtopixel.com</p>
                <p className="text-gray-200">pairtopixel@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-red-800 p-5 rounded-xl">
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 shadow-lg ${link.bg}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;