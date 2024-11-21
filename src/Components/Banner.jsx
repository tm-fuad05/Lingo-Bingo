import React, { useContext, useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Banner = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 100,
    });
  }, []);
  return (
    <div className="relative">
      <div className="carousel w-full min-h-screen opacity-90 ">
        <div
          id="slide1"
          className="carousel-item relative w-full  bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgb(0, 0, 0) -0%, rgba(16, 16, 16, 0) 100%), url("https://ec.europa.eu/eurostat/documents/4187653/15349461/Prostock-studio_AdobeStock_437049103_RV.jpg")',
          }}
        >
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgb(0, 0, 0) -0%, rgba(16, 16, 16, 0) 100%), url("https://media.istockphoto.com/id/912751940/photo/multi-ethnic-university-adult-student-couple-learning-languages-together-in-a-study-hall.jpg?s=612x612&w=0&k=20&c=QNashiIh7FfFA7V7VtXYZ6f0c6_2un0K-ljdR5H9vy4=")',
          }}
        >
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgb(0, 0, 0) -0%, rgba(16, 16, 16, 0) 100%), url("https://e0.pxfuel.com/wallpapers/315/33/desktop-wallpaper-english-language-learning-reading-books-english-language-concepts-book-in-hands-for-with-resolution-high-quality.jpg")',
          }}
        >
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="w-9/12  lg:min-h-screen flex flex-col gap-5 text-center  lg:text-start  items-center absolute top-0 right-1/2 translate-x-1/2 translate-y-1/2 md:translate-y-1/2 lg:translate-y-1/4">
        <h1
          data-aos="fade-right"
          className="text-4xl  lg:text-6xl leading-tight lg:leading-snug  font-semibold text-gray-200 text-center "
        >
          Unlock New Languages: Learn, Practice, Connect!
        </h1>
        <p
          data-aos="fade-left"
          className=" text-sm md:text-md lg:text-md text-center font-light  text-white"
        >
          Discover the joy of language learning with interactive lessons,
          real-life examples, and practical tips. Build your skills step by
          step, from vocabulary to fluency, and connect with cultures like never
          before!
        </p>
        <div data-aos="fade-right" className="w-fit mx-auto lg:mx-0 ">
          <Link
            to={user && user ? "/start-learning" : "/auth/login"}
            className="rounded-lg bg-primary text-white hover:translate-y-[-10px] duration-300 transition-all flex p-3"
          >
            <IoIosArrowRoundForward className="text-2xl" /> Let's learn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
