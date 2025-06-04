import LandingLayout from "@components/layouts/LandingLayout/LandingLayout";
import InventorCard from "@ui/Landing/InventorCard/InventorCard";
import './our_team.css';

function OurTeam() {
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            image: "https://i.pravatar.cc/300?img=1",
        },
        {
            name: "Michael Chen",
            role: "CTO",
            image: "https://i.pravatar.cc/300?img=2",
        },
        {
            name: "Emma Rodriguez",
            role: "Lead Designer",
            image: "https://i.pravatar.cc/300?img=3",
        },
        {
            name: "David Kim",
            role: "Head of Engineering",
            image: "https://i.pravatar.cc/300?img=4",
        },
        {
            name: "Sophie Anderson",
            role: "Product Manager",
            image: "https://i.pravatar.cc/300?img=5",
        },
    ];

    const statsData = {
        a: { name: "Team Members", value: 50 },
        c: { name: "Projects Completed", value: 200 },
    };

    return (
        <LandingLayout heroProps={{
            heroTitle: <>Meet Our Innovation Team</>,
            heroDescription: "A diverse group of visionaries, creators, and problem-solvers dedicated to transforming ideas into reality. Together, we're building the future of technology and innovation.",
            firstAction: "Contact Us",
            stats: statsData,
        }}>
            <div className="our-team-container">
                <div className="team-content">
                    <div className="team-intro">
                        <h2>Our Leadership</h2>
                        <p>We're a diverse team of innovators, creators, and problem-solvers dedicated to building the future.</p>
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