import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa"; // Using React Icons
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

   
  const phoneNumber = "8801604176228"; 
  const defaultMessage = "Hello, I would like to inquire about your services.";

  useEffect(() => {
    // 1. Show the button immediately (or with a slight delay if preferred)
    setIsVisible(true);

    // 2. Open the "Sir, how can I help you?" message box automatically after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2">
      
      {/* Message Box (Tooltip) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white text-gray-800 p-4 rounded-lg shadow-xl max-w-[250px] border border-gray-200"
          >
            {/* Close Button for the message box */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 p-1"
            >
              <FaTimes size={12} />
            </button>

            {/* Message Text */}
            <div 
                className="cursor-pointer"
                onClick={handleWhatsAppClick}
            >
                <p className="font-semibold text-sm mb-1">Support Team</p>
                <p className="text-sm">Sir, how can I help you?</p>
            </div>

            {/* Little triangle arrow pointing down */}
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Floating WhatsApp Icon Button */}
      {isVisible && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-shadow duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={32} />
        </motion.button>
      )}
    </div>
  );
};

export default WhatsAppButton;