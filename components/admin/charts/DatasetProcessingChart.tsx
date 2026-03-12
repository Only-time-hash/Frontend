"use client"

import { useEffect,useState } from "react"
import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from "recharts"

export default function DatasetProcessingChart(){

const [data,setData] = useState([])

useEffect(()=>{

async function load(){

try{

const res = await fetch("/api/admin/analytics/datasets")

if(!res.ok) return

const result = await res.json()

setData(result)

}catch{

console.log("Dataset analytics not ready")

}

}

load()

},[])

if(data.length === 0){

return(

<div className="text-center py-12 text-gray-500">

No dataset analytics available yet

</div>

)

}

return(

<div> <h3 className="font-semibold mb-4"> Data Processing Performance </h3> <ResponsiveContainer width="100%" height={300}> <BarChart data={data}> <CartesianGrid strokeDasharray="3 3"/> <XAxis dataKey="size"/> <YAxis/> <Tooltip/> <Bar dataKey="datasets" fill="#3b82f6"/> </BarChart> </ResponsiveContainer> </div>

)

}