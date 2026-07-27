import React from "react";
import notFound from "../assets/404 not found.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5">
      <figure>
        <img src={notFound} alt="" />
      </figure>
      <p className="text-md md:text-xl font-semibold">
        Sorry, we couldn't found the page
      </p>
      <div>
        <Link to={"/"} className="btn bg-primary text-white">
          Back to Home page
        </Link>
      </div>
    </div>
  );
};

export default Error;
