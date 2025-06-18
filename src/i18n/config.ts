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

import enTTO from './locales/en/pages/TTO.json';
import esTTO from './locales/es/pages/TTO.json';
import frTTO from './locales/fr/pages/TTO.json';

import enFAQ from './locales/en/pages/FAQ.json';
import esFAQ from './locales/es/pages/FAQ.json';
import frFAQ from './locales/fr/pages/FAQ.json';

import enImpact from './locales/en/pages/Impact.json';
import esImpact from './locales/es/pages/Impact.json';
import frImpact from './locales/fr/pages/Impact.json';

import enIncubator from './locales/en/pages/Incubator.json';
import esIncubator from './locales/es/pages/Incubator.json';
import frIncubator from './locales/fr/pages/Incubator.json';

import enPartners from './locales/en/components/Partners.json';
import esPartners from './locales/es/components/Partners.json';
import frPartners from './locales/fr/components/Partners.json';

import enServices from './locales/en/components/Services.json';
import esServices from './locales/es/components/Services.json';
import frServices from './locales/fr/components/Services.json';

import enIntroduction from './locales/en/components/Introduction.json';
import esIntroduction from './locales/es/components/Introduction.json';
import frIntroduction from './locales/fr/components/Introduction.json';

import enVisionAndMission from './locales/en/components/VisionAndMission.json';
import esVisionAndMission from './locales/es/components/VisionAndMission.json';
import frVisionAndMission from './locales/fr/components/VisionAndMission.json';

import enContactUs from './locales/en/components/ContactUs.json';
import esContactUs from './locales/es/components/ContactUs.json';
import frContactUs from './locales/fr/components/ContactUs.json';

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
  tto: 'tto',
  faq: 'faq',
  impact: 'impact',
  incubator: 'incubator',
  partners: 'partners',
  services: 'services',
  introduction: 'introduction',
  visionAndMission: 'visionAndMission',
  contactUs: 'contactUs'
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
        tto: enTTO,
        faq: enFAQ,
        impact: enImpact,
        incubator: enIncubator,
        partners: enPartners,
        services: enServices,
        introduction: enIntroduction,
        visionAndMission: enVisionAndMission,
        contactUs: enContactUs
      },
      es: {
        navbar: esNavbar,
        home: esHome,
        tto: esTTO,
        faq: esFAQ,
        impact: esImpact,
        incubator: esIncubator,
        partners: esPartners,
        services: esServices,
        introduction: esIntroduction,
        visionAndMission: esVisionAndMission,
        contactUs: esContactUs
      },
      fr: {
        navbar: frNavbar,
        home: frHome,
        tto: frTTO,
        faq: frFAQ,
        impact: frImpact,
        incubator: frIncubator,
        partners: frPartners,
        services: frServices,
        introduction: frIntroduction,
        visionAndMission: frVisionAndMission,
        contactUs: frContactUs
      }
    },
    // lng: 'en', // Set English as default language
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