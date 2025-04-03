import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface Event {
  id: string;
  title: {
    en: string;
    fr: string;
    pt: string;
    zh: string;
  };
  description: {
    en: string;
    fr: string;
    pt: string;
    zh: string;
  };
  date: string;
  location: string;
  type: string;
  registerUrl?: string;
  recordingUrl?: string;
  imageUrl?: string;
}

const Appearances = () => {
  const { language } = useLanguage();
  
  // Translations for Appearances page
  const translations = {
    en: {
      title: "Public Speaking",
      subtitle: "Speaking engagements, interviews, and public appearances",
      upcomingEvents: "Upcoming Events",
      pastEvents: "Past Events",
      registerNow: "Register Now",
      moreInformation: "More Information",
      watchRecording: "Watch Recording",
      metaDescription: "View Daniel Atz's upcoming and past speaking engagements, media appearances, and public events on migration, citizenship, and belonging."
    },
    fr: {
      title: "Discours Publics",
      subtitle: "Conférences, interviews et apparitions publiques",
      upcomingEvents: "Événements à Venir",
      pastEvents: "Événements Passés",
      registerNow: "S'inscrire",
      moreInformation: "Plus d'Informations",
      watchRecording: "Voir l'Enregistrement",
      metaDescription: "Consultez les prochaines conférences, apparitions médiatiques et événements publics de Daniel Atz sur la migration, la citoyenneté et l'appartenance."
    },
    pt: {
      title: "Discursos Públicos",
      subtitle: "Palestras, entrevistas e aparições públicas",
      upcomingEvents: "Próximos Eventos",
      pastEvents: "Eventos Passados",
      registerNow: "Inscreva-se",
      moreInformation: "Mais Informações",
      watchRecording: "Assistir Gravação",
      metaDescription: "Veja as próximas e passadas palestras, aparições na mídia e eventos públicos de Daniel Atz sobre migração, cidadania e pertencimento."
    },
    zh: {
      title: "公开演讲",
      subtitle: "演讲、采访和公开露面",
      upcomingEvents: "即将举行的活动",
      pastEvents: "过往活动",
      registerNow: "立即注册",
      moreInformation: "更多信息",
      watchRecording: "观看录像",
      metaDescription: "查看丹尼尔·阿兹即将进行和过去的演讲、媒体露面和有关移民、公民身份和归属感的公开活动。"
    }
  };

  // Upcoming Events Data
  const upcomingEvents: Event[] = [
    {
      id: "nglcc-webinar",
      title: {
        en: "NGLCC Lunch & Learn: Immigration Processes for LGBTQ+ Business Owners",
        fr: "NGLCC Déjeuner & Apprendre: Processus d'immigration pour les entrepreneurs LGBTQ+",
        pt: "NGLCC Almoço & Aprendizado: Processos de imigração para empresários LGBTQ+",
        zh: "NGLCC午餐学习会：LGBTQ+企业主的移民流程"
      },
      description: {
        en: "Join us for an interactive session with the National LGBT Chamber of Commerce NY on key considerations for LGBT Americans moving abroad. Topics include surrogacy, gender transition, travel with an X gender marker, work visas, citizenship pathways, and managing a business internationally.",
        fr: "Rejoignez-nous pour une session interactive avec la Chambre de Commerce LGBT Nationale de NY sur les considérations essentielles pour les Américains LGBT qui s'installent à l'étranger. Les sujets incluent la gestation pour autrui, la transition de genre, les voyages avec un marqueur de genre X, les visas de travail, les voies d'accès à la citoyenneté et la gestion d'une entreprise à l'international.",
        pt: "Junte-se a nós para uma sessão interativa com a Câmara Nacional de Comércio LGBT de NY sobre considerações importantes para americanos LGBT que se mudam para o exterior. Os tópicos incluem barriga de aluguel, transição de gênero, viagens com um marcador de gênero X, vistos de trabalho, caminhos para a cidadania e gerenciamento de negócios internacionalmente.",
        zh: "加入我们与纽约国家LGBT商会的互动讨论，了解LGBT美国人移居海外的关键考虑因素。主题包括代孕、性别转换、使用X性别标记旅行、工作签证、公民身份途径以及国际业务管理。"
      },
      date: "March 28, 2025",
      location: "Online (Virtual Event)",
      type: "Webinar",
      registerUrl: "https://www.luxcitizenship.com/webinar-nglcc-immigration-processes-for-lgbtq-business-owners/",
      imageUrl: "/images/nglcc-webinar.png"
    }
  ];

  // Past Events Data
  const pastEvents: Event[] = [
    {
      id: "education-webinar",
      title: {
        en: "Understanding Education in Luxembourg",
        fr: "Comprendre l'Éducation au Luxembourg",
        pt: "Entendendo a Educação em Luxemburgo",
        zh: "了解卢森堡的教育系统"
      },
      description: {
        en: "An inside look at Luxembourg's education system for dual citizens considering relocation, covering both the international European school system and the national Luxembourgish school system.",
        fr: "Un aperçu du système éducatif luxembourgeois pour les citoyens binationaux envisageant de s'installer, couvrant à la fois le système scolaire international européen et le système scolaire national luxembourgeois.",
        pt: "Uma visão interna do sistema educacional de Luxemburgo para cidadãos com dupla nacionalidade que consideram a mudança, abrangendo tanto o sistema escolar internacional europeu quanto o sistema escolar nacional luxemburguês.",
        zh: "为考虑移居的双重国籍公民提供卢森堡教育系统的内部观察，涵盖国际欧洲学校系统和卢森堡国家学校系统。"
      },
      date: "March 22, 2025",
      location: "Online (Virtual Event)",
      type: "Webinar",
      registerUrl: "https://www.luxcitizenship.com/webinar-understanding-education-in-luxembourg-for-dual-citizens/",
      imageUrl: "/images/education-square-webinar.png"
    },
    {
      id: "cafe-com-prosa",
      title: {
        en: "Café com Prosa: Brazilian vs Luxembourgish Passports",
        fr: "Café com Prosa: Passeports brésiliens vs luxembourgeois",
        pt: "Café com Prosa: Passaporte Brasileiro e Luxemburguês",
        zh: "茶话会：巴西与卢森堡护照的区别"
      },
      description: {
        en: "Discussion with lawyer Jasmin Singh about the differences between Brazilian and Luxembourgish passports in the United States. The differences go far beyond tourist visa requirements for entering the country.",
        fr: "Discussion avec l'avocate Jasmin Singh sur les différences entre les passeports brésiliens et luxembourgeois aux États-Unis. Les différences vont bien au-delà des exigences de visa touristique pour entrer dans le pays.",
        pt: "Daniel Atz, americano e luxemburguês, recebe a advogada Jasmin Singh para uma conversa com os associados da ACLUX sobre as diferenças nos EUA entre passaporte Brasileiro e Luxemburguês. Acredite, a diferença é muito mais do que a exigência de visto de turista.",
        zh: "与律师Jasmin Singh讨论巴西和卢森堡护照在美国的差异。这些差异远不止于入境所需的旅游签证要求。"
      },
      date: "February 25, 2025",
      location: "Florianópolis, Brazil",
      type: "In-Person Discussion",
      registerUrl: "https://www.aclux.org/events/cafe-com-prosa-passport-differences",
      imageUrl: "/images/cafe-com-prosa.jpg"
    },
    {
      id: "minnesota-meetup",
      title: {
        en: "Luxembourg Dual Citizen Meetup | Minnesota",
        fr: "Rencontre des doubles citoyens luxembourgeois | Minnesota",
        pt: "Encontro de Cidadãos com Dupla Cidadania Luxemburguesa | Minnesota",
        zh: "卢森堡双重国籍公民聚会 | 明尼苏达州"
      },
      description: {
        en: "Join Luxembourg dual citizens, friends, and family for a casual gathering at Dual Citizen Brewing Company in St. Paul. Connect with others who share Luxembourg heritage and learn about resources for Luxembourg dual citizens in the Midwest.",
        fr: "Rejoignez les doubles citoyens luxembourgeois, amis et famille pour une réunion décontractée à la Dual Citizen Brewing Company à St. Paul. Connectez-vous avec d'autres personnes qui partagent le patrimoine luxembourgeois et découvrez les ressources pour les doubles citoyens luxembourgeois dans le Midwest.",
        pt: "Junte-se a cidadãos com dupla cidadania luxemburguesa, amigos e familiares para um encontro casual na Dual Citizen Brewing Company em St. Paul. Conecte-se com outras pessoas que compartilham a herança luxemburguesa e conheça recursos para cidadãos com dupla cidadania luxemburguesa no Centro-Oeste.",
        zh: "在圣保罗的双重公民啤酒公司与卢森堡双重国籍公民、朋友和家人一起参加非正式聚会。结识其他拥有卢森堡血统的人，了解中西部地区卢森堡双重国籍公民的资源。"
      },
      date: "October 19, 2024",
      location: "St. Paul, MN",
      type: "Networking Event",
      registerUrl: "https://www.luxcitizenship.com/minnesota-meetup/",
      imageUrl: "/images/minnesota-meetup.png"
    }

  ];

  // Get the current translation based on language
  const localizedText = translations[language];

  return (
    <>
      <Helmet>
        <title>Public Speaking | Daniel Atz</title>
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
            <section className="mb-8">
              <motion.h2 
                className="text-3xl font-serif font-bold mb-8 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {localizedText.upcomingEvents}
              </motion.h2>
              
              <div className="grid grid-cols-1 gap-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <div className="md:flex">
                      {event.imageUrl && (
                        <div className="md:w-1/3 p-4 flex items-center justify-center bg-white">
                          <img 
                            src={event.imageUrl} 
                            alt={event.title[language]}
                            className="max-h-72 object-contain"
                          />
                        </div>
                      )}
                      <div className={`p-6 ${event.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
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
                        <p className="text-gray-600 mb-4">{event.description[language]}</p>
                        
                        {event.registerUrl && (
                          <a 
                            href={event.registerUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center"
                          >
                            {localizedText.moreInformation}
                            <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
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
              
              <div className="grid grid-cols-1 gap-6">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <div className="md:flex">
                      {event.imageUrl && (
                        <div className="md:w-1/3 p-4 flex items-center justify-center bg-white">
                          <img 
                            src={event.imageUrl} 
                            alt={event.title[language]}
                            className="max-h-72 object-contain"
                          />
                        </div>
                      )}
                      <div className={`p-6 ${event.imageUrl ? 'md:w-2/3' : 'w-full'}`}>
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
                        
                        {event.registerUrl && (
                          <a 
                            href={event.registerUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center"
                          >
                            {localizedText.moreInformation}
                            <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        )}
                        {event.recordingUrl && !event.registerUrl && (
                          <a 
                            href={event.recordingUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center"
                          >
                            {localizedText.watchRecording}
                            <ArrowRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
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