import "./Services.css";

function Services({ services }: { services: any }) {
    return (
        <div className="services-container">
            <div className="services-header">
                <h1>Our Services</h1>
                <p>We help protect innovations, build industry partnerships, and bring research to market</p>
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