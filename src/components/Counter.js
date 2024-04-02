import { useState } from 'react';
import React from "react";


export default function Counter() {
  return (
    <div className='item'> 
      <h1>Counters that update separately</h1>
      <MyButton />
      <br />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
