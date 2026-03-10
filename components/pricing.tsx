"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function Pricing(){

return(

<section className="py-24 px-6 max-w-6xl mx-auto">

{/* Title */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="text-center mb-16"
>

<h2 className="text-4xl md:text-5xl font-bold">

Simple{" "}
<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
Transparent Pricing
</span>

</h2>

<p className="text-gray-400 mt-4 max-w-xl mx-auto">
Choose a plan that fits your data analysis needs.
Upgrade anytime as your datasets grow.
</p>

</motion.div>


{/* Pricing cards */}

<div className="grid md:grid-cols-3 gap-8">

{/* FREE */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition"
>

<h3 className="text-xl font-semibold mb-2">
Free
</h3>

<p className="text-4xl font-bold mb-2">
$0
</p>

<p className="text-gray-400 mb-6">
Perfect for getting started
</p>

<ul className="space-y-3 text-gray-300 mb-8">

<li className="flex items-center gap-2">
<Check size={18} className="text-purple-400"/>
5 datasets
</li>

<li className="flex items-center gap-2">
<Check size={18} className="text-purple-400"/>
50 analyses
</li>

<li className="flex items-center gap-2">
<Check size={18} className="text-purple-400"/>
Basic visualizations
</li>

</ul>

<button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
Get Started
</button>

</motion.div>



{/* PRO */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.1}}
viewport={{once:true}}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-2xl"
>

<h3 className="text-xl font-semibold mb-2">
Pro
</h3>

<p className="text-4xl font-bold mb-2">
$29
</p>

<p className="text-purple-100 mb-6">
For professionals
</p>

<ul className="space-y-3 text-white mb-8">

<li className="flex items-center gap-2">
<Check size={18}/>
Unlimited datasets
</li>

<li className="flex items-center gap-2">
<Check size={18}/>
Unlimited analyses
</li>

<li className="flex items-center gap-2">
<Check size={18}/>
Advanced visualizations
</li>

<li className="flex items-center gap-2">
<Check size={18}/>
Export to PDF
</li>

</ul>

<button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:scale-105 transition">
Start Free Trial
</button>

</motion.div>



{/* ENTERPRISE */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.2}}
viewport={{once:true}}
whileHover={{scale:1.05}}
className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition"
>

<h3 className="text-xl font-semibold mb-2">
Enterprise
</h3>

<p className="text-4xl font-bold mb-2">
Custom
</p>

<p className="text-gray-400 mb-6">
For teams and organizations
</p>

<ul className="space-y-3 text-gray-300 mb-8">

<li className="flex items-center gap-2">
<Check size={18} className="text-purple-400"/>
Everything in Pro
</li>

<li className="flex items-center gap-2">
<Check size={18} className="text-purple-400"/>
Team collaboration
</li>

<li className="flex items-center gap-2">
<Check size={18} className="text-purple-400"/>
Priority support
</li>

<li className="flex items-center gap-2">
<Check size={18} className="text-purple-400"/>
Custom integrations
</li>

</ul>

<button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
Contact Sales
</button>

</motion.div>

</div>

</section>

)

}