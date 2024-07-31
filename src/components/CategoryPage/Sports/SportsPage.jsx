import React from 'react';
import '../CategoryPage.css';
import { newsData } from '../../../dummyData';

const SportsPage = () => {
  const sportsNews = newsData.filter(item => item.category === 'Sports');
  
  return (
    <div className="category-page">
      <h1>Sports News</h1>
      <div className="news-container">
        {sportsNews.map(news => (
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

export default SportsPage;
