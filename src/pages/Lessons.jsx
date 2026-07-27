import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import LessonCards from "./LessonCards";
import { FaBookOpen, FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const Lessons = () => {
  const data = useLoaderData();
  const { lesson_no } = useParams();
  const lessonNo = parseInt(lesson_no);

  const vocabularies =
    data?.filter((item) => item.lesson_no === lessonNo) || [];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Top Banner Header */}
      <div className="relative bg-gradient-to-r from-primary via-indigo-600 to-primary py-12 lg:py-16 px-4 overflow-hidden shadow-sm">
        {/* Subtle Decorative Backdrop Element */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center text-xl">
            <FaBookOpen />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Vocabularies: Lesson {lessonNo}
          </h1>

          <p className="text-white/80 text-xs sm:text-sm font-normal max-w-md">
            Master these words to improve your fluency and understanding for
            this lesson.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-11/12 max-w-7xl mx-auto my-10 lg:my-14">
        {vocabularies.length > 0 ? (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {vocabularies.map((vocabulary, index) => (
              <LessonCards key={vocabulary.id} vocabulary={vocabulary} />
            ))}
          </div>
        ) : (
          /* Empty State Fallback */
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm text-center max-w-lg mx-auto space-y-4 my-10">
            <p className="text-base sm:text-lg font-bold text-heading">
              No vocabularies found for Lesson {lessonNo}.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 font-normal">
              Please check back later or browse other available lessons.
            </p>
          </div>
        )}

        {/* Back to Start Learning Action Button */}
        <div className="w-fit mx-auto mt-12 lg:mt-16">
          <Link to="/start-learning">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-primary hover:bg-indigo-600 text-white font-bold rounded-2xl flex items-center gap-2.5 shadow-lg shadow-primary/25 transition-all text-sm sm:text-base group"
            >
              <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
              <span>Back to Lessons</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
