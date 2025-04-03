import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X, Menu } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { t, language } = useLanguage();

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavigation = (item: { id: string; path: string }) => {
    closeMenu();
    
    // If we're navigating to a different page, use the Link component's navigate function
    if (item.path !== "/" || (item.path === "/" && location !== "/")) {
      window.location.href = item.path;
      return;
    }
    
    // If we're navigating to a section on the home page
    const element = document.getElementById(item.id);
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

  // Translations for header buttons
  const translations = {
    en: {
      scheduleCall: "Schedule a Call"
    },
    fr: {
      scheduleCall: "Planifier un Appel"
    },
    pt: {
      scheduleCall: "Agendar uma Chamada"
    },
    zh: {
      scheduleCall: "安排通话"
    }
  };

  // Get the current translation based on language
  const localizedText = translations[language];

  // Navigation items for both desktop and mobile
  const navigationItems = [
    { id: "home", label: t("nav.home"), path: "/" },
    { id: "about", label: t("nav.mission"), path: "/about" },
    { id: "appearances", label: t("nav.speaking"), path: "/appearances" },
    { id: "thought-leadership", label: t("nav.thoughtLeadership"), path: "/thought-leadership" },
    { id: "press", label: t("nav.press"), path: "/press" },
  ];

  // Determine if we're on a feature page (About, Press, etc.) - not the home page
  const isFeaturePage = location !== "/";
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isFeaturePage
          ? isFeaturePage 
            ? "bg-primary shadow-md py-2" // Dark blue for feature pages
            : "bg-white bg-opacity-98 shadow-md py-2" // White for home page when scrolled
          : "bg-transparent py-4" // Transparent when at top of home page
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className={`text-2xl font-serif font-bold transition-colors ${
              isFeaturePage 
                ? "text-white" // Always white text on feature pages
                : scrolled ? "text-primary" : "text-white" // Dynamic on home page
            }`}
          >
            Daniel Atz
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-6 mr-6">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path === "/" ? `#${item.id}` : item.path}
                  className={`nav-link ${
                    isFeaturePage
                      ? "text-white" // Always white text on feature pages
                      : scrolled ? "text-darkgray" : "text-white" // Dynamic on home page
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* Schedule a Call Button */}
            <a 
              href="https://meetings.hubspot.com/daniel692/30min-clone"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary flex items-center gap-2 ${
                isFeaturePage
                  ? "bg-white text-primary hover:bg-white/90" // White button on feature pages
                  : scrolled 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              <Calendar size={16} />
              <span>{localizedText.scheduleCall}</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden flex items-center justify-center w-10 h-10 transition-colors ${
              isFeaturePage
                ? "text-white" // Always white on feature pages
                : scrolled ? "text-darkgray" : "text-white"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 z-40 md:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button for mobile menu */}
            <button 
              className="absolute top-4 right-4 text-white p-2"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center space-y-6 mb-8">
                {navigationItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={item.path === "/" ? `#${item.id}` : item.path}
                    className="text-white text-2xl font-medium hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item);
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
              
              {/* Mobile Schedule a Call Button */}
              <motion.a 
                href="https://meetings.hubspot.com/daniel692/30min-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Calendar size={18} />
                <span>{localizedText.scheduleCall}</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
