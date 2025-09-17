// This file contains the data for the Our Team page of the landing page.

import avatar from './images/avatar.jpg';
import wacim from './images/wacim.jpeg';
import yahya from './images/yahya.jpeg';

import { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import { TFunction } from "i18next";

// The hero section props with translations
export const useHeroProps = (t: TFunction): HeroProps => ({
    heroTitle: t('hero.title'),
    heroDescription: t('hero.description'),
    firstAction: t('hero.firstAction'),
});

// The team members data (kept static)
const teamMembers = [
    {
        name: "Wacim BEN YAHYA",
        role: "Head of TTO",
        image: wacim,
    },
    {
        name: "Yahya MDARHRI",
        role: "Tech Lead",
        image: yahya,
    },
    {
        name: "Elhoussaine EDDAHBI",
        role: "DevOps",
        image: avatar,
    },
    {
        name: "Hamza Oumansour",
        role: "Full Stack",
        image: avatar,
    },
];

// The team values data with translations
export const useTeamValues = (t: TFunction) => [
    {
        title: t('values.innovation.title'),
        description: t('values.innovation.description')
    },
    {
        title: t('values.collaboration.title'),
        description: t('values.collaboration.description')
    },
    {
        title: t('values.excellence.title'),
        description: t('values.excellence.description')
    }
];

export { teamMembers };
