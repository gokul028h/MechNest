import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-gradient-to-r from-blue-900 to-indigo-700 text-white 
      pt-32 md:pt-28 pb-20 text-center flex flex-col items-center justify-center px-6"
    >
      {/* Mobile Enroll Now button - visible only on small screens */}
      <div className="absolute top-4 right-4 md:hidden">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white 
          font-semibold px-4 py-2 rounded-lg shadow-lg text-sm animate-pulse-slow"
        >
          🎓 Enroll Now
        </Link>
      </div>

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Design. Analyze. Learn. Succeed with MechNest Solutions.
      </motion.h1>

      <motion.p
        className="max-w-3xl text-lg text-gray-200 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Empowering industries and professionals with cutting-edge design,
        simulation, and training solutions in mechanical engineering.
      </motion.p>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to="/contact"
          className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
}
