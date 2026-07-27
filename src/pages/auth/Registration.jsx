import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import {
  FaUser,
  FaImage,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const [error, setError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleCreateAccount,
    setUser,
    handleUpdateProfile,
    handleSignInWithGoogle,
  } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const strongPassValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    setError("");

    if (!strongPassValidation.test(pass)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
      );
      return;
    }

    setLoading(true);

    handleCreateAccount(email, pass)
      .then((result) => {
        handleUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            setLoading(false);
            toast.success(`Account created successfully! Welcome, ${name}.`);
            navigate("/");
          })
          .catch((err) => {
            setLoading(false);
            setError(err.message);
          });
      })
      .catch(() => {
        setLoading(false);
        setError("This email address is already registered.");
      });
  };

  const signInWithGoogleRegister = () => {
    setError("");
    handleSignInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Signed in as ${result.user.displayName}`);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Google sign-in failed.");
      });
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center py-12 px-4 bg-slate-50/50">
      <Helmet>
        <title>Register | Lingo Bingo</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
            Start Learning
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-heading tracking-tight leading-tight">
            Create an Account
          </h2>
          <p className="text-gray-500 mt-2 font-normal text-sm sm:text-base">
            Join Lingo Bingo today to boost your language skills.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-rose-50 border border-rose-100 text-rose-600 p-4 rounded-xl text-sm mb-6 font-normal"
          >
            {error}
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-heading uppercase tracking-widest block ml-1">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                required
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-heading uppercase tracking-widest block ml-1">
              Photo URL
            </label>
            <div className="relative">
              <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type="url"
                name="photo"
                placeholder="https://example.com/photo.jpg"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-heading uppercase tracking-widest block ml-1">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-heading uppercase tracking-widest block ml-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type={showPass ? "text" : "password"}
                name="pass"
                placeholder="At least 6 characters (1 upper, 1 lower)"
                className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label={showPass ? "Hide password" : "Show password"}
              >
                {showPass ? (
                  <FaEyeSlash className="text-lg" />
                ) : (
                  <FaEye className="text-lg" />
                )}
              </button>
            </div>
          </div>

          {/* CTA Submit Button */}
          <div className="pt-3">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full py-3.5 bg-primary hover:bg-indigo-600 disabled:bg-primary/60 text-white font-bold rounded-2xl transition-colors text-sm shadow-lg shadow-primary/25 flex justify-center items-center gap-2"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Create Account"
              )}
            </motion.button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative flex items-center gap-4 my-8">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            Or
          </span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Google Signup */}
        <div className="mb-8">
          <motion.button
            type="button"
            onClick={signInWithGoogleRegister}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-3 bg-secondary text-gray-800 font-bold rounded-2xl transition-all text-sm border border-gray-100 shadow-sm flex items-center justify-center gap-2.5 hover:bg-gray-100/50 hover:border-gray-200"
          >
            <FcGoogle className="text-2xl" />
            <span>Sign up with Google</span>
          </motion.button>
        </div>

        {/* Login Footer */}
        <div className="text-center border-t border-gray-100 pt-6">
          <p className="text-gray-500 font-normal text-sm sm:text-base">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-bold hover:underline transition-all"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Registration;
