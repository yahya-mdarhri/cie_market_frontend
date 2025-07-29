import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LandingLayout from "@components/layouts/LandingLayout/LandingLayout";
import './JoinTheMailingList.css';
import { useHeroProps, useBenefits, useRoleOptions, useSubscriptionPreferences } from './data';
import axios from 'axios';

function JoinTheMailingList() {
    const { t } = useTranslation('joinMailingList');
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    const [formData, setFormData] = React.useState({
        first_name: '',
        last_name: '',
        email: '',
        organization: '',
        jobTitle: '',
        role: '',
        newsletter: false,
        techUpdates: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

		const handleSubmit = async (e: React.FormEvent) => {
			e.preventDefault();
			await axios.post('https://backendciemarket-baa6b6e1090a.herokuapp.com/api/public/mailing-list-join/', formData);
			setFormData({
				first_name: '',
				last_name: '',
				email: '',
				organization: '',
				jobTitle: '',
				role: '',
				newsletter: false,
				techUpdates: false,
			});
		};

    const heroProps = useHeroProps(t);
    const benefits = useBenefits(t);
    const roleOptions = useRoleOptions(t);
    const subscriptionPreferences = useSubscriptionPreferences(t);

    heroProps.onFirstActionClick = scrollToForm;

    return (
        <LandingLayout heroProps={heroProps}>
            <div className="join-mailing-container">
                <div className="mailing-content">
                    <div className="mailing-intro">
                        <h2>{t('intro.title')}</h2>
                        <p className="intro-description">{t('intro.description')}</p>
                        
                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mailing-form-section" ref={formRef}>
                        <div className="form-header">
                            <h2>{t('form.title')}</h2>
                            <p className="form-subtitle">{t('form.subtitle')}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="mailing-form">
                            <div className="form-section preferences-section">
                                <h3>{t('form.preferences.title')}</h3>
                                <div className="checkbox-group">
                                    {subscriptionPreferences.map((pref, index) => (
                                        <label key={index} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                name={pref.name}
                                                checked={formData[pref.name as keyof typeof formData] as boolean}
                                                onChange={handleChange}
                                            />
                                            <span className="checkbox-text">
                                                <strong>{pref.title}</strong>
                                                <span className="checkbox-description">{pref.description}</span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-section personal-info-section">
                                <h3>{t('form.personalInfo.title')}</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="first_name">{t('form.personalInfo.firstName')} *</label>
                                        <input
                                            type="text"
                                            id="first_name"
                                            name="first_name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            required
                                            placeholder={t('form.personalInfo.firstNamePlaceholder')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="last_name">{t('form.personalInfo.lastName')} *</label>
                                        <input
                                            type="text"
                                            id="last_name"
                                            name="last_name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            required
                                            placeholder={t('form.personalInfo.lastNamePlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">{t('form.personalInfo.email')} *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder={t('form.personalInfo.emailPlaceholder')}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="organization">{t('form.personalInfo.organization')}</label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        placeholder={t('form.personalInfo.organizationPlaceholder')}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="jobTitle">{t('form.personalInfo.jobTitle')}</label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        placeholder={t('form.personalInfo.jobTitlePlaceholder')}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="role">{t('form.personalInfo.role')}</label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        {roleOptions.map((option, index) => (
                                            <option key={index} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="submit-button" onClick={handleSubmit}>
                                {t('form.submit')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}

export default JoinTheMailingList;