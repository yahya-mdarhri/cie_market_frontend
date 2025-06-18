import React from 'react';
import './Contact.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import { useTranslation } from 'react-i18next';

export interface ContactPerson {
    name: string;
    role: string;
    image: string;
    social: {
        email?: string;
        phone?: string;
    };
}

interface ContactProps {
    contacts: ContactPerson[];
}

const Contact: React.FC<ContactProps> = ({ contacts }) => {
    const { t } = useTranslation('contact');

    return (
        <section className="contactSection">
            <div className="contactHeader">
                <h2>{t('title')}</h2>
                <p>{t('description')}</p>
            </div>
            <div className="contactGrid">
                {contacts.map((contact, index) => (
                    <ProfileCard
                        key={index}
                        name={contact.name}
                        image={contact.image}
                        role={contact.role}
                        social={contact.social}
                    />
                ))}
            </div>
        </section>
    );
};

export default Contact; 