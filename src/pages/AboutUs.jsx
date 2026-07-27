import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaGlobe,
  FaUsers,
  FaCompass,
  FaLightbulb,
  FaSprayCanSparkles,
} from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: FaLightbulb,
    title: "Interactive Learning",
    description:
      "Combining modern teaching techniques with interactive exercises for effective and enjoyable sessions.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 2,
    icon: FaCompass,
    title: "Cultural Insights",
    description:
      "Delving into traditions, history, and nuances that make each language uniquely fascinating.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    icon: FaGlobe,
    title: "Personalized Approach",
    description:
      "Tailored resources to meet your goals—whether for travel, career growth, or personal enrichment.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 4,
    icon: FaUsers,
    title: "Community Focus",
    description:
      "Join a growing network of language enthusiasts who share your passion and support your progress.",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen pb-24 selection:bg-primary/20">
      <Helmet>
        <title>About Us | Lingo Bingo</title>
      </Helmet>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-primary text-white py-16 lg:py-24 px-6 shadow-inner">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase mb-5"
          >
            <FaSprayCanSparkles className="text-xs" />
            <span>Discover Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4"
          >
            About Us —{" "}
            <span className="underline decoration-white/30 underline-offset-8">
              Lingo Bingo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl font-normal leading-relaxed"
          >
            Where language learning meets culture, creativity, and connection.
            Building bridges across borders one lesson at a time.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-11/12 max-w-7xl mx-auto my-16 space-y-20">
        {/* Intro Section with Image Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              Our Vision
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-heading leading-tight">
              Mastering Languages Beyond Words & Grammar
            </h2>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Welcome to{" "}
              <strong className="text-heading font-bold">Lingo Bingo</strong>!
              We are a vibrant platform dedicated to helping learners of all
              levels master Korean, Japanese, and Hindi—three of the world’s
              most captivating languages.
            </p>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              We believe learning a new language is about immersing yourself in
              new ways of thinking, understanding diverse cultures, and building
              real human connection. Our mission is to make this journey fun,
              accessible, and deeply rewarding.
            </p>

            {/* Language Pills */}
            <div className="pt-2 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-rose-50 text-rose-600 rounded-xl font-bold text-sm border border-rose-100">
                🇰🇷 Korean (한국어)
              </span>
              <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-sm border border-indigo-100">
                🇯🇵 Japanese (日本語)
              </span>
              <span className="px-4 py-2 bg-amber-50 text-amber-600 rounded-xl font-bold text-sm border border-amber-100">
                🇮🇳 Hindi (हिंदी)
              </span>
            </div>
          </motion.div>

          {/* Image Cards Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                className="w-full h-64 object-cover rounded-3xl shadow-lg border border-gray-100"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Students studying together"
              />
              <div className="bg-secondary p-6 rounded-3xl border border-gray-100">
                <p className="text-3xl font-bold text-primary mb-1">10k+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Active Learners
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-primary text-white p-6 rounded-3xl shadow-md">
                <FaGraduationCap className="text-3xl mb-2" />
                <p className="text-lg font-bold">Interactive Gamification</p>
              </div>
              <img
                className="w-full h-64 object-cover rounded-3xl shadow-lg border border-gray-100"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                alt="Online learning interface"
              />
            </div>
          </motion.div>
        </section>

        {/* What Sets Us Apart Section */}
        <section className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
              Why Lingo Bingo
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-heading mt-3">
              What Sets Us Apart?
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="bg-secondary p-8 rounded-3xl border border-gray-100/80 flex items-start gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 group"
                >
                  <div
                    className={`p-4 rounded-2xl ${item.iconBg} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`text-2xl ${item.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Culture & Closing Banner */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-secondary border border-gray-100 p-8 lg:p-12 overflow-hidden shadow-sm"
        >
          {/* Header Title */}
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              Cultural Immersion
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading mt-3">
              Unlock Culture & Unlock the World
            </h3>
          </div>

          {/* Language Culture Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Korean Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-50 text-rose-600 text-xs font-bold mb-4">
                  <span>🇰🇷</span> Korean
                </div>
                <h4 className="text-lg font-bold text-heading mb-2">
                  K-Culture & Heritage
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  Unlock the vibrant world of K-dramas, K-pop, and centuries of
                  ancient traditions.
                </p>
              </div>
            </motion.div>

            {/* Japanese Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold mb-4">
                  <span>🇯🇵</span> Japanese
                </div>
                <h4 className="text-lg font-bold text-heading mb-2">
                  Art & Innovation
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  Connect to a rich culture of modern innovation, timeless
                  literature, and art.
                </p>
              </div>
            </motion.div>

            {/* Hindi Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 text-amber-600 text-xs font-bold mb-4">
                  <span>🇮🇳</span> Hindi
                </div>
                <h4 className="text-lg font-bold text-heading mb-2">
                  History & Diversity
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-normal">
                  Open the door to one of the most diverse and historic
                  civilizations on earth.
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA Highlight Banner */}
          <div className="bg-primary text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-primary/20">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-bold">
                Ready to start your journey?
              </h4>
              <p className="text-white/80 text-sm font-normal">
                Join us today at Lingo Bingo and turn your learning goals into
                reality!
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-white text-primary font-bold rounded-xl shadow-sm text-sm whitespace-nowrap hover:bg-gray-50 transition-colors"
            >
              Get Started 🚀
            </motion.button>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutUs;
