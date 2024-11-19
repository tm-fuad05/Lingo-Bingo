import React from "react";
import { FcGoogle } from "react-icons/fc";
const UpdateInfo = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-primary bg-opacity-60 ">
        <div className="card bg-base-100 w-full max-w-sm lg:max-w-lg shrink-0 shadow-2xl rounded-none my-10">
          <h2 className="text-3xl text-center my-5">Update your profile</h2>
          <hr className="text-gray-200 w-10/12 mx-auto" />
          <form className="card-body ">
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

            <div className="form-control space-y-2 mt-4">
              <button className="btn bg-primary text-white rounded-none ">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
