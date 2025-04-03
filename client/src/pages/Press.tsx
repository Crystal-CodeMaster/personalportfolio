import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import SEO from "@/components/SEO";
import { ExternalLink } from "lucide-react";

const Press = () => {
  const { language } = useLanguage();
  
  // Translations for Press page
  const translations = {
    en: {
      title: "Press & Media",
      subtitle: "Media coverage and interviews featuring Daniel Atz",
      readArticle: "Read Article →",
      originallyIn: "Originally in",
      metaDescription: "Browse press coverage, media interviews, and articles featuring Daniel Atz on migration, citizenship, and belonging."
    },
    fr: {
      title: "Presse & Médias",
      subtitle: "Couverture médiatique et interviews avec Daniel Atz",
      readArticle: "Lire l'Article →",
      originallyIn: "Publié en",
      metaDescription: "Parcourez les articles de presse, interviews et reportages mettant en vedette Daniel Atz sur la migration, la citoyenneté et l'appartenance."
    },
    pt: {
      title: "Imprensa & Mídia",
      subtitle: "Cobertura da mídia e entrevistas com Daniel Atz",
      readArticle: "Ler Artigo →",
      originallyIn: "Originalmente em",
      metaDescription: "Navegue pela cobertura da imprensa, entrevistas e artigos apresentando Daniel Atz sobre migração, cidadania e pertencimento."
    },
    zh: {
      title: "新闻与媒体",
      subtitle: "涵盖丹尼尔·阿兹的媒体报道和采访",
      readArticle: "阅读文章 →",
      originallyIn: "原文语言",
      metaDescription: "浏览有关丹尼尔·阿兹在移民、公民身份和归属感方面的新闻报道、媒体采访和文章。"
    }
  };

  // Articles data
  const articles = [
    // 2025
    {
      id: "trumpEffect",
      title: {
        en: '"Trump Effect": More and more Americans are seeking Luxembourg citizenship',
        fr: '"Effet Trump": De plus en plus d\'Américains demandent la citoyenneté luxembourgeoise',
        pt: '"Efeito Trump": Cada vez mais norte-americanos procuram cidadania luxemburguesa',
        zh: '"特朗普效应"：越来越多的美国人正在寻求卢森堡公民身份'
      },
      excerpt: {
        en: "There are more and more Americans trying to get Luxembourg citizenship. Besides the relationship with politics, the search for origins also justifies this increase in applications.",
        fr: "Il y a de plus en plus d'Américains qui tentent d'obtenir la citoyenneté luxembourgeoise. Outre le rapport à la politique, la recherche des origines justifie également cette augmentation des demandes.",
        pt: "Há cada vez mais norte-americanos a tentarem a cidadania luxemburguesa. Além da relação com a política, também a busca pelas origens justifica este aumento de pedidos.",
        zh: "越来越多的美国人正在尝试获得卢森堡公民身份。除了与政治的关系外，对血统的寻求也是此类申请增加的原因。"
      },
      imageUrl: "/images/Trump Effect.png",
      url: "https://www.contacto.lu/luxemburgo/efeito-trump-.-cada-vez-mais-norte-americanos-procuram-cidadania-luxemburguesa/34863560.html",
      source: "Contacto",
      country: "Luxembourg",
      originalLanguage: "Portuguese",
      date: "January 20, 2025"
    },
    // 2024
    {
      id: "trumpWinSurge",
      title: {
        en: "Surge in Luxembourg citizenship enquiries following Trump win",
        fr: "Hausse des demandes de citoyenneté luxembourgeoise suite à la victoire de Trump",
        pt: "Aumento nas consultas sobre cidadania luxemburguesa após vitória de Trump",
        zh: "特朗普获胜后卢森堡公民身份咨询激增"
      },
      excerpt: {
        en: "Daniel Atz, CEO of LuxCitizenship, expects more applications from Americans will flood in over next 21 days.",
        fr: "Daniel Atz, PDG de LuxCitizenship, s'attend à ce que davantage de demandes d'Américains affluent au cours des 21 prochains jours.",
        pt: "Daniel Atz, CEO da LuxCitizenship, espera que mais pedidos de americanos cheguem nos próximos 21 dias.",
        zh: "LuxCitizenship首席执行官丹尼尔·阿茨预计，在未来21天内，来自美国人的申请将会大量涌入。"
      },
      imageUrl: "/images/surge-citizenship.png",
      url: "https://www.luxtimes.lu/world/surge-in-luxembourg-citizenship-enquiries-following-trump-win/25901621.html",
      source: "Luxembourg Times",
      country: "Luxembourg",
      originalLanguage: "English",
      date: "November 12, 2024"
    },
    {
      id: "trumpMeaning",
      title: {
        en: "What could Donald Trump's victory mean for Luxembourg?",
        fr: "Que pourrait signifier la victoire de Donald Trump pour le Luxembourg?",
        pt: "O que é que a vitória de Donald Trump pode significar para o Luxemburgo?",
        zh: "唐纳德·特朗普的胜利对卢森堡意味着什么？"
      },
      excerpt: {
        en: "The result of the US elections could have a significant impact on Luxembourg. Voices from society and Luxembourg politics weigh in on the implications.",
        fr: "Le résultat des élections américaines pourrait avoir un impact significatif sur le Luxembourg. Des voix de la société et de la politique luxembourgeoise commentent les implications.",
        pt: "O resultado das eleições norte-americanas poderá ter um impacto significativo no Luxemburgo. Vozes da sociedade e da política luxemburguesas.",
        zh: "美国大选结果可能对卢森堡产生重大影响。来自社会和卢森堡政界的声音对其影响进行了评估。"
      },
      imageUrl: "/images/contactonov24.png",
      url: "https://www.contacto.lu/luxemburgo/o-que-e-que-a-vitoria-de-donald-trump-pode-significar-para-o-luxemburgo/25666284.html",
      source: "Contacto",
      country: "Luxembourg",
      originalLanguage: "Portuguese",
      date: "November 10, 2024"
    },
    {
      id: "telecranlux",
      title: {
        en: "The man for the Luxembourgish Roots",
        fr: "L'homme des racines luxembourgeoises",
        pt: "O homem das raízes luxemburguesas",
        zh: "卢森堡根源的寻访者"
      },
      excerpt: {
        en: "Daniel Atz has helped thousands of Americans trace their Luxembourg ancestry and navigate the complex process of obtaining citizenship by descent. Since Donald Trump entered politics, I receive an average of 800 inquiries per year.",
        fr: "Daniel Atz a aidé des milliers d'Américains à retracer leurs origines luxembourgeoises et à naviguer dans le processus complexe d'obtention de la citoyenneté par descendance. Depuis que Donald Trump est entré en politique, je reçois en moyenne 800 demandes par an.",
        pt: "Daniel Atz ajudou milhares de americanos a rastrear sua ascendência luxemburguesa e navegar pelo complexo processo de obtenção de cidadania por descendência. Desde que Donald Trump entrou para a política, recebo uma média de 800 consultas por ano.",
        zh: "丹尼尔·阿茨帮助数千名美国人追溯他们的卢森堡血统，并引导他们完成复杂的血统公民身份申请流程。自从唐纳德·特朗普进入政坛以来，我每年平均收到800份咨询。"
      },
      imageUrl: "/images/spread-magazine-scaled.jpg",
      url: "#",
      source: "Télécran",
      country: "Luxembourg",
      originalLanguage: "Luxembourgish",
      date: "October 15, 2024"
    },
    {
      id: "brazilBusiness",
      title: {
        en: "Luxembourgers in Brazil want to strengthen business ties with the Grand Duchy",
        fr: "Les Luxembourgeois au Brésil veulent renforcer les liens commerciaux avec le Grand-Duché",
        pt: "Luxemburgueses do Brasil querem fortalecer negócios com o Grão-Ducado",
        zh: "巴西的卢森堡人希望加强与大公国的商业联系"
      },
      excerpt: {
        en: "Brazilians who have recovered Luxembourg citizenship gathered this Saturday in Florianópolis for the 2nd South American Meeting of Luxembourg Families, organized by ACLUX.",
        fr: "Des Brésiliens ayant récupéré la citoyenneté luxembourgeoise se sont réunis ce samedi à Florianópolis pour la 2e Rencontre Sud-Américaine des Familles Luxembourgeoises, organisée par l'ACLUX.",
        pt: "Brasileiros que recuperaram a cidadania luxemburguesa reuniram-se este sábado em Florianópolis no 2º Encontro Sul-Americano de Famílias Luxemburguesas, organizado pela ACLUX.",
        zh: "恢复卢森堡公民身份的巴西人本周六在弗洛里亚诺波利斯参加了由ACLUX组织的第二届卢森堡家庭南美会议。"
      },
      imageUrl: "/images/luxemburgueses-23-jun-24.png",
      url: "https://www.contacto.lu/mundo/luxemburgueses-do-brasil-querem-fortalecer-negocios-com-o-grao-ducado/14500249.html",
      source: "Contacto",
      country: "Luxembourg",
      originalLanguage: "Portuguese",
      date: "June 23, 2024"
    },
    {
      id: "roeWade",
      title: {
        en: "More Americans applied for Luxembourg citizenship after Roe v Wade overturn",
        fr: "Plus d'Américains ont demandé la citoyenneté luxembourgeoise après l'annulation de Roe v Wade",
        pt: "Mais americanos solicitaram cidadania luxemburguesa após a revogação de Roe v Wade",
        zh: "Roe v Wade被推翻后更多美国人申请卢森堡公民身份"
      },
      excerpt: {
        en: "US citizens seek Grand Duchy passport each time US politics produces controversy. The Supreme Court's decision led to a notable increase in Americans seeking alternative citizenships.",
        fr: "Les citoyens américains recherchent un passeport du Grand-Duché chaque fois que la politique américaine produit une controverse. La décision de la Cour suprême a entraîné une augmentation notable des Américains cherchant des citoyennetés alternatives.",
        pt: "Cidadãos dos EUA buscam passaporte do Grão-Ducado cada vez que a política dos EUA produz controvérsia. A decisão da Suprema Corte levou a um aumento notável de americanos buscando cidadanias alternativas.",
        zh: "每当美国政治引发争议时，美国公民就会寻求大公国护照。最高法院的裁决导致寻求替代公民身份的美国人显著增加。"
      },
      imageUrl: "/images/roe-wade-lux.png",
      url: "https://www.luxtimes.lu/luxembourg/more-americans-applied-for-luxembourg-citizenship-after-roe-v-wade-overturn/13274401.html",
      source: "Luxembourg Times",
      country: "Luxembourg",
      originalLanguage: "English",
      date: "May 27, 2024"
    },
    {
      id: "growingAmericans",
      title: {
        en: "The number of Americans applying for Luxembourg citizenship keeps growing",
        fr: "Le nombre d'Américains demandant la citoyenneté luxembourgeoise continue d'augmenter",
        pt: "Não para de crescer o número de americanos que pedem cidadania luxemburguesa",
        zh: "申请卢森堡公民身份的美国人数量持续增长"
      },
      excerpt: {
        en: "A TikTok video viewed by 1.8 million people triggered a wave of applications, according to LuxCitizenship. Whenever there is a controversial statement by Donald Trump, the number of applicants for Luxembourg citizenship also increases.",
        fr: "Une vidéo TikTok visionnée par 1,8 million de personnes a déclenché une vague de demandes, selon LuxCitizenship. À chaque déclaration polémique de Donald Trump, le nombre de candidats à la citoyenneté luxembourgeoise augmente également.",
        pt: "Um vídeo no TikTok visto por 1,8 milhões de pessoas desencadeou uma vaga de pedidos, segundo a empresa LuxCitizenship. Sempre que há uma declaração polémica de Donald Trump cresce também o número de aspirantes à cidadania luxemburguesa.",
        zh: "据LuxCitizenship称，一段被180万人观看的TikTok视频引发了申请浪潮。每当唐纳德·特朗普发表有争议的言论，申请卢森堡公民身份的人数也会增加。"
      },
      imageUrl: "/images/citizenship-growth.png",
      url: "https://www.contacto.lu/sociedade/nao-para-de-crescer-o-numero-de-americanos-que-pedem-cidadania-luxemburguesa/13163153.html",
      source: "Contacto",
      country: "Luxembourg",
      originalLanguage: "Portuguese",
      date: "May 24, 2024"
    },
    {
      id: "luxembourgers",
      title: {
        en: "43,145 Luxembourgers are on the American continent",
        fr: "43 145 Luxembourgeois sont sur le continent américain",
        pt: "43.145 luxemburgueses estão no continente americano",
        zh: "43,145名卢森堡人在美洲大陆"
      },
      excerpt: {
        en: "LUXEMBOURG – Nearly a third of Luxembourgers living abroad live in the United States, Brazil or Argentina. New data reveals the extent of Luxembourg's diaspora across North and South America.",
        fr: "LUXEMBOURG – Près du tiers des Luxembourgeois habitant à l'étranger vivent aux États-Unis, au Brésil ou en Argentine. De nouvelles données révèlent l'étendue de la diaspora luxembourgeoise en Amérique du Nord et du Sud.",
        pt: "LUXEMBURGO – Perto de um terço dos luxemburgueses que moram no exterior vivem nos Estados Unidos, Brasil ou Argentina. Novos dados revelam a extensão da diáspora luxemburguesa na América do Norte e do Sul.",
        zh: "卢森堡 - 近三分之一的在国外生活的卢森堡人居住在美国、巴西或阿根廷。新数据揭示了卢森堡侨民在北美和南美的分布范围。"
      },
      imageUrl: "/images/luxembourgers-america.png",
      url: "https://www.lessentiel.lu/fr/story/population-43-145-luxembourgeois-sont-sur-le-continent-americain-103026159",
      source: "L'essentiel",
      country: "Luxembourg",
      originalLanguage: "French",
      date: "January 23, 2024"
    },
    {
      id: "election",
      title: {
        en: "Election in Luxembourg this Sunday (8th) includes Brazilian voters and candidate",
        fr: "L'élection au Luxembourg ce dimanche (8) inclut des électeurs et une candidate brésiliens",
        pt: "Eleição em Luxemburgo neste domingo (8) inclui eleitores e candidata brasileiros",
        zh: "本周日（8日）卢森堡选举包括巴西选民和候选人"
      },
      excerpt: {
        en: "Legislative election will be the first after law that drove recognition of nationality in Brazil. Luxembourg's growing Brazilian community plays an increasingly important role in the Grand Duchy's elections.",
        fr: "L'élection législative sera la première après la loi qui a favorisé la reconnaissance de la nationalité au Brésil. La communauté brésilienne en pleine croissance au Luxembourg joue un rôle de plus en plus important dans les élections du Grand-Duché.",
        pt: "Eleição legislativa será a primeira após lei que impulsionou reconhecimento de nacionalidade no Brasil. A crescente comunidade brasileira em Luxemburgo desempenha um papel cada vez mais importante nas eleições do Grão-Ducado.",
        zh: "立法选举将是推动巴西国籍认可的法律实施后的首次选举。卢森堡不断壮大的巴西社区在大公国选举中扮演着越来越重要的角色。"
      },
      imageUrl: "/images/politicians-luxemburg.png",
      url: "https://www1.folha.uol.com.br/mundo/2023/08/politicos-de-luxemburgo-disputam-votos-de-brasileiros-com-dupla-cidadania.shtml",
      source: "Folha de S.Paulo",
      country: "Brazil",
      originalLanguage: "Portuguese",
      date: "August 6, 2023"
    },
    {
      id: "politicians",
      title: {
        en: "Luxembourg politicians compete for votes of Brazilians with dual citizenship",
        fr: "Les politiciens luxembourgeois se disputent les votes des Brésiliens ayant la double nationalité",
        pt: "Políticos de Luxemburgo disputam votos de brasileiros com dupla cidadania",
        zh: "卢森堡政治家争夺拥有双重国籍的巴西人选票"
      },
      excerpt: {
        en: "Increase in the number of Brazilians with dual Luxembourg citizenship has caught the attention of political parties. Luxembourg's political landscape is evolving as parties actively court the growing Brazilian-Luxembourgish electorate.",
        fr: "L'augmentation du nombre de Brésiliens ayant la double nationalité luxembourgeoise a attiré l'attention des partis politiques. Le paysage politique luxembourgeois évolue alors que les partis courtisent activement l'électorat brésilien-luxembourgeois en pleine croissance.",
        pt: "Aumento no número de brasileiros com dupla cidadania luxemburguesa chamou atenção dos partidos políticos. O cenário político luxemburguês está evoluindo à medida que os partidos cortejam ativamente o crescente eleitorado brasileiro-luxemburguês.",
        zh: "拥有卢森堡双重国籍的巴西人数量增加引起了政党的关注。卢森堡政治格局正在变化，各政党积极争取不断增长的巴西-卢森堡选民。"
      },
      imageUrl: "/images/election-luxembourg.png",
      url: "https://www.cnnbrasil.com.br/internacional/eleicao-em-luxemburgo-neste-domingo-8-tem-eleitorado-e-candidata-brasileira/",
      source: "CNN Brasil",
      country: "Brazil",
      originalLanguage: "Portuguese",
      date: "October 8, 2023"
    },
    {
      id: "hiCousins",
      title: {
        en: "Hi, Cousins!",
        fr: "Salut, les cousins !",
        pt: "Olá, primos!",
        zh: "嗨，表兄弟姐妹们！"
      },
      excerpt: {
        en: "An exploration of the cultural connections between Luxembourg and its diaspora communities, examining how family ties transcend borders and generations.",
        fr: "Une exploration des liens culturels entre le Luxembourg et ses communautés diasporiques, examinant comment les liens familiaux transcendent les frontières et les générations.",
        pt: "Uma exploração das conexões culturais entre Luxemburgo e suas comunidades na diáspora, examinando como os laços familiares transcendem fronteiras e gerações.",
        zh: "探索卢森堡与其侨民社区之间的文化联系，研究家庭纽带如何超越国界和代际。"
      },
      imageUrl: "/images/hi-cousins.png",
      url: "https://www.land.lu/page/article/739/340739/DEU/index.html",
      source: "Lëtzebuerger Land",
      country: "Luxembourg",
      originalLanguage: "French",
      date: "August 25, 2023"
    },
    {
      id: "dataPublic",
      title: {
        en: "On the trail of Luxembourgers across the Atlantic",
        fr: "Sur la trace des Luxembourgeois outre-Atlantique",
        pt: "No rastro dos luxemburgueses através do Atlântico",
        zh: "追踪跨大西洋的卢森堡人"
      },
      excerpt: {
        en: "A deep dive into historical data tracking Luxembourg emigration patterns to the Americas, revealing fascinating patterns and previously unknown connections.",
        fr: "Une analyse approfondie des données historiques suivant les modèles d'émigration luxembourgeoise vers les Amériques, révélant des tendances fascinantes et des connexions jusqu'alors inconnues.",
        pt: "Uma análise profunda dos dados históricos que rastreiam os padrões de emigração luxemburguesa para as Américas, revelando padrões fascinantes e conexões anteriormente desconhecidas.",
        zh: "深入探究跟踪卢森堡移民至美洲大陆的历史数据，揭示迷人的模式和以前未知的联系。"
      },
      imageUrl: "/images/on-the-trail-luxembourg.png",
      url: "https://data.public.lu/fr/posts/sur-la-trace-des-luxembourgeois-outre-atlantique/",
      source: "Data.Public.Lu",
      country: "Luxembourg",
      originalLanguage: "French",
      date: "July 3, 2023"
    },
    {
      id: "cafeBabel",
      title: {
        en: "Discovering the lives of first-generation immigrants, letter by letter",
        fr: "Découvrir la vie des immigrants de première génération, lettre par lettre",
        pt: "Descobrindo as vidas dos imigrantes de primeira geração, letra por letra",
        zh: "一封信一封信地探索第一代移民的生活"
      },
      excerpt: {
        en: "An intimate portrait of migration stories through personal correspondence, highlighting the emotional journey of leaving one's homeland and building a new life abroad.",
        fr: "Un portrait intime des récits de migration à travers la correspondance personnelle, soulignant le voyage émotionnel qui consiste à quitter sa patrie et à construire une nouvelle vie à l'étranger.",
        pt: "Um retrato íntimo de histórias de migração através de correspondência pessoal, destacando a jornada emocional de deixar a terra natal e construir uma nova vida no exterior.",
        zh: "通过个人通信展现移民故事的亲密写照，突显离开祖国、在国外建立新生活的情感历程。"
      },
      imageUrl: "/images/immigrants-letters.png",
      url: "https://cafebabel.com/it/article/alla-scoperta-delle-vite-degli-immigrati-di-prima-generazione-lettera-per-lettera-6441aaac4c22f5b9ac1b654d/",
      source: "CafeBabel",
      country: "Italy",
      originalLanguage: "Italian",
      date: "June 6, 2023"
    },
    {
      id: "transatlantic",
      title: {
        en: "Transatlantic Electorate",
        fr: "Transatlantique électorale",
        pt: "Eleitorado transatlântico",
        zh: "跨大西洋选民"
      },
      excerpt: {
        en: "An analysis of how Luxembourg's electoral system accommodates its overseas citizens, and the growing influence of the transatlantic vote on domestic politics.",
        fr: "Une analyse de la façon dont le système électoral luxembourgeois accommode ses citoyens à l'étranger, et l'influence croissante du vote transatlantique sur la politique intérieure.",
        pt: "Uma análise de como o sistema eleitoral de Luxemburgo acomoda seus cidadãos no exterior, e a crescente influência do voto transatlântico na política doméstica.",
        zh: "分析卢森堡选举制度如何适应海外公民，以及跨大西洋投票对国内政治的日益增长的影响。"
      },
      imageUrl: "/images/transatlantic-electorate.png",
      url: "https://www.land.lu/page/article/306/340306/DEU/index.html",
      source: "Lëtzebuerger Land",
      country: "Luxembourg",
      originalLanguage: "French",
      date: "April 7, 2023"
    },
    {
      id: "rioNegroEvent",
      title: {
        en: "Association promotes event on Luxembourgish citizenship in Rio Negro",
        fr: "Une association promeut un événement sur la citoyenneté luxembourgeoise à Rio Negro",
        pt: "Associação promove evento sobre cidadania luxemburguesa em Rio Negro",
        zh: "协会在里约内格罗推广卢森堡公民身份活动"
      },
      excerpt: {
        en: "Event will feature the presence of American-Luxembourgish entrepreneur Daniel Atz, bringing together descendants of Luxembourg immigrants to learn about citizenship options and cultural connections.",
        fr: "L'événement accueillera l'entrepreneur américano-luxembourgeois Daniel Atz, rassemblant des descendants d'immigrants luxembourgeois pour en apprendre davantage sur les options de citoyenneté et les liens culturels.",
        pt: "Evento contará com a presença do empresário americano-luxemburguês Daniel Atz, reunindo descendentes de imigrantes luxemburgueses para conhecerem opções de cidadania e conexões culturais.",
        zh: "活动将有美国-卢森堡企业家丹尼尔·阿茨出席，汇集卢森堡移民的后裔，了解公民身份选择和文化联系。"
      },
      imageUrl: "/images/rio-negro-event.png",
      url: "https://www.riomaframix.com.br/rio-negro/associacao-promove-evento-sobre-cidadania-luxemburguesa-em-rio-negro/",
      source: "Rio Mafra Mix",
      country: "Brazil",
      originalLanguage: "Portuguese",
      date: "March 7, 2023"
    },
    {
      id: "rioNegroDelegation",
      title: {
        en: "Rio Negro City Hall presents municipality's potential to a Luxembourg delegation",
        fr: "La mairie de Rio Negro présente le potentiel de la municipalité à une délégation luxembourgeoise",
        pt: "Prefeitura de Rio Negro apresenta potenciais do município a uma comitiva de Luxemburgo",
        zh: "里约内格罗市政厅向卢森堡代表团展示市政潜力"
      },
      excerpt: {
        en: "Luxembourg representatives including Daniel Atz visit Rio Negro to strengthen economic and cultural ties with the Brazilian municipality, which has strong historical connections to the Grand Duchy.",
        fr: "Des représentants luxembourgeois, dont Daniel Atz, visitent Rio Negro pour renforcer les liens économiques et culturels avec la municipalité brésilienne, qui entretient des liens historiques forts avec le Grand-Duché.",
        pt: "Representantes de Luxemburgo, incluindo Daniel Atz, visitam Rio Negro para fortalecer laços econômicos e culturais com o município brasileiro, que tem fortes conexões históricas com o Grão-Ducado.",
        zh: "包括丹尼尔·阿茨在内的卢森堡代表访问里约内格罗，加强与该巴西市的经济和文化联系，该市与大公国有着深厚的历史渊源。"
      },
      imageUrl: "/images/rio-negro-delegation.png",
      url: "https://www.clickriomafra.com.br/noticias/rio-negro/prefeitura-de-rio-negro-apresenta-potenciais-do-municipio-a-uma-comitiva-de-luxemburgo/",
      source: "ClickRioMafra",
      country: "Brazil",
      originalLanguage: "Portuguese",
      date: "March 7, 2023"
    },
    {
      id: "fifthConstituency",
      title: {
        en: "The Fifth Constituency",
        fr: "La Cinquième Circonscription",
        pt: "A Quinta Circunscrição",
        zh: "第五选区"
      },
      excerpt: {
        en: "What will be the electoral weight of the Luxembourg diaspora in the next legislative elections? With over 47,000 'neo-Luxembourgers' worldwide and 15,500 potential voters in Brazil alone, political parties are now actively engaging with overseas citizens.",
        fr: "Quel sera le poids électoral de la diaspora luxembourgeoise aux prochaines législatives ? Avec plus de 47 000 « néo-Luxembourgeois » dans le monde et 15 500 électeurs potentiels au Brésil, les partis politiques s'engagent activement auprès des citoyens à l'étranger.",
        pt: "Qual será o peso eleitoral da diáspora luxemburguesa nas próximas eleições legislativas? Com mais de 47.000 'neo-luxemburgueses' em todo o mundo e 15.500 eleitores potenciais somente no Brasil, os partidos políticos estão agora envolvendo ativamente os cidadãos no exterior.",
        zh: "在下次立法选举中，卢森堡侨民的选举权重将如何？全球有超过47,000名新卢森堡人，仅巴西就有15,500名潜在选民，政党现在正积极与海外公民接触。"
      },
      imageUrl: "/images/fifth-constituency.png",
      url: "https://www.land.lu/page/article/171/340171/DEU/index.html",
      source: "Lëtzebuerger Land",
      country: "Luxembourg",
      originalLanguage: "French",
      date: "March 3, 2023"
    },
    {
      id: "lastCall",
      title: {
        en: "Luxembourg's Last Call for Citizenship By Descent",
        fr: "Dernier appel pour la citoyenneté luxembourgeoise par filiation",
        pt: "Último chamado para cidadania luxemburguesa por descendência",
        zh: "卢森堡血统公民身份的最后召唤"
      },
      excerpt: {
        en: "With the path to a Luxembourg passport getting narrower, this article examines the final deadline for citizenship applications and what it means for Americans of Luxembourg descent seeking to reconnect with their European heritage.",
        fr: "Avec le chemin vers un passeport luxembourgeois qui se resserre, cet article examine la date limite finale pour les demandes de citoyenneté et ce que cela signifie pour les Américains d'origine luxembourgeoise cherchant à renouer avec leur patrimoine européen.",
        pt: "Com o caminho para um passaporte luxemburguês ficando mais estreito, este artigo examina o prazo final para solicitações de cidadania e o que isso significa para americanos de ascendência luxemburguesa que buscam reconectar-se com sua herança europeia.",
        zh: "随着获取卢森堡护照的途径越来越窄，本文审视了公民身份申请的最后期限，以及对寻求重新连接欧洲传统的卢森堡血统美国人的意义。"
      },
      imageUrl: "/images/last-call-citizenship.png",
      url: "https://www.polypassport.com/p/luxembourgs-last-call-citizenship-descent",
      source: "PolyPassport",
      country: "United States",
      originalLanguage: "English",
      date: "February 22, 2022"
    },
    {
      id: "severalWantToCome",
      title: {
        en: "Several want to come live here",
        fr: "Plusieurs veulent venir vivre ici",
        pt: "Vários querem vir morar aqui",
        zh: "有几个人想来这里生活"
      },
      excerpt: {
        en: "In-depth report on Americans seeking Luxembourg citizenship, featuring Daniel Atz discussing the cultural and practical appeals of reconnecting with ancestral homeland through dual nationality.",
        fr: "Reportage approfondi sur les Américains qui demandent la citoyenneté luxembourgeoise, avec Daniel Atz évoquant les attraits culturels et pratiques de se reconnecter avec la patrie ancestrale via la double nationalité.",
        pt: "Reportagem aprofundada sobre americanos que buscam cidadania luxemburguesa, com Daniel Atz discutindo os apelos culturais e práticos de se reconectar com a terra ancestral através da dupla nacionalidade.",
        zh: "深入报道寻求卢森堡公民身份的美国人，丹尼尔·阿兹讨论通过双重国籍与祖国重新建立联系的文化和实际吸引力。"
      },
      imageUrl: "/images/several-want-to-come.png",
      url: "https://www.rtl.lu/news/national/a/1722888.html",
      source: "RTL",
      country: "Luxembourg",
      originalLanguage: "Luxembourgish",
      date: "May 16, 2021"
    },
    {
      id: "coronavirusComplications",
      title: {
        en: "Coronavirus complications for Luxembourg nationality applications",
        fr: "Complications liées au coronavirus pour les demandes de nationalité luxembourgeoise",
        pt: "Complicações do coronavírus para pedidos de nacionalidade luxemburguesa",
        zh: "冠状病毒对卢森堡国籍申请的复杂影响"
      },
      excerpt: {
        en: "Daniel Atz explains how COVID-19 pandemic creates unexpected hurdles for those applying for Luxembourg citizenship, with special video calls connecting applicants in Brazil to authorities in the US during lockdowns.",
        fr: "Daniel Atz explique comment la pandémie de COVID-19 crée des obstacles inattendus pour ceux qui demandent la citoyenneté luxembourgeoise, avec des appels vidéo spéciaux reliant les candidats au Brésil aux autorités américaines pendant les confinements.",
        pt: "Daniel Atz explica como a pandemia de COVID-19 cria obstáculos inesperados para aqueles que solicitam a cidadania luxemburguesa, com chamadas de vídeo especiais conectando candidatos no Brasil às autoridades nos EUA durante os bloqueios.",
        zh: "丹尼尔·阿茨解释了COVID-19大流行如何为申请卢森堡公民身份的人创造了意想不到的障碍，特殊视频通话在封锁期间将巴西的申请人与美国当局联系起来。"
      },
      imageUrl: "/images/coronavirus-complications.png",
      url: "https://today.rtl.lu/dossier/tdf/news/a/1527352.html",
      source: "RTL Today",
      country: "Luxembourg",
      originalLanguage: "English",
      date: "June 1, 2020"
    },

    {
      id: "americansAcquired",
      title: {
        en: "1,465 Americans have acquired Luxembourgish nationality",
        fr: "1 465 Américains ont acquis la nationalité luxembourgeoise",
        pt: "1.465 americanos adquiriram a nacionalidade luxemburguesa",
        zh: "1,465名美国人获得卢森堡国籍"
      },
      excerpt: {
        en: "Video report from RTL featuring Daniel Atz discussing the significant increase in Americans acquiring Luxembourg citizenship through ancestry recovery, with statistics showing 1,465 new dual citizens since 2009.",
        fr: "Reportage vidéo de RTL avec Daniel Atz discutant de l'augmentation significative des Américains acquérant la citoyenneté luxembourgeoise par le biais de la récupération d'ascendance, avec des statistiques montrant 1 465 nouveaux doubles citoyens depuis 2009.",
        pt: "Reportagem em vídeo da RTL com Daniel Atz discutindo o aumento significativo de americanos adquirindo a cidadania luxemburguesa por meio da recuperação de ancestralidade, com estatísticas mostrando 1.465 novos cidadãos duplos desde 2009.",
        zh: "RTL的视频报道，丹尼尔·阿茨讨论美国人通过祖先恢复获得卢森堡公民身份的显著增加，统计数据显示自2009年以来有1,465名新的双重公民。"
      },
      imageUrl: "/images/1465-americans.png",
      url: "https://www.rtl.lu/news/national/a/1289532.html",
      source: "RTL",
      country: "Luxembourg",
      originalLanguage: "Luxembourgish",
      date: "January 8, 2019"
    },
    {
      id: "cleanTechIP",
      title: {
        en: "European CleanTech Companies Face IP Hurdles When Expanding in U.S.",
        fr: "Les entreprises CleanTech européennes font face à des obstacles liés à la propriété intellectuelle lors de leur expansion aux États-Unis",
        pt: "Empresas europeias de tecnologia limpa enfrentam obstáculos de propriedade intelectual ao expandir nos EUA",
        zh: "欧洲清洁技术公司在美国扩张时面临知识产权障碍"
      },
      excerpt: {
        en: "Expert analysis on intellectual property challenges facing European cleantech companies entering US markets, with Daniel Atz providing insight on cross-border technology transfer and licensing agreements for renewables and smart city innovations.",
        fr: "Analyse d'expert sur les défis de propriété intellectuelle auxquels sont confrontées les entreprises cleantech européennes entrant sur le marché américain, avec Daniel Atz fournissant des perspectives sur le transfert de technologie transfrontalier et les accords de licence pour les innovations en énergies renouvelables et villes intelligentes.",
        pt: "Análise especializada sobre os desafios de propriedade intelectual enfrentados por empresas europeias de tecnologia limpa que entram nos mercados dos EUA, com Daniel Atz fornecendo insights sobre transferência de tecnologia transfronteiriça e acordos de licenciamento para inovações em energias renováveis e cidades inteligentes.",
        zh: "专家分析欧洲清洁技术公司进入美国市场面临的知识产权挑战，丹尼尔·阿茨提供对跨境技术转让和可再生能源与智慧城市创新许可协议的见解。"
      },
      imageUrl: "/images/cleantech.png",
      url: "https://cleantechiq.com/2018/02/european-cleantech-companies-face-ip-hurdles-when-expanding-in-u-s/",
      source: "CleanTechIQ",
      country: "United States",
      originalLanguage: "English",
      date: "February 21, 2018"
    },
    {
      id: "familyLuxembourgish",
      title: {
        en: "Daniel Atz meets his Luxembourgish family",
        fr: "Daniel Atz rencontre sa famille luxembourgeoise",
        pt: "Daniel Atz conhece sua família luxemburguesa",
        zh: "丹尼尔·阿茨与他的卢森堡家庭相见"
      },
      excerpt: {
        en: "RTL special feature documenting Daniel Atz's emotional journey to discover his family's roots in Luxembourg, culminating in meeting his great-aunt Annette who preserves family photos and stories from generations past.",
        fr: "Reportage spécial de RTL documentant le voyage émouvant de Daniel Atz pour découvrir ses racines familiales au Luxembourg, culminant avec la rencontre de sa grand-tante Annette qui préserve les photos et histoires familiales des générations passées.",
        pt: "Reportagem especial da RTL documentando a jornada emocional de Daniel Atz para descobrir as raízes de sua família em Luxemburgo, culminando no encontro com sua tia-avó Annette, que preserva fotos e histórias de família de gerações passadas.",
        zh: "RTL特别专题记录丹尼尔·阿茨寻找卢森堡家族根源的情感之旅，最终与保存着几代人家庭照片和故事的姑婆安妮特相见。"
      },
      imageUrl: "/images/daniel-meets-family.png",
      url: "https://www.rtl.lu/lifestyle/news/a/1115520.html",
      source: "RTL",
      country: "Luxembourg",
      originalLanguage: "Luxembourgish",
      date: "January 19, 2018"
    },
    {
      id: "moreAmericans",
      title: {
        en: "More and more Americans want to become Luxembourgers",
        fr: "De plus en plus d'Américains veulent devenir Luxembourgeois",
        pt: "Cada vez mais americanos querem se tornar luxemburgueses",
        zh: "越来越多的美国人想成为卢森堡人"
      },
      excerpt: {
        en: "Feature on Americans applying for Luxembourg citizenship featuring Daniel Atz and his wife Lisa Wilkie at their New York home, discussing the rapid growth of Luxembourg's diaspora reconnection program following the 2009 nationality law.",
        fr: "Reportage sur les Américains demandant la citoyenneté luxembourgeoise mettant en vedette Daniel Atz et sa femme Lisa Wilkie dans leur maison de New York, discutant de la croissance rapide du programme de reconnexion de la diaspora du Luxembourg suite à la loi sur la nationalité de 2009.",
        pt: "Reportagem sobre americanos solicitando a cidadania luxemburguesa com destaque para Daniel Atz e sua esposa Lisa Wilkie em sua casa em Nova York, discutindo o rápido crescimento do programa de reconexão da diáspora de Luxemburgo após a lei de nacionalidade de 2009.",
        zh: "关于申请卢森堡公民身份的美国人的专题报道，特别介绍了丹尼尔·阿茨和他的妻子丽莎·威尔基在纽约家中，讨论2009年国籍法后卢森堡侨民重新连接计划的快速发展。"
      },
      imageUrl: "/images/more-americans-luxembourg.png",
      url: "https://www.rtl.lu/lifestyle/news/a/1087202.html",
      source: "RTL",
      country: "Luxembourg",
      originalLanguage: "Luxembourgish",
      date: "October 26, 2017"
    }
  ];

  // Get the current translation based on language
  const localizedText = translations[language];

  return (
    <>
      <SEO
        title={`${localizedText.title} | Daniel Atz`}
        description={localizedText.metaDescription}
        pathname="/press"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title[language]} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
                      <span>{article.source}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                    <div className="flex flex-wrap items-center text-xs text-gray-400 mb-3">
                      <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 mr-2 mb-1">
                        {article.country}
                      </span>
                      <span className="bg-gray-100 text-gray-600 rounded-full px-2 py-0.5 mb-1">
                        {localizedText.originallyIn} {article.originalLanguage}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{article.title[language]}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt[language]}</p>
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      {localizedText.readArticle}
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Press;