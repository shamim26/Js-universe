import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const SideMenu = (props) => {
  const bookmarked = props.title;
  console.log();
  return (
    <div>
      <div className="border border-violet-600 bg-violet-100 rounded-lg py-5 px-3 mb-6">
        <h3 className="text-xl text-violet-600 font-bold text-center ">
          Spent time on read: {props.readTime} min
        </h3>
      </div>
      <div className="bg-gray-100 rounded-lg p-5">
        <h2 className="text-xl font-bold">
          Bookmarked Blogs: {bookmarked.length}
        </h2>
        {bookmarked.map((bookmark, index) => (
          <Bookmark key={index} bookmark = {bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
