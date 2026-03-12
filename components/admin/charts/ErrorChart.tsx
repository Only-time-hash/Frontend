"use client"

import { useEffect,useState } from "react"
import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from "recharts"

export default function ErrorChart(){

const [data,setData] = useState([])

useEffect(()=>{

async function load(){

try{

const res = await fetch("/api/admin/analytics/errors")

if(!res.ok) return

const result = await res.json()

setData(result)

}catch{

console.log("Error analytics not ready")

}

}

load()

},[])

if(data.length === 0){

return(

<div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">

No error analytics available yet

</div>

)

}

return(

<div className="bg-white rounded-xl shadow p-6"> <h3 className="font-semibold mb-4"> Error Rate Trends </h3> <ResponsiveContainer width="100%" height={250}> <LineChart data={data}> <CartesianGrid strokeDasharray="3 3"/> <XAxis dataKey="day"/> <YAxis/> <Tooltip/> <Line type="monotone" dataKey="errorRate" stroke="#ef4444"/> </LineChart> </ResponsiveContainer> </div>

)

}