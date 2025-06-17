// This file contains the data for the licensing process page of the landing page.

import { HeroProps } from "@layouts/LandingLayout/LandingLayout";

// this object contains the data for the hero section
const heroProps: HeroProps = {
    heroTitle: <>Licensing Process</>,
    heroDescription: "A comprehensive guide to our licensing process at Technology Transfer Office, ensuring transparency and efficiency.",
};

// this array contains the data for the licensing goals
const licensingGoals = [
    {
        number: 1,
        text: "Ensure the technology is developed by the licensee for the benefit of society, aligning with UIR and Moroccan national innovation policies."
    },
    {
        number: 2,
        text: "Provide UIR and the inventors with fair and reasonable financial returns if the product development is successful."
    }
];

// this array contains the data for the licensee requirements
const licenseeRequirements = [
    "Business model related to the technology and the potential advantages of their proposed solution.",
    "Target market and customer base.",
    "Access to resources such as capital, infrastructure, and skilled personnel.",
    "Expected revenue and growth projections."
];

// this array contains the data for the financial terms
const financialTerms = [
    "License issue fees",
    "Annual maintenance fees",
    "Milestone-based development or commercialization payments",
    "Royalties on sales or service revenue",
    "Reimbursement of patent or registration costs",
    "Revenue sharing from sublicensing",
    "Equity shares for startups"
];

// this array contains the data for the non-financial terms
const nonFinancialTerms = [
    "Type of exclusivity: non-exclusive, exclusive, or limited by field or geography",
    "Retention of rights for UIR and research sponsors",
    "Rights reserved for academic and research use by UIR and partner institutions",
    "Diligence requirements to ensure timely development and commercialization"
];

// this array contains the data for the inventor involvement and benefits
const inventorInvolvement = [
    "Licensees often seek support from inventors for knowledge transfer, ranging from casual interactions to formal consulting arrangements.",
    "Collaboration with startups may require increased engagement, governed by UIR's conflict of interest and ethics policies.",
    "Inventors benefit from real-world impact, expanded industry relationships, and a share in financial returns from licensing revenues."
];

// this array contains the data for the licensee selection criteria
const licenseeSelectionCriteria = [
    "Licensees are selected based on their potential to effectively bring the technology to market and serve public needs.",
    "In some cases, experienced companies with relevant market expertise are preferred.",
    "For other technologies, startup companies offer the necessary focus and drive.",
    "Technologies may be licensed to multiple entities, non-exclusively or exclusively by field or region."
];

export { heroProps, licensingGoals, licenseeRequirements, financialTerms, nonFinancialTerms, inventorInvolvement, licenseeSelectionCriteria }; 