import React from "react";

const SideMenu = (props) => {
  console.log(props.readTime);
  return (
    <div>
      <div className="border border-violet-600 bg-violet-100 rounded-lg py-5 px-3 mb-6">
        <h3 className="text-xl text-violet-600 font-bold text-center ">
          Spent time on read: {props.readTime} min
        </h3>
      </div>
      <div className="bg-gray-100 rounded-lg p-7">
        <h2 className="text-xl font-bold">Bookmarked Blogs: {0}</h2>
        
      </div>
    </div>
  );
};

export default SideMenu;
