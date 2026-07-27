import React, { useContext, useEffect, useState, useRef } from "react";
import logo from "../assets/Zone.png";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { use } from "react";
import NavSpinner from "../Components/NavSpinner";

const Navbar = () => {
  const { handleSignOut, user, loader } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  // One-time Welcome banner logic per session
  useEffect(() => {
    if (user) {
      const storageKey = `hasSeenWelcome_${user.uid || user.email}`;
      const hasSeen = sessionStorage.getItem(storageKey);

      if (!hasSeen) {
        // Show welcome banner once
        const showWelcome = setTimeout(() => setIsVisible(true), 500);
        const hideWelcome = setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem(storageKey, "true"); // Save to session after showing
        }, 4500);

        return () => {
          clearTimeout(showWelcome);
          clearTimeout(hideWelcome);
        };
      }
    } else {
      setIsVisible(false);
    }
  }, [user]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const signOutUser = () => {
    handleSignOut()
      .then(() => {
        // Clear session welcome banner flag on logout
        if (user) {
          sessionStorage.removeItem(`hasSeenWelcome_${user.uid || user.email}`);
        }
        toast.success("Successfully logged out");
        setDropdownOpen(false);
      })
      .catch((error) => toast.error(error.message || "Logout failed"));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Start Learning", path: "/start-learning" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "About Us", path: "/about-us" },
  ];

  return (
    <div>
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300 sticky top-0 z-40">
        {/* Animated One-Time Welcome Banner */}
        <AnimatePresence>
          {user && isVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-gradient-to-r from-primary via-indigo-600 to-primary text-white text-center py-2 px-4 text-xs sm:text-sm font-normal overflow-hidden shadow-inner flex items-center justify-center gap-1"
            >
              <span>Welcome back,</span>
              <strong className="font-bold text-white">
                {user.displayName || "User"}
              </strong>
              ! 👋
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0 transition-transform duration-200 hover:scale-105"
            >
              <img
                className="h-14 sm:h-16 w-auto object-contain"
                src={logo}
                alt="Lingo Bingo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-gray-600 hover:text-gray-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white rounded-full shadow-sm"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons & Profile */}
            <div className="flex items-center gap-4">
              {user ? (
                /* Profile Avatar & Dropdown */
                <div className="relative" ref={dropdownRef}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center focus:outline-none ring-2 ring-primary/20 rounded-full p-0.5 transition-shadow hover:ring-primary/40"
                  >
                    {user.photoURL ? (
                      <img
                        className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                        src={user.photoURL}
                        alt={user.displayName || "Profile"}
                      />
                    ) : (
                      <FaUserCircle className="w-10 h-10 text-primary" />
                    )}
                  </motion.button>

                  {/* Animated Dropdown Menu */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                          <p className="text-sm font-bold text-heading truncate">
                            {user.displayName || "User"}
                          </p>
                          <p className="text-xs text-gray-500 font-normal truncate">
                            {user.email}
                          </p>
                        </div>

                        <div className="p-1">
                          <Link
                            to="/my-profile"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 rounded-xl transition-colors font-bold"
                          >
                            <FaRegUser className="text-primary text-base" />
                            My Profile
                          </Link>

                          <button
                            onClick={signOutUser}
                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-rose-600 hover:bg-rose-50 rounded-xl transition-colors font-bold"
                          >
                            <FaSignOutAlt className="text-base" />
                            Log out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : loader ? (
                <NavSpinner />
              ) : (
                /* Auth Action Button */
                <Link to="/auth/login">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 py-2.5 bg-primary hover:bg-indigo-600 text-white text-sm font-bold rounded-full shadow-md shadow-primary/20 transition-all"
                  >
                    Login
                  </motion.button>
                </Link>
              )}

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors"
              >
                {open ? (
                  <HiX className="text-2xl" />
                ) : (
                  <HiMenuAlt3 className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-72 h-full bg-white shadow-2xl z-50 p-6 pt-4 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <img className="h-12 w-auto" src={logo} alt="Lingo Bingo" />
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
                  >
                    <HiX className="text-xl" />
                  </button>
                </div>
                <hr className="mb-5" />

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                          isActive
                            ? "bg-indigo-50 text-primary"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
              </div>

              {user && (
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 px-2 mb-4">
                    {user.photoURL ? (
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={user.photoURL}
                        alt="Avatar"
                      />
                    ) : (
                      <FaUserCircle className="w-10 h-10 text-gray-400" />
                    )}
                    <div className="overflow-hidden">
                      <p className="text-sm font-bold text-heading truncate">
                        {user.displayName}
                      </p>
                      <p className="text-xs text-gray-500 font-normal truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      signOutUser();
                      setOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-rose-50 text-rose-600 font-bold rounded-xl text-sm hover:bg-rose-100 transition-colors"
                  >
                    <FaSignOutAlt /> Log out
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
