import LandingLayout from '@components/layouts/LandingLayout/LandingLayout';
import './submit_patent.css';
import { useTranslation } from 'react-i18next';
import { 
    getHeroProps, 
    getPlatformFeatures, 
    getProcessSteps, 
    getBenefits, 
    getCallToAction 
} from './data';

function SubmitPatent() {
    const { t } = useTranslation('SubmitPatent');
    const heroProps = getHeroProps(t);
    const platformFeatures = getPlatformFeatures(t);
    const processSteps = getProcessSteps(t);
    const benefits = getBenefits(t);
    const cta = getCallToAction(t);

    return (
        <LandingLayout heroProps={heroProps}>
            <div className="submit-patent-container">
                {/* Platform Features Section */}
                <section className="submit-patent-section">
                    <h2>{platformFeatures.title}</h2>
                    <p className="section-subtitle">{platformFeatures.subtitle}</p>
                    <div className="features-grid">
                        {(platformFeatures.features as Array<{title: string, description: string}>).map((feature, index: number) => (
                            <div key={index} className="feature-card">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Steps Section */}
                <section className="submit-patent-section">
                    <h2>{processSteps.title}</h2>
                    <p className="section-subtitle">{processSteps.subtitle}</p>
                    <div className="process-steps">
                        {(processSteps.steps as Array<{number: number, title: string, description: string}>).map((step, index: number) => (
                            <div key={index} className="step-item">
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="submit-patent-section">
                    <h2>{benefits.title}</h2>
                    <p className="section-subtitle">{benefits.subtitle}</p>
                    <div className="benefits-grid">
                        {(benefits.benefits as Array<{title: string, description: string}>).map((benefit, index: number) => (
                            <div key={index} className="benefit-card">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="submit-patent-section cta-section">
                    <h2>{cta.title}</h2>
                    <p className="section-subtitle">{cta.description}</p>
                    <div className="cta-buttons">
                        <button 
                            className="btn btn-primary"
                            onClick={() => window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=hirXO-qopkSomfPMy-3wJ7DyQY263ttEtDBgnhjOXoNUNlI0UFVTV1BWTDNTQTlFN0dWMVEyNUlBTS4u", "_blank", "noopener,noreferrer")}
                        >
                            {cta.primaryAction}
                        </button>
                    </div>
                </section>
            </div>
        </LandingLayout>
    )
}

export default SubmitPatent;
