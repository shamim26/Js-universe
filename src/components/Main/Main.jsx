import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Time from "../Time/Time";


const Main = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="grid md:grid-cols-custom gap-6">
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id}></Blog>
        ))}
      </div>

      <div className="side-menu">
        <Time></Time>
      </div>
    </div>
  );
};

export default Main;
