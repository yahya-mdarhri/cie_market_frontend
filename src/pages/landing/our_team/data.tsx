// This file contains the data for the Our Team page of the landing page.

import avatar from './images/avatar.jpg';

// The team members data
const teamMembers = [
    {
        name: "Wacim BEN YAHYA",
        role: "Head of TTO",
        image: avatar,
    },
    {
        name: "Yahya MDARHRI",
        role: "Tech Lead",
        image: avatar,
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

// The team values data
const teamValues = [
    {
        title: "Innovation",
        description: "We push boundaries and embrace new ideas to create groundbreaking solutions."
    },
    {
        title: "Collaboration",
        description: "We believe in the power of teamwork and diverse perspectives."
    },
    {
        title: "Excellence",
        description: "We strive for the highest quality in everything we do."
    }
];

// The hero section props
const heroProps = {
    heroTitle: <>Meet Our Inn2Market Team</>,
    heroDescription: "A diverse group of visionaries, creators, and problem-solvers dedicated to transforming ideas into reality. Together, we're building the future of technology and innovation.",
    firstAction: "Contact Us",
};

export { teamMembers, teamValues, heroProps };
