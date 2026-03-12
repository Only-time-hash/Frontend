"use client"

import { useEffect, useState } from "react"
import ActivityTable from "@/components/admin/ActivityTable"
import MetricCard from "@/components/admin/MetricCard"

export default function ActivityLogsPage(){

const [logs,setLogs] = useState<any[]>([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

async function fetchLogs(){

try{

const res = await fetch("/api/logs")

if(res.ok){
const data = await res.json()
setLogs(data)
}else{
setLogs([])
}

}catch{
setLogs([])
}

setLoading(false)

}

fetchLogs()

},[])

const totalEvents = logs.length
const errors = logs.filter(l=>l.level==="error").length
const warnings = logs.filter(l=>l.level==="warning").length
const success = logs.filter(l=>l.level==="success").length

const successRate =
totalEvents > 0
? ((success / totalEvents) * 100).toFixed(1)
: "0"

return(

<div className="space-y-6">

<h1 className="text-2xl font-semibold">
Activity Logs
</h1>

<p className="text-gray-500 text-sm">
Monitor system events and user activities
</p>

<div className="grid grid-cols-4 gap-4">

<MetricCard title="Total Events" value={totalEvents} />

<MetricCard title="Errors Today" value={errors} />

<MetricCard title="Warnings" value={warnings} />

<MetricCard title="Success Rate" value={`${successRate}%`} />

</div>

<ActivityTable
logs={logs}
loading={loading}
/>

</div>

)

}