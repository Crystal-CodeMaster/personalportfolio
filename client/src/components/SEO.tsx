import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: Language;
  image?: string;
  article?: boolean;
  pathname?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  lang,
  image,
  article = false,
  pathname,
}) => {
  const { language } = useLanguage();
  const currentLang = lang || language;
  
  // Default metadata per language
  const defaultMeta = {
    en: {
      title: 'Daniel Atz | Migration & Citizenship Expert',
      description: 'Daniel Atz is a leading expert on migration, citizenship, and belonging. Explore his insights on global mobility and dual citizenship.',
      siteName: 'Daniel Atz - Global Mobility Expert',
    },
    fr: {
      title: 'Daniel Atz | Expert en Migration et Citoyenneté',
      description: 'Daniel Atz est un expert reconnu en matière de migration, citoyenneté et appartenance. Découvrez ses perspectives sur la mobilité mondiale et la double nationalité.',
      siteName: 'Daniel Atz - Expert en Mobilité Mondiale',
    },
    pt: {
      title: 'Daniel Atz | Especialista em Migração e Cidadania',
      description: 'Daniel Atz é um especialista líder em migração, cidadania e pertencimento. Explore suas perspectivas sobre mobilidade global e dupla nacionalidade.',
      siteName: 'Daniel Atz - Especialista em Mobilidade Global',
    },
    zh: {
      title: 'Daniel Atz | 移民与公民身份专家',
      description: 'Daniel Atz 是移民、公民身份和归属感方面的领先专家。探索他对全球流动性和双重国籍的见解。',
      siteName: 'Daniel Atz - 全球流动性专家',
    },
  };

  const metaTitle = title || defaultMeta[currentLang].title;
  const metaDescription = description || defaultMeta[currentLang].description;
  const metaImage = image || '/profile-image.jpg'; // Default image
  const canonical = pathname ? `https://danielatz.com${pathname}` : 'https://danielatz.com';

  return (
    <Helmet 
      htmlAttributes={{ lang: currentLang }}
      title={metaTitle}
      titleTemplate={`%s`}
    >
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={defaultMeta[currentLang].siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Additional language alternates for SEO */}
      <link rel="alternate" hrefLang="en" href={`https://danielatz.com${pathname || ''}`} />
      <link rel="alternate" hrefLang="fr" href={`https://danielatz.com${pathname || ''}`} />
      <link rel="alternate" hrefLang="pt" href={`https://danielatz.com${pathname || ''}`} />
      <link rel="alternate" hrefLang="zh" href={`https://danielatz.com${pathname || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://danielatz.com${pathname || ''}`} />
    </Helmet>
  );
};

export default SEO;