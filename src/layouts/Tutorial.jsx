import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Videos from "../Components/Category Video/Videos";

const Tutorial = () => {
  return (
    <div>
      <Helmet>
        <title>Tutorial | Lingo Bingo</title>
      </Helmet>
      <div className="bg-primary min-h-32 flex flex-col md:flex-row gap-2 justify-center items-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center">
          Here are some free tutorial Videos
        </h2>
        <FaAnglesDown className="text-2xl lg:text-3xl text-white" />
      </div>
      {/* <YoutubeVideos></YoutubeVideos> */}
      <div className="w-11/12 mx-auto ">
        {/* <Outlet></Outlet> */}
        <Videos></Videos>
        <div className="w-fit mx-auto mb-10">
          <Link
            className="btn bg-primary btn-sm md:btn-md text-white"
            to="/start-learning"
          >
            Learn Vocabularies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
