import React, { useEffect, useState } from "react";
import { FaPeopleGroup, FaBookOpenReader } from "react-icons/fa6";
import { TbVocabulary } from "react-icons/tb";
import { IoIosVideocam } from "react-icons/io";
import CountUp from "react-countup";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollTrigger from "react-scroll-trigger";

const statsData = [
  {
    id: 1,
    title: "Active Students",
    count: 1250,
    suffix: "+",
    icon: FaPeopleGroup,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    accentColor: "text-indigo-600",
  },
  {
    id: 2,
    title: "Interactive Lessons",
    count: 60,
    suffix: "+",
    icon: FaBookOpenReader,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "text-emerald-600",
  },
  {
    id: 3,
    title: "Vocabularies",
    count: 5000,
    suffix: "+",
    icon: TbVocabulary,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
    accentColor: "text-amber-500",
  },
  {
    id: 4,
    title: "Video Tutorials",
    count: 30,
    suffix: "+",
    icon: IoIosVideocam,
    bgColor: "bg-sky-50",
    iconColor: "text-sky-500",
    accentColor: "text-sky-500",
  },
];

const Success = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className=" w-11/12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full inline-block">
          Impact In Numbers
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading tracking-tight">
          Our Success Story
        </h2>
        <p className="text-gray-500 text-sm sm:text-base font-normal">
          Empowering thousands of language learners worldwide with structured
          vocabulary and interactive content.
        </p>
      </div>

      {/* Counter Grid Container with ScrollTrigger */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group"
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                >
                  <IconComponent
                    className={`text-2xl sm:text-3xl ${item.iconColor}`}
                  />
                </div>

                {/* Counter & Label */}
                <div className="flex flex-col">
                  <div className="flex items-baseline text-2xl sm:text-3xl font-bold text-heading tracking-tight">
                    {counterOn ? (
                      <CountUp start={0} end={item.count} duration={2.5} />
                    ) : (
                      <span>0</span>
                    )}
                    <span className={`ml-0.5 ${item.accentColor}`}>
                      {item.suffix}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-normal mt-0.5">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Success;
