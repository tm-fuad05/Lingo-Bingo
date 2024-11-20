import React, { useEffect } from "react";
import { FaLaptop } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
const Features = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="grid grid-cols-2 gap-5 lg:grid-cols-4 justify-between items-center my-16"
      data-aos="fade-up"
    >
      <div className="flex items-center gap-3">
        <div className="bg-[#e6e5ff]  p-2 rounded-full">
          <FaLaptop className=" text-xl lg:text-2xl    rounded-full text-[#a5a3ef] " />
        </div>
        <p className="text-md lg:text-lg font-semibold">Online Tutoring</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-green-200 p-2 rounded-full">
          <FaBookOpen className=" text-xl lg:text-2xl    rounded-full text-green-600" />
        </div>
        <p className="text-md lg:text-lg font-semibold">50+ Courses</p>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="bg-[#fff4df] p-2 rounded-full">
          <MdAccessTime className=" text-xl lg:text-2xl    rounded-full text-[#ffb830]" />
        </div>
        <p className="text-md lg:text-lg font-semibold">Lifetime Access</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-sky-100 p-2 rounded-full">
          <IoIosPeople className=" text-xl lg:text-2xl    rounded-full text-sky-500" />
        </div>
        <p className="text-md lg:text-lg font-semibold">Activate Learning</p>
      </div>
    </div>
  );
};

export default Features;
