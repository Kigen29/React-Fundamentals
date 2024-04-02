import './Style.css'
import React from "react";
import ProfileName from './ProfileName';
import OtherBlogs from './OtherBlogs';

function Foodblog() {
  return (
    <div className="item">
    <h1 className="item">My Food Blog</h1>
      <ProfileName />
      <p>My favorite food is pizza.</p>
      <OtherBlogs />
      
    </div>
  );
}

export default Foodblog;