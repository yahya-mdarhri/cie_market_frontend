// This file contains the data for the Innovation Diagnosis page of the landing page.

import { FaThumbsDown, FaThumbsUp, FaRegMeh, FaThumbsUp as FaSolidThumbsUp, FaThumbsDown as FaSolidThumbsDown } from "react-icons/fa";

// The different phases of the innovation diagnosis process
const phases = [
    "Phase 1 - Launch",
    "Phase 2 - Progress",
    "Phase 3 - Acceleration",
    "Phase 4 - Realization"
];

// The questions for each phase of the diagnosis
const questionsByPhase = {
    [phases[0]]: [
        "Leadership acknowledges and communicates the importance of innovation",
        "A shared vision for a better future is formalized",
        "An innovation audit has been conducted to identify obstacles",
        "A budget is allocated to innovation, training, and initiatives",
        "Entrepreneurship, empowerment, and risk-taking are part of the desired culture",
        "Innovation ambassadors are appointed in different departments"
    ],
    [phases[1]]: [
        "Clear goals are set (e.g., number of ideas, revenue from innovation, etc.)",
        "Training sessions are organized for managers and ambassadors",
        "An internal suggestion system is in place and actively managed",
        "Regular brainstorming sessions are held with diverse teams and a facilitator",
        "Innovation objectives are included in individual evaluations",
        "Innovation successes are shared and celebrated"
    ],
    [phases[2]]: [
        "An open innovation strategy is defined and being deployed",
        "An incubation or experimentation unit is operational",
        "Validation processes have been simplified to accelerate implementation",
        "More than 2 suggestions per employee per year are implemented",
        "A blame culture has been replaced with a culture of openness and questioning",
        "The concept of minimum viable product (MVP) is fully integrated"
    ],
    [phases[3]]: [
        "An open innovation program is fully integrated and generates external innovations",
        "New products/services represent a significant portion of revenue",
        "Employees are encouraged to try new initiatives — and they do",
        "Risk-taking is encouraged, failure is accepted and analyzed",
        "More than 5 suggestions per employee per year are implemented",
        "The company is recognized as an innovation leader and a stimulating workplace"
    ]
};

// The icons and their labels for the rating system
const icons = [
    { icon: FaSolidThumbsDown, label: "Strongly Disagree", className: "strongly-disagree" },
    { icon: FaThumbsDown, label: "Disagree", className: "disagree" },
    { icon: FaRegMeh, label: "Neutral", className: "neutral" },
    { icon: FaThumbsUp, label: "Agree", className: "agree" },
    { icon: FaSolidThumbsUp, label: "Strongly Agree", className: "strongly-agree" }
];

// The score ranges and their corresponding result types and descriptions
const scoreRanges = [
    {
        max: 30,
        type: "Embryonic Innovation",
        description: "High potential but few structures in place."
    },
    {
        max: 60,
        type: "Innovation in Development",
        description: "A solid foundation, but further effort needed."
    },
    {
        max: 90,
        type: "Active Innovation",
        description: "Many projects and practices are in place."
    },
    {
        max: Infinity,
        type: "Mature Innovation",
        description: "A well-established culture and visible results."
    }
];

// The consent text for the form
const consentText = "By clicking on 'Start Assessment', I consent to the collection and processing of the information I have provided for evaluation purposes.";

export { questionsByPhase, phases, icons, scoreRanges, consentText };