"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center text-white px-6">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-bold leading-tight"
      >
        AI-Powered{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Exploratory Data Analysis
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 text-xl max-w-2xl text-gray-300"
      >
        Upload your dataset and let AI automatically discover
        patterns, correlations, and insights through intelligent
        visualizations.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-12 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >

        {/* Scroll to features */}
        <a href="#features">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40 transition duration-300">
            Explore Features
          </button>
        </a>

        {/* Docs */}
        <button className="px-8 py-4 border border-white/40 rounded-full hover:bg-white hover:text-black transition duration-300">
          Documentation
        </button>

      </motion.div>

    </section>
  )
}