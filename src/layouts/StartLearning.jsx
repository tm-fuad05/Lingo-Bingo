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
    </div>
  );
};

export default StartLearning;
