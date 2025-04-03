import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const SpeakingSection = () => {
  const { language } = useLanguage();

  // Translations for speaking section
  const translations = {
    en: {
      title: "Speaking Engagements",
      subtitle: "Thought Leader on Emigration Trends, Heritage Reclamation, and International Business Development",
      content: {
        paragraph1: "Daniel Atz delivers authoritative insights at the critical intersection of global citizenship, emigration intelligence, and transatlantic relations. Drawing from proprietary research and demographic analytics, he provides compelling analysis of post-electoral emigration patterns and their profound implications for talent mobility and intellectual capital.",
        paragraph2: "As founder of multiple complementary ventures including LuxCitizenship, Daniel has personally guided over 2,100 Americans through European citizenship recovery while helping 200+ companies navigate transatlantic market entry.",
        paragraph3: "His unique expertise transforms ancestral heritage into tangible opportunities for individuals and organizations alike, offering decision-makers a rare combination of data-driven forecasting and practical implementation strategies that address one of today's most consequential global phenomena."
      }
    },
    fr: {
      title: "Conférences et Présentations",
      subtitle: "Leader d'opinion sur les tendances d'émigration, la réclamation du patrimoine et le développement des affaires internationales",
      content: {
        paragraph1: "Daniel Atz offre des perspectives faisant autorité à l'intersection critique de la citoyenneté mondiale, de l'intelligence en matière d'émigration et des relations transatlantiques. S'appuyant sur des recherches exclusives et des analyses démographiques, il fournit une analyse convaincante des modèles d'émigration post-électorale et leurs profondes implications pour la mobilité des talents et le capital intellectuel.",
        paragraph2: "En tant que fondateur de multiples entreprises complémentaires dont LuxCitizenship, Daniel a personnellement guidé plus de 2 100 Américains dans la récupération de la citoyenneté européenne tout en aidant plus de 200 entreprises à naviguer dans l'entrée sur le marché transatlantique.",
        paragraph3: "Son expertise unique transforme le patrimoine ancestral en opportunités tangibles pour les individus et les organisations, offrant aux décideurs une rare combinaison de prévisions basées sur les données et de stratégies d'implémentation pratiques qui abordent l'un des phénomènes mondiaux les plus conséquents d'aujourd'hui."
      }
    },
    pt: {
      title: "Palestras e Apresentações",
      subtitle: "Líder de pensamento em tendências de emigração, recuperação de herança cultural e desenvolvimento de negócios internacionais",
      content: {
        paragraph1: "Daniel Atz oferece insights com autoridade na intersecção crítica da cidadania global, inteligência sobre emigração e relações transatlânticas. Com base em pesquisas proprietárias e análises demográficas, ele fornece análises convincentes dos padrões de emigração pós-eleitorais e suas profundas implicações para a mobilidade de talentos e capital intelectual.",
        paragraph2: "Como fundador de múltiplos empreendimentos complementares, incluindo a LuxCitizenship, Daniel guiou pessoalmente mais de 2.100 americanos na recuperação da cidadania europeia, enquanto ajudou mais de 200 empresas a navegar na entrada no mercado transatlântico.",
        paragraph3: "Sua expertise única transforma herança ancestral em oportunidades tangíveis para indivíduos e organizações, oferecendo aos tomadores de decisão uma combinação rara de previsões baseadas em dados e estratégias de implementação práticas que abordam um dos fenômenos globais mais consequentes da atualidade."
      }
    },
    zh: {
      title: "演讲活动",
      subtitle: "移民趋势、传统文化复兴和国际商业发展的思想领袖",
      content: {
        paragraph1: "Daniel Atz在全球公民身份、移民情报和跨大西洋关系的关键交叉点提供权威见解。通过专有研究和人口统计分析，他对选举后移民模式及其对人才流动和知识资本的深远影响提供了令人信服的分析。",
        paragraph2: "作为包括LuxCitizenship在内的多个互补企业的创始人，Daniel亲自指导了2,100多名美国人恢复欧洲公民身份，同时帮助200多家公司进入跨大西洋市场。",
        paragraph3: "他独特的专长将祖先遗产转化为个人和组织的切实机会，为决策者提供了数据驱动预测和实用实施策略的罕见组合，解决当今最重要的全球现象之一。"
      }
    }
  };

  // Get the current translation based on language
  const localizedText = translations[language];

  return (
    <section id="speaking" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">{localizedText.title}</h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">{localizedText.subtitle}</h3>
          </motion.div>

          {/* Redesigned layout to avoid dead white space */}
          <div className="flex flex-col items-center mb-12">
            {/* First paragraph followed by video */}
            <motion.div
              className="w-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center mb-8">
                {localizedText.content.paragraph1}
              </p>
              
              {/* Video embedded after first paragraph */}
              <div className="max-w-3xl mx-auto relative overflow-hidden rounded-xl shadow-2xl">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.youtube.com/embed/kLoehPMl-RQ" 
                    title="Daniel Atz Speaking"
                    frameBorder="0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
            
            {/* Second and third paragraphs after video */}
            <motion.div
              className="w-full mt-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-700 text-lg mb-4">
                {localizedText.content.paragraph2}
              </p>
              <p className="text-gray-700 text-lg">
                {localizedText.content.paragraph3}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;