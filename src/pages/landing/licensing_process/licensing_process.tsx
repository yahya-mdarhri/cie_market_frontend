import LandingLayout from '@components/layouts/LandingLayout/LandingLayout';
import './licensing_process.css'

const heroProps = {
    heroTitle: <>Licensing Process</>,
    heroDescription: "A comprehensive guide to our licensing process at UIR, ensuring transparency and efficiency.",
}

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
                        With numerous new intellectual property disclosures received annually, UIR’s innovation portfolio is constantly evolving. If you are interested in obtaining a license to UIR-developed intellectual property, it’s important to understand the stages involved in the licensing process.
                    </p>
                </section>

                <section className="licensing-section">
                    <h2>Licensing Agreements</h2>
                    <p>
                        A license agreement is a contract that transfers the rights to use UIR technology to a licensee for financial and other benefits, while retaining ownership by UIR. These agreements are made with both startups and established businesses and typically require the licensee to diligently develop and bring the innovation to market, providing fair returns to UIR and serving the public interest.
                    </p>
                    <p>
                        UIR’s two primary goals in any licensing agreement are to:
                    </p>
                    <div className="goals-list">
                        <ul>
                            <li className="goal-item">
                                <div className="goal-number">1</div>
                                <div className="goal-text">
                                    Ensure the technology is developed by the licensee for the benefit of society, aligning with UIR and Moroccan national innovation policies.
                                </div>
                            </li>
                            <li className="goal-item">
                                <div className="goal-number">2</div>
                                <div className="goal-text">
                                    Provide UIR and the inventors with fair and reasonable financial returns if the product development is successful.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <p>
                        When crafting a license agreement, UIR begins by understanding the licensee’s:
                    </p>
                    <ul className="requirements-list">
                        <li>Business model related to the technology and the potential advantages of their proposed solution.</li>
                        <li>Target market and customer base.</li>
                        <li>Access to resources such as capital, infrastructure, and skilled personnel.</li>
                        <li>Expected revenue and growth projections.</li>
                    </ul>
                </section>

                <section className="licensing-section">
                    <h2>Licensing Terms</h2>
                    <div className="terms-block">
                        <h3>Common Financial Elements</h3>
                        <ul className="requirements-list">
                            <li>License issue fees</li>
                            <li>Annual maintenance fees</li>
                            <li>Milestone-based development or commercialization payments</li>
                            <li>Royalties on sales or service revenue</li>
                            <li>Reimbursement of patent or registration costs</li>
                            <li>Revenue sharing from sublicensing</li>
                            <li>Equity shares for startups</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h3>Non-Financial Terms</h3>
                        <ul className="requirements-list">
                            <li>Type of exclusivity: non-exclusive, exclusive, or limited by field or geography</li>
                            <li>Retention of rights for UIR and research sponsors</li>
                            <li>Rights reserved for academic and research use by UIR and partner institutions</li>
                            <li>Diligence requirements to ensure timely development and commercialization</li>
                        </ul>
                    </div>

                    <div className="info-block">
                        <p>Licensing negotiations are conducted between the TTO and the company’s designated representative, with no direct involvement of UIR inventors during the negotiation phase to avoid conflicts of interest.</p>
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
                            <li>Licensees often seek support from inventors for knowledge transfer, ranging from casual interactions to formal consulting arrangements.</li>
                            <li>Collaboration with startups may require increased engagement, governed by UIR's conflict of interest and ethics policies.</li>
                            <li>Inventors benefit from real-world impact, expanded industry relationships, and a share in financial returns from licensing revenues.</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h3>Timeline</h3>
                        <p>Depending on market readiness and the maturity of the innovation, finding the right licensee can take several months to years. Early-stage technologies often require more time for commercialization.</p>
                    </div>

                    <div className="terms-block">
                        <h3>Choosing a Licensee</h3>
                        <ul className="requirements-list">
                            <li>Licensees are selected based on their potential to effectively bring the technology to market and serve public needs.</li>
                            <li>In some cases, experienced companies with relevant market expertise are preferred.</li>
                            <li>For other technologies, startup companies offer the necessary focus and drive.</li>
                            <li>Technologies may be licensed to multiple entities, non-exclusively or exclusively by field or region.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </LandingLayout>
    )
}

export default LicensingProcess;
