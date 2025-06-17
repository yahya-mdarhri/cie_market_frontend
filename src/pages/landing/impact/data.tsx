//  this file contains the data for the impact page of the landing page

import { HeroProps } from "@components/layouts/LandingLayout/LandingLayout";

// this function returns the URL of the SDG icon based on the SDG number
function getSDGIcon(sdgNumber: number) {
    return `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${sdgNumber.toString().padStart(2, '0')}.jpg`;
};

// this function returns the news items with translations
export function useNewsItems(t : any) {
    return [
        {
            id: 1,
            title: t('news.items.news_1.title'),
            description: t('news.items.news_1.description'),
            date: '15/03/2024',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
            sdgNumber: 17
        },
        {
            id: 2,
            title: t('news.items.news_2.title'),
            description: t('news.items.news_2.description'),
            date: '10/03/2024',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60',
            sdgNumber: 7
        },
        {
            id: 3,
            title: t('news.items.news_3.title'),
            description: t('news.items.news_3.description'),
            date: '05/03/2024',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
            sdgNumber: 4
        },
        {
            id: 4,
            title: t('news.items.news_1.title'),
            description: t('news.items.news_1.description'),
            date: '15/03/2024',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
            sdgNumber: 15
        },
        {
            id: 5,
            title: t('news.items.news_2.title'),
            description: t('news.items.news_2.description'),
            date: '10/03/2024',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60',
            sdgNumber: 7
        },
        {
            id: 6,
            title: t('news.items.news_3.title'),
            description: t('news.items.news_3.description'),
            date: '05/03/2024',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
            sdgNumber: 3
        }
    ];
}

// this function returns the key metrics with translations
export function useMetrics(t: any) {
    
    return [
        {
            id: 1,
            value: t('metrics.items.metric_1.value'),
            title: t('metrics.items.metric_1.title'),
            description: t('metrics.items.metric_1.description')
        },
        {
            id: 2,
            value: t('metrics.items.metric_2.value'),
            title: t('metrics.items.metric_2.title'),
            description: t('metrics.items.metric_2.description')
        },
        {
            id: 3,
            value: t('metrics.items.metric_3.value'),
            title: t('metrics.items.metric_3.title'),
            description: t('metrics.items.metric_3.description')
        }
    ];
}

// this function returns the hero props with translations
export function useHeroProps(t: any): HeroProps {
    
    return {
        heroTitle: t('hero.title'),
        heroDescription: t('hero.description'),
        firstAction: t('hero.firstAction'),
    };
}

export { getSDGIcon };