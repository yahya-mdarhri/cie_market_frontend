import React from 'react';
import './Contact.css';
import ProfileCard from '../ProfileCard/ProfileCard';

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
    title?: string;
    description?: string;
}

const Contact: React.FC<ContactProps> = ({ 
    contacts, 
    title = "Get in Touch", 
    description = "Have questions? Our team is here to help you with any inquiries you might have."
}) => {
    return (
        <section className="contactSection">
            <div className="contactHeader">
                <h2>{title}</h2>
                <p>{description}</p>
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