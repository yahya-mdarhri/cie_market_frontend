import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enNavbar from './locales/en/components/Navbar.json';
import esNavbar from './locales/es/components/Navbar.json';
import frNavbar from './locales/fr/components/Navbar.json';

import enHome from './locales/en/pages/Home.json';
import esHome from './locales/es/pages/Home.json';
import frHome from './locales/fr/pages/Home.json';

import enIntroduction from './locales/en/components/Introduction.json';
import esIntroduction from './locales/es/components/Introduction.json';
import frIntroduction from './locales/fr/components/Introduction.json';

import enVisionAndMission from './locales/en/components/VisionAndMission.json';
import esVisionAndMission from './locales/es/components/VisionAndMission.json';
import frVisionAndMission from './locales/fr/components/VisionAndMission.json';

// Define supported languages
export const SUPPORTED_LANGUAGES = {
  en: { name: 'English', flag: '🇺🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  es: { name: 'Español', flag: '🇪🇸' },
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;

// Define namespaces
export const NAMESPACES = {
  common: 'common',
  navbar: 'navbar',
  hero: 'hero',
  footer: 'footer',
  contact: 'contact',
  home: 'home',
  introduction: 'introduction',
  visionAndMission: 'visionAndMission'
} as const;

export type Namespace = keyof typeof NAMESPACES;

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        navbar: enNavbar,
        home: enHome,
        introduction: enIntroduction,
        visionAndMission: enVisionAndMission
      },
      es: {
        navbar: esNavbar,
        home: esHome,
        introduction: esIntroduction,
        visionAndMission: esVisionAndMission
      },
      fr: {
        navbar: frNavbar,
        home: frHome,
        introduction: frIntroduction,
        visionAndMission: frVisionAndMission
      }
    },
    lng: 'en', // Set English as default language
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: Object.values(NAMESPACES),
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n; 