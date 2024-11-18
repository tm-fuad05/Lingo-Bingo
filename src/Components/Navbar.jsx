import React, { useState } from "react";
import logo from "../assets/Zone.png";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import { RiMenu4Fill } from "react-icons/ri";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md">
      <div className="w-11/12 mx-auto relative flex items-center justify-between z-50">
        <figure>
          <img className="w-[180px]" src={logo} alt="" />
        </figure>
        <nav
          className={`absolute  flex gap-4 flex-col bg-primary pt-10 pl-10 pr-6 w-56 min-h-screen text-white bg-opacity-95 lg:static lg:flex-row lg:bg-white lg:min-h-fit    duration-500 lg:text-black lg:w-fit lg:p-0 ${
            open ? "top-0 -left-11 " : "top-0 -left-96 "
          }  `}
        >
          <NavLink
            className={
              "hover:text-primary  hover:bg-white hover:rounded-md hover:p-2 lg:hover:p-0 "
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={
              "hover:text-primary  hover:bg-white hover:rounded-md hover:p-2 lg:hover:p-0 "
            }
            to="/start-learning"
          >
            Start learning
          </NavLink>
          <NavLink
            className={
              "hover:text-primary  hover:bg-white hover:rounded-md hover:p-2 lg:hover:p-0 "
            }
            to="/tutorials"
          >
            Tutorials
          </NavLink>
          <NavLink
            className={
              "hover:text-primary  hover:bg-white hover:rounded-md hover:p-2 lg:hover:p-0 "
            }
            to="/about-us"
          >
            About Us
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <div>
            <FaUserCircle className="text-3xl" />
          </div>
          <Link
            to="/auth/login"
            className="btn btn-sm md:btn-md bg-primary text-white "
          >
            Login
          </Link>
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
  );
};

export default Navbar;
