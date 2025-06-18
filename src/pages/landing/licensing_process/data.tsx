// This file contains the data for the licensing process page of the landing page.

import { HeroProps } from "@layouts/LandingLayout/LandingLayout";
import { TFunction } from "i18next";

// this function returns the hero props with translations
export const getHeroProps = (t: TFunction): HeroProps => ({
    heroTitle: <>{t('hero.title')}</>,
    heroDescription: t('hero.description'),
});

// this function returns the licensing goals with translations
export const getLicensingGoals = (t: TFunction) => [
    {
        number: 1,
        text: t('agreements.goals.goal1')
    },
    {
        number: 2,
        text: t('agreements.goals.goal2')
    }
];

// this function returns the licensee requirements with translations
export const getLicenseeRequirements = (t: TFunction) => t('agreements.requirements.items', { returnObjects: true });

// this function returns the financial terms with translations
export const getFinancialTerms = (t: TFunction) => t('terms.financial.items', { returnObjects: true });

// this function returns the non-financial terms with translations
export const getNonFinancialTerms = (t: TFunction) => t('terms.nonFinancial.items', { returnObjects: true });

// this function returns the inventor involvement with translations
export const getInventorInvolvement = (t: TFunction) => t('findingLicensee.inventorInvolvement.items', { returnObjects: true });

// this function returns the licensee selection criteria with translations
export const getLicenseeSelectionCriteria = (t: TFunction) => t('findingLicensee.selectionCriteria.items', { returnObjects: true }); 