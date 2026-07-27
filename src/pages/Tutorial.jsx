import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaChevronDown, FaArrowRight, FaVideo } from "react-icons/fa6";
import Videos from "../Components/Category Video/Videos";

const Tutorial = () => {
  return (
    <div className="bg-white min-h-screen pb-20 selection:bg-primary/20">
      <Helmet>
        <title>Tutorial | Lingo Bingo</title>
      </Helmet>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-primary text-white py-16 lg:py-20 px-6 shadow-inner">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase mb-5"
          >
            <FaVideo className="text-xs" />
            <span>Free Learning Resources</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4"
          >
            Free Tutorial{" "}
            <span className="underline decoration-white/30 underline-offset-8">
              Videos
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white/80 text-sm sm:text-base max-w-lg font-normal leading-relaxed mb-6"
          >
            Watch our step-by-step video tutorials to build your vocabulary,
            pronounce accurately, and practice daily conversations.
          </motion.p>

          {/* Animated Scroll Arrow */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <FaChevronDown className="text-base text-white" />
          </motion.div>
        </div>
      </section>

      {/* Main Video Content Section */}
      <main className="w-11/12 max-w-7xl mx-auto my-12 lg:my-16">
        {/* Videos Component Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <Videos />
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-secondary p-8 md:p-10 rounded-3xl border border-gray-100/80 text-center max-w-2xl mx-auto shadow-sm"
        >
          <h3 className="text-2xl font-bold text-heading mb-2">
            Ready to test your vocabulary?
          </h3>
          <p className="text-gray-500 text-sm mb-6 font-normal">
            Jump into our interactive lesson modules to practice words and track
            your learning progress.
          </p>

          <Link to="/start-learning" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-primary hover:bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all text-sm group"
            >
              <span>Learn Vocabularies</span>
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Tutorial;
