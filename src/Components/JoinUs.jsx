import React, { useEffect } from "react";
import { FaBrain } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
const JoinUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col gap-5 mt-16 py-12 w-11/12 mx-auto">
      <h3 className="text-2xl lg:text-4xl text-primary font-semibold mb-5">
        Why You Should Learn With Lingo Bingo?
      </h3>
      {/* Cards */}
      <div
        className="flex gap-3 items-center bg-gray-50 p-4 rounded-md shadow-md shadow-md"
        data-aos="fade-right"
      >
        <div className="bg-[#e6e5ff] p-3 rounded-full">
          <FaBrain className="text-2xl lg:text-4xl text-[#a5a3ef]" />
        </div>
        <div>
          <p className="text-xl lg:text-2xl font-semibold">Boost Vocabulary</p>
          <p className="text-gray-500">
            Learn new words daily with engaging and fun exercises.
          </p>
        </div>
      </div>
      <div
        className="flex gap-3 items-center bg-gray-50 p-4 rounded-md shadow-md"
        data-aos="fade-right"
      >
        <div className="bg-green-200 p-3 rounded-full">
          <TbWorld className="text-2xl lg:text-4xl text-green-500" />
        </div>
        <div>
          <p className="text-xl lg:text-2xl font-semibold">Global Reach</p>
          <p className="text-gray-500">
            Explore and learn vocabulary from multiple languages.
          </p>
        </div>
      </div>
      <div
        className="flex gap-3 items-center bg-gray-50 p-4 rounded-md shadow-md"
        data-aos="fade-right"
      >
        <div className="bg-[#fff4df] p-3 rounded-full">
          <IoTimeOutline className="text-2xl lg:text-4xl text-[#ffb86c]" />
        </div>
        <div>
          <p className="text-xl lg:text-2xl font-semibold">Flexible Learning</p>
          <p className="text-gray-500">
            Learn at your pace, anytime and anywhere.
          </p>
        </div>
      </div>
      <div
        className="flex gap-3 items-center bg-gray-50 p-4 rounded-md shadow-md"
        data-aos="fade-right"
      >
        <div className="bg-sky-100 p-3 rounded-full">
          <FaMobileAlt className="text-2xl lg:text-4xl text-sky-500" />
        </div>
        <div>
          <p className="text-xl lg:text-2xl font-semibold">Mobile Ready</p>
          <p className="text-gray-500">
            Access our platform seamlessly on all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
