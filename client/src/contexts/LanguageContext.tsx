import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define available languages
export type Language = "en" | "fr" | "pt" | "zh";

// Define content type for each language
export type LocalizedContent = {
  [key in Language]: {
    greetings: string[]; // For rotating greetings in hero section
    tagline: string;
    nav: {
      home: string;
      mission: string;
      speaking: string;
      thoughtLeadership: string;
      press: string;
      contact: string;
      projects?: string; // Added for navigation
    };
    sections: {
      speaking: {
        title: string;
        subtitle: string;
        languages: {
          english: string;
          frenchPortuguese: string;
          chinese: string;
        };
      };
      projects: {
        title: string;
        subtitle: string;
        viewWebsite: string;
        projectDetails: {
          luxcitizenship: {
            description: string;
            status: string;
          };
          citizenshipEU: {
            description: string;
            status: string;
          };
          emigrationRevue: {
            description: string;
            status: string;
          };
          connaissanceFilms: {
            description: string;
            status: string;
          };
        };
      };
      press: {
        title: string;
        subtitle: string;
        readArticle: string;
        articles: {
          // 2025
          trumpEffect?: {
            title: string;
            excerpt: string;
          };
          // 2024
          trumpWinSurge?: {
            title: string;
            excerpt: string;
          };
          trumpMeaning?: {
            title: string;
            excerpt: string;
          };
          telecranlux?: {
            title: string;
            excerpt: string;
          };
          brazilBusiness?: {
            title: string;
            excerpt: string;
          };
          roeWade?: {
            title: string;
            excerpt: string;
          };
          growingAmericans?: {
            title: string;
            excerpt: string;
          };
          // 2023
          luxembourgers: {
            title: string;
            excerpt: string;
          };
          election: {
            title: string;
            excerpt: string;
          };
          politicians: {
            title: string;
            excerpt: string;
          };
          hiCousins?: {
            title: string;
            excerpt: string;
          };
          dataPublic?: {
            title: string;
            excerpt: string;
          };
          // Earlier 
          trump?: {
            title: string;
            excerpt: string;
          };
          family: {
            title: string;
            excerpt: string;
          };
        };
      };
      specialties: {
        global: {
          title: string;
          description: string;
        };
        data: {
          title: string;
          description: string;
        };
        innovation: {
          title: string;
          description: string;
        };
      };
      footer: {
        getInTouch: string;
        getInTouchSubtitle: string;
        contactInfo: string;
        connectWithMe: string;
        quickLinks: string;
        bookConsultation: string;
        bookConsultationText: string;
        scheduleCall: string;
        lookingForward: string;
        copyright: string;
      };
      contact: {
        title: string;
        subtitle: string;
        thankYou: string;
        confirmation: string;
      };
    };
    // Add more localized content as needed
  };
};

