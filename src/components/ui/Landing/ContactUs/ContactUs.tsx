import React, { useState } from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserTie, FaBuilding } from 'react-icons/fa';

interface ContactUsProps {
  onSubmit?: (formData: ContactFormData) => void;
}

export interface ContactFormData {
  contactType: 'inventor' | 'company';
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  position?: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ onSubmit }) => {
  const [contactType, setContactType] = useState('inventor');

  const handleContactTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactType(e.target.value);
    const companyFields = document.getElementById('companyFields');
    if (companyFields) {
      companyFields.style.display = e.target.value === 'company' ? 'flex' : 'none';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: ContactFormData = {
      contactType: formData.get('contactType') as 'inventor' | 'company',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      companyName: formData.get('companyName') as string,
      position: formData.get('position') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-section-header">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you. Whether you're an inventor or a company, we're here to help.</p>
      </div>
    <div className="contact-us-wrapper">
      <div className="contact-info-side">
        <div className="contact-info-content">
          <div className="contact-info-header">
            <h3>Contact Information</h3>
            <p>Get in touch with us for any inquiries about our services, partnerships, or innovation opportunities.</p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaPhone className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+212 5XX-XXXXXX</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>contact@uir.ac.ma</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>Address</h4>
                <p>UIR, Technopolis, Sala Al Jadida, Morocco</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="HomeContactUs" onSubmit={handleSubmit}>
        <div className="HomeContactUsInputs">
          <div className="contact-type-toggle">
            <button 
              type="button"
              className={`toggle-option ${contactType === 'inventor' ? 'active' : ''}`}
              onClick={() => handleContactTypeChange({ target: { value: 'inventor' } } as React.ChangeEvent<HTMLInputElement>)}
            >
              <FaUserTie className="toggle-icon" />
              <span className="toggle-text">Inventor</span>
            </button>
            <button 
              type="button"
              className={`toggle-option ${contactType === 'company' ? 'active' : ''}`}
              onClick={() => handleContactTypeChange({ target: { value: 'company' } } as React.ChangeEvent<HTMLInputElement>)}
            >
              <FaBuilding className="toggle-icon" />
              <span className="toggle-text">Company</span>
            </button>
            <input 
              type="hidden" 
              name="contactType" 
              value={contactType}
            />
          </div>
          <input type="text" name="name" id="name" placeholder="Full Name"/>
          <div className="email_and_phone">
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
          </div>
          <div className="company_fields" id="companyFields" style={{ display: 'none' }}>
            <input type="text" name="companyName" id="companyName" placeholder="Company Name"/>
            <input type="text" name="position" id="position" placeholder="Your Position"/>
          </div>
          <input type="text" name="subject" id="subject" placeholder="Subject"/>
          <textarea name="message" id="message" placeholder="Message"/>
        </div>
        <div className="HomeContactUsSubmit">
          <button type="submit">Send Message</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactUs; 