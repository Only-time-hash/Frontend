"use client"

import AIchat from "..components/AIChat"
import { useState } from "react"
import { motion } from "framer-motion"
import Papa from "papaparse"

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
BarChart,
Bar
} from "recharts"

export default function Dashboard() {

const [data,setData] = useState<any[]>([])
const [history,setHistory] = useState<string[]>([])

const handleFile = (file:File)=>{

Papa.parse(file,{
header:true,
skipEmptyLines:true,
complete:(results:any)=>{
setData(results.data)
setHistory(prev=>[file.name,...prev])
}
})

}

const columns = data.length ? Object.keys(data[0]) : []

return (

<div className="flex min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

{/* Sidebar */}

<aside className="w-64 border-r border-white/10 p-6 space-y-8">

<h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
EDA AI
</h1>

<nav className="space-y-4 text-gray-300 text-sm">

<p className="hover:text-white cursor-pointer">Dashboard</p>
<p className="hover:text-white cursor-pointer">Datasets</p>
<p className="hover:text-white cursor-pointer">Insights</p>
<p className="hover:text-white cursor-pointer">History</p>
<p className="hover:text-white cursor-pointer">Settings</p>

</nav>

</aside>


{/* Main */}

<main className="flex-1 p-10 space-y-10 overflow-auto">

{/* Header */}

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
className="flex justify-between items-center"
>

<h2 className="text-3xl font-bold">
Dashboard
</h2>

<label className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-lg cursor-pointer hover:scale-105 transition">

Upload Dataset
<input
type="file"
accept=".csv"
className="hidden"
onChange={(e:any)=>handleFile(e.target.files[0])}
/>

</label>

</motion.div>


{/* Drag Upload */}

<motion.div
whileHover={{scale:1.02}}
className="border-2 border-dashed border-white/10 rounded-xl p-10 text-center"
>

<p className="text-lg font-semibold">
Drag & Drop Dataset
</p>

<p className="text-gray-400 text-sm mt-2">
Upload CSV file to analyze your data
</p>

<input
type="file"
accept=".csv"
className="mt-4"
onChange={(e:any)=>handleFile(e.target.files[0])}
/>

</motion.div>


{/* Dataset Table */}

{data.length > 0 && (

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="bg-white/5 border border-white/10 rounded-xl p-6 overflow-auto"
>

<h3 className="text-xl font-semibold mb-4">
Dataset Preview
</h3>

<table className="w-full text-sm">

<thead className="bg-white/5">

<tr>
{columns.map((col)=>(
<th key={col} className="p-3 text-left">{col}</th>
))}
</tr>

</thead>

<tbody>

{data.slice(0,10).map((row:any,i)=>(
<tr key={i} className="border-t border-white/10">

{columns.map(col=>(
<td key={col} className="p-3">{row[col]}</td>
))}

</tr>
))}

</tbody>

</table>

</motion.div>

)}


{/* Charts */}

<div className="grid md:grid-cols-2 gap-8">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="bg-white/5 border border-white/10 rounded-xl p-6"
>

<h3 className="mb-4 text-lg font-semibold">
Data Trends
</h3>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={data.slice(0,6)}>

<XAxis dataKey={columns[0]}/>
<YAxis/>
<Tooltip/>
<Line type="monotone" dataKey={columns[1]} stroke="#a855f7"/>

</LineChart>

</ResponsiveContainer>

</motion.div>


<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="bg-white/5 border border-white/10 rounded-xl p-6"
>

<h3 className="mb-4 text-lg font-semibold">
Distribution
</h3>

<ResponsiveContainer width="100%" height={250}>

<BarChart data={data.slice(0,6)}>

<XAxis dataKey={columns[0]}/>
<YAxis/>
<Tooltip/>
<Bar dataKey={columns[1]} fill="#6366f1"/>

</BarChart>

</ResponsiveContainer>

</motion.div>

</div>


{/* AI Insights */}

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="bg-white/5 border border-white/10 rounded-xl p-6"
>

<h3 className="text-xl font-semibold mb-4">
🤖 AI Insights
</h3>

<ul className="space-y-3 text-gray-300 text-sm">

<li>• Dataset successfully loaded.</li>
<li>• Columns detected: {columns.length}</li>
<li>• AI analysis will activate when backend is connected.</li>

</ul>

</motion.div>


{/* Dataset History */}

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="bg-white/5 border border-white/10 rounded-xl p-6"
>

<h3 className="text-xl font-semibold mb-4">
📂 Dataset History
</h3>

<div className="space-y-2 text-gray-300 text-sm">

{history.map((file,i)=>(
<p key={i} className="flex justify-between border-b border-white/10 pb-2">

{file}
<span className="text-gray-500">recent</span>

</p>
))}

</div>

</motion.div>

</main>

</div>

)
}