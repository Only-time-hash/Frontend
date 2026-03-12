"use client"

import { useEffect, useState } from "react"
import MetricCard from "@/components/admin/MetricCard"
import DatasetTable from "@/components/admin/DatasetTable"

export default function DatasetManagement(){

const [stats,setStats] = useState({
total:0,
csv:0,
excel:0,
other:0
})

useEffect(()=>{

async function loadDatasetStats(){

try{

const res = await fetch("/api/admin/datasets/stats")

if(!res.ok) return

const data = await res.json()

setStats({
total:data.total || 0,
csv:data.csv || 0,
excel:data.excel || 0,
other:data.other || 0
})

}catch(err){

console.log("Dataset stats API not ready")

}

}

loadDatasetStats()

},[])

return(

<div className="w-full">

<h1 className="text-3xl font-bold">
Dataset Management
</h1>

<p className="text-gray-500 mb-8">
Monitor and manage all platform datasets
</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<MetricCard title="Total Datasets" value={stats.total} sub=""/>

<MetricCard title="CSV Files" value={stats.csv} sub=""/>

<MetricCard title="Excel Files" value={stats.excel} sub=""/>

<MetricCard title="Other Formats" value={stats.other} sub=""/>

</div>

<div className="bg-white rounded-xl shadow">

<DatasetTable/>

</div>

</div>

)

}