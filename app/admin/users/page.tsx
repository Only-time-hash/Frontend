"use client"

import { useState, useEffect } from "react"
import MetricCard from "@/components/admin/MetricCard"
import UserTable from "@/components/admin/UserTable"

export default function UserManagement() {

const [stats,setStats] = useState({
 totalUsers:0,
 activeToday:0,
 newThisWeek:0,
 suspended:0
})

useEffect(()=>{

 async function loadUserStats(){

  try{

   const res = await fetch("/api/admin/users/stats")

   if(!res.ok) return

   const data = await res.json()

   setStats({
    totalUsers:data.totalUsers || 0,
    activeToday:data.activeToday || 0,
    newThisWeek:data.newThisWeek || 0,
    suspended:data.suspended || 0
   })

  }catch(err){

   console.log("User stats API not ready yet")

  }

 }

 loadUserStats()

},[])

return (

<div className="w-full">

<h1 className="text-3xl font-bold">
User Management
</h1>

<p className="text-gray-500 mb-8">
Manage and monitor platform users
</p>

{/* Top Stats */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<MetricCard
title="Total Users"
value={stats.totalUsers}
sub=""
/>

<MetricCard
title="Active Today"
value={stats.activeToday}
sub=""
/>

<MetricCard
title="New This Week"
value={stats.newThisWeek}
sub=""
/>

<MetricCard
title="Suspended"
value={stats.suspended}
sub=""
/>

</div>

{/* User Table */}

<div className="bg-white rounded-xl shadow">

<UserTable/>

</div>

</div>

)

}