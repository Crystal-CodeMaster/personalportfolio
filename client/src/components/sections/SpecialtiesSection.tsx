import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import { Globe, Database, Sparkles, LucideIcon } from "lucide-react";

interface SpecialtyItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  bgColor?: string;
}

const SpecialtyItem: React.FC<SpecialtyItemProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0,
  bgColor = "bg-gray-50" 
}) => {
  // Determine which specialty this is based on the title to apply appropriate styling
  const isGlobalSpecialty = title.toLowerCase().includes("global") || title.toLowerCase().includes("internationalisation") || title.toLowerCase().includes("internacionalização") || title.toLowerCase().includes("国际化");
  const isDataSpecialty = title.toLowerCase().includes("data") || title.toLowerCase().includes("données") || title.toLowerCase().includes("dados") || title.toLowerCase().includes("数据");
  const isInnovationSpecialty = title.toLowerCase().includes("innovation") || title.toLowerCase().includes("narration") || title.toLowerCase().includes("inovação") || title.toLowerCase().includes("创新");
  
  // Define specialty-specific classes
  let iconColorClass = "text-primary";
  let iconBgClass = "bg-primary/15";
  let titleColorClass = "text-primary";
  let bgColorClass = bgColor;
  
  if (isGlobalSpecialty) {
    iconColorClass = "text-purple-700";
    iconBgClass = "bg-purple-100";
    titleColorClass = "text-purple-700";
    bgColorClass = "bg-purple-50";
  } else if (isDataSpecialty) {
    iconColorClass = "text-specialty-data";
    iconBgClass = "bg-specialty-data/15";
    titleColorClass = "text-specialty-data";
    bgColorClass = "bg-light-blue";
  } else if (isInnovationSpecialty) {
    iconColorClass = "text-specialty-story";
    iconBgClass = "bg-specialty-story/15";
    titleColorClass = "text-specialty-story";
    bgColorClass = "bg-light-orange";
  }
  
  return (
    <section className={`py-20 ${bgColorClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay }}
        >
          <div className="md:w-1/3 flex justify-center">
            <div className={`w-28 h-28 rounded-full ${iconBgClass} flex items-center justify-center shadow-lg transition-all hover:shadow-xl`}>
              <Icon className={`w-14 h-14 ${iconColorClass}`} />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              <span className={isGlobalSpecialty ? "text-purple-700" : titleColorClass}>{title.split(':')[0]}</span>
              {title.includes(':') && <span className={isGlobalSpecialty ? "text-purple-700" : "text-accent"}>: {title.split(':')[1]}</span>}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// YouTube video component for the Innovation section
const YouTubeVideo = () => {
  return (
    <div className="mt-8 md:mt-12 w-full max-w-3xl mx-auto">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/41GrKmUualI" 
          title="Daniel Atz - Innovation & Storytelling"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const SpecialtiesSection = () => {
  const { language } = useLanguage();
  
  // Translations for specialties content
  const translations = {
    en: {
      global: {
        title: "Global Success: Internationalization and Immigration",
        description: "I provide expert guidance on global migration trends, citizenship pathways, and cross-cultural adaptation. With extensive experience working with individuals and organizations navigating international borders, I offer strategic insights into successful immigration and internationalization strategies that bridge cultural divides."
      },
      data: {
        title: "Data Analysis",
        description: "I transform complex migration and demographic data into actionable insights. Specializing in quantitative and qualitative analysis of global mobility patterns, I help organizations understand shifting population trends and their implications for policy, business, and cultural exchange."
      },
      innovation: {
        title: "Innovation & Storytelling",
        description: "I craft compelling narratives that connect historical migration patterns with contemporary global challenges. By weaving together data, personal experiences, and historical context, I create impactful stories that illuminate our understanding of belonging and identity in a rapidly changing world."
      }
    },
    fr: {
      global: {
        title: "Succès Global: Internationalisation et Immigration",
        description: "J'offre une expertise sur les tendances migratoires mondiales, les voies d'accès à la citoyenneté et l'adaptation interculturelle. Avec une vaste expérience auprès d'individus et d'organisations traversant les frontières internationales, je propose des perspectives stratégiques sur les stratégies d'immigration et d'internationalisation qui comblent les fossés culturels."
      },
      data: {
        title: "Analyse de Données",
        description: "Je transforme des données complexes sur la migration et la démographie en informations exploitables. Spécialisé dans l'analyse quantitative et qualitative des modèles de mobilité mondiale, j'aide les organisations à comprendre l'évolution des tendances démographiques et leurs implications pour les politiques, les entreprises et les échanges culturels."
      },
      innovation: {
        title: "Innovation & Narration",
        description: "Je crée des récits convaincants qui relient les schémas migratoires historiques aux défis mondiaux contemporains. En tissant ensemble données, expériences personnelles et contexte historique, je crée des histoires percutantes qui éclairent notre compréhension de l'appartenance et de l'identité dans un monde en rapide évolution."
      }
    },
    pt: {
      global: {
        title: "Sucesso Global: Internacionalização e Imigração",
        description: "Ofereço orientação especializada sobre tendências globais de migração, caminhos para cidadania e adaptação intercultural. Com ampla experiência trabalhando com indivíduos e organizações que navegam por fronteiras internacionais, ofereço insights estratégicos para estratégias bem-sucedidas de imigração e internacionalização que superam divisões culturais."
      },
      data: {
        title: "Análise de Dados",
        description: "Transformo dados complexos sobre migração e demografia em insights acionáveis. Especializado em análise quantitativa e qualitativa de padrões de mobilidade global, ajudo organizações a entenderem as tendências populacionais em mudança e suas implicações para políticas, negócios e intercâmbio cultural."
      },
      innovation: {
        title: "Inovação & Narrativa",
        description: "Construo narrativas convincentes que conectam padrões históricos de migração com desafios globais contemporâneos. Ao entrelaçar dados, experiências pessoais e contexto histórico, crio histórias impactantes que iluminam nossa compreensão de pertencimento e identidade em um mundo em rápida evolução."
      }
    },
    zh: {
      global: {
        title: "全球成功：国际化与移民",
        description: "我提供关于全球移民趋势、公民身份途径和跨文化适应的专业指导。凭借与跨越国际边界的个人和组织合作的丰富经验，我提供战略性见解，助力成功的移民和国际化策略，弥合文化鸿沟。"
      },
      data: {
        title: "数据分析",
        description: "我将复杂的移民和人口统计数据转化为可行的洞见。专注于全球流动模式的定量和定性分析，我帮助组织理解不断变化的人口趋势及其对政策、商业和文化交流的影响。"
      },
      innovation: {
        title: "创新与讲故事",
        description: "我创作引人入胜的叙事，将历史移民模式与当代全球挑战联系起来。通过融合数据、个人经历和历史背景，我创造具有影响力的故事，阐明我们对快速变化世界中归属感和身份认同的理解。"
      }
    }
  };
  
  // Get the current translation based on language
  const localizedText = translations[language];
  
  return (
    <>
      <SpecialtyItem 
        title={localizedText.global.title}
        description={localizedText.global.description}
        icon={Globe}
        bgColor="bg-purple-50"
      />
      
      <SpecialtyItem 
        title={localizedText.data.title}
        description={localizedText.data.description}
        icon={Database}
        delay={0.1}
        bgColor="var(--warm-gray)"
      />
      
      <section className="py-20 bg-light-orange">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:w-1/3 flex justify-center">
              <div className="w-28 h-28 rounded-full bg-specialty-story/15 flex items-center justify-center shadow-lg transition-all hover:shadow-xl">
                <Sparkles className="w-14 h-14 text-orange-600" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                <span className="text-orange-600">{localizedText.innovation.title.split('&')[0]}</span>
                <span className="text-orange-600">&{localizedText.innovation.title.split('&')[1]}</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{localizedText.innovation.description}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SpecialtiesSection;