"use client"

import MetricCard from "@/components/admin/MetricCard"
import UserTable from "@/components/admin/UserTable"

export default function UserManagement() {

return (

<div className="w-full">

{/* Page Header */}

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
value="2,847"
sub=""
/>

<MetricCard
title="Active Today"
value="1,423"
sub=""
/>

<MetricCard
title="New This Week"
value="124"
sub=""
/>

<MetricCard
title="Suspended"
value="18"
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