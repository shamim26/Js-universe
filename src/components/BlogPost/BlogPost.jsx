import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const BlogPost = (props) => {
  
  const {
    authorName,
    authorThumb,
    blogTitle,
    coverImage,
    publishDate,
    readTime,
  } = props.blog;

  const handleReadTime = props.handleReadTime;
  const handleBookmark = props.handleBookmark;
  return (
    <div className="blog">
      <img className="rounded-lg" src={coverImage} alt="" />
      <div className="blog-body space-y-9 py-8 mb-8 border-b border-gray-300">
        <div className="author">
          <img className="author-image w-14 rounded-full" src={authorThumb} alt="" />
          <div className="author-details flex justify-between items-center">
            <div>
              <h3 className="author-name font-semibold text-xl md:text-2xl">{authorName}</h3>
              <p className="text-gray-500 font-semibold">{publishDate}</p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold inline mr-1">
                {readTime} min read
              </p>
              <button onClick={() => handleBookmark(blogTitle)}>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
        </div>
        <h1 className="blog-title text-2xl md:text-4xl font-bold">{blogTitle}</h1>
        <button onClick={() => handleReadTime(readTime)} className="text-xl font-semibold text-violet-600">
          <u>Mark as read</u>
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
