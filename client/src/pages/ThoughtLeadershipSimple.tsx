import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "@/components/SEO";
import { ArrowRight, Clock } from "lucide-react";

interface Article {
  id?: string;
  title: {
    en: string;
    fr: string;
    pt: string;
    zh: string;
  };
  excerpt: {
    en: string;
    fr: string;
    pt: string;
    zh: string;
  };
  imageUrl?: string;
  publishDate: string;
  readTime?: number;
  url: string;
}



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
  const featuredArticle: Article = {
    id: "memory-machines",
    title: {
      en: "Memory Machines: What Our Sora Experiment Taught Us About the Future of Storytelling",
      fr: "Machines de Mémoire : Ce que notre expérience avec Sora nous a appris sur l'avenir de la narration",
      pt: "Máquinas de Memória: O que nosso experimento com Sora nos ensinou sobre o futuro da narrativa",
      zh: "记忆机器：Sora实验教会我们讲故事未来的启示"
    },
    excerpt: {
      en: "Exploring the intersection of AI and historical storytelling through an OpenAI Sora experiment based on a World War I narrative, this article examines the ethics, methodology, and future of AI-assisted filmmaking in preserving cultural memory.",
      fr: "Explorant l'intersection de l'IA et de la narration historique à travers une expérience OpenAI Sora basée sur un récit de la Première Guerre mondiale, cet article examine l'éthique, la méthodologie et l'avenir du cinéma assisté par IA dans la préservation de la mémoire culturelle.",
      pt: "Explorando a interseção entre IA e narrativa histórica através de um experimento com o OpenAI Sora baseado em uma narrativa da Primeira Guerra Mundial, este artigo examina a ética, metodologia e o futuro da produção cinematográfica assistida por IA na preservação da memória cultural.",
      zh: "通过基于一战叙事的OpenAI Sora实验探索人工智能与历史讲述的交叉点，本文考察了人工智能辅助电影制作在保存文化记忆方面的伦理、方法论和未来。"
    },
    imageUrl: "/images/memory-machines-featured.png",
    publishDate: "March 22, 2025",
    readTime: 16,
    url: "/thought-leadership/memory-machines"
  };
  
  // Second Featured Article
  const secondFeaturedArticle: Article = {
    id: "leaving-the-frame",
    title: {
      en: "Leaving the Frame: Why I'm Launching the American Emigration Revue",
      fr: "Sortir du cadre : Pourquoi je lance l'American Emigration Revue",
      pt: "Saindo do Enquadramento: Por que estou lançando a American Emigration Revue",
      zh: "跳出框架：我为何创办美国移民评论"
    },
    excerpt: {
      en: "As Americans quietly but steadily leave the country in growing numbers, this article introduces the American Emigration Revue, a new initiative that tracks, documents, and analyzes the emerging American diaspora through data, narrative, and cultural analysis.",
      fr: "Alors que les Américains quittent discrètement mais régulièrement le pays en nombre croissant, cet article présente l'American Emigration Revue, une nouvelle initiative qui suit, documente et analyse la diaspora américaine émergente à travers des données, des récits et une analyse culturelle.",
      pt: "À medida que os americanos saem silenciosa mas constantemente do país em números crescentes, este artigo apresenta a American Emigration Revue, uma nova iniciativa que rastreia, documenta e analisa a diáspora americana emergente através de dados, narrativa e análise cultural.",
      zh: "随着美国人悄然但持续增长的离境趋势，本文介绍了美国移民评论，这一新计划通过数据、叙事和文化分析来追踪、记录和分析新兴的美国侨民社区。"
    },
    imageUrl: "/images/leaving-the-frame-eagle.png",
    publishDate: "February 1, 2025",
    readTime: 12,
    url: "/thought-leadership/leaving-the-frame"
  };
  
  // Third Featured Article
  const thirdFeaturedArticle: Article = {
    id: "exit-mindset",
    title: {
      en: "The Exit Mindset: What Our Citizenship Data Reveals About the American Psyche",
      fr: "La mentalité de sortie : Ce que nos données sur la citoyenneté révèlent sur la psyché américaine",
      pt: "A mentalidade de saída: O que nossos dados de cidadania revelam sobre a psique americana",
      zh: "出走心态：我们的公民身份数据揭示美国人心理状态"
    },
    excerpt: {
      en: "An analysis of Luxembourg citizenship application trends showing a significant post-election surge, revealing a deeper psychological shift in how Americans view belonging, mobility, and identity in times of uncertainty.",
      fr: "Une analyse des tendances des demandes de citoyenneté luxembourgeoise montrant une forte augmentation post-électorale, révélant un changement psychologique plus profond dans la façon dont les Américains perçoivent l'appartenance, la mobilité et l'identité en période d'incertitude.",
      pt: "Uma análise das tendências de pedidos de cidadania luxemburguesa mostrando um aumento significativo pós-eleitoral, revelando uma mudança psicológica mais profunda na forma como os americanos veem pertencimento, mobilidade e identidade em tempos de incerteza.",
      zh: "卢森堡公民身份申请趋势分析显示大选后申请量激增，揭示美国人在不确定时期对归属感、流动性和身份认同看法的深层心理转变。"
    },
    imageUrl: "/images/LuxCitizenship-Logo-Country-ONLY.png",
    publishDate: "March 20, 2025",
    readTime: 10,
    url: "/thought-leadership/exit-mindset"
  };



  // Get the current translation based on language
  const localizedText = translations[language];

  return (
    <>
      <SEO
        title={`${localizedText.title} | Daniel Atz`}
        description={localizedText.metaDescription}
        pathname="/thought-leadership"
      />
      
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
            
            {/* Second Featured Article Section */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={secondFeaturedArticle.imageUrl} 
                      alt={secondFeaturedArticle.title[language]} 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">
                      {localizedText.featuredArticle}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      {secondFeaturedArticle.title[language]}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{secondFeaturedArticle.publishDate}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {secondFeaturedArticle.readTime} {localizedText.minutesToRead}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{secondFeaturedArticle.excerpt[language]}</p>
                    <a 
                      href={secondFeaturedArticle.url} 
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors self-start"
                    >
                      {localizedText.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
            
            {/* Third Featured Article Section */}
            <motion.section 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={thirdFeaturedArticle.imageUrl} 
                      alt={thirdFeaturedArticle.title[language]} 
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold mb-1">
                      {localizedText.featuredArticle}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                      {thirdFeaturedArticle.title[language]}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{thirdFeaturedArticle.publishDate}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {thirdFeaturedArticle.readTime} {localizedText.minutesToRead}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{thirdFeaturedArticle.excerpt[language]}</p>
                    <a 
                      href={thirdFeaturedArticle.url} 
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center transition-colors self-start"
                    >
                      {localizedText.readMore}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThoughtLeadership;