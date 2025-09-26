import React from "react";

const JobSearchBar = () => {
  return (
    <div>
      JobSearchBar
      <div>
        <input
          type="text"
          placeholder="search"
          className="border-blue-500 border-2 rounded"
        />
        <p>Sort: </p>
      </div>
    </div>
  );
};

export default JobSearchBar;
