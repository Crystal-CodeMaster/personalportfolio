import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

const MemoryMachines = () => {
  const { language } = useLanguage();
  
  // Translations
  const translations = {
    en: {
      backToArticles: "Back to Articles",
      publishedOn: "Published on",
      readTime: "min read",
      metaDescription: "Explore the intersection of AI and historical storytelling through an OpenAI Sora experiment based on a World War I narrative, examining the ethics, methodology, and future of AI-assisted filmmaking in preserving cultural memory."
    },
    fr: {
      backToArticles: "Retour aux Articles",
      publishedOn: "Publié le",
      readTime: "min de lecture",
      metaDescription: "Explorez l'intersection de l'IA et de la narration historique à travers une expérience OpenAI Sora basée sur un récit de la Première Guerre mondiale, examinant l'éthique, la méthodologie et l'avenir du cinéma assisté par IA dans la préservation de la mémoire culturelle."
    },
    pt: {
      backToArticles: "Voltar para Artigos",
      publishedOn: "Publicado em",
      readTime: "min de leitura",
      metaDescription: "Explore a interseção entre IA e narrativa histórica através de um experimento com o OpenAI Sora baseado em uma narrativa da Primeira Guerra Mundial, examinando a ética, metodologia e o futuro da produção cinematográfica assistida por IA na preservação da memória cultural."
    },
    zh: {
      backToArticles: "返回文章",
      publishedOn: "发布于",
      readTime: "分钟阅读",
      metaDescription: "通过基于一战叙事的OpenAI Sora实验探索人工智能与历史讲述的交叉点，考察人工智能辅助电影制作在保存文化记忆方面的伦理、方法论和未来。"
    }
  };

  // Article data - only in English as per requirement
  // Article data split into parts to insert the YouTube video at the right location
  const article = {
    title: "Memory Machines: What Our Sora Experiment Taught Us About the Future of Storytelling",
    publishDate: "March 22, 2025",
    readTime: 16,
    imageUrl: "/images/memory-machines-featured.png",
    contentPart1: `
<h2>A World at the Cusp of Reinvention</h2>
<p>We are living through a rupture — not a gentle one. The arrival of generative artificial intelligence is not just a technological shift; it is a civilizational one. It is altering how we work, what we trust, how we imagine, and — perhaps most importantly — how we remember. At a time of geopolitical fracture, algorithmic acceleration, and widespread public disorientation, history itself is being reconfigured in real-time.</p>

<p>In this context, I didn't want to be passive. I didn't want to wait for others to define the aesthetic, the ethics, or the narrative standards of AI-driven storytelling. So I chose to build — with intention. The result was an experiment: a short film teaser made with OpenAI's unreleased text-to-video model, Sora, based on my historical script bible Minette, and guided by a formal methodology crafted by Brazilian-Luxembourgish filmmaker Amanda Santa'Anna.</p>

<p>This project wasn't about novelty. It wasn't about AI as spectacle. It was about asking the harder question: Can artificial intelligence help us tell meaningful, historically rooted stories — ethically, coherently, and with emotional depth?</p>

<p>In testing that question, we positioned ourselves — quietly but firmly — at the frontier of AI cinema. And in doing so, we learned far more than we expected.</p>

<h2>Why This Story, and Why Now?</h2>
<p>Minette is not a story that would normally get a Netflix greenlight.</p>

<p>Set in the final weeks of World War I, it follows the emotional and cultural entanglement between Luxembourgish women and American soldiers stationed in Europe. The narrative is intimate, historically researched, and deeply human. It deals with gender, power, migration, memory, and the fragile space between trauma and hope. It's a story rooted in real letters, real places, and forgotten fragments of 20th-century life.</p>

<p>And that's exactly why it mattered.</p>

<p>In an era where AI is capable of conjuring dragon battles and exploding cities, we chose to do something more difficult: we asked the machine to sit quietly with us in the fall of 1918 and visualize a moment of tenderness. A hand offering chewing gum. A smile between strangers. A future uncertain, but shared.</p>

<p>The vast majority of AI-generated video content right now is ahistorical, decontextualized, and spectacle-driven. We wanted to go in the opposite direction. To see if these tools could serve stories that have weight — stories that matter. And in doing so, we hoped to prototype a path for others who care about memory, not just media.</p>

<h2>The State of AI Filmmaking in 2025: Chaos and Potential</h2>
<p>Right now, AI filmmaking is at once exhilarating and chaotic. OpenAI's Sora has cracked open a door that was, until recently, bolted shut. The ability to generate minute-long, photorealistic video from simple prompts has captivated creators around the world. And yet, for all its promise, the space is still immature. There are no industry-wide methodologies. Character consistency is fragile. Ethical considerations are often an afterthought.</p>

<p>What's worse, many of the most viral examples of AI video are deeply disconnected from meaning. They are demo reels, not stories. The prompt is the product. And for those of us who come from documentary, historical, or diasporic traditions, that's a red flag.</p>

<p>At Connaissance Films, the production company I founded, we view storytelling not as a commodity but as a cultural act. Our work is rooted in history, migration, and identity. That's why, when we got early access to Sora, we didn't just want to make something cool — we wanted to make something that asked questions. Something that respected its subjects. Something that pointed toward a future of ethical AI media — where the tools serve the story, not the other way around.</p>

<h2>A Methodology is Born: Amanda Santa'Anna and the Human Touch</h2>
<p>One of the most urgent challenges in AI filmmaking today is this: Who's in charge? Is the model the director? The prompt engineer? The dataset? Or does creative authority still reside with the human — the storyteller who sees what the machine cannot?</p>

<p>To answer that, we needed a methodology. That's why we brought in Brazilian-Luxembourgish filmmaker Amanda Santa'Anna to lead the artistic development of our Sora experiment. Amanda understood the stakes: she is a storyteller who, like me, works at the intersection of migration, memory, and hybrid identity. But she also came prepared to wrestle with the machine.</p>

<p>Her task was deceptively complex: to take the historically grounded scenes in my script bible Minette — including a quiet emotional exchange between a Luxembourgish nurse and an American soldier — and translate them into prompts Sora could understand, while maintaining visual continuity, historical texture, and character integrity.</p>

<p>The result wasn't just a video. It was a method.</p>

<p>Amanda documented the process in a detailed report, outlining the challenges and tactical workarounds she had to employ. From testing different prompt formats to including specific instructions like "keep the same appearance of the characters," she discovered how fragile character consistency still is in Sora's current iteration. Even the smallest prompt adjustment could generate an entirely new character. And yet, through iterative testing and hands-on editing, she stitched together a narrative that held together emotionally, if not always visually.</p>

<p>What she did — and what we collectively accomplished — was something that's missing from most AI experiments: intentional authorship.</p>

<h2>What We Achieved — and What We Didn't</h2>
`
  };
  
  // Define the content after the YouTube video section
  const contentPart2 = `
<p>Let's be clear: the final teaser is not perfect. The lighting occasionally flickers. The characters' faces shift subtly from shot to shot. The American flag on a pack of chewing gum failed to render properly — a small but telling detail in a story about cultural diplomacy and wartime intimacy.</p>

<p>And yet, the emotional resonance is there. The pacing, the tone, the performances — however synthetic — evoke something very real. You can feel the weight of history in the silence between two people. You can sense the distance they're both trying to bridge. It's not spectacle. It's story.</p>

<p>What we learned is that AI tools like Sora are not yet ready for high-consistency cinematic production. But they are ready for serious creative exploration — especially when placed in the hands of storytellers who care about history, emotion, and ethics.</p>

<p>Even more importantly, our experiment showed that you can maintain creative control, even when the machine is generating the visuals. But it requires a new mindset — one that fuses screenwriting, prompt design, historical research, and human empathy.</p>

<h2>Ethical Innovation: A Responsibility, Not a Brand</h2>
<p>Too often, "ethical AI" is thrown around like a marketing label. But for those of us working with real histories — real people, real places, real pain — it has to mean more.</p>

<p>Ethical innovation in AI filmmaking means asking: Who is being represented? Who is being erased? What assumptions is the machine making? Whose memories are we projecting onto these synthetic surfaces?</p>

<p>In our case, we worked with a story rooted in letters from Luxembourgish families. We knew we were representing people's ancestors, communities, traumas, and hopes. That meant we couldn't just generate "pretty footage." We had to be stewards of memory — even as we experimented with the tools of the future.</p>

<p>We made deliberate choices: we didn't use celebrity likenesses. We didn't stylize the past into fantasy. We worked from a script that had already been historically validated. And when the visuals didn't align with the emotional truth, we went back and adjusted — because storytelling isn't just about what looks good. It's about what feels right.</p>

<p>This is the work. It's slower than pure prompt-play. It's more rigorous. But it's also more human.</p>

<h2>What This Means Going Forward</h2>
<p>This experiment wasn't just about making one teaser — it was about making a statement.</p>

<p>We're entering an era where anyone with an idea and a laptop can potentially create cinematic visuals. That's a profound shift. But it also raises urgent questions: Will these tools deepen our understanding of the past — or flatten it? Will they amplify marginalized voices — or overwrite them with AI-generated tropes? Will storytellers retain authorship — or outsource creative responsibility to the algorithm?</p>

<p>These are not abstract dilemmas. They are already happening.</p>

<p>That's why we approached this project as a prototype — not just for a film, but for a practice. A methodology for AI-assisted historical storytelling that prioritizes ethics, emotion, and memory.</p>

<p>And that practice doesn't stop here. We're continuing to develop Minette for a larger screen adaptation. We're building frameworks to support diaspora communities in reclaiming their own histories through accessible AI tools. We're developing a book that charts these shifts and offers a vision for what ethical, innovative storytelling looks like in the age of machine intelligence.</p>

<p>At the core of it all is a belief: technology should be in service to memory, not the other way around.</p>

<h2>Conclusion: Toward a New Kind of Creator</h2>
<p>If this experiment proved anything, it's that we need a new kind of creator in this moment — someone who can hold multiple truths at once:</p>

<p>Who can work with machines without losing sight of the human.</p>

<p>Who understands that history is not just content, but inheritance.</p>

<p>Who sees technology not as a shortcut, but as a new kind of canvas — one that requires as much responsibility as it does imagination.</p>

<p>This is the space I'm building toward. As a filmmaker, researcher, and migration specialist, my work is grounded in the idea that stories move people — across time, borders, and platforms. But those stories must be told with care.</p>

<p>If AI is the future of filmmaking, then the future needs storytellers who know where we've come from. Not just to represent the past, but to make sure we don't lose ourselves in the speed of the present.</p>

<p>That's why we did this. Not to go viral. Not to impress. But to build a bridge — between history and innovation, between art and ethics, between what's possible and what's right.</p>

<p>And that bridge starts here.</p>
`;

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
              
              <div className="mb-10 rounded-xl overflow-hidden h-72 md:h-96">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* First part of the content */}
              <div 
                className="prose prose-blue prose-lg max-w-none mb-10"
                dangerouslySetInnerHTML={{ __html: article.contentPart1 }}
              />
              
              {/* YouTube video - designed to match the screenshot exactly */}
              <div className="my-10">
                <h3 className="text-center text-xl font-medium text-blue-500 mb-4">
                  <span className="border-b-2 border-blue-500 pb-1">Watch the Minette AI Teaser</span>
                </h3>
                
                <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-xl">
                  <div className="bg-blue-900 text-white py-2 px-4 font-medium flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mx-1"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-1"></div>
                    <span className="ml-2">Minette AI Film Experiment</span>
                  </div>
                  
                  <iframe 
                    width="100%" 
                    height="400"
                    src="https://www.youtube.com/embed/41GrKmUualI" 
                    title="Memory Machines: Minette AI Teaser" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  
                  <div className="bg-gray-100 py-3 px-4 text-sm text-gray-700">
                    <p className="italic">This AI-generated teaser demonstrates the capabilities and limitations discussed above.</p>
                    <p className="text-xs text-gray-500 mt-1">© 2025 Connaissance Films - Created with OpenAI's Sora</p>
                  </div>
                </div>
              </div>
              
              {/* Second part of the content */}
              <div 
                className="prose prose-blue prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: contentPart2 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoryMachines;