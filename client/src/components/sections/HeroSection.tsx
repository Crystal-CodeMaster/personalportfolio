import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSelector from "../ui/LanguageSelector";

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = t("greetings");
  
  // Rotate through greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [greetings.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-28 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40 mix-blend-multiply z-10"></div>
        <img 
          src="/images/daniel.jpg" 
          alt="Daniel Atz speaking" 
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="relative inline-block min-h-[6rem] w-full mx-auto">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={greetingIndex}
                    className="absolute inline-block whitespace-nowrap left-0 right-0 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {greetings[greetingIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-white font-bold mt-2">Daniel Atz</span>
            </div>
          </motion.h1>
          
          {/* Language selector */}
          <LanguageSelector />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
