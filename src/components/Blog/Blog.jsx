import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Blog = (props) => {
  const {
    authorName,
    authorThumb,
    blogTitle,
    coverImage,
    publishDate,
    readTime,
  } = props.blog;
  return (
    <div className="blog">
      <img className="rounded-lg" src={coverImage} alt="" />
      <div className="blog-body space-y-9 py-8 mb-8 border-b border-gray-300">
        <div className="author">
          <img className="w-14 rounded-full" src={authorThumb} alt="" />
          <div className="author-details flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-2xl">{authorName}</h3>
              <p className="text-gray-500 font-semibold">{publishDate}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold inline mr-1">
                {readTime} min read
              </p>
              <button>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold">{blogTitle}</h1>
        <button className="text-xl font-semibold text-violet-600">
          <u>Mark as read</u>
        </button>
      </div>
    </div>
  );
};

export default Blog;