// TopBar.js

import React from 'react';
import './TopBar.css'; // Import the corresponding CSS file for styling

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <span className="logo">CollisionMateX</span>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="right-section">
        <i className="fas fa-bell"></i>
        <div className="shop-info">
          <span>Collision & Bell Shop | Shop ID XXXXX</span>
          <span>Profile Name</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
