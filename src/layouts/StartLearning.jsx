import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
const StartLearning = () => {
  const lessons = useLoaderData();

  return (
    <div>
      <div className="bg-primary min-h-32 flex flex-col md:flex-row gap-2 justify-center items-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center">
          Choose your lesson
        </h2>
        <FaAnglesDown className="text-2xl lg:text-3xl text-white" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 w-11/12 mx-auto">
        {lessons.map((lesson, idx) => (
          <div
            key={idx}
            className="bg-secondary p-10 flex flex-col justify-center items-center gap-3 rounded-xl"
          >
            <h3 className="text-xl lg:text-2xl font-semibold">
              Lesson {lesson.lesson_no}
            </h3>
            <p>Vocabularies & Grammars </p>
            <div>
              <Link
                to={`/lessons/${lesson.lesson_no}`}
                className="btn bg-primary text-white border-none"
              >
                View Vocabularies <FaAnglesRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-primary  text-2xl lg:text-4xl font-bold  text-center mb-8">
          Getting Started Videos
        </h2>
        <div className="video-container w-11/12 mx-auto mb-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/z4qh8BVrb3w?si=Fjepa-jEf-un4Pzl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-fit mx-auto mb-10">
          <Link
            className="btn bg-primary btn-sm md:btn-md text-white"
            to="/tutorials"
          >
            View More Tutorials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
