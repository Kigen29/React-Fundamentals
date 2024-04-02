import MyButton from './MyButton';
import './Style.css'
import React from "react";

const blogs = [

    { title: 'Love For Food', id: 1 },
    { title: 'Fruits You Should Buy', id: 2 },
    { title: 'My Journey To Being a Chef', id: 3 },
];

function OtherBlogs() {

    const blogList = blogs.map((blog) => 
    <li
    key={blog.id}
    >
    {blog.title}
    </li>
    );


 return(
    <div className="item">

      <ul>{blogList}</ul>
      <MyButton />

    </div>


 );

}


export default OtherBlogs;