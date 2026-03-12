"use client"

import { useEffect, useState } from "react"
import MetricCard from "@/components/admin/MetricCard"
import PerformanceChart from "@/components/admin/charts/PerformanceChart"
import ErrorChart from "@/components/admin/charts/ErrorChart"
import DatasetProcessingChart from "@/components/admin/charts/DatasetProcessingChart"

export default function SystemAnalytics(){

const [tab,setTab] = useState("performance")

const [metrics,setMetrics] = useState({
responseTime:0,
successRate:0,
sessionDuration:0,
dailyUsers:0
})

useEffect(()=>{

async function loadMetrics(){

try{

const res = await fetch("/api/admin/analytics/metrics")

if(!res.ok) return

const data = await res.json()

setMetrics({
responseTime:data.responseTime || 0,
successRate:data.successRate || 0,
sessionDuration:data.sessionDuration || 0,
dailyUsers:data.dailyUsers || 0
})

}catch{

console.log("Metrics API not ready")

}

}

loadMetrics()

},[])

return(

<div className="w-full space-y-6">

{/* Header */}

<div className="flex justify-between items-center">

<div>
<h1 className="text-3xl font-bold">System Analytics</h1>
<p className="text-gray-500">
Detailed performance and usage metrics
</p>
</div>

<button className="border px-4 py-2 rounded-lg text-sm">
Export Report
</button>

</div>

{/* Metrics */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<MetricCard
title="Avg Response Time"
value={`${metrics.responseTime}ms`}
/>

<MetricCard
title="API Success Rate"
value={`${metrics.successRate}%`}
/>

<MetricCard
title="Avg Session Duration"
value={`${metrics.sessionDuration}m`}
/>

<MetricCard
title="Daily Active Users"
value={metrics.dailyUsers}
/>

</div>

{/* Tabs */}

<div className="flex gap-6 border-b">

<button
onClick={()=>setTab("performance")}
className={`pb-2 ${tab==="performance" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
>
Performance
</button>

<button
onClick={()=>setTab("usage")}
className={`pb-2 ${tab==="usage" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
>
Usage Analytics
</button>

<button
onClick={()=>setTab("errors")}
className={`pb-2 ${tab==="errors" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
>
Errors
</button>

<button
onClick={()=>setTab("features")}
className={`pb-2 ${tab==="features" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
>
Feature Usage
</button>

</div>

{/* Charts */}

{tab==="performance" && (

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<PerformanceChart/>

<ErrorChart/>

</div>

)}

{tab==="features" && (

<div className="bg-white rounded-xl shadow p-6">

<DatasetProcessingChart/>

</div>

)}

{tab==="usage" && (

<div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">

Usage analytics will appear once user activity begins.

</div>

)}

{tab==="errors" && (

<div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">

Error monitoring will appear when system logs are available.

</div>

)}

</div>

)

}