import LandingLayout from "@components/layouts/LandingLayout/LandingLayout";
import ProfileCard from "@ui/Landing/ProfileCard/ProfileCard";
import './our_team.css';
import { teamMembers, teamValues, heroProps } from './data';

function OurTeam() {
    return (
        <LandingLayout heroProps={heroProps}>
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
                            <ProfileCard
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