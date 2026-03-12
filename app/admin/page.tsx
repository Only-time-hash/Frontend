"use client"

import { useEffect, useState } from "react"
import MetricCard from "@/components/admin/MetricCard"
import UsageCharts from "@/components/admin/UsageCharts"
import SystemOverview from "@/components/admin/SystemOverview"
import RecentActivities from "@/components/admin/RecentActivities"
import TopActiveUsers from "@/components/admin/TopActiveUsers"

export default function AdminDashboard(){

const [stats,setStats] = useState({
users:0,
datasets:0,
analyses:0,
queries:0
})

useEffect(()=>{

async function loadStats(){

try{

const res = await fetch("/api/admin/stats")

if(!res.ok) return

const data = await res.json()

setStats(data)

}catch(e){

console.log("API not ready yet")

}

}

loadStats()

},[])

return(

<div className="p-8">

<div className="max-w-7xl mx-auto">

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>

<p className="text-gray-500 mt-1 mb-8">
Platform overview and system metrics
</p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<MetricCard
title="Total Users"
value={stats.users}
sub="Registered users"
/>

<MetricCard
title="Datasets Uploaded"
value={stats.datasets}
sub="Total datasets"
/>

<MetricCard
title="Analyses Today"
value={stats.analyses}
sub="Today's analyses"
/>

<MetricCard
title="AI Queries"
value={stats.queries}
sub="Total queries"
/>

</div>

<div className="mb-8">
<UsageCharts/>
</div>

<div className="mb-8">
<SystemOverview/>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<RecentActivities/>

<TopActiveUsers/>

</div>

</div>

</div>

)

}