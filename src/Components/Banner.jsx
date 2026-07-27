import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoArrowForward,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";

const slides = [
  {
    id: 1,
    image:
      "https://ec.europa.eu/eurostat/documents/4187653/15349461/Prostock-studio_AdobeStock_437049103_RV.jpg",
    badge: "Interactive Learning",
    title: "Unlock New Languages: Learn, Practice, Connect!",
    description:
      "Discover the joy of language learning with interactive lessons, real-life examples, and practical vocabulary.",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/912751940/photo/multi-ethnic-university-adult-student-couple-learning-languages-together-in-a-study-hall.jpg?s=612x612&w=0&k=20&c=QNashiIh7FfFA7V7VtXYZ6f0c6_2un0K-ljdR5H9vy4=",
    badge: "Cultural Immersion",
    title: "Master Korean, Japanese & Hindi Effortlessly",
    description:
      "Build your fluency step-by-step from core vocabularies to contextual cultural nuance.",
  },
  {
    id: 3,
    image:
      "https://e0.pxfuel.com/wallpapers/315/33/desktop-wallpaper-english-language-learning-reading-books-english-language-concepts-book-in-hands-for-with-resolution-high-quality.jpg",
    badge: "Gamified Bingo",
    title: "Turn Every Vocabulary Session into a Game",
    description:
      "Earn rewards, level up your skills, and make language learning your favorite daily habit.",
  },
];

const Banner = () => {
  const { user } = useContext(AuthContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className=" relative w-full h-[85vh] min-h-[550px] lg:h-screen overflow-hidden bg-slate-900 selection:bg-primary/30">
      {/* Background Image Carousel with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url("${slides[currentSlide].image}")` }}
        >
          {/* Gradient Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container */}
      <div className="relative z-10 w-11/12 max-w-5xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        {/* Animated Badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white tracking-wider uppercase mb-5"
          >
            <FaGraduationCap className="text-primary-light text-sm" />
            <span>{slides[currentSlide].badge}</span>
          </motion.div>
        </AnimatePresence>

        {/* Animated Heading */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight lg:leading-snug tracking-tight max-w-4xl mb-4"
          >
            {slides[currentSlide].title}
          </motion.h1>
        </AnimatePresence>

        {/* Animated Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-200 text-sm sm:text-base lg:text-lg font-normal max-w-2xl leading-relaxed mb-8"
          >
            {slides[currentSlide].description}
          </motion.p>
        </AnimatePresence>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link to={user ? "/start-learning" : "/auth/login"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-primary hover:bg-indigo-600 text-white font-bold rounded-2xl flex items-center gap-3 shadow-xl shadow-primary/30 transition-all text-sm sm:text-base group"
            >
              <span>Let's Learn</span>
              <IoArrowForward className="text-lg transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Navigation Controls (Arrows) */}
      <div className="absolute z-20 inset-x-4 sm:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 active:scale-95"
          aria-label="Previous Slide"
        >
          <IoChevronBack className="text-lg sm:text-xl" />
        </button>

        <button
          onClick={handleNext}
          className="pointer-events-auto p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 active:scale-95"
          aria-label="Next Slide"
        >
          <IoChevronForward className="text-lg sm:text-xl" />
        </button>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "w-8 bg-primary"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
