import { useState } from 'react';
import React from "react";


export default function Counter() {

    const [count,setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }


  return (
    <div className='item'> 
      <h1>Counters that update together</h1>
      <MyButton count = {count} onClick = {handleClick}/>
      <br />
      <MyButton count = {count} onClick = {handleClick}/>
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
