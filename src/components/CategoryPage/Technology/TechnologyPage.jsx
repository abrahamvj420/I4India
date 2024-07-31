import React from 'react';
import './TechnologyPage.css';
import { newsData } from '../../../dummyData';

const TechnologyPage = () => {
  const technologyNews = newsData.filter(item => item.category === 'Technology');
  
  return (
    <div className="category-page">
      <h1>Technology News</h1>
      <div className="news-container">
        {technologyNews.map(news => (
          <div key={news.id} className="news-card">
            <img src={news.cover} alt={news.title} />
            <h2>{news.title}</h2>
            <p>{news.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyPage;
