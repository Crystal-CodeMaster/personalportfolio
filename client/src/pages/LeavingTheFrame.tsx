import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

const LeavingTheFrame = () => {
  const { language } = useLanguage();
  
  // Only English translation is needed for the back button, etc.
  const translations = {
    en: {
      backToArticles: "Back to Articles",
      publishedOn: "Published on",
      readTime: "min read",
      metaDescription: "An exploration of the growing trend of American emigration and the launch of the American Emigration Revue (AER) to document, analyze, and understand the American diaspora forming in real-time across the globe."
    },
    fr: {
      backToArticles: "Retour aux Articles",
      publishedOn: "Publié le",
      readTime: "min de lecture",
      metaDescription: "Une exploration de la tendance croissante à l'émigration américaine et du lancement de l'American Emigration Revue (AER) pour documenter, analyser et comprendre la diaspora américaine qui se forme en temps réel à travers le monde."
    },
    pt: {
      backToArticles: "Voltar para Artigos",
      publishedOn: "Publicado em",
      readTime: "min de leitura",
      metaDescription: "Uma exploração da crescente tendência de emigração americana e o lançamento da American Emigration Revue (AER) para documentar, analisar e entender a diáspora americana que se forma em tempo real ao redor do mundo."
    },
    zh: {
      backToArticles: "返回文章",
      publishedOn: "发布于",
      readTime: "分钟阅读",
      metaDescription: "探索美国移民日益增长的趋势以及美国移民评论(AER)的推出，以记录、分析和理解在全球实时形成的美国侨民。"
    }
  };

  // Article data
  const article = {
    title: "Leaving the Frame: Why I'm Launching the American Emigration Revue",
    publishDate: "February 1, 2025",
    readTime: 12,
    imageUrl: "/images/leaving-the-frame-eagle.png",
    content: `
<h2>The Quiet Exodus No One Is Watching</h2>
<p>Something is shifting. Quietly, steadily — and almost entirely off the radar of most policymakers and media outlets — Americans are leaving.</p>

<p>Not tourists. Not short-term digital nomads. But families, professionals, and retirees making long-term, intentional moves abroad. Some are driven by climate anxiety. Others by political disillusionment. Many, like the subjects of a recent New York Times feature, are fleeing the weight of a system they no longer trust. What's emerging is not a trickle, but a meaningful current — a trend that cuts across demographics, geographies, and motivations.</p>

<p>And yet, the data is fractured. The coverage is anecdotal. The phenomenon — American emigration — is hiding in plain sight.</p>

<p>That's why I'm launching the American Emigration Revue (AER), a new initiative that brings together data, narrative, and cultural analysis to observe, document, and understand the American diaspora as it's forming in real time. This isn't just about numbers — it's about framing a global conversation we've barely begun to have.</p>

<h2>From Citizenship Consultant to Accidental Futurist</h2>
<p>I didn't start out trying to chart the future of American emigration. I started out trying to help people reconnect with the past.</p>

<p>In 2016, I founded LuxCitizenship — a boutique service designed to help Americans reclaim Luxembourgish nationality through ancestry. What began as a niche genealogical project quickly transformed into something far larger. Over the next several years, I guided more than 2,500 Americans through the process of becoming dual citizens. But it wasn't just paperwork. It was stories. Questions. Confessions. People wondering what it would mean to have a second passport… and maybe a second life.</p>

<p>In those conversations, I began to hear a pattern — long before it showed up in the press. Clients weren't just reclaiming heritage. They were preparing options. Planning exits. Building bridges out of a nation they feared was fracturing.</p>

<p>By 2020, the pattern had a pulse. By 2024, it was a signal.</p>

<p>LuxCitizenship became a kind of observatory — a place where personal migration met political movement. And I realized that what I was watching unfold in our inboxes was the edge of something much bigger than Luxembourg.</p>

<h2>From Case Files to Cultural Shift: Why AER Had to Exist</h2>
<p>By 2023, it was clear: we needed a framework bigger than one country, bigger than one ancestry program. What I was seeing wasn't just a Luxembourg story — it was an American phenomenon unfolding across Portugal, Mexico, France, Brazil, Japan, and beyond. But no one was tracking it comprehensively. Not the U.S. Census. Not the State Department. Not even most media outlets, which still saw Americans abroad as privileged outliers or political flukes.</p>

<p>That's where the American Emigration Revue comes in.</p>

<p>AER is not a consulting business. It's not an advocacy group. It's a new kind of observatory — one that sits at the intersection of data, migration studies, cultural trend analysis, and public discourse. We're aggregating hard-to-find stats from European government agencies. We're monitoring press in five languages. We're connecting macro-level migration numbers to micro-level identity shifts.</p>

<p>And we're doing it with one purpose in mind: to name what's happening.</p>

<p>When you can name something, you can study it. When you can study it, you can start to understand what it means — and what it might become.</p>

<p>The American Emigration Revue isn't just an information hub. It's a declaration that this movement is real, that it matters, and that someone needs to own the narrative.</p>

<h2>Connecting the Signals: When Data, Media, and Politics Collide</h2>
<p>In September 2024, The New York Times published an interactive story titled "The American Voters Leaving U.S. Politics". It profiled U.S. citizens who had left the country — and in many cases, left the political system altogether. While the tone was restrained, the implications were seismic: Americans are not just moving abroad, they are increasingly disengaging from civic life in the U.S. altogether.</p>

<p>That story didn't surprise me. It confirmed what we had already been documenting — quietly — through our own research.</p>

<p>Just weeks before the article's publication, we released a deep-dive demographic study of Americans who had recovered Luxembourgish nationality, analyzing their geographic distribution, motivations, and future migration plans. What it revealed was simple but powerful: a statistically significant number of Americans are not just acquiring second citizenship — they're using it.</p>

<p>They are buying property abroad. Registering in foreign residency databases. Enrolling their children in international schools. And — crucially — not always updating their U.S. voter registration.</p>

<p>Put bluntly: American emigration is no longer theoretical. It's operational.</p>

<p>But what the Times couldn't capture — and what government data can't see — are the emotional, cultural, and political undercurrents driving this shift. That's where AER steps in: not just to collect and interpret data, but to connect it to meaning. To show that behind every spreadsheet line and flight manifest is a story — and a larger transformation taking place just outside the frame of the American narrative.</p>

<h2>AER as a Platform for Sense-Making — and for What Comes Next</h2>
<p>The American Emigration Revue is not just about tracking movement — it's about making sense of it.</p>

<p>Migration is never just a logistics story. It's always a story about values, systems, and imagination. Why do people leave? Why do they stay? What are they hoping to find elsewhere that they can't access at home? What does it mean — culturally, psychologically, geopolitically — when people start to untether their identities from the American nation-state?</p>

<p>These are the kinds of questions AER is built to explore.</p>

<p>This project exists at a confluence: where data meets journalism, where lived experience meets global systems, where personal decisions reflect collective patterns. We're building a platform that can serve policymakers, researchers, journalists, and citizens alike — providing insights that are rigorous, nuanced, and human.</p>

<p>And as the 2024 U.S. presidential election casts its long shadow across the world, the need for this kind of analysis will only grow. Will political polarization accelerate the exit? Will disillusioned voters quietly decouple from American civic life? What happens if emigration becomes not a fringe choice but a generational trend?</p>

<p>The American Emigration Revue will be there — not to sound the alarm, but to document the shift with clarity and care.</p>

<h2>Reframing the Narrative: Migration as American Memory</h2>
<p>In some ways, American Emigration Revue is just the next step in my life's work. I've spent the last decade helping Americans reclaim forgotten citizenships, reconnect with long-lost homelands, and reimagine their place in the world. What began as genealogical service has become something closer to cultural cartography — mapping the new pathways Americans are quietly carving across the globe.</p>

<p>But now, the scale has changed. The stakes have grown.</p>

<p>We're not just watching a few adventurous souls pack up and leave. We're witnessing the early contours of a new kind of American experience — one that isn't bound by borders, one that defies the usual tropes of patriotism or exile. This isn't brain drain. It isn't betrayal. It's migration as memory, as choice, as strategy, as rebirth.</p>

<p>And it deserves to be seen for what it is: a movement of consequence.</p>

<p>That's what the American Emigration Revue is here to do — to provide the language, the data, the stories, and the ethical clarity needed to understand the transformation underway.</p>

<p>I believe we're entering a new era in which identity, belonging, and citizenship will be more fluid than ever before. My hope is that AER becomes a space where we can make sense of that future — not through fear or nostalgia, but through research, reflection, and rigor.</p>

<p>The question isn't whether Americans will continue to leave. They already are.</p>

<p>The real question is: What will the rest of the world — and America itself — do with that knowledge?</p>

<p>We're here to find out.</p>
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
              
              <div className="mb-10 rounded-xl overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full max-h-96 object-contain" 
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

export default LeavingTheFrame;