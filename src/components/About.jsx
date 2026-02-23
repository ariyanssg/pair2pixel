import { motion } from "framer-motion";
import aboutImage2 from "../assets/About/Mask group (1).png";
import aboutImage1 from "../assets/About/Mask group.png";
import aboutImage3 from "../assets/About/mouse render 3D 1.png";

const AboutImage = () => (
  <div className="relative w-full md:w-1/2 lg:w-2/5 p-4 flex justify-center items-center">
    {/* Main Image - Floating Animation */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -15, 0], // Reduced from -20 to -15
      }}
      transition={{ 
        duration: 1, 
        ease: "easeOut",
        y: {
          duration: 4, // Increased from 3 to 4 seconds (slower)
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl rotate-3"
    >
      <img
        src={aboutImage1}
        alt="Tech Accessories"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Blue Element - Bottom Left - Floating with delay */}
    <motion.div 
      className="absolute -bottom-8 left-6 w-24 h-24 md:w-28 md:h-28 rounded-xl shadow-xl rotate-6 flex items-center justify-center overflow-hidden"
      animate={{ 
        y: [0, -10, 0], // Reduced from -15 to -10
        rotate: [6, 9, 6] // Reduced rotation from 10 to 9
      }}
      transition={{ 
        duration: 3.5, // Increased from 2.5 to 3.5 seconds (slower)
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.3
      }}
    >
      <img
        src={aboutImage3}
        alt="Earbuds section"
        className="object-cover w-full h-full"
      />
    </motion.div>

    {/* Green Element - Bottom Right - Floating with different timing */}
    <motion.div 
      className="absolute -bottom-10 right-2 w-40 h-40 md:w-52 md:h-52 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden"
      animate={{ 
        y: [0, -18, 0], // Reduced from -25 to -18
        rotate: [0, -4, 0] // Reduced rotation from -5 to -4
      }}
      transition={{ 
        duration: 5, // Increased from 3.5 to 5 seconds (slower)
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.6
      }}
    >
      <img
        src={aboutImage2}
        alt="Mouse section"
        className="object-cover w-full h-full"
      />
    </motion.div>
  </div>
);

// Main About Us Content Component
const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8 md:p-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16 gap-10">
        {/* Left Side: Images */}
        <AboutImage />

        {/* Right Side: Text Content */}
        <motion.div
          className="w-full md:w-1/2 lg:w-3/5 mt-16 md:mt-0 p-4 md:p-8"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <h2 className="text-5xl font-extrabold mb-8 uppercase tracking-wider border-b-4 border-yellow-500 pb-2 inline-block">
            ABOUT US
          </h2>

          <p className="text-xl leading-relaxed mb-6 font-light">
            Every brand begins with an idea. We turn that idea into something you
            can <strong>see, feel, and remember.</strong>
          </p>

          <p className="text-xl leading-relaxed mb-6 font-normal">
            <strong>Pair to Pixel</strong> was built on a simple belief: design
            should do more than look pretty, it should{" "}
            <strong>move people</strong>. That's why we don't just create logos,
            interfaces, or 3D visuals. We create moments that stick, stories that
            speak louder than ads, and identities that live longer than campaigns.
          </p>

          <p className="text-xl leading-relaxed mb-6 font-light">
            We've worked with startups chasing their first customers and
            companies scaling to global audiences, but our mission stays the same,{" "}
            <strong>pair every pixel with purpose.</strong>
          </p>

          <blockquote className="text-2xl italic font-semibold pt-4 border-t border-yellow-500">
            Because in the end, it's not about us. <br />
            It's about <strong>making your brand unforgettable.</strong>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default About;