import React from "react";
import { motion } from "framer-motion";
import { useLanguage, Language } from "../../contexts/LanguageContext";

type LanguageOption = {
  code: Language;
  label: string;
};

const languageOptions: LanguageOption[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "zh", label: "中文" },
];

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-center space-x-4 mt-4 text-xl">
      {languageOptions.map((option) => (
        <button
          key={option.code}
          onClick={() => setLanguage(option.code)}
          className={`relative ${
            language === option.code
              ? "text-primary font-semibold"
              : "text-white hover:text-white/80"
          } transition-colors`}
        >
          {option.label}
          {language === option.code && (
            <motion.div
              layoutId="language-underline"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;