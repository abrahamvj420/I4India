import React from 'react';
import './InternationalPage.css';
import { newsData } from '../../../dummyData';

const InternationalPage = () => {
  const internationalNews = newsData.filter(item => item.category === 'International');
  
  return (
    <div className="category-page">
      <h1>International News</h1>
      <div className="news-container">
        {internationalNews.map(news => (
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

export default InternationalPage;
