import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-primary bg-opacity-60">
      <div className="card bg-base-100 w-full max-w-sm lg:max-w-lg shrink-0 shadow-2xl rounded-none">
        <h2 className="text-3xl text-center my-5">Login</h2>
        <hr className="text-gray-200 w-10/12 mx-auto" />
        <form className="card-body " onSubmit={handleLogin}>
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
          <div className="flex items-center mb-4 gap-2">
            <input
              onClick={() => setShowPass(!showPass)}
              type="checkbox"
              checked={showPass}
            />

            <p className="text-sm">Show password</p>
          </div>
          <div className="form-control">
            <button className="btn bg-primary text-white rounded-none">
              Login
            </button>
          </div>
          <div className="text-center space-y-2 mt-3">
            <p>
              Forgot{" "}
              <a className="text-primary hover:opacity-50" href="#">
                Password
              </a>
              ?
            </p>
            <p>
              New in this website?{" "}
              <Link
                to="/auth/signup"
                className="text-primary font-semibold hover:opacity-50"
              >
                Register
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
