import React, { useEffect } from "react";
import learning from "../assets/learning.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosArrowRoundForward } from "react-icons/io";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 100,
    });
  }, []);
  return (
    <div className="bg-[#eeedfe]  px-5 py-10 min-h-screen flex flex-col text-center lg:flex-row lg:text-start justify-between items-center">
      <div className=" w-10/12 lg:w-7/12 space-y-4 ">
        <h1
          data-aos="fade-right"
          className="text-3xl md:text-4xl lg:text-5xl leading-tight  font-bold text-heading"
        >
          Unlock New Languages: Learn, Practice, Connect!
        </h1>
        <p
          data-aos="fade-left"
          className="text-gray-500 text-sm md:text-md lg:text-md"
        >
          Discover the joy of language learning with interactive lessons,
          real-life examples, and practical tips. Build your skills step by
          step, from vocabulary to fluency, and connect with cultures like never
          before!
        </p>
        <div data-aos="fade-right" className="w-fit mx-auto lg:mx-0">
          <button className="rounded-lg bg-primary text-white hover:translate-y-[-10px] duration-300 transition-all flex p-3">
            <IoIosArrowRoundForward className="text-2xl" /> Let's learn
          </button>
        </div>
      </div>
      <div className="w-10/12 h-full " data-aos="fade-up">
        <img className="w-full h-full" src={learning} alt="" />
      </div>
    </div>
  );
};

export default Banner;
