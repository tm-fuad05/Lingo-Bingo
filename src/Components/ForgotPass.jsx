import React, { useState } from "react";
import { toast } from "react-toastify";
import auth from "../Firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPass = () => {
  const [error, setError] = useState(null);
  const resetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset email sent!");
      })
      .catch((error) => {
        setError("Something went wrong");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm lg:max-w-lg shrink-0 shadow-2xl rounded-none">
        <h2 className="text-3xl text-center my-5">Reset Password</h2>
        <hr className="text-gray-200 w-10/12 mx-auto" />
        <form onSubmit={resetPassword} className="card-body  space-y-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter your email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button className="btn bg-primary text-white rounded-none w-full">
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
