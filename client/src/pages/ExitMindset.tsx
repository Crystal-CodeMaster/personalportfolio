import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

const ExitMindset = () => {
  const { language } = useLanguage();
  
  // Translations for UI elements only
  const translations = {
    en: {
      backToArticles: "Back to Articles",
      publishedOn: "Published on",
      readTime: "min read",
      metaDescription: "LuxCitizenship's data shows a 52% increase in citizenship inquiries and a major shift in American attitudes after the 2024 election, revealing a deeper psychological change in how Americans view belonging, mobility, and national identity in times of uncertainty."
    },
    fr: {
      backToArticles: "Retour aux Articles",
      publishedOn: "Publié le",
      readTime: "min de lecture",
      metaDescription: "Les données de LuxCitizenship montrent une augmentation de 52% des demandes de citoyenneté et un changement majeur dans les attitudes américaines après l'élection de 2024, révélant une transformation psychologique plus profonde dans la façon dont les Américains perçoivent l'appartenance, la mobilité et l'identité nationale en période d'incertitude."
    },
    pt: {
      backToArticles: "Voltar para Artigos",
      publishedOn: "Publicado em",
      readTime: "min de leitura",
      metaDescription: "Os dados da LuxCitizenship mostram um aumento de 52% nas consultas de cidadania e uma grande mudança nas atitudes americanas após a eleição de 2024, revelando uma mudança psicológica mais profunda na forma como os americanos veem pertencimento, mobilidade e identidade nacional em tempos de incerteza."
    },
    zh: {
      backToArticles: "返回文章",
      publishedOn: "发布于",
      readTime: "分钟阅读",
      metaDescription: "LuxCitizenship的数据显示，2024年大选后公民身份咨询增加了52%，美国人态度发生重大转变，揭示了美国人在不确定时期对归属感、流动性和国家认同看法的深层心理变化。"
    }
  };

  // Article data - only in English as per requirement
  const article = {
    title: "The Exit Mindset: What Our Citizenship Data Reveals About the American Psyche",
    publishDate: "March 20, 2025",
    readTime: 10,
    imageUrl: "/attached_assets/LuxCitizenship-Logo-Country-ONLY.png",
    content: `
<h2>1. What We're Measuring Isn't Just Citizenship</h2>
<p>At LuxCitizenship, we've helped more than 2,450 Americans reclaim Luxembourg nationality since 2018. But behind every application, there's another story — one less about ancestry and more about agency. What started as a genealogical service became a data-rich observatory on one of the most underreported stories of the decade: the psychological shift in how Americans view belonging, mobility, and identity.</p>

<p>In recent years, dual citizenship has moved from heritage curiosity to strategic planning — a personal hedge against uncertainty. And since late 2024, our numbers confirm what our clients have long been whispering: something fundamental is shifting in the American psyche.</p>

<h2>2. The Data Tells a Clearer Story Than the News Cycle</h2>
<p>Let's be precise.</p>

<p>2024 closed with 1,201 eligibility inquiries for Luxembourg dual citizenship — a 52% increase over our previous annual average of 792.</p>

<p>In just the first two months of 2025, we've already received 390 inquiries — on pace to double last year's record.</p>

<p>From October 21, 2024 to March 6, 2025, we logged 700 inquiries and 279 new clients, a 131% increase in inquiries and a 42% increase in conversions over the same period the year before.</p>

<p>And the volume is only part of the picture. What's more revealing is the language people use when they reach out.</p>

<p>We analyzed 1,500 open-text responses to the question, "I want to become a citizen of Luxembourg because…", using NLP and sentiment analysis tools. Before the U.S. presidential election in 2024, responses were rooted in family stories and travel aspirations. The average sentiment was mildly positive — 0.184 on a normalized scale.</p>

<p>After the election, something snapped. Sentiment scores ticked up to 0.195, but the intensity and urgency spiked. Keywords like "stability," "escape," "safety," "democracy," and "uncertainty" surged — often used in emotionally charged, future-oriented language.</p>

<p>These aren't just numbers. They're a quantified reflection of a deep psychological shift: from heritage to exit strategy.</p>

<h2>3. From Dual Citizens to Dual Mindsets</h2>
<p>What emerges from the data is a new kind of identity — a dual mindset, where individuals are not just seeking a second passport, but a second framework for life.</p>

<p>For some, Luxembourg is symbolic. For others, it's tactical. Either way, dual citizenship is no longer just about honoring the past — it's about engineering personal resilience in a time of institutional instability. These clients are not disengaged from American life. Many still vote, pay taxes, and maintain U.S. ties. But they are consciously diversifying their national identity.</p>

<p>And they're doing it at scale — enough to suggest that American emigration is not a fringe trend, but an underreported demographic movement in formation.</p>

<h2>4. Why Data Alone Isn't Enough — And Why We Built AER</h2>
<p>It was exactly this combination — high-velocity data and high-emotion narratives — that led me to launch the American Emigration Revue (AER). Our data showed the change long before the New York Times picked it up in September 2024, in their now-famous article "The American Voters Leaving U.S. Politics." But traditional media couldn't connect the dots the way we could.</p>

<p>Through AER, we're building a framework to do just that — to bridge hard data, international policy, and migration narratives. We collect stats from foreign ministries, track press in multiple languages, and align them with the sentiment analysis we've pioneered through our eligibility test system.</p>

<p>Where others see anecdotes, we see indicators. Where others see flukes, we see signals of a generational trend.</p>

<h2>5. This Isn't Brain Drain — It's Identity Realignment</h2>
<p>Our client profiles include high-net-worth individuals, but also teachers, tech workers, artists, and single parents. They are not always "leaving" the U.S. permanently. Many are positioning themselves — building options.</p>

<p>We've tracked patterns like:</p>

<ul>
  <li>A 3x increase in applications from swing states post-election.</li>
  <li>Significant growth from applicants under 40, especially in remote-friendly fields.</li>
  <li>A rise in clients pursuing not just Luxembourgish but Portuguese residency, French long-stay visas, and even Japanese cultural visas — often after starting with Luxembourg as a legal foothold.</li>
</ul>

<p>The profile is widening. The infrastructure of American identity is becoming transnational by design.</p>

<h2>6. Where This All Leads</h2>
<p>We are now operating at a convergence point:</p>

<ul>
  <li>Historical citizenship reclamation through ancestry.</li>
  <li>Quantitative modeling of emigration motivations and behavior.</li>
  <li>A cultural reframing of what it means to be American in an unstable world.</li>
</ul>

<p>That's where I've found myself — not just as a service provider, but as a researcher, analyst, and interpreter of a migration story that's still unfolding.</p>

<p>The numbers will continue to climb. The motivations will continue to evolve. But what stays constant is our goal: to provide clarity in a time of movement, to connect stories to systems, and to frame the American exit mindset as a real, observable social phenomenon — not a curiosity.</p>
`
  };
  
  // Get the current translation based on language
  const localizedText = translations[language];
  
  return (
    <>
      <Helmet>
        <title>{article.title} | Daniel Atz</title>
        <meta name="description" content={localizedText.metaDescription} />
      </Helmet>
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/thought-leadership" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {localizedText.backToArticles}
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-gray-900">
                {article.title}
              </h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {localizedText.publishedOn} {article.publishDate}
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime} {localizedText.readTime}
                </span>
              </div>
              
              <div className="mb-10 rounded-xl overflow-hidden h-72 md:h-96 flex justify-center items-center bg-gray-100">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div 
                className="prose prose-blue prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitMindset;