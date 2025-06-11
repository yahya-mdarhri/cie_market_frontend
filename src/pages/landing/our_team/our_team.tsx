import LandingLayout from "@components/layouts/LandingLayout/LandingLayout";
import InventorCard from "@ui/Landing/InventorCard/InventorCard";
import avatar from './images/avatar.jpg';
import './our_team.css';

function OurTeam() {
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

    return (
        <LandingLayout heroProps={{
            heroTitle: <>Meet Our Inn2Market Team</>,
            heroDescription: "A diverse group of visionaries, creators, and problem-solvers dedicated to transforming ideas into reality. Together, we're building the future of technology and innovation.",
            firstAction: "Contact Us",
        }}>
            <div className="our-team-container">
                <div className="team-content">
                    <div className="team-intro">
                        <h2>Our Leadership</h2>
                        <p>We're a diverse team of innovators, creators, and problem-solvers dedicated to building the future.</p>
                    </div>

                    <div className="team-values">
                        {teamValues.map((value, index) => (
                            <div key={index} className="value-card">
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="team-flex">
                        {teamMembers.map((member, index) => (
                            <InventorCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                image={member.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}

export default OurTeam;