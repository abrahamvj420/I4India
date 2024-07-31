import React from 'react';
import '../CategoryPage.css';
import { newsData } from '../../../dummyData';

const SocialMediaPage = () => {
  const socialMediaNews = newsData.filter(item => item.category === "Social Media");
  
  return (
    <div className="category-page">
      <h1>Social Media News</h1>
      <div className="news-container">
        {socialMediaNews.map(news => (
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

export default SocialMediaPage;
