"use client"

import { motion } from "framer-motion"
import { Upload, Brain, BarChart3 } from "lucide-react"

export default function HowItWorks(){

return(

<section id="how" className="py-20 max-w-6xl mx-auto px-6 text-white">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="text-center mb-16"
>

<h2 className="text-4xl md:text-5xl font-bold">

How{" "}
<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
EDA AI Works
</span>

</h2>

<p className="text-gray-400 mt-4 max-w-xl mx-auto">
Analyze datasets instantly with intelligent automation.
</p>

</motion.div>


<div className="grid md:grid-cols-3 gap-10">


{/* STEP 1 */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition"
>

<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">

<Upload size={22}/>

</div>

<h3 className="text-xl font-semibold mb-2">

Upload Dataset

</h3>

<p className="text-gray-400">

Upload CSV, Excel or dataset files directly into the AI engine.

</p>

</motion.div>


{/* STEP 2 */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.1}}
viewport={{once:true}}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition"
>

<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">

<Brain size={22}/>

</div>

<h3 className="text-xl font-semibold mb-2">

AI Analysis

</h3>

<p className="text-gray-400">

The AI automatically performs exploratory data analysis.

</p>

</motion.div>


{/* STEP 3 */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.2}}
viewport={{once:true}}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition"
>

<div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">

<BarChart3 size={22}/>

</div>

<h3 className="text-xl font-semibold mb-2">

Visualize Insights

</h3>

<p className="text-gray-400">

See charts, patterns and AI explanations instantly.

</p>

</motion.div>

</div>

</section>

)
}