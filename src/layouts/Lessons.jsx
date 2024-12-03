import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import LessonCards from "./LessonCards";
import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Lessons = () => {
  const data = useLoaderData();
  const lessonNoStr = useParams();
  const lessonNo = parseInt(lessonNoStr.lesson_no);

  const vocabularies = data.filter((data) => data.lesson_no === lessonNo);
  console.log(vocabularies);

  return (
    <div>
      <div className="bg-primary min-h-32 flex flex-col md:flex-row gap-2 justify-center items-center ">
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center">
          Vocabularies: Lesson {lessonNo}
        </h2>
        <FaAnglesDown className="text-2xl lg:text-3xl text-white" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-10">
        {vocabularies.map((vocabulary) => (
          <LessonCards vocabulary={vocabulary}></LessonCards>
        ))}
      </div>
      <div className="w-fit mx-auto mb-10">
        <Link
          className="btn bg-primary btn-sm md:btn-md text-white"
          to="/start-learning"
        >
          Back to Lesson
        </Link>
      </div>
    </div>
  );
};

export default Lessons;
