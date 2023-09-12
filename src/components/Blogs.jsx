import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookmarks,handleTime}) => {
    const [blogs,setBlogs]=useState([])
  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
    return (
        <div className="w-3/4">
            <div>
            {
            blogs.map((blog,i)=><Blog handleBookmarks={handleBookmarks} handleTime={handleTime} key={i} blog={blog}  />)
            }
            </div>
            
        </div>
    );
};

export default Blogs;