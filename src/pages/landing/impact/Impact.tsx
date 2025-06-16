import { useNavigate } from 'react-router-dom';
import LandingLayout from '@layouts/LandingLayout/LandingLayout';
import { HeroProps } from '@layouts/LandingLayout/LandingLayout';
import './Impact.css';

import {metrics, newsItems, getSDGIcon, heroProps} from './data';

export default function Impact() {
    const navigate = useNavigate();
    
    heroProps.onFirstActionClick = () => {
      navigate('/join-our-mailing-list');
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
