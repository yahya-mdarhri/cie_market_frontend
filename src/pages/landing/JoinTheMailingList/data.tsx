// This file contains the data for the Join Our Mailing List page.

import { HeroProps } from "@layouts/LandingLayout/LandingLayout";

// This object contains the data for the hero section
const heroProps: HeroProps = {
    heroTitle: <>Stay Connected with Inn2Market</>,
    heroDescription: "Join our mailing list to receive the latest updates on innovations, technology trends, and opportunities. Be the first to know about new developments in the world of intellectual property and technology transfer.",
    firstAction: "Subscribe Now",
};

// This array contains the benefits of joining the mailing list
const benefits = [
    {
        title: "Latest Updates",
        description: "Stay informed about the newest technology trends and innovations"
    },
    {
        title: "Industry Insights",
        description: "Get exclusive access to market trends and analysis"
    },
    {
        title: "Opportunities",
        description: "Be the first to know about upcoming events and opportunities"
    },
    {
        title: "Success Stories",
        description: "Learn from real-world case studies and success stories"
    }
];

// This array contains the role options for the form
const roleOptions = [
    { value: "", label: "Select your role" },
    { value: "researcher", label: "Researcher" },
    { value: "student", label: "Student" },
    { value: "faculty", label: "Faculty" },
    { value: "industry", label: "Industry Professional" },
    { value: "other", label: "Other" }
];

// This array contains the subscription preferences
const subscriptionPreferences = [
    {
        name: "newsletter",
        title: "Newsletter",
        description: "News, Updates, and the latest info about IP."
    },
    {
        name: "techUpdates",
        title: "Technology Updates",
        description: "Latest technologies in your inbox as soon as they are posted"
    }
];

export { heroProps, benefits, roleOptions, subscriptionPreferences }; 