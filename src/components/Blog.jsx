import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handleBookmarks,handleTime }) => {
    // console.log(blog);
  let { cover,author,author_img,posted_date,reading_time,title,hashtags } = blog;
  return (
    <div className='w-full'>
      <div className="amar-card my-5">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img className='w-full' src={cover} alt="Cover" />
          </figure>
          <div className=" mt-5 ml-3">
            <div className="avatarAndTimeAndButton flex justify-between items-center ">
              <div className="authorDetails flex gap-5 items-center">
                <div>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={author_img} />
                    </div>
                  </div>
                </div>
                {/* avatar end */}
                <div> 
                    <h2>{author}</h2>
                    <span>{posted_date}</span>

                </div>
              </div>
              {/* author details end */}
              <div className='mr-2 flex  gap-5'>
                <span>{reading_time} min read</span> 
                <button onClick={()=>handleBookmarks(blog)} className='text-2xl'><FaBookmark/></button>
              </div>
            </div>

          </div>
          <div className='p-5'>
            <h1>{title}</h1>
          </div>
          <div className='p-5 flex gap-5'>
            {
         
                hashtags.map((has,i)=><a className='underline' key={i} href="#">#{has}</a>)
            }

          </div>
          <div className='p-5' onClick={()=>handleTime(blog,blog.id)}>
            <a className='underline text-blue-900' href="#">Mark As Read</a>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Blog;
