import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaMobileAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";

const features = [
  {
    id: 1,
    icon: FaBrain,
    title: "Boost Vocabulary",
    description:
      "Learn new words daily with engaging and interactive exercises.",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 2,
    icon: TbWorld,
    title: "Global Reach",
    description:
      "Explore and learn vocabulary from multiple languages effortlessly.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    icon: IoTimeOutline,
    title: "Flexible Learning",
    description: "Learn at your own pace, anytime and anywhere that suits you.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 4,
    icon: FaMobileAlt,
    title: "Mobile Ready",
    description:
      "Access our platform seamlessly across all your mobile devices.",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
];

// Container Variants for Staggered Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Child Variants for Individual Cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const JoinUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-wide uppercase"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-heading mt-2 leading-tight"
          >
            Why You Should Learn With Lingo Bingo?
          </motion.h2>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-secondary p-6 md:p-8 rounded-2xl border border-gray-100/80 flex items-start gap-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-200/50 group"
              >
                {/* Animated Icon Wrapper */}
                <div
                  className={`p-4 rounded-2xl ${item.iconBg} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`text-2xl lg:text-3xl ${item.iconColor}`} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl lg:text-22px font-bold text-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
