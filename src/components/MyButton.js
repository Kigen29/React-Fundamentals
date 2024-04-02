import './Style.css'
import React from "react";

function MyButton() {
    function handleClick() {
      alert('More Blogs Incoming');
    }
  
    return (
      <button onClick={handleClick}>
        More Blogs
      </button>
    );
  }

export default MyButton;