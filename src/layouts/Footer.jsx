import React, { useContext } from "react";
import logo from "../assets/Zone_footer.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="bg-[#010138] text-white pt-16 pb-8 px-6 sm:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand & Logo Section */}
        <div className="space-y-4">
          <img
            src={logo}
            alt="Zone Footer"
            className="h-16 w-auto object-contain"
          />

          <p className="text-gray-400 text-sm leading-relaxed font-normal">
            Master languages with fun interactive bingo games and rich cultural
            insights. Join our global community today!
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-sm"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/@MUSIMUSICOM"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-sm"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/LingoBingo.in"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-sm"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Contact Information */}
        <div className="space-y-3">
          <h3 className="text-white text-lg font-bold mb-4 tracking-wide border-b border-white/10 pb-2 inline-block">
            Get In Touch
          </h3>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
              <span>Av. Washington 165, NY CA 54003</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary flex-shrink-0" />
              <span>+31 85 964 47 25</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary flex-shrink-0" />
              <span className="break-all">lingo_bingo_official@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-primary flex-shrink-0" />
              <span>Mon - Fri: 9.00 AM - 5.00 PM</span>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4 tracking-wide border-b border-white/10 pb-2 inline-block">
            Useful Links
          </h3>
          <ul className="flex flex-col space-y-2.5 text-sm text-gray-300">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors inline-block ${isActive ? "text-primary font-bold" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/start-learning"
                  className={({ isActive }) =>
                    `hover:text-primary transition-colors inline-block ${isActive ? "text-primary font-bold" : ""}`
                  }
                >
                  Start Learning
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/tutorials"
                  className={({ isActive }) =>
                    `hover:text-primary transition-colors inline-block ${isActive ? "text-primary font-bold" : ""}`
                  }
                >
                  Tutorials
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `hover:text-primary transition-colors inline-block ${isActive ? "text-primary font-bold" : ""}`
                }
              >
                About Us
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/my-profile"
                  className={({ isActive }) =>
                    `hover:text-primary transition-colors inline-block ${isActive ? "text-primary font-bold" : ""}`
                  }
                >
                  My Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Newsletter / Extra Info */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-bold mb-4 tracking-wide border-b border-white/10 pb-2 inline-block">
            Learn Today
          </h3>
          <p className="text-gray-400 text-sm font-normal">
            Start expanding your vocabulary in Korean, Japanese, and Hindi right
            from your browser.
          </p>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
            <span className="text-xs text-primary font-bold block uppercase tracking-wider mb-1">
              Interactive Practice
            </span>
            <p className="text-xs text-gray-300 font-normal">
              Fun games, cultural context, and structured learning tracks.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Divider */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 text-center">
        <p className="text-gray-400 text-sm font-normal">
          &copy; {new Date().getFullYear()} Lingo Bingo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
