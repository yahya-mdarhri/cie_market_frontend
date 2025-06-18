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

import enIndustrial from './locales/en/pages/Industrial.json';
import esIndustrial from './locales/es/pages/Industrial.json';
import frIndustrial from './locales/fr/pages/Industrial.json';

import enInnovationDiagnosis from './locales/en/pages/InnovationDiagnosis.json';
import esInnovationDiagnosis from './locales/es/pages/InnovationDiagnosis.json';
import frInnovationDiagnosis from './locales/fr/pages/InnovationDiagnosis.json';

import enJoinMailingList from './locales/en/pages/joinMailingList.json';
import esJoinMailingList from './locales/es/pages/joinMailingList.json';
import frJoinMailingList from './locales/fr/pages/joinMailingList.json';

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

import enLicensingProcess from './locales/en/pages/licensingProcess.json';
import esLicensingProcess from './locales/es/pages/licensingProcess.json';
import frLicensingProcess from './locales/fr/pages/licensingProcess.json';

import enOurTeam from './locales/en/pages/ourTeam.json';
import esOurTeam from './locales/es/pages/ourTeam.json';
import frOurTeam from './locales/fr/pages/ourTeam.json';

import enTechCenter from './locales/en/pages/techCenter.json';
import esTechCenter from './locales/es/pages/techCenter.json';
import frTechCenter from './locales/fr/pages/techCenter.json';

import enContact from './locales/en/components/Contact.json';
import esContact from './locales/es/components/Contact.json';
import frContact from './locales/fr/components/Contact.json';

import enProfileCard from './locales/en/components/ProfileCard.json';
import esProfileCard from './locales/es/components/ProfileCard.json';
import frProfileCard from './locales/fr/components/ProfileCard.json';

import enInventionInfo from './locales/en/components/InventionInfo.json';
import esInventionInfo from './locales/es/components/InventionInfo.json';
import frInventionInfo from './locales/fr/components/InventionInfo.json';

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
  profileCard: 'profileCard',
  home: 'home',
  tto: 'tto',
  faq: 'faq',
  impact: 'impact',
  incubator: 'incubator',
  industrial: 'industrial',
  innovationDiagnosis: 'innovationDiagnosis',
  joinMailingList: 'joinMailingList',
  partners: 'partners',
  services: 'services',
  introduction: 'introduction',
  visionAndMission: 'visionAndMission',
  contactUs: 'contactUs',
  licensingProcess: 'licensingProcess',
  ourTeam: 'ourTeam',
  techCenter: 'techCenter',
  inventionInfo: 'inventionInfo'
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
        contact: enContact,
        profileCard: enProfileCard,
        home: enHome,
        tto: enTTO,
        faq: enFAQ,
        impact: enImpact,
        incubator: enIncubator,
        industrial: enIndustrial,
        innovationDiagnosis: enInnovationDiagnosis,
        joinMailingList: enJoinMailingList,
        partners: enPartners,
        services: enServices,
        introduction: enIntroduction,
        visionAndMission: enVisionAndMission,
        contactUs: enContactUs,
        licensingProcess: enLicensingProcess,
        ourTeam: enOurTeam,
        techCenter: enTechCenter,
        inventionInfo: enInventionInfo
      },
      es: {
        navbar: esNavbar,
        contact: esContact,
        profileCard: esProfileCard,
        home: esHome,
        tto: esTTO,
        faq: esFAQ,
        impact: esImpact,
        incubator: esIncubator,
        industrial: esIndustrial,
        innovationDiagnosis: esInnovationDiagnosis,
        joinMailingList: esJoinMailingList,
        partners: esPartners,
        services: esServices,
        introduction: esIntroduction,
        visionAndMission: esVisionAndMission,
        contactUs: esContactUs,
        licensingProcess: esLicensingProcess,
        ourTeam: esOurTeam,
        techCenter: esTechCenter,
        inventionInfo: esInventionInfo
      },
      fr: {
        navbar: frNavbar,
        contact: frContact,
        profileCard: frProfileCard,
        home: frHome,
        tto: frTTO,
        faq: frFAQ,
        impact: frImpact,
        incubator: frIncubator,
        industrial: frIndustrial,
        innovationDiagnosis: frInnovationDiagnosis,
        joinMailingList: frJoinMailingList,
        partners: frPartners,
        services: frServices,
        introduction: frIntroduction,
        visionAndMission: frVisionAndMission,
        contactUs: frContactUs,
        licensingProcess: frLicensingProcess,
        ourTeam: frOurTeam,
        techCenter: frTechCenter,
        inventionInfo: frInventionInfo
      }
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: Object.values(NAMESPACES),
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 