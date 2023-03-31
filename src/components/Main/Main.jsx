import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SideMenu from "../SideMenu/SideMenu";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [inTime, setInTime] = useState(0);
  const [blogTitle, setBlogTitle] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleReadTime = (time) => {
    setInTime(time + inTime);
  };
  useEffect(() => {
    setReadTime(inTime);
  }, [inTime]);

  const handleBookmark =(title)=>{
    const newArr = [...blogTitle , title]
    setBlogTitle(newArr)
  }

  return (
    <div className="grid md:grid-cols-custom gap-6">
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            handleReadTime={handleReadTime}
            handleBookmark = {handleBookmark}
            key={blog.id}
          ></Blog>
        ))}
      </div>

      <div className="side-menu">
        <SideMenu readTime={readTime} title={blogTitle}></SideMenu>
      </div>
    </div>
  );
};

export default Main;
