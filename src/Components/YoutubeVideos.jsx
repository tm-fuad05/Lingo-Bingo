import React, { useState } from "react";
import { Link } from "react-router-dom";

const YoutubeVideos = () => {
  const [toggleTab, setToggleTab] = useState(1);

  const handleToggleTab = (index) => {
    setToggleTab(index);
  };
  return (
    <div className="my-10 w-11/12 mx-auto">
      <div role="tablist" className="tabs tabs-bordered">
        <Link
          to="/tutorials/japanese"
          onClick={() => handleToggleTab(1)}
          role="tab"
          className={toggleTab === 1 ? "tab tab-active font-semibold" : "tab"}
        >
          Japanese
        </Link>
        <Link
          to="/tutorials/korean"
          onClick={() => handleToggleTab(2)}
          role="tab"
          className={toggleTab === 2 ? "tab tab-active font-semibold" : "tab"}
        >
          Korean
        </Link>
        <Link
          to="/tutorials/hindi"
          onClick={() => handleToggleTab(3)}
          role="tab"
          className={toggleTab === 3 ? "tab tab-active font-semibold" : "tab"}
        >
          Hindi
        </Link>
      </div>
    </div>
  );
};

export default YoutubeVideos;
