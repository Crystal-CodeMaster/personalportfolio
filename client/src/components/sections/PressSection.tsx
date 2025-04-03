import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface Article {
  id: string;
  url: string;
  source: string;
  date: string;
  imageUrl: string | null;
}

const PressSection = () => {
  const { t } = useLanguage();
  
  // Only include the three specific articles as requested
  const articles: Article[] = [
    {
      id: "trumpMeaning",
      url: "https://www.contacto.lu/luxemburgo/o-que-e-que-a-vitoria-de-donald-trump-pode-significar-para-o-luxemburgo/25666284.html",
      source: "Contacto",
      date: "Nov 2024",
      imageUrl: "/press-images/contactonov24.png"
    },
    {
      id: "election",
      url: "https://www.cnnbrasil.com.br/internacional/eleicao-em-luxemburgo-neste-domingo-8-tem-eleitorado-e-candidata-brasileira/",
      source: "CNN Brasil",
      date: "Oct 2023",
      imageUrl: "/press-images/cnn-2023.png"
    },
    {
      id: "luxembourgers",
      url: "https://www.lessentiel.lu/fr/story/population-43-145-luxembourgeois-sont-sur-le-continent-americain-103026159",
      source: "L'Essentiel",
      date: "Jan 2023",
      imageUrl: "/press-images/lessentiel.png"
    }
  ];

  return (
    <section id="press" className="py-20 bg-[#f3f4f6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">{t("sections.press.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("sections.press.subtitle")}
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {articles.map((article, index) => (
                <a 
                  key={index}
                  href={article.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                      {article.imageUrl ? (
                        <img 
                          src={article.imageUrl} 
                          alt={t(`sections.press.articles.${article.id}.title`)}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500 text-lg">{article.source}</span>
                      )}
                    </div>
                    <div className="p-6 flex flex-col h-64">
                      <p className="text-sm text-primary mb-2">{article.source} • {article.date}</p>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                        {t(`sections.press.articles.${article.id}.title`)}
                      </h3>
                      <p className="text-gray-600 line-clamp-3 flex-grow mb-4">
                        {t(`sections.press.articles.${article.id}.excerpt`)}
                      </p>
                      <div className="text-accent font-medium">{t("sections.press.readArticle")}</div>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* View All Press Button */}
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Link href="/press" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors group">
                <span>View All Press Coverage</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;