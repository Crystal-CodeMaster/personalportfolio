import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

// Helper function to track events
export const trackEvent = (
  eventName: string, 
  eventParams: Record<string, any> = {}
) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  const [location] = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Load the Google Analytics script only once
    if (!document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', { 
          page_path: '${location}'
        });
      `;
      document.head.appendChild(script2);
    }

    // No cleanup needed as we want GA to persist throughout the app lifecycle
  }, [measurementId]);

  // Track page views when location changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', measurementId, {
        page_path: location,
        language: language
      });
      
      // Track custom page view event with language information
      trackEvent('page_view', {
        page_path: location,
        language: language
      });
    }
  }, [location, measurementId, language]);

  // Track language changes when language changes by any means
  useEffect(() => {
    // Only track after initial render to avoid tracking on mount
    const hasInitialized = window.dataLayer && window.dataLayer.length > 0;
    if (hasInitialized) {
      trackEvent('language_change', {
        language: language
      });
    }
  }, [language]);

  return null;
};

export default GoogleAnalytics;