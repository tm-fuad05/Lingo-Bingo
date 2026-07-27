import React from "react";
import { motion } from "framer-motion";
import { FaLaptop } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";

const featureItems = [
  {
    id: 1,
    icon: FaLaptop,
    title: "Online Tutoring",
    description: "Interactive sessions with native speakers",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: 2,
    icon: FaBookOpen,
    title: "50+ Courses",
    description: "Tailored for all proficiency levels",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    icon: MdAccessTime,
    title: "Lifetime Access",
    description: "Learn at your own comfortable pace",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    id: 4,
    icon: IoIosPeople,
    title: "Active Community",
    description: "Practice with thousands of learners",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Features = () => {
  return (
    <section className="py-12 my-4 w-full">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featureItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-gray-100/80 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-primary/20 flex items-start gap-4 transition-all duration-300 group"
              >
                {/* Icon Box */}
                <div
                  className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`text-xl sm:text-2xl ${item.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-heading leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
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

export default Features;
