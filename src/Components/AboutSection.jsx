import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaGamepad, FaGlobe, FaTrophy } from "react-icons/fa";

const bulletPoints = [
  "Learn vocabulary through interactive bingo games.",
  "Understand words in their rich cultural context.",
  "Progress through levels as you master new words.",
  "Earn rewards and badges for your achievements.",
  "Compete with friends and other global learners.",
];

const AboutSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content & Bullet Points (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
              <FaGlobe className="text-xs" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading tracking-tight">
              Making Language Learning <br />
              <span className="text-primary block mt-1.5">
                Engaging & Rewarding
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              At <strong className="text-heading font-bold">Lingo Bingo</strong>
              , we’re on a mission to revolutionize how you learn Korean,
              Japanese, and Hindi vocabulary. We combine gamified learning with
              cultural depth to make your journey natural and enjoyable.
            </p>

            {/* Bullet Points Grid */}
            <div className="space-y-3.5 pt-2">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/80 border border-gray-100 shadow-sm hover:border-primary/20 transition-all"
                >
                  <div className="w-7 h-7 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-sm" />
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base font-normal">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Closing Note */}
            <div className="pt-4 border-t border-gray-200/60">
              <p className="text-heading text-base sm:text-lg font-bold">
                Join us today and start playing your way to fluency!
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual Feature Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-secondary/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 shadow-lg space-y-6 relative z-10">
              {/* Feature Box 1 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl flex-shrink-0">
                  <FaGamepad />
                </div>
                <div>
                  <h4 className="text-heading text-base font-bold">
                    Gamified Mechanics
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                    Interactive bingo grids designed to enhance memory retention
                    effortlessly.
                  </p>
                </div>
              </div>

              {/* Feature Box 2 */}
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl flex-shrink-0">
                  <FaTrophy />
                </div>
                <div>
                  <h4 className="text-heading text-base font-bold">
                    Rewards & Badges
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                    Track your growth with milestone badges and daily streak
                    bonuses.
                  </p>
                </div>
              </div>

              {/* Stat Highlight Card */}
              <div className="p-5 rounded-2xl bg-primary text-white space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider opacity-80">
                  Global Community
                </span>
                <p className="text-xl sm:text-2xl font-bold">
                  Join over 1,000+ learners
                </p>
              </div>
            </div>

            {/* Backdrop Decorative Card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 via-indigo-400/20 to-transparent rounded-3xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
