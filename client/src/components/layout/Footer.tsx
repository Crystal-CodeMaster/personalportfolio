import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
  const { t, language } = useLanguage();

  // Translations for footer content
  const translations = {
    en: {
      contactInfo: "Contact Information",
      connectWithMe: "Connect with me",
      quickLinks: "Quick Links",
      bookConsultation: "Book a Consultation",
      bookConsultationText: "Schedule a one-on-one consultation to discuss your project, speaking engagement, or potential collaboration opportunities.",
      scheduleCall: "Schedule a Call",
      lookingForward: "I look forward to connecting and exploring how we can work together.",
      allRightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    fr: {
      contactInfo: "Informations de Contact",
      connectWithMe: "Connectez-vous avec moi",
      quickLinks: "Liens Rapides",
      bookConsultation: "Réserver une Consultation",
      bookConsultationText: "Planifiez une consultation individuelle pour discuter de votre projet, de vos conférences ou des opportunités de collaboration potentielles.",
      scheduleCall: "Planifier un Appel",
      lookingForward: "Je me réjouis de me connecter et d'explorer comment nous pouvons travailler ensemble.",
      allRightsReserved: "Tous droits réservés.",
      privacyPolicy: "Politique de Confidentialité",
      termsOfService: "Conditions d'Utilisation"
    },
    pt: {
      contactInfo: "Informações de Contato",
      connectWithMe: "Conecte-se comigo",
      quickLinks: "Links Rápidos",
      bookConsultation: "Agendar uma Consulta",
      bookConsultationText: "Agende uma consulta individual para discutir seu projeto, palestras ou oportunidades potenciais de colaboração.",
      scheduleCall: "Agendar uma Chamada",
      lookingForward: "Estou ansioso para me conectar e explorar como podemos trabalhar juntos.",
      allRightsReserved: "Todos os direitos reservados.",
      privacyPolicy: "Política de Privacidade",
      termsOfService: "Termos de Serviço"
    },
    zh: {
      contactInfo: "联系方式",
      connectWithMe: "与我联系",
      quickLinks: "快速链接",
      bookConsultation: "预约咨询",
      bookConsultationText: "安排一对一咨询，讨论您的项目、演讲安排或潜在的合作机会。",
      scheduleCall: "安排通话",
      lookingForward: "我期待着与您联系并探索我们如何合作。",
      allRightsReserved: "版权所有。",
      privacyPolicy: "隐私政策",
      termsOfService: "服务条款"
    }
  };

  // Get the current translation based on language
  const localizedText = translations[language];

  // Get navigation items with translations
  const navItems = [
    { id: 'home', label: t("nav.home") },
    { id: 'mission', label: t("nav.mission") },
    { id: 'appearances', label: "Public Speaking" },
    { id: 'thought-leadership', label: "Thought Leadership" },
    { id: 'press', label: t("nav.press") }
  ];

  return (
    <footer id="contact" className="bg-[#343a40] text-white">
      {/* Contact Section */}
      <div className="container-custom py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="section-heading text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("sections.contact.title")}
          </motion.h2>
          <motion.p 
            className="text-lg text-[#e9ecef] md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("sections.contact.subtitle")}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">{localizedText.contactInfo}</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">{localizedText.connectWithMe}</h4>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/daniel-atz/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#495057] hover:bg-primary text-white p-2 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:atz.daniel@gmail.com" 
                    className="bg-[#495057] hover:bg-primary text-white p-2 rounded-full transition-colors"
                    aria-label="Email me"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium mb-3">{localizedText.quickLinks}</h4>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={item.id === 'appearances' ? '/appearances' : 
                              item.id === 'thought-leadership' ? '/thought-leadership' : 
                              item.id === 'press' ? '/press' : 
                              item.id === 'mission' ? '/about' : 
                              `/#${item.id}`}
                        className="flex items-center group text-gray-300 hover:text-white transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Book Consultation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#424a53] rounded-lg p-8 flex flex-col items-center justify-center h-full"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">{localizedText.bookConsultation}</h3>
              <p className="text-gray-300 mb-6">
                {localizedText.bookConsultationText}
              </p>
              
              <a 
                href="https://meetings.hubspot.com/daniel692/30min-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white mx-auto max-w-xs"
              >
                <Calendar className="w-5 h-5" />
                <span>{localizedText.scheduleCall}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="w-full border-t border-[#5a6268] pt-6">
              <p className="text-center text-gray-300 italic">
                "{localizedText.lookingForward}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Legal Section */}
      <div className="bg-[#212529] py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#adb5bd] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Daniel Atz. {localizedText.allRightsReserved}
            </p>
            <div className="flex space-x-4 text-[#adb5bd] text-sm">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">{localizedText.privacyPolicy}</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">{localizedText.termsOfService}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;