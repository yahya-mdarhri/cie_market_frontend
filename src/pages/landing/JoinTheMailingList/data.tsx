// This file contains the data for the Join Our Mailing List page.

import { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import { TFunction } from "i18next";

// This function returns the hero props with translations
export const useHeroProps = (t: TFunction): HeroProps => ({
    heroTitle: t('hero.title'),
    heroDescription: t('hero.description'),
    firstAction: t('hero.firstAction'),
});

// This function returns the benefits with translations
export const useBenefits = (t: TFunction) => [
    {
        title: t('benefits.latestUpdates.title'),
        description: t('benefits.latestUpdates.description')
    },
    {
        title: t('benefits.industryInsights.title'),
        description: t('benefits.industryInsights.description')
    },
    {
        title: t('benefits.opportunities.title'),
        description: t('benefits.opportunities.description')
    },
    {
        title: t('benefits.successStories.title'),
        description: t('benefits.successStories.description')
    }
];

// This function returns the role options with translations
export const useRoleOptions = (t: TFunction) => [
    { value: "", label: t('form.role.placeholder') },
    { value: "researcher", label: t('form.role.researcher') },
    { value: "student", label: t('form.role.student') },
    { value: "faculty", label: t('form.role.faculty') },
    { value: "industry", label: t('form.role.industry') },
    { value: "other", label: t('form.role.other') }
];

// This function returns the subscription preferences with translations
export const useSubscriptionPreferences = (t: TFunction) => [
    {
        name: "newsletter",
        title: t('form.preferences.newsletter.title'),
        description: t('form.preferences.newsletter.description')
    },
    {
        name: "techUpdates",
        title: t('form.preferences.techUpdates.title'),
        description: t('form.preferences.techUpdates.description')
    }
]; 