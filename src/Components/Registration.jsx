import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {
  const [error, setError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const {
    handleCreateAccount,
    setUser,
    user,
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
        "Password is invalid. It must have an uppercase letter, a lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    handleCreateAccount(email, pass)
      .then((result) => {
        handleUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(result.user);
            navigate("/");
          })
          .catch((error) => setError(error));
      })
      .catch(() => setError("This email is already used"));
  };

  const signInWithGoogleRegister = () => {
    handleSignInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-primary bg-opacity-60 ">
      <div className="card bg-base-100 w-full max-w-sm lg:max-w-lg shrink-0 shadow-2xl rounded-none my-10">
        <h2 className="text-3xl text-center my-5">Sign Up</h2>
        <hr className="text-gray-200 w-10/12 mx-auto" />
        <form className="card-body " onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo-URL"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="password"
              name="pass"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-center mb-4 gap-2">
            <input
              onClick={() => setShowPass(!showPass)}
              type="checkbox"
              checked={showPass}
              name=""
              id=""
            />

            <p className="text-sm">Show password</p>
          </div>
          <div className="form-control space-y-2">
            <button className="btn bg-primary text-white rounded-none ">
              Sign Up
            </button>
            <button
              onClick={signInWithGoogleRegister}
              className="btn bg-transparent text-gray-500 rounded-none border-gray-300 shadow-none"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
          </div>
          <div className="text-center mt-3">
            <p>
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-primary font-semibold hover:opacity-50"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
