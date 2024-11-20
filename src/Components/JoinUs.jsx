import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { FaBookOpen } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaFaceSmileWink } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
const JoinUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col gap-5 mt-16 py-12 w-11/12 mx-auto">
      <h3 className="text-2xl lg:text-4xl text-heading font-bold mb-5">
        Why You Should Learn With Lingo Bingo?
      </h3>
      {/* Cards */}
      <div
        className="flex gap-3 items-center bg-gray-50 p-4 rounded-md"
        data-aos="fade-right"
      >
        <div className="bg-[#e6e5ff] p-3 rounded-full">
          <TiTick className="text-2xl lg:text-4xl text-[#a5a3ef]" />
        </div>
        <div>
          <p className="text-xl lg:text-2xl font-semibold">Create Account</p>
          <p className="text-gray-500">
            Sign up and set up your profile to get started on your learning
            journey.
          </p>
        </div>
      </div>
      <div
        className="flex gap-3 items-center bg-gray-50 p-4 rounded-md"
        data-aos="fade-right"
      >
        <div className="bg-green-200 p-3 rounded-full">
          <FaBookOpen className="text-2xl lg:text-4xl text-green-500" />
        </div>
        <div>
          <p className="text-xl lg:text-2xl font-semibold">Select Course</p>
          <p className="text-gray-500">
            Browse through our extensive catalog and choose a course that fits
            your goals.
          </p>
        </div>
      </div>
      <div
        className="flex gap-3 items-center bg-gray-50 p-4 rounded-md"
        data-aos="fade-right"
      >
        <div className="bg-[#fff4df] p-3 rounded-full">
          <GiNetworkBars className="text-2xl lg:text-4xl text-[#ffb86c]" />
        </div>
        <div>
          <p className="text-xl lg:text-2xl font-semibold">Learn Your Skill</p>
          <p className="text-gray-500">
            Dive into lessons, track your progress, and master your chosen
            skill.
          </p>
        </div>
      </div>
      <div
        className="flex gap-3 items-center bg-gray-50 p-4 rounded-md"
        data-aos="fade-right"
      >
        <div className="bg-sky-100 p-3 rounded-full">
          <FaFaceSmileWink className="text-2xl lg:text-4xl text-sky-500" />
        </div>
        <div>
          <p className="text-xl lg:text-2xl font-semibold">Success Story</p>
          <p className="text-gray-500">
            Share your achievements and inspire others with your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
