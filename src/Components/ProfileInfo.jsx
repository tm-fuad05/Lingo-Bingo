import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserPen, FaEnvelope, FaUser, FaShieldHalved } from "react-icons/fa6";

const ProfileInfo = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-secondary w-full py-12 lg:py-20">
      <div className="w-11/12 mx-auto rounded-3xl border border-gray-100/80 shadow-sm flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-3/5 space-y-6"
        >
          {/* Welcome Badge & Greeting */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-3">
              <FaShieldHalved className="text-xs" />
              <span>User Dashboard</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading tracking-tight leading-tight">
              Hello,{" "}
              <span className="text-primary block sm:inline mt-1 sm:mt-0">
                {user?.displayName || "Learner"}!
              </span>
            </h1>
          </div>

          <p className="text-gray-500 text-sm sm:text-base font-normal">
            Welcome back to your profile. Manage your personal credentials and
            view your learning state here.
          </p>

          {/* General Info Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-heading border-b border-gray-100 pb-3 flex items-center gap-2">
              General Information
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
                  <FaUser className="text-sm" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-normal">
                    Full Name
                  </span>
                  <span className="font-bold text-heading">
                    {user?.displayName || "N/A"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm sm:text-base">
                <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
                  <FaEnvelope className="text-sm" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-normal">
                    Email Address
                  </span>
                  <span className="font-bold text-heading break-all">
                    {user?.email || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Update Profile CTA Button */}
          <div className="pt-2">
            <Link to="/my-profile/update" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 bg-primary hover:bg-indigo-600 text-white font-bold rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/25 transition-all text-sm group"
              >
                <FaUserPen className="text-sm" />
                <span>Update Profile</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Avatar Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center items-center"
        >
          {/* Outer Glow Ring */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full p-2 bg-gradient-to-tr from-primary via-indigo-400 to-indigo-200 shadow-xl shadow-primary/20">
            <div className="w-full h-full bg-white rounded-full p-2 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/mR4081X/user-placeholder.png"
                }
                alt={user?.displayName || "User Profile"}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileInfo;
