import React from 'react';
import '../CategoryPage.css';
import { newsData } from '../../../dummyData';

const IndiaPage = () => {
  const indiaNews = newsData.filter(item => item.category === 'India');
  
  return (
    <div className="category-page">
      <h1>India News</h1>
      <div className="news-container">
        {indiaNews.map(news => (
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

export default IndiaPage;
