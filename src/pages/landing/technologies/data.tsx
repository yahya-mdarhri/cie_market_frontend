import { HeroProps } from "@components/layouts/LandingLayout/LandingLayout";


type TranslateFn = (key: string) => string;

export const getHeroProps = (t: TranslateFn): HeroProps => ({
    heroTitle: t('hero.title'),
    heroDescription: t('hero.description'),
    firstAction: t('hero.firstAction'),
    secondAction: t('hero.secondAction'),
});

// Technology listing data and types
export type Patent = {
    id: string;
    name: string;
    internationalId?: string;
};

export type Inventor = {
    name: string;
    affiliation?: string;
};

export type Technology = {
    id: string;
    name: string;
    summary: string;
    problem?: string;
    solution?: string;
    impact?: string;
    image?: string;
    tags?: string[];
    sector?: string;
    inventors?: Inventor[];
    patents?: Patent[];
};

export const getTechnologies = (): Technology[] => [
    {
        id: "tech-energy-storage",
        name: "Advanced Energy Storage",
        summary: "High-density, fast-charging battery materials with improved lifecycle.",
        image: "/vite.svg",
        tags: ["Energy", "Materials", "Sustainability"],
        sector: 'Energy & Renewables',
        problem: "Current lithium-ion batteries face trade-offs between energy density, charging speed, and lifecycle.",
        solution: "Novel cathode materials and electrolyte additives enabling faster ion transport and stability.",
        impact: "Longer-lasting batteries reduce replacement costs and improve EV range and charge time.",
        inventors: [
            { name: 'A. Benabdellah', affiliation: 'CIE' },
            { name: 'M. El Ouahabi', affiliation: 'CIE' },
            { name: 'E. IHRINGER', affiliation: 'UIR' },
        ],
        patents: [
            { id: '32861', name: 'High-density cathode composition', internationalId: 'WO2023XXXX' },
            { id: '32861', name: 'High-density cathode composition', internationalId: 'WO2023XXXX' },
            { id: '32861', name: 'High-density cathode composition', internationalId: 'WO2023XXXX' },
            { id: '36470', name: 'Electrolyte stabilization method' },
            { id: '36470', name: 'Electrolyte stabilization method' },
            { id: '36470', name: 'Electrolyte stabilization method' },
        ]
    },
    {
        id: "tech-agri-iot",
        name: "Agri IoT Sensing",
        summary: "Low-power sensors and analytics for precision agriculture.",
        image: "/vite.svg",
        tags: ["IoT", "Agriculture"],
        sector: 'Agriculture',
        problem: "Smallholder farms lack low-cost, continuous monitoring for soil moisture and climate.",
        solution: "Ultra-low-power IoT probes with LPWAN connectivity and analytics dashboard.",
        impact: "Optimized irrigation cuts water usage and boosts yield with data-driven insights.",
        inventors: [
            { name: 'M. Cherkaoui', affiliation: 'CIE' },
            { name: 'I. Idriss', affiliation: 'CIE' },
            { name: 'I. Idriss', affiliation: 'CIE' },
        ],
        patents: [
            { id: '37584', name: 'Agricultural multi-sensor probe', internationalId: 'PCT/MA2022/000001' },
        ]
    },
    {
        id: "tech-health-ai",
        name: "AI Diagnostics",
        summary: "Computer vision pipelines for medical screening and triage.",
        image: "/vite.svg",
        tags: ["Healthcare", "AI"],
        sector: 'Healthcare & Pharmaceuticals',
        problem: "Manual triage is resource-intensive and prone to variability in early detection.",
        solution: "AI-assisted screening pipeline with explainability for clinical decision support.",
        impact: "Earlier interventions improve outcomes and reduce screening backlog.",
        inventors: [
            { name: 'A. Zouggar', affiliation: 'CIE' },
            { name: 'M. Fongbedgi', affiliation: 'CIE' },
            { name: 'Y. El Amrani', affiliation: 'CIE' },
        ],
        patents: [
            { id: '36470', name: 'Medical image triage pipeline' },
            { id: '37584', name: 'Adaptive thresholding for screening' },
        ]
    },
    {
        id: "tech-water-treatment",
        name: "Water Treatment Membranes",
        summary: "Selective membranes for efficient desalination and filtration.",
        image: "/vite.svg",
        tags: ["Water", "CleanTech"],
        sector: 'Chemicals & Materials',
        problem: "Conventional membranes foul quickly and require high energy for desalination.",
        solution: "Surface-engineered polymer membranes with selective nanochannels.",
        impact: "Lower OPEX via reduced fouling and energy consumption for clean water access.",
        inventors: [
            { name: 'H. Essadiqi', affiliation: 'CIE' },
        ],
        patents: [
            { id: '32861', name: 'Anti-fouling membrane surface treatment', internationalId: 'WO2021YYYY' },
            { id: '36470', name: 'Nanoporous desalination membrane' },
        ]
    },
];