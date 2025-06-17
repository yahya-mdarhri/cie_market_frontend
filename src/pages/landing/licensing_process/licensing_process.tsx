import LandingLayout from '@components/layouts/LandingLayout/LandingLayout';
import './licensing_process.css';
import { heroProps, licensingGoals, licenseeRequirements, financialTerms, nonFinancialTerms, inventorInvolvement, licenseeSelectionCriteria } from './data';

function LicensingProcess() {
    return (
        <LandingLayout heroProps={heroProps}>
            <div className="licensing-container">
                <section className="licensing-section">
                    <h2>Overview</h2>
                    <p>
                        On behalf of UIR, the Technology Transfer Office (TTO) negotiates and grants licenses for the university's patented inventions, copyrighted works, and tangible research outcomes to startups, SMEs, and established companies that demonstrate the technical and business capacity to develop early-stage technologies into commercially successful products and services.
                    </p>
                    <p>
                        With numerous new intellectual property disclosures received annually, UIR's innovation portfolio is constantly evolving. If you are interested in obtaining a license to UIR-developed intellectual property, it's important to understand the stages involved in the licensing process.
                    </p>
                </section>

                <section className="licensing-section">
                    <h2>Licensing Agreements</h2>
                    <p>
                        A license agreement is a contract that transfers the rights to use UIR technology to a licensee for financial and other benefits, while retaining ownership by UIR. These agreements are made with both startups and established businesses and typically require the licensee to diligently develop and bring the innovation to market, providing fair returns to UIR and serving the public interest.
                    </p>
                    <p>
                        UIR's two primary goals in any licensing agreement are to:
                    </p>
                    <div className="goals-list">
                        <ul>
                            {licensingGoals.map((goal, index) => (
                                <li key={index} className="goal-item">
                                    <div className="goal-number">{goal.number}</div>
                                    <div className="goal-text">{goal.text}</div>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <p>
                        When crafting a license agreement, UIR begins by understanding the licensee's:
                    </p>
                    <ul className="requirements-list">
                        {licenseeRequirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </section>

                <section className="licensing-section">
                    <h2>Licensing Terms</h2>
                    <div className="terms-block">
                        <h3>Common Financial Elements</h3>
                        <ul className="requirements-list">
                            {financialTerms.map((term, index) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h3>Non-Financial Terms</h3>
                        <ul className="requirements-list">
                            {nonFinancialTerms.map((term, index) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="info-block">
                        <p>Licensing negotiations are conducted between the TTO and the company's designated representative, with no direct involvement of UIR inventors during the negotiation phase to avoid conflicts of interest.</p>
                        <p>License agreements often include performance milestones to ensure consistent progress. Failure to meet these can lead to termination of the agreement, allowing UIR to offer the technology to other interested parties.</p>
                    </div>
                </section>

                <section className="licensing-section">
                    <h2>Finding a Licensee</h2>
                    <p>
                        Inventors can play a key role in identifying potential licensees through their industry knowledge and networks. The TTO complements these efforts through institutional contacts, market analysis, business forums, innovation expos, and partnership cultivation.
                    </p>

                    <div className="terms-block">
                        <h3>Inventor Involvement and Benefits</h3>
                        <ul className="requirements-list">
                            {inventorInvolvement.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h3>Timeline</h3>
                        <p>Depending on market readiness and the maturity of the innovation, finding the right licensee can take several months to years. Early-stage technologies often require more time for commercialization.</p>
                    </div>

                    <div className="terms-block">
                        <h3>Choosing a Licensee</h3>
                        <ul className="requirements-list">
                            {licenseeSelectionCriteria.map((criterion, index) => (
                                <li key={index}>{criterion}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </LandingLayout>
    )
}

export default LicensingProcess;
