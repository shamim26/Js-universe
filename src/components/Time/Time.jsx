import React from "react";

const Time = () => {
  return (
    <div>
      <div className="border border-violet-600 bg-violet-100 rounded-lg py-5 px-4 mb-6">
        <h3 className="text-xl text-violet-600 font-bold text-center ">
          Spent time on read: {0} min
        </h3>
      </div>
      <div className="bg-gray-100 rounded-lg p-7">
        <h2 className="text-xl font-bold">Bookmarked Blogs: {0}</h2>
      </div>
    </div>
  );
};

export default Time;
