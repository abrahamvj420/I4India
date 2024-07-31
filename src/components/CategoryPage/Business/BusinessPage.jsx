import React from 'react';
import '../CategoryPage.css';
import { newsData } from '../../../dummyData';

const BusinessPage = () => {
  const businessNews = newsData.filter(item => item.category === 'Business');
  
  return (
    <div className="category-page">
      <h1>Business News</h1>
      <div className="news-container">
        {businessNews.map(news => (
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

export default BusinessPage;
