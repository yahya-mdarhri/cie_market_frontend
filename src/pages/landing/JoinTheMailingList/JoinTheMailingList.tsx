import React, { useRef } from 'react';
import LandingLayout from "@components/layouts/LandingLayout/LandingLayout";
import './JoinTheMailingList.css';
import { heroProps, benefits, roleOptions, subscriptionPreferences } from './data';

function JoinTheMailingList() {
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    heroProps.onFirstActionClick = scrollToForm

    return (
        <LandingLayout heroProps={heroProps}>
            <div className="join-mailing-container">
                <div className="mailing-content">
                    <div className="mailing-intro">
                        <h2>Why Join Our Mailing List?</h2>
                        <p className="intro-description">Get exclusive access to our latest updates and insights</p>
                        
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
                            <h2>Join Our Community</h2>
                            <p className="form-subtitle">Be part of our growing network of innovators and technology enthusiasts</p>
                        </div>

                        <form onSubmit={handleSubmit} className="mailing-form">
                            <div className="form-section preferences-section">
                                <h3>Your Preferences</h3>
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
                                <h3>Personal Information</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your first name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="organization">Organization</label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        placeholder="Enter your organization name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="jobTitle">Job Title</label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleChange}
                                        placeholder="Enter your job title"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="role">Role</label>
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

                            <button type="submit" className="submit-button">
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}

export default JoinTheMailingList;