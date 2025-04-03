import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "@/components/SEO";
import { Calendar, Globe, Users } from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  
  
  // Translations for About page
  const translations = {
    en: {
      title: "About Daniel Atz",
      subtitle: "Migration, Citizenship, Belonging",
      about: {
        title: "My Story",
        paragraph1: "Since 2012, I've been dedicated to helping people reconnect with their European heritage and unlock opportunities for global mobility through ancestry citizenship. My passion stems from my own journey of rediscovering my Luxembourg roots.",
        paragraph2: "What began as a personal quest to understand my family's migration history grew into multiple ventures that have helped thousands of Americans reconnect with their European origins. I've collaborated with government officials, archivists, historians, and legal experts across Europe and the Americas.",
        paragraph3: "My work sits at the intersection of identity, history, law, and technology. I'm driven by the belief that understanding our ancestral connections can provide powerful insights into who we are and open new pathways for our futures."
      },
      mission: {
        title: "My Mission",
        text: "I'm on a mission to bring innovative insights and historical depth to global conversations on migration, citizenship, and belonging—bridging past and present to help people navigate their place in the world. I tell stories that help forge bridges to international growth."
      },
      expertise: {
        title: "Areas of Expertise",
        items: [
          {
            title: "Ancestry Citizenship",
            description: "Expertise in European citizenship by descent laws, particularly for Luxembourg, Germany, Italy, and Portugal."
          },
          {
            title: "Migration History",
            description: "Research and documentation of historical migration patterns, with focus on European emigration to the Americas."
          },
          {
            title: "Identity & Belonging",
            description: "Analysis of how dual citizenship and transnational identities shape modern concepts of belonging."
          },
          {
            title: "Digital Archiving",
            description: "Innovative approaches to digitizing historical records and making genealogical information accessible."
          }
        ]
      },
      achievements: {
        title: "Key Achievements",
        items: [
          "Helped over 2,500 Americans reconnect with their European heritage and obtain EU citizenship",
          "Founded multiple successful ventures focused on ancestry citizenship",
          "Collaborated with government agencies in Luxembourg, Brazil, and the United States",
          "Featured in international media for expertise on citizenship and migration",
          "Developed innovative technology solutions for ancestral research and documentation"
        ]
      },
      contact: {
        title: "Let's Connect",
        text: "Whether you're interested in a speaking engagement, media interview, or exploring potential collaborations, I'd love to hear from you.",
        button: "Schedule a Consultation"
      },
      metaDescription: "Daniel Atz is an expert on migration, citizenship and belonging, helping people reconnect with their European heritage through ancestral citizenship research and advocacy."
    },
    fr: {
      title: "À Propos de Daniel Atz",
      subtitle: "Migration, Citoyenneté, Appartenance",
      about: {
        title: "Mon Histoire",
        paragraph1: "Depuis 2012, je me consacre à aider les gens à renouer avec leur héritage européen et à créer des opportunités de mobilité mondiale grâce à la citoyenneté par ascendance. Ma passion découle de mon propre parcours de redécouverte de mes racines luxembourgeoises.",
        paragraph2: "Ce qui a commencé comme une quête personnelle pour comprendre l'histoire migratoire de ma famille s'est transformé en plusieurs entreprises qui ont aidé des milliers d'Américains à renouer avec leurs origines européennes. J'ai collaboré avec des fonctionnaires, des archivistes, des historiens et des experts juridiques à travers l'Europe et les Amériques.",
        paragraph3: "Mon travail se situe à l'intersection de l'identité, de l'histoire, du droit et de la technologie. Je suis motivé par la conviction que comprendre nos connexions ancestrales peut fournir des aperçus puissants sur qui nous sommes et ouvrir de nouvelles voies pour notre avenir."
      },
      mission: {
        title: "Ma Mission",
        text: "J'ai pour mission d'apporter des perspectives innovantes et une profondeur historique aux conversations mondiales sur la migration, la citoyenneté et l'appartenance—en reliant le passé et le présent pour aider les gens à naviguer dans leur place dans le monde. Je raconte des histoires qui aident à forger des ponts vers la croissance internationale."
      },
      expertise: {
        title: "Domaines d'Expertise",
        items: [
          {
            title: "Citoyenneté par Ascendance",
            description: "Expertise en lois de citoyenneté européenne par descendance, particulièrement pour le Luxembourg, l'Allemagne, l'Italie et le Portugal."
          },
          {
            title: "Histoire des Migrations",
            description: "Recherche et documentation des schémas historiques de migration, avec un accent sur l'émigration européenne vers les Amériques."
          },
          {
            title: "Identité & Appartenance",
            description: "Analyse de comment la double citoyenneté et les identités transnationales façonnent les concepts modernes d'appartenance."
          },
          {
            title: "Archivage Numérique",
            description: "Approches innovantes pour numériser les documents historiques et rendre l'information généalogique accessible."
          }
        ]
      },
      achievements: {
        title: "Réalisations Clés",
        items: [
          "Aidé plus de 2 500 Américains à renouer avec leur héritage européen et à obtenir la citoyenneté européenne",
          "Fondé plusieurs entreprises réussies axées sur la citoyenneté par ascendance",
          "Collaboré avec des agences gouvernementales au Luxembourg, au Brésil et aux États-Unis",
          "Présenté dans les médias internationaux pour son expertise en matière de citoyenneté et de migration",
          "Développé des solutions technologiques innovantes pour la recherche et la documentation ancestrales"
        ]
      },
      contact: {
        title: "Connectons-nous",
        text: "Que vous soyez intéressé par une conférence, une interview médiatique ou l'exploration de collaborations potentielles, j'aimerais avoir de vos nouvelles.",
        button: "Planifier une Consultation"
      },
      metaDescription: "Daniel Atz est un expert en migration, citoyenneté et appartenance, aidant les gens à renouer avec leur héritage européen grâce à la recherche et au plaidoyer pour la citoyenneté ancestrale."
    },
    pt: {
      title: "Sobre Daniel Atz",
      subtitle: "Migração, Cidadania, Pertencimento",
      about: {
        title: "Minha História",
        paragraph1: "Desde 2012, tenho me dedicado a ajudar pessoas a reconectarem-se com sua herança europeia e a desbloquear oportunidades de mobilidade global através da cidadania por ancestralidade. Minha paixão vem da minha própria jornada de redescoberta das minhas raízes luxemburguesas.",
        paragraph2: "O que começou como uma busca pessoal para entender a história migratória da minha família cresceu para vários empreendimentos que ajudaram milhares de americanos a reconectarem-se com suas origens europeias. Colaborei com funcionários do governo, arquivistas, historiadores e especialistas jurídicos em toda a Europa e as Américas.",
        paragraph3: "Meu trabalho está na interseção de identidade, história, direito e tecnologia. Sou motivado pela crença de que entender nossas conexões ancestrais pode fornecer insights poderosos sobre quem somos e abrir novos caminhos para nosso futuro."
      },
      mission: {
        title: "Minha Missão",
        text: "Estou em uma missão para trazer insights inovadores e profundidade histórica às conversas globais sobre migração, cidadania e pertencimento—conectando passado e presente para ajudar as pessoas a navegarem em seu lugar no mundo. Conto histórias que ajudam a forjar pontes para o crescimento internacional."
      },
      expertise: {
        title: "Áreas de Especialização",
        items: [
          {
            title: "Cidadania por Ancestralidade",
            description: "Especialização em leis de cidadania europeia por descendência, particularmente para Luxemburgo, Alemanha, Itália e Portugal."
          },
          {
            title: "História da Migração",
            description: "Pesquisa e documentação de padrões históricos de migração, com foco na emigração europeia para as Américas."
          },
          {
            title: "Identidade & Pertencimento",
            description: "Análise de como a dupla cidadania e identidades transnacionais moldam conceitos modernos de pertencimento."
          },
          {
            title: "Arquivamento Digital",
            description: "Abordagens inovadoras para digitalização de registros históricos e tornando informações genealógicas acessíveis."
          }
        ]
      },
      achievements: {
        title: "Principais Conquistas",
        items: [
          "Ajudei mais de 2.500 americanos a reconectarem-se com sua herança europeia e obterem cidadania da UE",
          "Fundei múltiplos empreendimentos bem-sucedidos focados em cidadania por ancestralidade",
          "Colaborei com agências governamentais em Luxemburgo, Brasil e Estados Unidos",
          "Apresentado na mídia internacional por expertise em cidadania e migração",
          "Desenvolvi soluções tecnológicas inovadoras para pesquisa ancestral e documentação"
        ]
      },
      contact: {
        title: "Vamos Conectar",
        text: "Se você estiver interessado em uma palestra, entrevista para mídia ou explorar colaborações potenciais, adoraria ouvir de você.",
        button: "Agendar uma Consulta"
      },
      metaDescription: "Daniel Atz é um especialista em migração, cidadania e pertencimento, ajudando pessoas a reconectarem-se com sua herança europeia através de pesquisa e advocacia para cidadania ancestral."
    },
    zh: {
      title: "关于丹尼尔·阿兹",
      subtitle: "移民、公民身份、归属感",
      about: {
        title: "我的故事",
        paragraph1: "自2012年以来，我致力于帮助人们重新连接他们的欧洲遗产并通过祖籍公民身份获得全球流动机会。我的热情源于我自己重新发现卢森堡根源的旅程。",
        paragraph2: "最初是一场了解我家族移民历史的个人探索，后来发展成了多个企业，帮助数千名美国人重新连接他们的欧洲血统。我与欧洲和美洲的政府官员、档案管理员、历史学家和法律专家合作。",
        paragraph3: "我的工作处于身份、历史、法律和技术的交叉点。我相信理解我们的祖先联系可以提供有关我们是谁的强大洞察力，为我们的未来开辟新的道路。"
      },
      mission: {
        title: "我的使命",
        text: "我的使命是为全球关于移民、公民身份和归属感的对话带来创新见解和历史深度——连接过去和现在，帮助人们在世界中找到自己的位置。我讲述能够帮助建立国际发展桥梁的故事。"
      },
      expertise: {
        title: "专业领域",
        items: [
          {
            title: "祖籍公民身份",
            description: "擅长欧洲血统公民身份法律，特别是卢森堡、德国、意大利和葡萄牙。"
          },
          {
            title: "移民历史",
            description: "研究和记录历史移民模式，重点关注欧洲向美洲的移民。"
          },
          {
            title: "身份与归属",
            description: "分析双重国籍和跨国身份如何塑造现代归属感概念。"
          },
          {
            title: "数字档案",
            description: "创新方法数字化历史记录并使谱系信息易于获取。"
          }
        ]
      },
      achievements: {
        title: "主要成就",
        items: [
          "帮助超过2,500名美国人重新连接其欧洲遗产并获得欧盟公民身份",
          "创立多个专注于祖籍公民身份的成功企业",
          "与卢森堡、巴西和美国的政府机构合作",
          "因公民身份和移民专业知识在国际媒体上亮相",
          "为祖先研究和文档开发创新技术解决方案"
        ]
      },
      contact: {
        title: "联系我",
        text: "无论您是对演讲活动、媒体采访还是探索潜在合作感兴趣，我都很乐意听到您的声音。",
        button: "安排咨询"
      },
      metaDescription: "丹尼尔·阿兹是移民、公民身份和归属感方面的专家，通过祖籍公民身份研究和倡导帮助人们重新连接他们的欧洲遗产。"
    }
  };

  // Get the current translation based on language
  const localizedText = translations[language];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <SEO
        title={`${localizedText.title} | Daniel Atz`}
        description={localizedText.metaDescription}
        pathname="/about"
      />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">{localizedText.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{localizedText.subtitle}</p>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              {/* Optimized layout to avoid dead white space */}
              {/* Heading first */}
              <motion.h2 variants={itemVariants} className="text-3xl font-serif font-bold mb-6 text-gray-800 text-center">
                {localizedText.about.title}
              </motion.h2>
              
              {/* First paragraph */}
              <motion.p variants={itemVariants} className="text-gray-600 mb-6 max-w-3xl mx-auto text-center">
                {localizedText.about.paragraph1}
              </motion.p>
              
              {/* Video centered */}
              <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto mb-8">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.youtube.com/embed/9GhevT-vGUw" 
                    title="Daniel Atz Story"
                    frameBorder="0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
              
              {/* Remaining paragraphs after video */}
              <div className="max-w-3xl mx-auto">
                <motion.p variants={itemVariants} className="text-gray-600 mb-4">
                  {localizedText.about.paragraph2}
                </motion.p>
                <motion.p variants={itemVariants} className="text-gray-600">
                  {localizedText.about.paragraph3}
                </motion.p>
              </div>
            </motion.div>
            
            {/* Mission Statement */}
            <motion.div 
              className="bg-primary/10 rounded-xl p-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold mb-4 text-primary">
                  {localizedText.mission.title}
                </h2>
                <p className="text-lg italic text-gray-700">
                  "{localizedText.mission.text}"
                </p>
              </div>
            </motion.div>
            
            {/* Expertise Areas */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800">
                {localizedText.expertise.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {localizedText.expertise.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Achievements */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-gray-800">
                {localizedText.achievements.title}
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <ul className="space-y-4">
                  {localizedText.achievements.items.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            {/* Contact CTA */}
            <motion.div 
              className="text-center bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">
                {localizedText.contact.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                {localizedText.contact.text}
              </p>
              <a 
                href="https://meetings.hubspot.com/daniel692/30min-clone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Calendar className="h-5 w-5" />
                {localizedText.contact.button}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;