"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Sparkles } from "lucide-react"

export default function Features() {

  return (

    <section
      id="features"
      className="py-20 px-6 max-w-6xl mx-auto"
    >

      {/* Title */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
        className="text-center mb-14"
      >

        <h2 className="text-4xl md:text-5xl font-bold">

          Powerful{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Data Analysis
          </span>

        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Upload your dataset and let AI automatically explore patterns,
          generate visualizations, and uncover insights in seconds.
        </p>

      </motion.div>


      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          viewport={{ once:true }}
          whileHover={{ scale:1.05 }}
          className="group p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition"
        >

          <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">

            <Brain className="text-white" size={24} />

          </div>

          <h3 className="text-xl font-semibold mb-3">
            Automated EDA
          </h3>

          <p className="text-gray-400">
            Instantly profile datasets, detect missing values,
            distributions, correlations and anomalies automatically.
          </p>

        </motion.div>



        {/* Card 2 */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay:0.1 }}
          viewport={{ once:true }}
          whileHover={{ scale:1.05 }}
          className="group p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition"
        >

          <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">

            <BarChart3 className="text-white" size={24} />

          </div>

          <h3 className="text-xl font-semibold mb-3">
            Smart Visualizations
          </h3>

          <p className="text-gray-400">
            AI selects the best charts automatically so you can
            understand relationships between variables instantly.
          </p>

        </motion.div>



        {/* Card 3 */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay:0.2 }}
          viewport={{ once:true }}
          whileHover={{ scale:1.05 }}
          className="group p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition"
        >

          <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">

            <Sparkles className="text-white" size={24} />

          </div>

          <h3 className="text-xl font-semibold mb-3">
            AI Insights
          </h3>

          <p className="text-gray-400">
            Get natural language explanations of trends,
            correlations and hidden patterns in your dataset.
          </p>

        </motion.div>

      </div>

    </section>
  )
}