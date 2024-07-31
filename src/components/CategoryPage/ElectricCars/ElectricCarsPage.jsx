import React from 'react';
import '../CategoryPage.css';
import { newsData } from '../../../dummyData';

const ElectricCarsPage = () => {
  const electricCarsNews = newsData.filter(item => item.category === 'Electric Cars');
  
  return (
    <div className="category-page">
      <h1>Electric Cars News</h1>
      <div className="news-container">
        {electricCarsNews.map(news => (
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

export default ElectricCarsPage;
