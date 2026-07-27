import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaArrowRight,
  FaPlay,
  FaGraduationCap,
} from "react-icons/fa6";
import { Sparkles } from "lucide-react"; // বা react-icons

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const StartLearning = () => {
  const lessons = useLoaderData() || [];

  return (
    <div className="bg-white min-h-screen pb-24 selection:bg-primary/20">
      {/* Dynamic Hero Header */}
      <section className="relative overflow-hidden bg-primary text-white py-20 px-6">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <FaGraduationCap className="text-sm" />
            <span>Interactive Curriculum</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4"
          >
            Choose Your{" "}
            <span className="underline decoration-white/30 underline-offset-8">
              Lesson
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-xl font-light leading-relaxed mb-8"
          >
            Select a module to explore curated vocabulary, grammar rules, and
            cultural contextual usages.
          </motion.p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <FaChevronDown className="text-lg text-white" />
          </motion.div>
        </div>
      </section>

      {/* Lesson Cards Section */}
      <section className="w-11/12 max-w-7xl mx-auto -mt-8 relative z-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Modules Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mt-16">
            Available Language Lessons
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {lessons.map((lesson, idx) => (
            <motion.div
              key={lesson.lesson_no || idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="bg-secondary p-8 rounded-3xl border border-gray-100 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-gray-200 transition-all duration-300">
                {" "}
                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center font-bold text-primary text-lg">
                      {lesson.lesson_no < 10
                        ? `0${lesson.lesson_no}`
                        : lesson.lesson_no}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                      Active
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-heading group-hover:text-primary transition-colors mb-2">
                    Lesson {lesson.lesson_no}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    Core Vocabulary & Grammar Rules designed for fast
                    comprehension.
                  </p>
                </div>
                {/* Action Button */}
                <Link to={`/lessons/${lesson.lesson_no}`} className="w-full">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    className="w-full py-3.5 px-6 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:bg-indigo-600 transition-all duration-300"
                  >
                    <span>View Vocabularies</span>
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1.5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="w-11/12 max-w-5xl mx-auto mt-24 pt-16 border-t border-gray-100">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full mb-3">
            <FaPlay className="text-xs" /> Video Learning Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading">
            Getting Started Tutorials
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Watch our quick intro guide to make the most out of your language
            journey.
          </p>
        </div>

        {/* Video Wrapper */}
        <div className="p-3 bg-secondary rounded-3xl border border-gray-100 shadow-xl mb-10">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/z4qh8BVrb3w?si=Fjepa-jEf-un4Pzl"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link to="/tutorials">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-secondary text-heading font-bold rounded-2xl border border-gray-200 hover:bg-gray-200/60 transition-colors text-sm shadow-sm"
            >
              Explore More Tutorials
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StartLearning;
