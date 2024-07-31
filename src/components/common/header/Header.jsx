import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <ul className="nav-left">
            <li className="logo">
              <Link to="/">
                <img src="../images/logo.png" alt="I4India Logo" />  
              </Link>
            </li>
          </ul>
          <ul className={navbar ? "navbar nav-right" : "flex nav-right"} onClick={() => setNavbar(false)}>
            <li>
              <Link to="/india">India</Link>
            </li>
            <li>
              <Link to="/international">International</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/social-media">Social Media</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/electric-cars">Electric Cars</Link>
            </li>
          </ul>
          <button className="barIcon" onClick={() => setNavbar(!navbar)}>
            {navbar ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
