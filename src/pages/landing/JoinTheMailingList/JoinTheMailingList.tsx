import React, { useRef } from 'react';
import LandingLayout from "@components/layouts/LandingLayout/LandingLayout";
import './JoinTheMailingList.css';

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

    const benefits = [
        {
            title: "Latest Updates",
            description: "Stay informed about the newest technology trends and innovations"
        },
        {
            title: "Industry Insights",
            description: "Get exclusive access to market trends and analysis"
        },
        {
            title: "Opportunities",
            description: "Be the first to know about upcoming events and opportunities"
        },
        {
            title: "Success Stories",
            description: "Learn from real-world case studies and success stories"
        }
    ];

    return (
        <LandingLayout heroProps={{
            heroTitle: <>Stay Connected with Inn2Market</>,
            heroDescription: "Join our mailing list to receive the latest updates on innovations, technology trends, and opportunities. Be the first to know about new developments in the world of intellectual property and technology transfer.",
            firstAction: "Subscribe Now",
            onFirstActionClick: scrollToForm
        }}>
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
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="newsletter"
                                            checked={formData.newsletter}
                                            onChange={handleChange}
                                        />
                                        <span className="checkbox-text">
                                            <strong>Newsletter</strong>
                                            <span className="checkbox-description">News, Updates, and the latest info about IP.</span>
                                        </span>
                                    </label>
                                    
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="techUpdates"
                                            checked={formData.techUpdates}
                                            onChange={handleChange}
                                        />
                                        <span className="checkbox-text">
                                            <strong>Technology Updates</strong>
                                            <span className="checkbox-description">Latest technologies in your inbox as soon as they are posted</span>
                                        </span>
                                    </label>
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
                                        <option value="">Select your role</option>
                                        <option value="researcher">Researcher</option>
                                        <option value="student">Student</option>
                                        <option value="faculty">Faculty</option>
                                        <option value="industry">Industry Professional</option>
                                        <option value="other">Other</option>
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