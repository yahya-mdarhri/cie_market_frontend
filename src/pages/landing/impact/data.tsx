//  this file contains the data for the impact page of the landing page

import { HeroProps } from "@components/layouts/LandingLayout/LandingLayout";

// this function returns the URL of the SDG icon based on the SDG number
function getSDGIcon(sdgNumber: number) {
    return `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${sdgNumber.toString().padStart(2, '0')}.jpg`;
};

// this array contains the news items and their details, including SDG numbers and images
const newsItems = [
    {
        id: 1,
        title: 'Sustainable Development in Action',
        description: 'How our innovations are contributing to global sustainability goals and creating lasting impact.',
        date: 'March 15, 2024',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
        sdgNumber: 17
    },
    {
        id: 2,
        title: 'Clean Energy Breakthrough',
        description: 'Revolutionary technology that promises to transform renewable energy production and distribution.',
        date: 'March 10, 2024',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60',
        sdgNumber: 7
    },
    {
        id: 3,
        title: 'Education for All',
        description: 'Breaking barriers in education through innovative digital learning solutions.',
        date: 'March 5, 2024',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
        sdgNumber: 4
    },
    {
        id: 1,
        title: 'Sustainable Development in Action',
        description: 'How our innovations are contributing to global sustainability goals and creating lasting impact.',
        date: 'March 15, 2024',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
        sdgNumber: 15
    },
    {
        id: 2,
        title: 'Clean Energy Breakthrough',
        description: 'Revolutionary technology that promises to transform renewable energy production and distribution.',
        date: 'March 10, 2024',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60',
        sdgNumber: 7
    },
    {
        id: 3,
        title: 'Education for All',
        description: 'Breaking barriers in education through innovative digital learning solutions.',
        date: 'March 5, 2024',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
        sdgNumber: 3
    }
];

// this array contains the key metrics of the impact page, showcasing the achievements and contributions of the organization
const metrics = [
    {
        id: 1,
        value: '50+',
        title: 'Innovations Developed',
        description: 'Cutting-edge solutions addressing global challenges'
    },
    {
        id: 2,
        value: '100+',
        title: 'Startups Supported',
        description: 'Entrepreneurs empowered to create positive change'
    },
    {
        id: 3,
        value: '1M+',
        title: 'Lives Impacted',
        description: 'People benefiting from our sustainable solutions'
    }
];

// this object contains the properties for the hero section of the impact page
const heroProps: HeroProps = {
    heroTitle: 'Our Impact',
    heroDescription: 'Discover how we are making a difference through sustainable innovation and technology.',
    firstAction: 'Join Our Mailing List',
};

export {newsItems, metrics, getSDGIcon, heroProps};