import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import SpeakingSection from "@/components/sections/SpeakingSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PressSection from "@/components/sections/PressSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

// Footer includes contact section now, so we don't need a separate ContactSection

const Home = () => {
  // Preload critical images
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls: string[] = [
        // Add paths to critical images that should be preloaded
        // Example: '/images/hero-bg.jpg'
      ];
      
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };
    
    preloadImages();
  }, []);

  // Page transition animation
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }
  };

  const { language } = useLanguage();
  
  // Language-specific meta descriptions
  const seoDescriptions = {
    en: "Daniel Atz is an entrepreneur and speaker specializing in migration, citizenship, and belonging with expertise in data-driven insights and innovative storytelling.",
    fr: "Daniel Atz est un entrepreneur et conférencier spécialisé dans la migration, la citoyenneté et l'appartenance, avec une expertise en analyses basées sur les données et en narration innovante.",
    pt: "Daniel Atz é um empreendedor e palestrante especializado em migração, cidadania e pertencimento, com expertise em insights baseados em dados e narrativas inovadoras.",
    zh: "Daniel Atz 是一位企业家和演讲者，专注于移民、公民身份和归属感，擅长数据驱动的洞察和创新的故事讲述。"
  };

  return (
    <>
      <SEO 
        title="Daniel Atz | Global Mobility Expert" 
        description={seoDescriptions[language]}
        pathname="/"
      />

      <motion.div
        className="overflow-hidden"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {/* Hero Section */}
        <HeroSection />
        
        {/* Mission Section */}
        <MissionSection />
        
        {/* Speaking Section */}
        <SpeakingSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Press Section */}
        <PressSection />
        
        {/* Specialties Section */}
        <SpecialtiesSection />
        
        {/* The Footer component now contains the contact form, and is included in App.tsx */}
      </motion.div>
    </>
  );
};

export default Home;