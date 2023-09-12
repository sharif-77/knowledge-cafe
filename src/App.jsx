
import { useEffect, useState } from 'react';
import Blogs from './components/Blogs';
import Bookmarks from './components/Bookmarks';
import Header from './components/Header';
import { getDataFromLs, removeDataFromLs, setDataToLs } from './storage/localstorage';

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [blogOfTime,setBlogOfTime]=useState([])


  useEffect(()=>{
    let arrayOfBookmark=getDataFromLs()
    setBookmarks([...bookmarks,...arrayOfBookmark]);
    // console.log(arrayOfBookmark);


  },[])

  const handleBookmarks=(blog)=>{
    let exist=bookmarks.find(i=>i.id===blog.id)
    if (!exist) {
      setDataToLs([...bookmarks,blog])
      
      setBookmarks([...bookmarks,blog]) 
    }
  }

  const handleTime=(blog,blogId)=>{
    let exist=blogOfTime.find(i=>i.id===blog.id)
    if (!exist) {
      setBlogOfTime([...blogOfTime,blog])
    }
    let newBlog=bookmarks.filter(i=>i.id !== blogId)
    removeDataFromLs(blog)
    setBookmarks(newBlog)
  }

// console.log(blogOfTime);
  return (
    <div className="w-4/5 mx-auto p-5 ">
    <Header/>


      <div className='flex gap-2  justify-between'>
      <Blogs  handleBookmarks={handleBookmarks} handleTime={handleTime} />
     <Bookmarks bookmarks={bookmarks} blogOfTime={blogOfTime} />
      </div>

    </div>
  )
}

export default App
