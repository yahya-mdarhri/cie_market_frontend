import React, { useState } from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserTie, FaBuilding } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ContactUsProps {
  onSubmit?: (formData: ContactFormData) => void;
}

export interface ContactFormData {
  contact_type: 'inventor' | 'company';
  name: string;
  email: string;
  phone: string;
  company_name?: string;
  position?: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ onSubmit }) => {
  const { t } = useTranslation('contactUs');
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

		const form = e.target as HTMLFormElement;
    const formData = new FormData(e.target as HTMLFormElement);
    const data: ContactFormData = {
      contact_type: formData.get('contact_type') as 'inventor' | 'company',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company_name: formData.get('company_name') as string,
      position: formData.get('position') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };
    if (onSubmit) {
      onSubmit(data);
    }
		form.reset();
  };

  return (
    <div className="contact-section">
      <div className="contact-section-header">
        <h2>{t('title')}</h2>
        <p>{t('subtitle')}</p>
      </div>
    <div className="contact-us-wrapper">
      <div className="contact-info-side">
        <div className="contact-info-content">
          <div className="contact-info-header">
            <h3>{t('contactInfo.title')}</h3>
            <p>{t('contactInfo.description')}</p>
          </div>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaPhone className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>{t('contactInfo.phone')}</h4>
                <p>+212 5XX-XXXXXX</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>{t('contactInfo.email')}</h4>
                <p>contact@uir.ac.ma</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <div className="contact-text">
                <h4>{t('contactInfo.address')}</h4>
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
              <span className="toggle-text">{t('form.inventor')}</span>
            </button>
            <button 
              type="button"
              className={`toggle-option ${contactType === 'company' ? 'active' : ''}`}
              onClick={() => handleContactTypeChange({ target: { value: 'company' } } as React.ChangeEvent<HTMLInputElement>)}
            >
              <FaBuilding className="toggle-icon" />
              <span className="toggle-text">{t('form.company')}</span>
            </button>
            <input 
              type="hidden" 
              name="contact_type" 
              value={contactType}
            />
          </div>
          <input type="text" name="name" id="name" placeholder={t('form.fullName')}/>
          <div className="email_and_phone">
            <input type="email" name="email" id="email" placeholder={t('form.email')} />
            <input type="tel" name="phone" id="phone" placeholder={t('form.phone')} />
          </div>
          <div className="company_fields" id="companyFields" style={{ display: 'none' }}>
            <input type="text" name="company_name" id="company_name" placeholder={t('form.companyName')}/>
            <input type="text" name="position" id="position" placeholder={t('form.position')}/>
          </div>
          <input type="text" name="subject" id="subject" placeholder={t('form.subject')}/>
          <textarea name="message" id="message" placeholder={t('form.message')}/>
        </div>
        <div className="HomeContactUsSubmit">
          <button type="submit">{t('form.sendMessage')}</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactUs; 