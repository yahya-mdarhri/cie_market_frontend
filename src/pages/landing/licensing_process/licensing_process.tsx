import LandingLayout from '@components/layouts/LandingLayout/LandingLayout';
import './licensing_process.css'

const heroProps = {
    heroTitle: <>Licensing Process</>,
    heroDescription: "A comprehensive guide to our licensing process, ensuring transparency and efficiency.",
}

function LicensingProcess() {
    return (
        <LandingLayout heroProps={heroProps}>
            <div className="licensing-container">
                <section className="licensing-section">
                    <h2>Overview</h2>
                    <p>
                        On behalf of MIT, the Technology Licensing Office (TLO) negotiates and grants licenses for MIT's patented inventions, copyrighted works, and tangible materials to large, medium and startup companies that demonstrate the technical and business capabilities to develop our early-stage technology into commercially successful products and services.
                    </p>
                    <p>
                        With hundreds of new intellectual property asset disclosures received by the TLO each year, MIT's intellectual property portfolio is constantly evolving. If you are interested in obtaining a license to MIT intellectual property, it is important to understand the different steps and stages of this process.
                    </p>
                </section>

                <section className="licensing-section">
                    <h2>Licensing Agreements</h2>
                    <p>
                        A license agreement is a contract that transfers the rights of MIT technology to a licensee for financial and other benefits without relinquishing MIT's ownership. Used with both startup businesses and established companies, MIT license agreements typically stipulate that the licensee must diligently seek to bring the MIT intellectual property into commercial use for the public good and to provide a fair and reasonable financial return to MIT.
                    </p>
                    <p>
                        MIT's two main goals in any license agreement are to:
                    </p>
                    <div className="goals-list">
                        <ul>
                            <li className="goal-item">
                                <div className="goal-number">1</div>
                                <div className="goal-text">
                                    Ensure that the technology will be developed by the licensee for public benefit, including complying with U.S. federal and MIT policies.
                                </div>
                            </li>
                            <li className="goal-item">
                                <div className="goal-number">2</div>
                                <div className="goal-text">
                                    Provide MIT and the inventors of the technology with fair and reasonable financial return in the event that the product development is successful.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <p>
                        When customizing a license agreement, it is key that MIT starts with an understanding of the licensee's:
                    </p>
                    <ul className="requirements-list">
                        <li>Business model relating to the technology and anticipated benefits of the company's solution compared to existing solutions.</li>
                        <li>Target customers</li>
                        <li>Access to market and necessary resources including talent and capital</li>
                        <li>Anticipated revenues</li>
                    </ul>
                </section>

                <section className="licensing-section">
                    <h2>Licensing Terms</h2>
                    <div className="terms-block">
                        <h3>Common Financial Elements</h3>
                        <ul className="requirements-list">
                            <li>A license issue fee</li>
                            <li>An annual license maintenance fee</li>
                            <li>Fees when certain development or commercialization milestones are achieved</li>
                            <li>Royalties on product sales or service income</li>
                            <li>Reimbursement of MIT's patent costs</li>
                            <li>Sharing of sublicense/partnership income</li>
                            <li>A minority share of equity—in the case of a startup</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h3>Non-Financial Terms</h3>
                        <ul className="requirements-list">
                            <li>Degree of exclusivity—nonexclusive, exclusive, or restricted by field of use or geography</li>
                            <li>Retained rights for the federal government and, if applicable, other sponsors of the research</li>
                            <li>Reservation of rights for MIT and other non-profit organizations for ongoing research and educational activities</li>
                            <li>Performance (or "diligence") requirements to assure that the company diligently commercializes the technology</li>
                        </ul>
                    </div>

                    <div className="info-block">
                        <p>All licensing negotiations are handled directly between the TLO and a non-MIT representative of the company in order to avoid potential conflicts of interest.</p>
                        <p>Licenses typically include performance milestones which reflect our commitment to diligently develop products and services embodying MIT technology. If these milestones go unmet, it may result in termination of the license agreement, allowing MIT to subsequently license the technology to another party.</p>
                    </div>
                </section>

                <section className="licensing-section">
                    <h2>Finding a Licensee</h2>
                    <p>
                        Inventors, leveraging their knowledge of the technology space and contacts, can play a crucial role in identifying potential licensees. The TLO will work to actively expand these relationships through contacts obtained from established company relationships with MIT, personal networking, website inquiries, market research, industry events, and the cultivation of existing licensing relationships.
                    </p>

                    <div className="terms-block">
                        <h3>Inventor Involvement and Benefits</h3>
                        <ul className="requirements-list">
                            <li>Most licensees need some active assistance from the inventor to facilitate their commercialization efforts. This can range from infrequent, informal contacts to a more formal consulting relationship.</li>
                            <li>Working with a new business startup can require substantially more time, depending on your role in or with the company and your continuing role within MIT. Your participation with a startup is governed by MIT conflict of interest policies.</li>
                            <li>Aside from the satisfaction of knowing their MIT inventions are being deployed for the benefit of the public, inventors also gain new and enhanced relationships with businesses that can augment their teaching, research, and consulting. Additionally, they receive a share of any financial return from a license.</li>
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h3>Timeline</h3>
                        <p>It can take months and sometimes years to locate a potential licensee, depending on the fit of the technology in the market landscape. Often, the earlier the stage of technology, the greater the development and commercialization efforts of a potential licensee. It's not uncommon for the market to need time to catch up to MIT innovations.</p>
                    </div>

                    <div className="terms-block">
                        <h3>Choosing a Licensee</h3>
                        <ul className="requirements-list">
                            <li>A licensee is chosen based on its ability to commercialize the technology for the benefit of the public.</li>
                            <li>Sometimes an established business that has experience with similar technologies and markets is the best choice.</li>
                            <li>In other cases, the focus and intensity of a startup company is a better option.</li>
                            <li>Sometimes an invention may be licensed to multiple licensees, either non-exclusively to several companies or exclusively to several companies, but each having exclusivity only in a unique field of use or geography.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </LandingLayout>
    )
}

export default LicensingProcess;