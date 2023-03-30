import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="blogs ">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>

      <div className="side-menu">
        
      </div>
    </div>
  );
};

export default Main;
