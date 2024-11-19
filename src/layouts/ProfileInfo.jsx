import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const ProfileInfo = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="my-20  flex flex-col-reverse gap-10 lg:flex-row  justify-between lg:items-center w-11/12 mx-auto">
      <div>
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold md:mb-2 lg:mb-2">
            Hello,{" "}
          </h2>
          <h2 className="text-primary ml-10 text-4xl md:text-5xl font-bold">
            {user.displayName}
          </h2>
        </div>
        <h3 className="text-lg lg:text-2xl font-semibold">General Info:</h3>
        <ul className="list-disc pl-8 text-md lg:text-lg">
          <li className="mt-3">
            <span className="font-semibold">Name:</span> {user.displayName}
          </li>
          <li>
            <span className="font-semibold">Email:</span> {user.email}
          </li>
        </ul>
        <div className="mt-5">
          <Link
            to="/my-profile/update"
            className="btn lg:btn-lg bg-primary text-white"
          >
            Update Profile
          </Link>
        </div>
      </div>
      <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-primary p-2 mx-auto lg:mx-0">
        <img
          className="w-full h-full object-cover rounded-full"
          src={user.photoURL}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
