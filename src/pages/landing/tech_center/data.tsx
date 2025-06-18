// This file contains the data for the tech center page of the landing page.

import { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";
import { useTranslation } from 'react-i18next';
import { 
    FaRocket, 
    FaIndustry, 
    FaCogs, 
    FaTools, 
    FaChartLine, 
    FaCar, 
    FaGraduationCap, 
    FaFlask, 
    FaWrench, 
    FaLightbulb 
} from 'react-icons/fa';

export const useTechCenterData = () => {
    const { t } = useTranslation('techCenter');

    const statsData: StatsItemsType = {
        a: { name: t('stats.techCenters'), value: 11 },
        b: { name: t('stats.labeledLabs'), value: 66 },
        c: { name: t('stats.researchCenters'), value: 55 },
        d: { name: t('stats.industrialProjects'), value: 40 },
    };

    const servicesData = [
        {
            title: t('services.items.productInnovation.title'),
            description: t('services.items.productInnovation.description'),
            icon: <FaRocket/>
        },
        {
            title: t('services.items.smallBatch.title'),
            description: t('services.items.smallBatch.description'),
            icon: <FaIndustry/>
        },
        {
            title: t('services.items.manufacturing.title'),
            description: t('services.items.manufacturing.description'),
            icon: <FaCogs/>
        },
        {
            title: t('services.items.prototyping.title'),
            description: t('services.items.prototyping.description'),
            icon: <FaTools/>
        },
        {
            title: t('services.items.processImprovement.title'),
            description: t('services.items.processImprovement.description'),
            icon: <FaChartLine/>
        },
        {
            title: t('services.items.automotive.title'),
            description: t('services.items.automotive.description'),
            icon: <FaCar/>
        },
        {
            title: t('services.items.studentSupport.title'),
            description: t('services.items.studentSupport.description'),
            icon: <FaGraduationCap/>
        },
        {
            title: t('services.items.research.title'),
            description: t('services.items.research.description'),
            icon: <FaFlask/>
        },
        {
            title: t('services.items.maintenance.title'),
            description: t('services.items.maintenance.description'),
            icon: <FaWrench/>
        },
        {
            title: t('services.items.customSolutions.title'),
            description: t('services.items.customSolutions.description'),
            icon: <FaLightbulb/>
        },
    ];

    const heroProps: HeroProps = {
        heroTitle: t('hero.title'),
        heroDescription: t('hero.description'),
        firstAction: t('hero.firstAction'),
        stats: statsData,
    };

    return { heroProps, servicesData };
}; 

import avatar from "@pages/landing/our_team/images/avatar.jpg"

export const contactData: ContactPerson[] = [
    {
        name: "John Doe",
        role: "Technical Lead",
        image: avatar, 
        social: {
            phone: "+212XXXXXXXXX",
            email: "john.doe@example.com"
        }
    },
    {
        name: "John Doe",
        role: "Technical Lead",
        image: avatar, 
        social: {
            phone: "+212XXXXXXXXX",
            email: "john.doe@example.com"
        }
    },
    {
        name: "John Doe",
        role: "Technical Lead",
        image: avatar, 
        social: {
            phone: "+212XXXXXXXXX",
            email: "john.doe@example.com"
        }
    },
];
