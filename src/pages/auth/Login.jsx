import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const { handleSignIn, setUser, handleSignInWithGoogle } =
    useContext(AuthContext);

  // Redirect to original destination after login or home
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    setError("");
    setLoading(true);

    handleSignIn(email, pass)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        toast.success(`Welcome back, ${result.user.displayName || "Learner"}!`);
        navigate(from, { replace: true });
      })
      .catch(() => {
        setLoading(false);
        setError("Invalid email or password. Please try again.");
      });
  };

  const signInWithGoogleLogin = () => {
    setError("");
    handleSignInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success(`Logged in with Google as ${result.user.displayName}`);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Google sign-in failed.");
      });
  };

  const goToReset = () => {
    // Basic validation before navigating
    const email = emailRef.current.value;
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Pass the email to the forgot password page via state
      navigate("/auth/forgot-password", { state: { email } });
    } else if (email) {
      setError("Please enter a valid email address first.");
    } else {
      setError("Enter your email address to reset password.");
    }
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center py-12 px-4 bg-slate-50/50">
      <Helmet>
        <title>Login | Lingo Bingo</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 inline-block">
            Welcome Back
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-heading tracking-tight leading-tight">
            Login to Your Account
          </h2>
          <p className="text-gray-500 mt-2 font-normal text-sm sm:text-base">
            Access your dashboard and continue your learning journey.
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
        <form onSubmit={handleLogin} className="space-y-6">
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
                ref={emailRef}
                placeholder="you@example.com"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-allOutline outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5 relative">
            <label className="text-xs font-bold text-heading uppercase tracking-widest block ml-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
              <input
                type={showPass ? "text" : "password"}
                name="pass"
                placeholder="Enter your password"
                className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-normal text-heading focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-allOutline outline-none"
                required
              />
              {/* Show/Hide Password Toggle */}
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

          {/* Forgot Password & CTA Buttons */}
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
                "Log in Now"
              )}
            </motion.button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-6">
          <p className="text-gray-500 font-normal text-sm">
            Forgot your{" "}
            <Link
              to={"/auth/forgot-password"}
              className="text-primary font-semibold hover:opacity-70 transition-opacity"
            >
              Password?
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="relative flex items-center gap-4 my-9">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            Or
          </span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Google Login */}
        <div className="mb-8">
          <motion.button
            onClick={signInWithGoogleLogin}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-3 bg-secondary text-gray-800 font-bold rounded-2xl transition-all text-sm border border-gray-100 shadow-sm flex items-center justify-center gap-2.5 hover:bg-gray-100/50 hover:border-gray-200"
          >
            <FcGoogle className="text-2xl" />
            <span>Continue with Google</span>
          </motion.button>
        </div>

        {/* Register Footer */}
        <div className="text-center border-t border-gray-100 pt-6">
          <p className="text-gray-500 font-normal text-sm sm:text-base">
            New to Lingo Bingo?{" "}
            <Link
              to="/auth/signup"
              className="text-primary font-bold hover:underline transition-all"
            >
              Register
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
