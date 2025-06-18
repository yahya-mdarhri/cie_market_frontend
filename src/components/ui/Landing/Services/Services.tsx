import "./Services.css";
import { useTranslation } from 'react-i18next';

function Services({ services }: { services: any }) {
    const { t } = useTranslation('services');
    
    return (
        <div className="services-container">
            <div className="services-header">
                <h1>{t('services.title')}</h1>
                <p>{t('services.subtitle')}</p>
            </div>
            <div className="services-cards">
                {
                    services.map((service: any, index: any) => (
                        <div className="service-card" key={index}>
                            <div className="service-card-icon">
                                {service.icon}
                            </div>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services;