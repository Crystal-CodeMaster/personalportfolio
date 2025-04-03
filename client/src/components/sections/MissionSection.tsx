import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl text-[#343a40] leading-relaxed font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-6">{t("tagline")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;