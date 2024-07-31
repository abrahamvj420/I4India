import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Popular.css";
import { newsData } from "../../../../dummyData";

import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Helper function to format and sort data by date
const getSortedData = (category) => {
  return newsData
    .filter((item) => item.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date
    .slice(0, 8); // Get only the first 8 items
};

const categories = [
  "India",
  "International",
  "Sports",
  "Social Media",
  "Science",
  "Technology",
  "Business",
  "Electric Cars",
];

const Popular = () => {
  const scrollRefs = useRef({});
  const [showLeftArrow, setShowLeftArrow] = useState({});
  const [showRightArrow, setShowRightArrow] = useState({});

  const scroll = (category, direction) => {
    const scrollAmount = 300;
    if (direction === "left") {
      scrollRefs.current[category].scrollLeft -= scrollAmount;
    } else {
      scrollRefs.current[category].scrollLeft += scrollAmount;
    }
  };

  const handleScroll = (category) => {
    const container = scrollRefs.current[category];
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    // Show or hide left arrow
    setShowLeftArrow((prev) => ({ ...prev, [category]: scrollLeft > 0 }));

    // Show or hide right arrow
    setShowRightArrow((prev) => ({
      ...prev,
      [category]: scrollLeft + clientWidth < scrollWidth,
    }));
  };

  useEffect(() => {
    categories.forEach((category) => {
      const container = scrollRefs.current[category];
      if (container) {
        handleScroll(category); // Set initial visibility of arrows
        container.addEventListener("scroll", () =>
          handleScroll(category)
        );
      }
    });
    return () => {
      categories.forEach((category) => {
        const container = scrollRefs.current[category];
        if (container) {
          container.removeEventListener("scroll", () =>
            handleScroll(category)
          );
        }
      });
    };
  }, []);

  return (
    <div className="popular">
      <div className="popular-content">
        {categories.map((category) => (
          <div key={category} className="popular-category-section">
            <h2 className="popular-category-heading">
              <Link to={`/${category.replace(/ /g, '-').toLowerCase()}`}>
                {category}
              </Link>
            </h2>
            <div className="popular-scroll-container">
              <IconButton
                className={`popular-scroll-arrow left ${
                  showLeftArrow[category] ? "" : "hidden"
                }`}
                onClick={() => scroll(category, "left")}
              >
                <ChevronLeftIcon />
              </IconButton>
              <div
                className="popular-cards-container"
                ref={(el) => (scrollRefs.current[category] = el)}
              >
                {getSortedData(category).map((val) => (
                  <div key={val.id} className="popular-card">
                    <div className="popular-image">
                      <img src={val.cover} alt={val.title} />
                    </div>
                    <div className="popular-text">
                      <h3 className="popular-title">{val.title.slice(0, 40)}{val.title.length > 40 ? '...' : ''}</h3>
                      <p className="popular-desc">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <IconButton
                className={`popular-scroll-arrow right ${
                  showRightArrow[category] ? "" : "hidden"
                }`}
                onClick={() => scroll(category, "right")}
              >
                <ChevronRightIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
