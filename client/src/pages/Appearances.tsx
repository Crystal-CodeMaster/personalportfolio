import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const Appearances = () => {
  const { language } = useLanguage();
  
  // Translations for Appearances page
  const translations = {
    en: {
      title: "Appearances",
      subtitle: "Speaking engagements, interviews, and public appearances",
      upcomingEvents: "Upcoming Events",
      pastEvents: "Past Events",
      registerNow: "Register Now",
      watchRecording: "Watch Recording",
      metaDescription: "View Daniel Atz's upcoming and past speaking engagements, media appearances, and public events on migration, citizenship, and belonging."
    },
    fr: {
      title: "Apparitions",
      subtitle: "Conférences, interviews et apparitions publiques",
      upcomingEvents: "Événements à Venir",
      pastEvents: "Événements Passés",
      registerNow: "S'inscrire",
      watchRecording: "Voir l'Enregistrement",
      metaDescription: "Consultez les prochaines conférences, apparitions médiatiques et événements publics de Daniel Atz sur la migration, la citoyenneté et l'appartenance."
    },
    pt: {
      title: "Aparições",
      subtitle: "Palestras, entrevistas e aparições públicas",
      upcomingEvents: "Próximos Eventos",
      pastEvents: "Eventos Passados",
      registerNow: "Inscreva-se",
      watchRecording: "Assistir Gravação",
      metaDescription: "Veja as próximas e passadas palestras, aparições na mídia e eventos públicos de Daniel Atz sobre migração, cidadania e pertencimento."
    },
    zh: {
      title: "公开活动",
      subtitle: "演讲、采访和公开露面",
      upcomingEvents: "即将举行的活动",
      pastEvents: "过往活动",
      registerNow: "立即注册",
      watchRecording: "观看录像",
      metaDescription: "查看丹尼尔·阿兹即将进行和过去的演讲、媒体露面和有关移民、公民身份和归属感的公开活动。"
    }
  };

  // Upcoming Events Data
  const upcomingEvents = [
    {
      id: "global-migration-2025",
      title: {
        en: "Global Migration Summit 2025",
        fr: "Sommet Mondial sur la Migration 2025",
        pt: "Cúpula Global de Migração 2025",
        zh: "2025年全球移民峰会"
      },
      description: {
        en: "Discussing trends in global citizenship and the implications of migration policies on dual citizens.",
        fr: "Discussion sur les tendances de la citoyenneté mondiale et les implications des politiques migratoires pour les double nationaux.",
        pt: "Discutindo tendências em cidadania global e as implicações das políticas migratórias para cidadãos com dupla nacionalidade.",
        zh: "讨论全球公民身份的趋势以及移民政策对双重国籍公民的影响。"
      },
      date: "June 15-16, 2025",
      location: "Brussels, Belgium",
      type: "Conference",
      registerUrl: "https://example.com/register"
    },
    {
      id: "citizenship-forum",
      title: {
        en: "European Citizenship Forum",
        fr: "Forum Européen de la Citoyenneté",
        pt: "Fórum Europeu de Cidadania",
        zh: "欧洲公民论坛"
      },
      description: {
        en: "Keynote on 'Reclaiming Heritage: The New Wave of European Citizenship Recovery'.",
        fr: "Discours d'ouverture sur 'Retrouver son héritage : La nouvelle vague de récupération de la citoyenneté européenne'.",
        pt: "Palestra principal sobre 'Recuperando o patrimônio: A nova onda de recuperação da cidadania europeia'.",
        zh: "主题演讲：'重拾传统：欧洲公民身份恢复的新浪潮'。"
      },
      date: "May 8, 2025",
      location: "Lisbon, Portugal",
      type: "Keynote Speech",
      registerUrl: "https://example.com/register"
    },
    {
      id: "lux-diaspora",
      title: {
        en: "Luxembourg Diaspora Day",
        fr: "Journée de la Diaspora Luxembourgeoise",
        pt: "Dia da Diáspora Luxemburguesa",
        zh: "卢森堡侨民日"
      },
      description: {
        en: "Panel discussion on 'Connecting Across Continents: Luxembourg's Global Community'.",
        fr: "Table ronde sur 'Connexions à travers les continents : La communauté mondiale du Luxembourg'.",
        pt: "Debate sobre 'Conectando através dos continentes: A comunidade global de Luxemburgo'.",
        zh: "小组讨论："跨越大洲的联系：卢森堡的全球社区"。"
      },
      date: "April 23, 2025",
      location: "Luxembourg City, Luxembourg",
      type: "Panel Discussion",
      registerUrl: "https://example.com/register"
    }
  ];

  // Past Events Data
  const pastEvents = [
    {
      id: "brazil-expo",
      title: {
        en: "Brazil-Luxembourg Expo 2024",
        fr: "Expo Brésil-Luxembourg 2024",
        pt: "Expo Brasil-Luxemburgo 2024",
        zh: "2024年巴西-卢森堡博览会"
      },
      description: {
        en: "Presented research on 'The Brazilian-Luxembourgish Connection: Migration Patterns and Cultural Exchange'.",
        fr: "Présentation de recherches sur 'La connexion brésilienne-luxembourgeoise : Modèles migratoires et échanges culturels'.",
        pt: "Apresentação de pesquisa sobre 'A conexão brasileiro-luxemburguesa: Padrões migratórios e intercâmbio cultural'.",
        zh: "就"巴西-卢森堡的联系：移民模式和文化交流"进行研究报告。"
      },
      date: "October 12, 2024",
      location: "São Paulo, Brazil",
      type: "Research Presentation",
      recordingUrl: "https://example.com/recording"
    },
    {
      id: "migration-conference",
      title: {
        en: "International Migration Conference",
        fr: "Conférence Internationale sur la Migration",
        pt: "Conferência Internacional de Migração",
        zh: "国际移民会议"
      },
      description: {
        en: "Spoke on 'Digital Nomads and Dual Citizenship: Navigating the New Normal'.",
        fr: "Intervention sur 'Nomades numériques et double nationalité : Naviguer dans la nouvelle normalité'.",
        pt: "Palestra sobre 'Nômades digitais e dupla cidadania: Navegando no novo normal'.",
        zh: "就"数字游民和双重国籍：适应新常态"发表讲话。"
      },
      date: "July 18, 2024",
      location: "Virtual Event",
      type: "Webinar",
      recordingUrl: "https://example.com/recording"
    },
    {
      id: "eu-parliament",
      title: {
        en: "EU Parliament Special Session",
        fr: "Session Spéciale du Parlement Européen",
        pt: "Sessão Especial do Parlamento Europeu",
        zh: "欧盟议会特别会议"
      },
      description: {
        en: "Presented on 'The Social and Economic Impact of Ancestry-Based Citizenship Programs'.",
        fr: "Présentation sur 'L'impact social et économique des programmes de citoyenneté basés sur l'ascendance'.",
        pt: "Apresentação sobre 'O impacto social e econômico dos programas de cidadania baseados em ancestralidade'.",
        zh: "就"基于血统的公民身份计划的社会和经济影响"进行演讲。"
      },
      date: "March 15, 2024",
      location: "Brussels, Belgium",
      type: "Expert Testimony",
      recordingUrl: "https://example.com/recording"
    },
    {
      id: "ted-talk",
      title: {
        en: "TEDx LuxembourgCity",
        fr: "TEDx LuxembourgCity",
        pt: "TEDx LuxembourgCity",
        zh: "TEDx卢森堡城"
      },
      description: {
        en: "Talk on 'Finding Belonging in a Borderless World'.",
        fr: "Conférence sur 'Trouver sa place dans un monde sans frontières'.",
        pt: "Palestra sobre 'Encontrando pertencimento em um mundo sem fronteiras'.",
        zh: "关于"在无边界世界中寻找归属感"的演讲。"
      },
      date: "November 5, 2023",
      location: "Luxembourg City, Luxembourg",
      type: "TEDx Talk",
      recordingUrl: "https://example.com/recording"
    }
  ];

  // Get the current translation based on language
  const localizedText = translations[language];

  return (
    <>
      <Helmet>
        <title>Appearances | Daniel Atz</title>
        <meta name="description" content={localizedText.metaDescription} />
      </Helmet>
      
      <div className="pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">{localizedText.title}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{localizedText.subtitle}</p>
            </motion.div>
            
            {/* Upcoming Events Section */}
            <section className="mb-16">
              <motion.h2 
                className="text-3xl font-serif font-bold mb-8 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {localizedText.upcomingEvents}
              </motion.h2>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <div className="w-full md:w-4/5 p-6">
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 gap-x-4 gap-y-1">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {event.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title[language]}</h3>
                      <p className="text-gray-600">{event.description[language]}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 flex items-center justify-center md:w-1/5">
                      <a 
                        href={event.registerUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center gap-1 bg-primary text-white hover:bg-primary/90 text-sm px-4"
                      >
                        <span>{localizedText.registerNow}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Past Events Section */}
            <section>
              <motion.h2 
                className="text-3xl font-serif font-bold mb-8 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {localizedText.pastEvents}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 gap-x-4 gap-y-1">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {event.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title[language]}</h3>
                      <p className="text-gray-600 mb-4">{event.description[language]}</p>
                      
                      <a 
                        href={event.recordingUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center"
                      >
                        {localizedText.watchRecording}
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appearances;