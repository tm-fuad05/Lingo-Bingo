import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaUser,
  FaImage,
  FaCircleExclamation,
  FaPenToSquare,
} from "react-icons/fa6";

const UpdateInfo = () => {
  const { handleUpdateProfile, setUser, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    setError("");
    setLoading(true);

    handleUpdateProfile({ displayName: name, photoURL: photo })
      .then(() => {
        // Option to sync local user state if needed
        if (setUser) {
          setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
        }
        setLoading(false);
        navigate("/my-profile");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || "Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center py-12 px-4 bg-slate-50/50">
      <Helmet>
        <title>Update Profile | Lingo Bingo</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-3xl border border-gray-100 shadow-xl p-8 lg:p-10"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-xl">
            <FaPenToSquare />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-heading tracking-tight">
            Update Profile
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-normal mt-1">
            Keep your personal details and avatar up to date
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-center gap-3 text-rose-600 text-xs sm:text-sm font-normal">
            <FaCircleExclamation className="text-base flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={updateProfile} className="space-y-5">
          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-heading uppercase tracking-wider block ml-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FaUser className="text-sm" />
              </div>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                placeholder="Enter your name"
                className="w-full pl-11 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                required
              />
            </div>
          </div>

          {/* Photo URL Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-heading uppercase tracking-wider block ml-1">
              Photo URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FaImage className="text-sm" />
              </div>
              <input
                type="url"
                name="photo"
                defaultValue={user?.photoURL || ""}
                placeholder="https://example.com/photo.jpg"
                className="w-full pl-11 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full py-3.5 bg-primary hover:bg-indigo-600 disabled:opacity-70 text-white font-bold rounded-2xl shadow-lg shadow-primary/25 transition-all text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Save Changes"
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateInfo;
