import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { ArrowRight, BookOpen, Clock, FileText } from "lucide-react";

const ThoughtLeadership = () => {
  const { language } = useLanguage();
  
  // Translations for Thought Leadership page
  const translations = {
    en: {
      title: "Thought Leadership",
      subtitle: "Articles, research, and insights on migration, citizenship, and belonging",
      featuredArticle: "Featured Article",
      readMore: "Read More",
      minutesToRead: "min read",
      publicationsSection: "Latest Publications",
      resourcesSection: "Resources & White Papers",
      viewResource: "View Resource",
      metaDescription: "Explore Daniel Atz's thought leadership articles, publications, and resources on migration, citizenship, dual nationality, and belonging in a global context."
    },
    fr: {
      title: "Leadership d'Opinion",
      subtitle: "Articles, recherches et perspectives sur la migration, la citoyenneté et l'appartenance",
      featuredArticle: "Article à la Une",
      readMore: "Lire Plus",
      minutesToRead: "min de lecture",
      publicationsSection: "Dernières Publications",
      resourcesSection: "Ressources & Livres Blancs",
      viewResource: "Voir la Ressource",
      metaDescription: "Explorez les articles de leadership d'opinion, les publications et les ressources de Daniel Atz sur la migration, la citoyenneté, la double nationalité et l'appartenance dans un contexte mondial."
    },
    pt: {
      title: "Liderança de Pensamento",
      subtitle: "Artigos, pesquisas e insights sobre migração, cidadania e pertencimento",
      featuredArticle: "Artigo em Destaque",
      readMore: "Leia Mais",
      minutesToRead: "min de leitura",
      publicationsSection: "Publicações Recentes",
      resourcesSection: "Recursos & White Papers",
      viewResource: "Ver Recurso",
      metaDescription: "Explore artigos de liderança de pensamento, publicações e recursos de Daniel Atz sobre migração, cidadania, dupla nacionalidade e pertencimento em um contexto global."
    },
    zh: {
      title: "思想领导力",
      subtitle: "关于移民、公民身份和归属感的文章、研究和见解",
      featuredArticle: "精选文章",
      readMore: "阅读更多",
      minutesToRead: "分钟阅读",
      publicationsSection: "最新出版物",
      resourcesSection: "资源与白皮书",
      viewResource: "查看资源",
      metaDescription: "探索丹尼尔·阿兹关于移民、公民身份、双重国籍和全球背景下归属感的思想领导力文章、出版物和资源。"
    }
  };

  // Featured Article Data
  const featuredArticle = {
    title: {
      en: "The Evolving Landscape of European Citizenship Recovery",
      fr: "L'évolution du paysage de la récupération de la citoyenneté européenne",
      pt: "O panorama em evolução da recuperação da cidadania europeia",
      zh: "欧洲公民身份恢复的不断发展的格局"
    },
    excerpt: {
      en: "In an increasingly interconnected world, the concept of citizenship has evolved beyond mere legal status. This article explores how European nations are adapting their citizenship laws to accommodate descendants of emigrants, creating new opportunities and challenges for identity formation across borders.",
      fr: "Dans un monde de plus en plus interconnecté, le concept de citoyenneté a évolué au-delà d'un simple statut juridique. Cet article explore comment les nations européennes adaptent leurs lois sur la citoyenneté pour accueillir les descendants d'émigrants, créant ainsi de nouvelles opportunités et défis pour la formation de l'identité à travers les frontières.",
      pt: "Em um mundo cada vez mais interconectado, o conceito de cidadania evoluiu além do mero status legal. Este artigo explora como as nações europeias estão adaptando suas leis de cidadania para acomodar descendentes de emigrantes, criando novas oportunidades e desafios para a formação de identidade através das fronteiras.",
      zh: "在日益互联的世界中，公民身份的概念已经超越了单纯的法律地位。本文探讨了欧洲国家如何调整其公民身份法律以适应移民后裔，为跨境身份形成创造新的机遇和挑战。"
    },
    imageUrl: "/attached_assets/Election in Luxembourg this Sunday (8th) includes Brazilian voters and candidate.png",
    publishDate: "February 15, 2025",
    readTime: 7,
    url: "#"
  };

  // Publications Data
  const publications = [
    {
      id: "dual-citizenship-benefits",
      title: {
        en: "The Economic and Social Benefits of Dual Citizenship",
        fr: "Les avantages économiques et sociaux de la double nationalité",
        pt: "Os benefícios econômicos e sociais da dupla cidadania",
        zh: "双重国籍的经济和社会效益"
      },
      excerpt: {
        en: "This analysis explores how dual citizenship creates economic opportunities, facilitates cultural exchange, and strengthens familial bonds across borders.",
        fr: "Cette analyse explore comment la double nationalité crée des opportunités économiques, facilite les échanges culturels et renforce les liens familiaux à travers les frontières.",
        pt: "Esta análise explora como a dupla cidadania cria oportunidades econômicas, facilita o intercâmbio cultural e fortalece os laços familiares através das fronteiras.",
        zh: "这项分析探讨了双重国籍如何创造经济机会、促进文化交流和加强跨境家庭联系。"
      },
      publishDate: "November 18, 2024",
      readTime: 9,
      url: "#"
    },
    {
      id: "migration-policies",
      title: {
        en: "Migration Policies Post-Pandemic: A Shifting Paradigm",
        fr: "Politiques migratoires post-pandémie: Un paradigme changeant",
        pt: "Políticas migratórias pós-pandemia: Um paradigma em mudança",
        zh: "疫情后移民政策：转变中的范式"
      },
      excerpt: {
        en: "Examining how COVID-19 has transformed migration policies across Europe and the implications for cross-border mobility and citizenship acquisition.",
        fr: "Examen de la façon dont le COVID-19 a transformé les politiques migratoires à travers l'Europe et les implications pour la mobilité transfrontalière et l'acquisition de la citoyenneté.",
        pt: "Examinando como a COVID-19 transformou as políticas migratórias em toda a Europa e as implicações para a mobilidade transfronteiriça e a aquisição de cidadania.",
        zh: "研究COVID-19如何改变了欧洲各地的移民政策以及对跨境流动和公民身份获取的影响。"
      },
      publishDate: "September 3, 2024",
      readTime: 11,
      url: "#"
    },
    {
      id: "digital-nomad-visas",
      title: {
        en: "Digital Nomad Visas and the Future of Work-Based Migration",
        fr: "Visas de nomade numérique et l'avenir de la migration basée sur le travail",
        pt: "Vistos de nômade digital e o futuro da migração baseada em trabalho",
        zh: "数字游民签证和工作型移民的未来"
      },
      excerpt: {
        en: "An overview of how countries are creating new visa categories for remote workers, blurring the lines between tourism, temporary residence, and pathways to permanent migration.",
        fr: "Un aperçu de la façon dont les pays créent de nouvelles catégories de visas pour les travailleurs à distance, brouillant les frontières entre le tourisme, la résidence temporaire et les voies vers la migration permanente.",
        pt: "Uma visão geral de como os países estão criando novas categorias de vistos para trabalhadores remotos, borrando as linhas entre turismo, residência temporária e caminhos para migração permanente.",
        zh: "概述各国如何为远程工作者创建新的签证类别，模糊了旅游、临时居留和永久移民途径之间的界限。"
      },
      publishDate: "July 29, 2024",
      readTime: 8,
      url: "#"
    },
    {
      id: "diaspora-engagement",
      title: {
        en: "Diaspora Engagement: How Nations Connect With Citizens Abroad",
        fr: "Engagement de la diaspora: Comment les nations se connectent avec les citoyens à l'étranger",
        pt: "Engajamento da diáspora: Como as nações se conectam com cidadãos no exterior",
        zh: "侨民参与：国家如何与海外公民联系"
      },
      excerpt: {
        en: "Analysis of strategies employed by governments to maintain ties with their diasporas and leverage these connections for diplomatic, cultural, and economic benefits.",
        fr: "Analyse des stratégies employées par les gouvernements pour maintenir des liens avec leurs diasporas et exploiter ces connexions pour des avantages diplomatiques, culturels et économiques.",
        pt: "Análise das estratégias empregadas pelos governos para manter laços com suas diásporas e aproveitar essas conexões para benefícios diplomáticos, culturais e econômicos.",
        zh: "分析政府为维持与侨民的联系并利用这些联系获取外交、文化和经济利益而采取的策略。"
      },
      publishDate: "May 15, 2024",
      readTime: 10,
      url: "#"
    }
  ];

  // Resources Data
  const resources = [
    {
      id: "citizenship-guide",
      title: {
        en: "Complete Guide to European Citizenship by Descent",
        fr: "Guide complet de la citoyenneté européenne par ascendance",
        pt: "Guia completo para cidadania europeia por descendência",
        zh: "欧洲血统公民身份完全指南"
      },
      description: {
        en: "A comprehensive resource covering eligibility criteria, application processes, and documentation requirements for ancestry-based citizenship in 20 European countries.",
        fr: "Une ressource complète couvrant les critères d'éligibilité, les processus de demande et les exigences documentaires pour la citoyenneté basée sur l'ascendance dans 20 pays européens.",
        pt: "Um recurso abrangente cobrindo critérios de elegibilidade, processos de aplicação e requisitos de documentação para cidadania baseada em ancestralidade em 20 países europeus.",
        zh: "全面资源，涵盖20个欧洲国家基于血统的公民身份的资格标准、申请流程和文件要求。"
      },
      type: "Guide",
      fileUrl: "#"
    },
    {
      id: "dual-tax-impacts",
      title: {
        en: "Tax Implications of Dual Citizenship: A Comparative Analysis",
        fr: "Implications fiscales de la double nationalité: Une analyse comparative",
        pt: "Implicações fiscais da dupla cidadania: Uma análise comparativa",
        zh: "双重国籍的税务影响：比较分析"
      },
      description: {
        en: "In-depth analysis of how dual citizenship affects tax obligations, treaty benefits, and strategies for optimizing tax situations for individuals with multiple nationalities.",
        fr: "Analyse approfondie de l'impact de la double nationalité sur les obligations fiscales, les avantages conventionnels et les stratégies d'optimisation fiscale pour les personnes ayant plusieurs nationalités.",
        pt: "Análise aprofundada de como a dupla cidadania afeta as obrigações fiscais, os benefícios de tratados e as estratégias para otimizar situações fiscais para indivíduos com múltiplas nacionalidades.",
        zh: "深入分析双重国籍如何影响税务义务、条约优惠以及为具有多重国籍的个人优化税务状况的策略。"
      },
      type: "White Paper",
      fileUrl: "#"
    },
    {
      id: "cultural-identity",
      title: {
        en: "Navigating Cultural Identity in a Globalized World",
        fr: "Naviguer dans l'identité culturelle dans un monde globalisé",
        pt: "Navegando pela identidade cultural em um mundo globalizado",
        zh: "在全球化世界中驾驭文化身份"
      },
      description: {
        en: "Research exploring how individuals with multicultural backgrounds form and express their identities, with case studies from Luxembourg's diaspora communities.",
        fr: "Recherche explorant comment les individus issus de milieux multiculturels forment et expriment leurs identités, avec des études de cas des communautés de la diaspora luxembourgeoise.",
        pt: "Pesquisa explorando como indivíduos com backgrounds multiculturais formam e expressam suas identidades, com estudos de caso das comunidades da diáspora luxemburguesa.",
        zh: "研究多元文化背景的个人如何形成和表达他们的身份，包括来自卢森堡侨民社区的案例研究。"
      },
      type: "Research Report",
      fileUrl: "#"
    },
    {
      id: "migration-strategies",
      title: {
        en: "Strategic Migration Planning for Global Professionals",
        fr: "Planification stratégique de la migration pour les professionnels mondiaux",
        pt: "Planejamento estratégico de migração para profissionais globais",
        zh: "全球专业人士的战略移民规划"
      },
      description: {
        en: "Toolkit for evaluating migration options, residence permits, and pathways to citizenship for skilled professionals seeking international career opportunities.",
        fr: "Boîte à outils pour évaluer les options de migration, les permis de séjour et les voies d'accès à la citoyenneté pour les professionnels qualifiés recherchant des opportunités de carrière internationales.",
        pt: "Kit de ferramentas para avaliar opções de migração, autorizações de residência e caminhos para a cidadania para profissionais qualificados que buscam oportunidades de carreira internacionais.",
        zh: "评估移民选择、居留许可和寻求国际职业机会的技术专业人员获得公民身份途径的工具包。"
      },
      type: "Toolkit",
      fileUrl: "#"
    }
  ];

  // Get the current translation based on language
  const localizedText = translations[language];

  return (
    <>
      <Helmet>
        <title>Thought Leadership | Daniel Atz</title>
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
            
            {/* Featured Article Section */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredArticle.imageUrl} 
                      alt={featuredArticle.title[language]} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">
                      {localizedText.featuredArticle}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      {featuredArticle.title[language]}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{featuredArticle.publishDate}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredArticle.readTime} {localizedText.minutesToRead}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{featuredArticle.excerpt[language]}</p>
                    <a 
                      href={featuredArticle.url} 
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors self-start"
                    >
                      {localizedText.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
            
            {/* Publications Section */}
            <section className="mb-16">
              <motion.h2 
                className="text-3xl font-serif font-bold mb-8 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {localizedText.publicationsSection}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {publications.map((publication, index) => (
                  <motion.div
                    key={publication.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{publication.publishDate}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {publication.readTime} {localizedText.minutesToRead}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{publication.title[language]}</h3>
                      <p className="text-gray-600 mb-4">{publication.excerpt[language]}</p>
                      
                      <a 
                        href={publication.url} 
                        className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center"
                      >
                        {localizedText.readMore}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            
            {/* Resources Section */}
            <section>
              <motion.h2 
                className="text-3xl font-serif font-bold mb-8 text-gray-800 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full after:bg-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {localizedText.resourcesSection}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  >
                    <div className="bg-gray-100 p-6 flex items-center justify-center">
                      <div className="bg-primary/10 rounded-full p-3">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1">
                      <div className="mb-1">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {resource.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{resource.title[language]}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{resource.description[language]}</p>
                      
                      <a 
                        href={resource.fileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium transition-colors inline-flex items-center"
                      >
                        {localizedText.viewResource}
                        <BookOpen className="ml-1 h-4 w-4" />
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

export default ThoughtLeadership;