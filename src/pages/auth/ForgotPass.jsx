import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FaEnvelope, FaArrowLeft, FaPaperPlane } from "react-icons/fa6";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const ForgotPass = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Retrieve pre-filled email passed from Login page
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";

  const resetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    setError("");
    setLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
        toast.success("Password reset link sent to your email!");
      })
      .catch((err) => {
        setLoading(false);
        setError("Failed to send reset email. Please verify your address.");
      });
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center py-12 px-4 bg-slate-50/50">
      <Helmet>
        <title>Reset Password | Lingo Bingo</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl"
      >
        {/* Back Link */}
        <Link
          to="/auth/login"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-wider mb-8"
        >
          <FaArrowLeft /> Back to Login
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
            Account Recovery
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-heading tracking-tight leading-tight">
            Reset Password
          </h2>
          <p className="text-gray-500 mt-2 font-normal text-sm sm:text-base">
            Enter your account email and we&apos;ll send you a link to reset
            your password.
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

        {/* Form or Success State */}
        {!isSubmitted ? (
          <form onSubmit={resetPassword} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-heading uppercase tracking-widest block ml-1">
                Your Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                <input
                  type="email"
                  name="email"
                  defaultValue={prefilledEmail}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
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
                  <>
                    <FaPaperPlane className="text-xs" /> Send Reset Link
                  </>
                )}
              </motion.button>
            </div>
          </form>
        ) : (
          /* Success Screen State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 py-4"
          >
            <div className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl text-sm font-normal border border-emerald-100">
              We have sent a password reset link to your email. Please check
              your inbox.
            </div>

            <button
              onClick={() => window.open("https://mail.google.com", "_blank")}
              className="w-full py-3.5 bg-heading hover:bg-black text-white font-bold rounded-2xl transition-all text-sm shadow-md"
            >
              Open Gmail
            </button>
          </motion.div>
        )}

        {/* Footer */}
        <div className="text-center border-t border-gray-100 pt-6 mt-8">
          <p className="text-gray-500 font-normal text-sm sm:text-base">
            Remembered your password?{" "}
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

export default ForgotPass;
