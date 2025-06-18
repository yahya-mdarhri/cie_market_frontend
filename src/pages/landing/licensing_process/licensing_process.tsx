import LandingLayout from '@components/layouts/LandingLayout/LandingLayout';
import './licensing_process.css';
import { useTranslation } from 'react-i18next';
import { getHeroProps, getLicensingGoals, getLicenseeRequirements, getFinancialTerms, getNonFinancialTerms, getInventorInvolvement, getLicenseeSelectionCriteria } from './data';

function LicensingProcess() {
    const { t } = useTranslation('licensingProcess');
    const heroProps = getHeroProps(t);
    const licensingGoals = getLicensingGoals(t);
    const licenseeRequirements = getLicenseeRequirements(t) as string[];
    const financialTerms = getFinancialTerms(t) as string[];
    const nonFinancialTerms = getNonFinancialTerms(t) as string[];
    const inventorInvolvement = getInventorInvolvement(t) as string[];
    const licenseeSelectionCriteria = getLicenseeSelectionCriteria(t) as string[];

    return (
        <LandingLayout heroProps={heroProps}>
            <div className="licensing-container">
                <section className="licensing-section">
                    <h2>{t('overview.title')}</h2>
                    <p>{t('overview.description1')}</p>
                    <p>{t('overview.description2')}</p>
                </section>

                <section className="licensing-section">
                    <h2>{t('agreements.title')}</h2>
                    <p>{t('agreements.description1')}</p>
                    <p>{t('agreements.description2')}</p>
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
                    <p>{t('agreements.requirements.title')}</p>
                    <ul className="requirements-list">
                        {licenseeRequirements.map((requirement: string, index: number) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                </section>

                <section className="licensing-section">
                    <h2>{t('terms.title')}</h2>
                    <div className="terms-block">
                        <h3>{t('terms.financial.title')}</h3>
                        <ul className="requirements-list">
                            {financialTerms.map((term: string, index: number) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h3>{t('terms.nonFinancial.title')}</h3>
                        <ul className="requirements-list">
                            {nonFinancialTerms.map((term: string, index: number) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="info-block">
                        <p>{t('terms.info.text1')}</p>
                        <p>{t('terms.info.text2')}</p>
                    </div>
                </section>

                <section className="licensing-section">
                    <h2>{t('findingLicensee.title')}</h2>
                    <p>{t('findingLicensee.description')}</p>

                    <div className="terms-block">
                        <h3>{t('findingLicensee.inventorInvolvement.title')}</h3>
                        <ul className="requirements-list">
                            {inventorInvolvement.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="terms-block">
                        <h3>{t('findingLicensee.timeline.title')}</h3>
                        <p>{t('findingLicensee.timeline.description')}</p>
                    </div>

                    <div className="terms-block">
                        <h3>{t('findingLicensee.selectionCriteria.title')}</h3>
                        <ul className="requirements-list">
                            {licenseeSelectionCriteria.map((criterion: string, index: number) => (
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
