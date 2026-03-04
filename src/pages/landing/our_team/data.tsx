// This file contains the data for the Our Team page of the landing page.

// import avatar from './images/avatar.jpg';
import hamza from './images/hamza.jpg';
import elhoussaine from './images/elhoussaine.png';
import wacim from './images/wacim.jpeg';
import avatar from './images/avatar.jpg';

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
        name: "Wacim Ben Yahya",
        role: "Head of TTO",
        image: wacim,
    },
    {
        name: "Yahya Mdarhri",
        role: "Tech Lead",
        image: avatar,
    },
    {
        name: "El Houssaine Eddahbi",
        role: "Cloud & DevOps Engineer",
        image: elhoussaine,
    },
    {
        name: "Hamza Oumansour",
        role: "Software Engineer",
        image: hamza,
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
