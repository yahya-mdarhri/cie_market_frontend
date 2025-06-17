// This file contains the data for the tech center page of the landing page.

import { HeroProps, StatsItemsType } from "@layouts/LandingLayout/LandingLayout";

// this object contains the data for the stats displayed in the hero section
const statsData: StatsItemsType = {
    a: { name: "Tech Centers", value: 11 },
    b: { name: "Labeled Laboratories", value: 66 },
    c: { name: "Research Centers", value: 55 },
    d: { name: "Industrial R&D Projects", value: 40 },
};

// this array contains the data for the services provided by the tech center
const servicesData = [
    {
        title: "Accelerating Product Innovation",
        description:
            "The Techcenter helps companies enhance their innovation pipeline by offering access to rapid prototyping tools and skilled support. With state-of-the-art equipment and resources, the center assists in turning ideas into tangible products faster.",
    },
    {
        title: "Small Batch Production for Specific Industry Needs",
        description:
            "For certain niche sectors of industries, the center enables quick production of customized parts using precise methods that meet high precision and speed needs.",
    },
    {
        title: "Integrating Advanced Manufacturing Technologies",
        description:
            "We help companies gain access to new digital tools and advanced manufacturing processes. This includes integrating sensors, robotics, and 3D printing into existing production flows to improve efficiency and production feasibility.",
    },
    {
        title: "Functional Prototyping for Critical Sectors",
        description:
            "The Techcenter specializes in functional prototyping for high-demand research and industrial uses. These include sectors such as healthcare, energy, and telecommunications, which require specific standards of these industries.",
    },
    {
        title: "Industrial Process Improvement",
        description:
            "Developed in collaboration with our industrial partners, we analyze and improve production chains through process simulation, data analysis, and custom software tools to provide tailored solutions.",
    },
    {
        title: "Prototyping Solutions for the Automotive Industry",
        description:
            "The Techcenter supports the automotive industry by designing and developing advanced prototypes for new products and components, helping businesses remain innovative in a rapidly evolving market.",
    },
    {
        title: "Technical Support for Student Projects",
        description:
            "As a technological training center, the Techcenter provides resources and expertise to assist students in designing, prototyping, and testing their engineering projects. This guidance helps them in realizing their academic projects.",
    },
    {
        title: "Research and Development for Industrial Innovation",
        description:
            "Objective: The Techcenter collaborates with industrial firms to turn R&D research into real-world solutions. We provide the necessary resources and know-how for every stage of product development, from initial idea to real-world validation.",
    },
    {
        title: "Maintenance and Enhancement of Industrial Equipment",
        description:
            "The Techcenter offers maintenance services for industrial machines and systems. This includes hardware repair, performance enhancement, and real-time condition-based diagnostics to optimize machine performance.",
    },
    {
        title: "Custom Industrial Solutions",
        description:
            "We work directly with industries to tailor design custom solutions tailored to their needs. From initial specifications to final product implementation, we provide complete support to ensure projects progress from concepts to implementation.",
    },
];

// this object contains the data for the hero section
const heroProps: HeroProps = {
    heroTitle: <>Tech Center</>,
    heroDescription: "We provide the tools, mentorship, and environment to turn ideas into saleable ventures",
    firstAction: "Submit A Patent",
    stats: statsData,
};

export { heroProps, servicesData }; 