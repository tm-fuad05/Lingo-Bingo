import React, { useEffect, useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlinePlayLesson } from "react-icons/md";
import { TbVocabulary } from "react-icons/tb";
import { IoIosVideocam } from "react-icons/io";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollTrigger from "react-scroll-trigger";
const Success = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="flex flex-col gap-8 mb-10">
      <h3 className="text-heading text-2xl md:text-4xl font-bold text-center">
        Our Success
      </h3>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto"
          data-aos="fade-up"
        >
          <div className="flex gap-2 items-center ">
            <div className="bg-[#e6e5ff]  p-3 rounded-full">
              <FaPeopleGroup className="text-4xl lg:text-5xl text-[#a5a3ef]" />
            </div>
            <div>
              {counterOn && (
                <CountUp
                  start={0}
                  end={1250}
                  duration="3"
                  className="text-heading text-xl lg:text-2xl font-semibold"
                ></CountUp>
              )}
              <span className="text-[#a5a3ef] text-xl lg:text-2xl font-semibold">
                {" "}
                +
              </span>
              <p className="text-gray-500">Activate Students</p>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="bg-green-200 p-3 rounded-full">
              <MdOutlinePlayLesson className="text-4xl lg:text-5xl text-green-500" />
            </div>
            <div>
              {counterOn && (
                <CountUp
                  start={0}
                  end={60}
                  duration="3"
                  className="text-heading text-xl lg:text-2xl font-semibold"
                ></CountUp>
              )}
              <span className="text-green-500 text-xl lg:text-2xl font-semibold">
                {" "}
                +
              </span>
              <p className="text-gray-500">Lessons</p>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="p-3 rounded-full bg-[#fff4df]">
              <TbVocabulary className="text-4xl lg:text-5xl text-[#ffb830]" />
            </div>
            <div>
              {counterOn && (
                <CountUp
                  start={0}
                  end={5000}
                  className="text-heading text-xl lg:text-2xl font-semibold"
                ></CountUp>
              )}
              <span className="text-[#ffb830] text-xl lg:text-2xl font-semibold">
                {" "}
                +
              </span>
              <p className="text-gray-500">Vocabularies</p>
            </div>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="p-3 rounded-full bg-sky-100 ">
              <IoIosVideocam className="text-sky-500 text-4xl lg:text-5xl" />
            </div>
            <div>
              <div>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={30}
                    duration="3"
                    className="text-heading text-xl lg:text-2xl font-semibold"
                  ></CountUp>
                )}
                <span className="text-sky-500 text-xl lg:text-2xl font-semibold">
                  {" "}
                  +
                </span>
              </div>
              <p className="text-gray-500">Tutorials</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Success;
