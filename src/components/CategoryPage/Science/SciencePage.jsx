import React from 'react';
import './SciencePage.css';
import { newsData } from '../../../dummyData';

const SciencePage = () => {
  const scienceNews = newsData.filter(item => item.category === 'Science');
  
  return (
    <div className="category-page">
      <h1>Science News</h1>
      <div className="news-container">
        {scienceNews.map(news => (
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

export default SciencePage;
