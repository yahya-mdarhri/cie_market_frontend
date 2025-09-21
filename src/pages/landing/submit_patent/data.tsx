// This file contains the data for the submit patent page of the landing page.

import { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import { TFunction } from "i18next";

// this function returns the hero props with translations
export const getHeroProps = (t: TFunction): HeroProps => ({
    heroTitle: <>{t('hero.title')}</>,
    heroDescription: t('hero.description'),
    firstAction: t('hero.firstAction'),
    secondAction: t('hero.secondAction'),
    onFirstActionClick: () => window.open("https://inn2market-inventor-frontend.pages.dev", "_blank", "noopener,noreferrer"),
    onSecondActionClick: () => window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=hirXO-qopkSomfPMy-3wJ7DyQY263ttEtDBgnhjOXoNUNlI0UFVTV1BWTDNTQTlFN0dWMVEyNUlBTS4u", "_blank", "noopener,noreferrer")
});

// this function returns the platform features with translations
export const getPlatformFeatures = (t: TFunction) => ({
    title: t('platformFeatures.title'),
    subtitle: t('platformFeatures.subtitle'),
    features: t('platformFeatures.features', { returnObjects: true })
});

// this function returns the process steps with translations
export const getProcessSteps = (t: TFunction) => ({
    title: t('processSteps.title'),
    subtitle: t('processSteps.subtitle'),
    steps: t('processSteps.steps', { returnObjects: true })
});

// this function returns the benefits with translations
export const getBenefits = (t: TFunction) => ({
    title: t('benefits.title'),
    subtitle: t('benefits.subtitle'),
    benefits: t('benefits.benefits', { returnObjects: true })
});

// this function returns the call to action with translations
export const getCallToAction = (t: TFunction) => ({
    title: t('cta.title'),
    description: t('cta.description'),
    primaryAction: t('cta.primaryAction'),
    secondaryAction: t('cta.secondaryAction')
}); 