// Define the content
export const content: LocalizedContent = {
  en: {
    greetings: ["Hey, I'm", "Moien, ech sinn", "Salut, je suis", "Olá, eu sou", "您好， 我是"],
    tagline: "I'm on a mission to bring innovative insights and historical depth to global conversations on migration, citizenship, and belonging—bridging past and present to help people navigate their place in the world.\nI tell stories that help forge bridges to international growth.",
    nav: {
      home: "Home",
      mission: "About",
      speaking: "Public Speaking",
      thoughtLeadership: "Thought Leadership",
      press: "Press",
      contact: "Book Me"
    },
    sections: {
      speaking: {
        title: "Speaking Engagements",
        subtitle: "I am an experienced public speaker in English, French, Portuguese, and Chinese, addressing global audiences on migration, citizenship, and cross-cultural understanding.",
        languages: {
          english: "English",
          frenchPortuguese: "French & Portuguese",
          chinese: "Chinese"
        }
      },
      projects: {
        title: "What I'm Working On",
        subtitle: "Current projects and initiatives I'm actively involved with",
        viewWebsite: "Visit Website",
        projectDetails: {
          luxcitizenship: {
            description: "Helped 2,500 Americans obtain EU dual citizenship in Luxembourg",
            status: "Active"
          },
          citizenshipEU: {
            description: "Leveraging AI to determine your eligibility for ancestry based dual citizenship",
            status: "Launching Soon"
          },
          emigrationRevue: {
            description: "All things news and data about Americans moving abroad, launching April 2025",
            status: "Launching Soon"
          },
          connaissanceFilms: {
            description: "Documentary film production exploring national identity and cultural heritage",
            status: "Active"
          }
        }
      },
      press: {
        title: "Press & Media",
        subtitle: "Featured in international publications discussing migration trends, citizenship, and cultural identity across borders.",
        readArticle: "Read Article →",
        articles: {
          // 2025
          trumpEffect: {
            title: '"Trump Effect": More and more Americans are seeking Luxembourg citizenship',
            excerpt: "In the aftermath of Donald Trump's election, there has been a surge in American citizens exploring their Luxembourg ancestry to secure EU dual citizenship."
          },
          // 2024
          trumpWinSurge: {
            title: "Surge in Luxembourg citizenship enquiries following Trump win",
            excerpt: "Luxembourg's citizenship offices have reported a significant increase in applications from Americans since the 2024 presidential election results were announced."
          },
          trumpMeaning: {
            title: "What could Donald Trump's victory mean for Luxembourg?",
            excerpt: "The result of the US elections could have a significant impact on Luxembourg. Voices from society and Luxembourg politics weigh in on the implications."
          },
          telecranlux: {
            title: "The man for the Luxembourgish Roots",
            excerpt: "Daniel Atz has helped thousands of Americans trace their Luxembourg ancestry and navigate the complex process of obtaining citizenship by descent."
          },
          brazilBusiness: {
            title: "Luxembourgers in Brazil want to strengthen business ties with the Grand Duchy",
            excerpt: "Descendants of Luxembourg emigrants in Brazil are working to develop stronger economic connections between their ancestral homeland and Brazil."
          },
          roeWade: {
            title: "More Americans applied for Luxembourg citizenship after Roe v Wade overturn",
            excerpt: "The Supreme Court's decision led to a notable increase in Americans seeking alternative citizenships, with Luxembourg seeing particular interest due to its ancestry laws."
          },
          growingAmericans: {
            title: "The number of Americans applying for Luxembourg citizenship keeps growing",
            excerpt: "A detailed look at the increasing trend of Americans discovering and claiming their Luxembourg heritage, with applications continuing to rise year after year."
          },
          // 2023
          luxembourgers: {
            title: "43,145 Luxembourgers are on the American continent",
            excerpt: "New data reveals the extent of Luxembourg's diaspora across North and South America, with insights on their distribution and impact on cultural connections."
          },
          election: {
            title: "Election in Luxembourg this Sunday (8th) includes Brazilian voters and candidate",
            excerpt: "Luxembourg's growing Brazilian community plays an increasingly important role in the Grand Duchy's elections, with both voters and candidates shaping the country's future."
          },
          politicians: {
            title: "Luxembourg politicians compete for votes of Brazilians with dual citizenship",
            excerpt: "Luxembourg's political landscape is evolving as parties actively court the growing Brazilian-Luxembourgish electorate, recognizing their increasing influence on national policies."
          },
          hiCousins: {
            title: "Hi, Cousins!",
            excerpt: "An exploration of the unique relationships formed between Americans and their newly discovered Luxembourg relatives through citizenship by descent processes."
          },
          dataPublic: {
            title: "On the trail of Luxembourgers across the Atlantic",
            excerpt: "Tracing the historical migration patterns of Luxembourgers to the Americas and how these movements continue to influence cultural exchange today."
          },
          // Earlier articles
          family: {
            title: "Daniel Atz meets his Luxembourg family",
            excerpt: "Daniel Atz's journey of discovering his Luxembourg roots culminates in an emotional meeting with relatives still living in the Grand Duchy, bridging generations and continents."
          }
        }
      },
      specialties: {
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
      footer: {
        getInTouch: "Get In Touch",
        getInTouchSubtitle: "Have a question or want to work together?",
        contactInfo: "Contact Information",
        connectWithMe: "Connect with me",
        quickLinks: "Quick Links",
        bookConsultation: "Book a Consultation",
        bookConsultationText: "Interested in learning more about dual citizenship or my other projects? Schedule a consultation.",
        scheduleCall: "Schedule a Call",
        lookingForward: "Looking forward to hearing from you!",
        copyright: "© 2025 Daniel Atz. All rights reserved."
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Have a question or want to collaborate? Send me a message and I'll get back to you.",
        thankYou: "Thank You!",
        confirmation: "Your message has been sent successfully. I'll get back to you as soon as possible."
      }
    }
  },
  fr: {
    greetings: ["Salut, je suis", "Hey, I'm", "Moien, ech sinn", "Olá, eu sou", "您好， 我是"],
    tagline: "Je me donne pour mission d'apporter des perspectives innovantes et une profondeur historique aux conversations mondiales sur la migration, la nationalité et l'appartenance—en créant des ponts entre passé et présent pour aider chacun à trouver sa place dans le monde.\nJe raconte des histoires qui aident à établir des ponts vers la croissance internationale.",
    nav: {
      home: "Accueil",
      mission: "À propos",
      speaking: "Conférences",
      thoughtLeadership: "Réflexions",
      press: "Presse",
      contact: "Réservez-moi"
    },
    sections: {
      speaking: {
        title: "Conférences et Présentations",
        subtitle: "Je suis un conférencier expérimenté en anglais, français, portugais et chinois, m'adressant à des audiences mondiales sur les thèmes de la migration, la nationalité et la compréhension interculturelle.",
        languages: {
          english: "Anglais",
          frenchPortuguese: "Français & Portugais",
          chinese: "Chinois"
        }
      },
      projects: {
        title: "Mes Projets Actuels",
        subtitle: "Projets et initiatives auxquels je participe activement",
        viewWebsite: "Visiter le Site",
        projectDetails: {
          luxcitizenship: {
            description: "J'ai aidé 2 500 Américains à obtenir la double nationalité européenne au Luxembourg",
            status: "Actif"
          },
          citizenshipEU: {
            description: "Utilisation de l'IA pour déterminer votre éligibilité à la double nationalité par ascendance",
            status: "Lancement Prochain"
          },
          emigrationRevue: {
            description: "Toutes les actualités et données sur les Américains s'expatriant, lancement en avril 2025",
            status: "Lancement Prochain"
          },
          connaissanceFilms: {
            description: "Production de films documentaires explorant l'identité nationale et le patrimoine culturel",
            status: "Actif"
          }
        }
      },
      press: {
        title: "Presse & Médias",
        subtitle: "Présent dans des publications internationales discutant des tendances migratoires, de la nationalité et de l'identité culturelle au-delà des frontières.",
        readArticle: "Lire l'Article →",
        articles: {
          // 2025
          trumpEffect: {
            title: '"Effet Trump": De plus en plus d\'Américains demandent la nationalité luxembourgeoise',
            excerpt: "Suite à l'élection de Donald Trump, on observe une forte augmentation du nombre de citoyens américains qui explorent leurs racines luxembourgeoises pour obtenir la double nationalité européenne."
          },
          // 2024
          trumpWinSurge: {
            title: "Hausse des demandes de nationalité luxembourgeoise suite à la victoire de Trump",
            excerpt: "Les services de nationalité luxembourgeois ont signalé une augmentation significative des demandes provenant d'Américains depuis l'annonce des résultats de l'élection présidentielle de 2024."
          },
          trumpMeaning: {
            title: "Que pourrait signifier la victoire de Donald Trump pour le Luxembourg?",
            excerpt: "Le résultat des élections américaines pourrait avoir un impact significatif sur le Luxembourg. Des voix de la société et de la politique luxembourgeoise commentent les implications."
          },
          telecranlux: {
            title: "L'homme des racines luxembourgeoises",
            excerpt: "Daniel Atz a aidé des milliers d'Américains à retracer leurs origines luxembourgeoises et à naviguer dans le processus complexe d'obtention de la nationalité par descendance."
          },
          brazilBusiness: {
            title: "Les Luxembourgeois au Brésil veulent renforcer les liens commerciaux avec le Grand-Duché",
            excerpt: "Les descendants d'émigrés luxembourgeois au Brésil œuvrent au développement de liens économiques plus solides entre leur patrie ancestrale et le Brésil."
          },
          roeWade: {
            title: "Plus d'Américains ont demandé la nationalité luxembourgeoise après l'annulation de Roe v Wade",
            excerpt: "La décision de la Cour suprême a entraîné une augmentation notable des Américains cherchant des nationalités alternatives, le Luxembourg suscitant un intérêt particulier en raison de ses lois sur l'ascendance."
          },
          growingAmericans: {
            title: "Le nombre d'Américains demandant la nationalité luxembourgeoise continue d'augmenter",
            excerpt: "Un regard détaillé sur la tendance croissante des Américains découvrant et revendiquant leur héritage luxembourgeois, avec des demandes qui continuent d'augmenter année après année."
          },
          // 2023
          luxembourgers: {
            title: "43 145 Luxembourgeois sont sur le continent américain",
            excerpt: "De nouvelles données révèlent l'étendue de la diaspora luxembourgeoise en Amérique du Nord et du Sud, avec des aperçus sur leur distribution et leur impact sur les liens culturels."
          },
          election: {
            title: "L'élection au Luxembourg ce dimanche (8) inclut des électeurs et une candidate brésiliens",
            excerpt: "La communauté brésilienne en pleine croissance au Luxembourg joue un rôle de plus en plus important dans les élections du Grand-Duché, avec des électeurs et des candidats qui façonnent l'avenir du pays."
          },
          politicians: {
            title: "Les politiciens luxembourgeois se disputent les votes des Brésiliens ayant la double nationalité",
            excerpt: "Le paysage politique luxembourgeois évolue alors que les partis courtisent activement l'électorat brésilien-luxembourgeois en pleine croissance, reconnaissant leur influence croissante sur les politiques nationales."
          },
          hiCousins: {
            title: "Salut, les Cousins!",
            excerpt: "Une exploration des relations uniques qui se forment entre les Américains et leurs parents luxembourgeois nouvellement découverts grâce aux processus de nationalité par descendance."
          },
          dataPublic: {
            title: "Sur la piste des Luxembourgeois à travers l'Atlantique",
            excerpt: "Retracez les modèles historiques de migration des Luxembourgeois vers les Amériques et comment ces mouvements continuent d'influencer les échanges culturels aujourd'hui."
          },
          // Articles plus anciens
          family: {
            title: "Daniel Atz rencontre sa famille luxembourgeoise",
            excerpt: "Le voyage de Daniel Atz pour découvrir ses racines luxembourgeoises culmine par une rencontre émouvante avec des parents vivant toujours au Grand-Duché, établissant des ponts entre générations et continents."
          }
        }
      },
      specialties: {
        global: {
          title: "Succès Global: Internationalisation et Immigration",
          description: "J'offre une expertise sur les tendances migratoires mondiales, les voies d'accès à la nationalité et l'adaptation interculturelle. Avec une vaste expérience auprès d'individus et d'organisations traversant les frontières internationales, je propose des perspectives stratégiques sur les stratégies d'immigration et d'internationalisation qui comblent les fossés culturels."
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
      footer: {
        getInTouch: "Contactez-moi",
        getInTouchSubtitle: "Vous avez une question ou voulez travailler ensemble?",
        contactInfo: "Informations de Contact",
        connectWithMe: "Connectez-vous avec moi",
        quickLinks: "Liens Rapides",
        bookConsultation: "Réserver une Consultation",
        bookConsultationText: "Intéressé à en savoir plus sur la double nationalité ou mes autres projets? Planifiez une consultation.",
        scheduleCall: "Planifier un Appel",
        lookingForward: "Au plaisir de vous entendre!",
        copyright: "© 2025 Daniel Atz. Tous droits réservés."
      },
      contact: {
        title: "Contactez-moi",
        subtitle: "Vous avez une question ou souhaitez collaborer? Envoyez-moi un message et je vous répondrai rapidement.",
        thankYou: "Merci!",
        confirmation: "Votre message a été envoyé avec succès. Je vous répondrai dès que possible."
      }
    }
  },
  pt: {
    greetings: ["Olá, eu sou", "Hey, I'm", "Moien, ech sinn", "Salut, je suis", "您好， 我是"],
    tagline: "Minha missão é trazer insights inovadores e profundidade histórica para as conversas globais sobre migração, cidadania e pertencimento—conectando passado e presente para ajudar as pessoas a navegar seu lugar no mundo.\nConto histórias que ajudam a construir pontes para o crescimento internacional.",
    nav: {
      home: "Início",
      mission: "Sobre",
      speaking: "Palestras",
      thoughtLeadership: "Ideias",
      press: "Imprensa",
      contact: "Contrate-me"
    },
    sections: {
      speaking: {
        title: "Palestras e Apresentações",
        subtitle: "Sou um palestrante experiente em inglês, francês, português e chinês, dirigindo-me a audiências globais sobre migração, cidadania e entendimento intercultural.",
        languages: {
          english: "Inglês",
          frenchPortuguese: "Francês & Português",
          chinese: "Chinês"
        }
      },
      projects: {
        title: "No Que Estou Trabalhando",
        subtitle: "Projetos e iniciativas atuais em que estou ativamente envolvido",
        viewWebsite: "Visitar Website",
        projectDetails: {
          luxcitizenship: {
            description: "Ajudei 2.500 americanos a obter dupla cidadania europeia em Luxemburgo",
            status: "Ativo"
          },
          citizenshipEU: {
            description: "Utilizando IA para determinar sua elegibilidade para cidadania dupla por ancestralidade",
            status: "Lançamento Breve"
          },
          emigrationRevue: {
            description: "Todas as notícias e dados sobre americanos se mudando para o exterior, lançamento em abril de 2025",
            status: "Lançamento Breve"
          },
          connaissanceFilms: {
            description: "Produção de documentários explorando identidade nacional e patrimônio cultural",
            status: "Ativo"
          }
        }
      },
      press: {
        title: "Imprensa & Mídia",
        subtitle: "Presente em publicações internacionais discutindo tendências migratórias, cidadania e identidade cultural através das fronteiras.",
        readArticle: "Ler Artigo →",
        articles: {
          // 2025
          trumpEffect: {
            title: '"Efeito Trump": Cada vez mais americanos estão buscando cidadania luxemburguesa',
            excerpt: "Após a eleição de Donald Trump, houve um aumento de cidadãos americanos explorando sua ascendência luxemburguesa para garantir dupla cidadania da UE."
          },
          // 2024
          trumpWinSurge: {
            title: "Aumento nas consultas sobre cidadania luxemburguesa após vitória de Trump",
            excerpt: "Os escritórios de cidadania de Luxemburgo relataram um aumento significativo nas solicitações de americanos desde o anúncio dos resultados das eleições presidenciais de 2024."
          },
          trumpMeaning: {
            title: "O que a vitória de Donald Trump pode significar para Luxemburgo?",
            excerpt: "O resultado das eleições americanas pode ter um impacto significativo em Luxemburgo. Vozes da sociedade e da política luxemburguesa avaliam as implicações."
          },
          telecranlux: {
            title: "O homem das raízes luxemburguesas",
            excerpt: "Daniel Atz ajudou milhares de americanos a rastrear sua ascendência luxemburguesa e navegar pelo complexo processo de obtenção de cidadania por descendência."
          },
          brazilBusiness: {
            title: "Luxemburgueses no Brasil querem fortalecer laços comerciais com o Grão-Ducado",
            excerpt: "Descendentes de emigrantes luxemburgueses no Brasil estão trabalhando para desenvolver conexões econômicas mais fortes entre sua terra ancestral e o Brasil."
          },
          roeWade: {
            title: "Mais americanos solicitaram cidadania luxemburguesa após a revogação de Roe v Wade",
            excerpt: "A decisão da Suprema Corte levou a um aumento notável de americanos buscando cidadanias alternativas, com Luxemburgo despertando particular interesse devido às suas leis de ancestralidade."
          },
          growingAmericans: {
            title: "O número de americanos solicitando cidadania luxemburguesa continua crescendo",
            excerpt: "Um olhar detalhado sobre a crescente tendência de americanos descobrindo e reivindicando sua herança luxemburguesa, com aplicações continuando a aumentar ano após ano."
          },
          // 2023
          luxembourgers: {
            title: "43.145 luxemburgueses estão no continente americano",
            excerpt: "Novos dados revelam a extensão da diáspora luxemburguesa na América do Norte e do Sul, com insights sobre sua distribuição e impacto nas conexões culturais."
          },
          election: {
            title: "Eleição em Luxemburgo neste domingo (8) inclui eleitores e candidata brasileiros",
            excerpt: "A crescente comunidade brasileira em Luxemburgo desempenha um papel cada vez mais importante nas eleições do Grão-Ducado, com eleitores e candidatos moldando o futuro do país."
          },
          politicians: {
            title: "Políticos de Luxemburgo disputam votos de brasileiros com dupla cidadania",
            excerpt: "O cenário político luxemburguês está evoluindo à medida que os partidos cortejam ativamente o crescente eleitorado brasileiro-luxemburguês, reconhecendo sua influência crescente nas políticas nacionais."
          },
          hiCousins: {
            title: "Olá, Primos!",
            excerpt: "Uma exploração das relações únicas formadas entre americanos e seus parentes luxemburgueses recém-descobertos através dos processos de cidadania por descendência."
          },
          dataPublic: {
            title: "No rastro dos luxemburgueses através do Atlântico",
            excerpt: "Rastreando os padrões históricos de migração dos luxemburgueses para as Américas e como esses movimentos continuam a influenciar o intercâmbio cultural hoje."
          },
          // Artigos anteriores
          family: {
            title: "Daniel Atz conhece sua família luxemburguesa",
            excerpt: "A jornada de Daniel Atz para descobrir suas raízes luxemburguesas culmina em um encontro emocionante com parentes ainda vivendo no Grão-Ducado, conectando gerações e continentes."
          }
        }
      },
      specialties: {
        global: {
          title: "Sucesso Global: Internacionalização e Imigração",
          description: "Ofereço orientação especializada sobre tendências migratórias globais, caminhos para cidadania e adaptação intercultural. Com vasta experiência trabalhando com indivíduos e organizações navegando fronteiras internacionais, ofereço insights estratégicos para estratégias bem-sucedidas de imigração e internacionalização que superam divisões culturais."
        },
        data: {
          title: "Análise de Dados",
          description: "Transformo dados complexos de migração e demografia em insights acionáveis. Especializado em análise quantitativa e qualitativa de padrões de mobilidade global, ajudo organizações a entender tendências populacionais em mudança e suas implicações para políticas, negócios e intercâmbio cultural."
        },
        innovation: {
          title: "Inovação & Narrativas",
          description: "Crio narrativas convincentes que conectam padrões históricos de migração com desafios globais contemporâneos. Ao entrelaçar dados, experiências pessoais e contexto histórico, crio histórias impactantes que iluminam nossa compreensão de pertencimento e identidade em um mundo em rápida transformação."
        }
      },
      footer: {
        getInTouch: "Entre em Contato",
        getInTouchSubtitle: "Tem uma pergunta ou quer trabalhar junto?",
        contactInfo: "Informações de Contato",
        connectWithMe: "Conecte-se comigo",
        quickLinks: "Links Rápidos",
        bookConsultation: "Agendar uma Consulta",
        bookConsultationText: "Interessado em saber mais sobre dupla cidadania ou meus outros projetos? Agende uma consulta.",
        scheduleCall: "Agendar uma Chamada",
        lookingForward: "Ansioso para ouvir de você!",
        copyright: "© 2025 Daniel Atz. Todos os direitos reservados."
      },
      contact: {
        title: "Entre em Contato",
        subtitle: "Tem uma pergunta ou quer colaborar? Envie-me uma mensagem e responderei em breve.",
        thankYou: "Obrigado!",
        confirmation: "Sua mensagem foi enviada com sucesso. Entrarei em contato o mais breve possível."
      }
    }
  },
  zh: {
    greetings: ["您好， 我是", "Hey, I'm", "Moien, ech sinn", "Salut, je suis", "Olá, eu sou"],
    tagline: "我的使命是为全球关于移民、公民身份和归属感的对话带来创新见解和历史深度——连接过去与现在，帮助人们找到自己在世界中的位置。\n我讲述的故事帮助架起通往国际发展的桥梁。",
    nav: {
      home: "首页",
      mission: "关于我",
      speaking: "公开演讲",
      thoughtLeadership: "思想领导力",
      press: "媒体",
      contact: "预约我"
    },
    sections: {
      speaking: {
        title: "演讲活动",
        subtitle: "我是一位经验丰富的演讲者，能用英语、法语、葡萄牙语和中文，向全球观众讲述移民、公民身份和跨文化理解等主题。",
        languages: {
          english: "英语",
          frenchPortuguese: "法语 & 葡萄牙语",
          chinese: "中文"
        }
      },
      projects: {
        title: "我的工作项目",
        subtitle: "我正在积极参与的当前项目和倡议",
        viewWebsite: "访问网站",
        projectDetails: {
          luxcitizenship: {
            description: "已帮助2,500名美国人在卢森堡获得欧盟双重国籍",
            status: "进行中"
          },
          citizenshipEU: {
            description: "利用人工智能确定您是否有资格获得基于祖先的双重国籍",
            status: "即将推出"
          },
          emigrationRevue: {
            description: "关于美国人移居海外的所有新闻和数据，2025年4月推出",
            status: "即将推出"
          },
          connaissanceFilms: {
            description: "制作探索国家身份和文化遗产的纪录片",
            status: "进行中"
          }
        }
      },
      press: {
        title: "媒体报道",
        subtitle: "我在国际出版物中探讨移民趋势、公民身份和跨国文化认同等话题。",
        readArticle: "阅读文章 →",
        articles: {
          // 2025年
          trumpEffect: {
            title: '"特朗普效应"：越来越多的美国人正在寻求卢森堡公民身份',
            excerpt: "在唐纳德·特朗普当选总统后，有大量美国公民开始探索他们的卢森堡血统以确保欧盟双重国籍。"
          },
          // 2024年
          trumpWinSurge: {
            title: "特朗普获胜后卢森堡公民身份咨询激增",
            excerpt: "自2024年总统大选结果公布以来，卢森堡公民身份办公室报告称来自美国人的申请显著增加。"
          },
          trumpMeaning: {
            title: "唐纳德·特朗普的胜利对卢森堡意味着什么？",
            excerpt: "美国大选结果可能对卢森堡产生重大影响。来自社会和卢森堡政界的声音对其影响进行了评估。"
          },
          telecranlux: {
            title: "卢森堡根源的寻访者",
            excerpt: "丹尼尔·阿茨帮助数千名美国人追溯他们的卢森堡血统，并引导他们完成复杂的血统公民身份申请流程。"
          },
          brazilBusiness: {
            title: "巴西的卢森堡人希望加强与大公国的商业联系",
            excerpt: "卢森堡移民的后代在巴西努力发展与其祖籍国之间更牢固的经济联系。"
          },
          roeWade: {
            title: "Roe v Wade被推翻后更多美国人申请卢森堡公民身份",
            excerpt: "最高法院的裁决导致寻求替代公民身份的美国人显著增加，由于其血统法律，卢森堡受到特别关注。"
          },
          growingAmericans: {
            title: "申请卢森堡公民身份的美国人数量持续增长",
            excerpt: "详细了解美国人发现并主张其卢森堡遗产的不断增长趋势，申请量逐年增加。"
          },
          // 2023年
          luxembourgers: {
            title: "43,145名卢森堡人在美洲大陆",
            excerpt: "新数据揭示了卢森堡侨民在北美和南美的分布范围，深入探讨了他们的分布情况及对文化联系的影响。"
          },
          election: {
            title: "本周日（8日）卢森堡选举包括巴西选民和候选人",
            excerpt: "卢森堡不断壮大的巴西社区在大公国选举中扮演着越来越重要的角色，选民和候选人共同塑造国家的未来。"
          },
          politicians: {
            title: "卢森堡政治家争夺拥有双重国籍的巴西人选票",
            excerpt: "卢森堡政治格局正在变化，各政党积极争取不断增长的巴西-卢森堡选民，认识到他们对国家政策的影响力日益增强。"
          },
          hiCousins: {
            title: "你好，表亲们！",
            excerpt: "探索美国人与通过血统公民身份程序新发现的卢森堡亲戚之间形成的独特关系。"
          },
          dataPublic: {
            title: "追踪卢森堡人穿越大西洋的轨迹",
            excerpt: "跟踪卢森堡人向美洲移民的历史模式，以及这些迁徙如何继续影响当今的文化交流。"
          },
          // 早期文章
          family: {
            title: "丹尼尔·阿茨与他的卢森堡家人相见",
            excerpt: "丹尼尔·阿茨探索卢森堡根源的旅程，在与仍居住在大公国的亲人情感相会中达到高潮，连接了几代人和大陆。"
          }
        }
      },
      specialties: {
        global: {
          title: "全球成功：国际化与移民",
          description: "我为全球移民趋势、公民身份途径和跨文化适应提供专业指导。凭借与个人和组织跨越国际边界的丰富经验，我提供关于成功移民和国际化战略的见解，帮助跨越文化鸿沟。"
        },
        data: {
          title: "数据分析",
          description: "我将复杂的移民和人口统计数据转化为可行的见解。专注于全球流动模式的定量和定性分析，我帮助组织理解不断变化的人口趋势及其对政策、商业和文化交流的影响。"
        },
        innovation: {
          title: "创新与叙事",
          description: "我创作引人入胜的叙事，将历史移民模式与当代全球挑战联系起来。通过编织数据、个人经历和历史背景，我创造有影响力的故事，阐明我们对快速变化世界中归属感和身份的理解。"
        }
      },
      footer: {
        getInTouch: "联系我",
        getInTouchSubtitle: "有问题或想一起工作？",
        contactInfo: "联系信息",
        connectWithMe: "与我连接",
        quickLinks: "快速链接",
        bookConsultation: "预约咨询",
        bookConsultationText: "对了解更多关于双重国籍或我的其他项目感兴趣？请安排咨询。",
        scheduleCall: "安排通话",
        lookingForward: "期待收到您的来信！",
        copyright: "© 2025 丹尼尔·阿兹。保留所有权利。"
      },
      contact: {
        title: "联系我",
        subtitle: "有问题或想合作？给我发信息，我会尽快回复您。",
        thankYou: "谢谢！",
        confirmation: "您的信息已成功发送。我会尽快回复您。"
      }
    }
  }
};

// Create the context
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from localStorage or default to English
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage as Language) || "en";
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  // Translation function
  const t = (key: string) => {
    const keys = key.split(".");
    let result: any = content[language];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};