import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20 text-center flex flex-col items-center justify-center px-6">
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
      <motion.a
        href="/contact"
        className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all"
        whileHover={{ scale: 1.05 }}
      >
        Get Started
      </motion.a>
    </section>
  );
}
