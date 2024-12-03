import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/Zone.png";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { RiMenu4Fill } from "react-icons/ri";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { handleSignOut, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showWelcome = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const hideWelcome = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(showWelcome);
      clearTimeout(hideWelcome);
    };
  }, []);

  const signOutUser = () => {
    handleSignOut()
      .then(() => toast.success("Successfully logged out"))
      .catch((error) => toast.error(error));
  };

  return (
    <div>
      {user && user && isVisible && (
        <div className="bg-primary text-center py-3 ">
          {user && user && (
            <h2 className="text-white font-semibold">
              Welcome, {user.displayName}
            </h2>
          )}
        </div>
      )}
      <div className="shadow-md">
        <div className="w-11/12 mx-auto relative flex items-center justify-between z-50">
          <figure>
            <Link to="/">
              <img className="w-[180px]" src={logo} alt="Lingo Bingo" />
            </Link>
          </figure>
          <nav
            className={`absolute  flex gap-4 flex-col bg-primary pt-10 pl-12 pr-10 w-64 min-h-screen text-white bg-opacity-95 lg:static lg:flex-row lg:bg-white lg:min-h-fit    duration-500 lg:text-black lg:w-fit lg:p-0 ${
              open ? "top-0 -left-11 " : "top-0 -left-96 "
            }  `}
          >
            <NavLink
              className={
                "lg:hover:text-primary  hover:border-b lg:hover:border-none lg:hover:p-0 "
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={
                "lg:hover:text-primary hover:border-b lg:hover:border-none lg:hover:p-0 "
              }
              to="/start-learning"
            >
              Start learning
            </NavLink>

            <NavLink
              className={
                "lg:hover:text-primary hover:border-b lg:hover:border-none lg:hover:p-0 "
              }
              to="/tutorials"
            >
              Tutorials
            </NavLink>

            <NavLink
              className={
                "lg:hover:text-primary hover:border-b lg:hover:border-none lg:hover:p-0 "
              }
              to="/about-us"
            >
              About Us
            </NavLink>
            {user && user && (
              <NavLink
                className={
                  "lg:hover:text-primary hover:border-b lg:hover:border-none lg:hover:p-0 "
                }
                to="/my-profile"
              >
                My Profile
              </NavLink>
            )}
          </nav>
          <div className="flex items-center gap-2">
            <NavLink to="/my-profile/info">
              {user && user ? (
                <figure className="w-8 h-8 rounded-full p-0.5 border border-primary hover:opacity-50">
                  <img
                    className="w-full h-full  object-cover rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </figure>
              ) : (
                <FaUserCircle className="text-3xl" />
              )}
            </NavLink>
            {user && user ? (
              <button
                onClick={signOutUser}
                className="btn btn-sm md:btn-md bg-gradient-to-r from-red-500 to-orange-600 text-white "
              >
                Log out
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-sm md:btn-md bg-primary text-white "
              >
                Login
              </Link>
            )}
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="lg:hidden "
            >
              {open ? (
                <RiMenu4Fill className="text-3xl text-primary hover:opacity-50" />
              ) : (
                <CgMenuRightAlt className="text-3xl text-primary hover:opacity-50" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
