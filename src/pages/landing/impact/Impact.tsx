import { useNavigate } from 'react-router-dom';
import LandingLayout from '@layouts/LandingLayout/LandingLayout';
import { HeroProps } from '@layouts/LandingLayout/LandingLayout';
import './Impact.css';

const getSDGIcon = (sdgNumber: number) => {
  return `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${sdgNumber.toString().padStart(2, '0')}.jpg`;
};


const newsItems = [
  {
    id: 1,
    title: 'Sustainable Development in Action',
    description: 'How our innovations are contributing to global sustainability goals and creating lasting impact.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
    sdgNumber: 17
  },
  {
    id: 2,
    title: 'Clean Energy Breakthrough',
    description: 'Revolutionary technology that promises to transform renewable energy production and distribution.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60',
    sdgNumber: 7
  },
  {
    id: 3,
    title: 'Education for All',
    description: 'Breaking barriers in education through innovative digital learning solutions.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
    sdgNumber: 4
  },
  {
    id: 1,
    title: 'Sustainable Development in Action',
    description: 'How our innovations are contributing to global sustainability goals and creating lasting impact.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
    sdgNumber: 15
  },
  {
    id: 2,
    title: 'Clean Energy Breakthrough',
    description: 'Revolutionary technology that promises to transform renewable energy production and distribution.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60',
    sdgNumber: 7
  },
  {
    id: 3,
    title: 'Education for All',
    description: 'Breaking barriers in education through innovative digital learning solutions.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60',
    sdgNumber: 3
  }
];

const metrics = [
  {
    id: 1,
    value: '50+',
    title: 'Innovations Developed',
    description: 'Cutting-edge solutions addressing global challenges'
  },
  {
    id: 2,
    value: '100+',
    title: 'Startups Supported',
    description: 'Entrepreneurs empowered to create positive change'
  },
  {
    id: 3,
    value: '1M+',
    title: 'Lives Impacted',
    description: 'People benefiting from our sustainable solutions'
  }
];

export default function Impact() {
    const navigate = useNavigate();
    
    const handleCardClick = () => {
    navigate('/join-our-mailing-list');
    };
    const heroProps: HeroProps = {
        heroTitle: 'Our Impact',
        heroDescription: 'Discover how we are making a difference through sustainable innovation and technology.',
        firstAction: 'Join Our Mailing List',
        onFirstActionClick: handleCardClick,
    };

  return (
    <LandingLayout heroProps={heroProps}>
      <div className="impact-metrics">
        <h2>Key Metrics</h2>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div key={metric.id} className="metric-card">
              <h3>{metric.value}</h3>
              <h4>{metric.title}</h4>
              <p>{metric.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sdg-news-section">
        <h2>News & Stories</h2>
        <div className="sdg-news-grid">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="sdg-news-card"
              role="button"
              tabIndex={0}
            >
              <div className="sdg-news-image">
                <img src={item.image} alt={item.title} />
                <div className="sdg-badge">
                  <img
                    src={getSDGIcon(item.sdgNumber)}
                    alt={`SDG ${item.sdgNumber}`}
                    className="sdg-icon"
                  />
                </div>
              </div>
              <div className="sdg-news-content">
                <div className="sdg-news-header">
                  <span className="sdg-news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LandingLayout>
  );
}
