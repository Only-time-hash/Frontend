"use client"

import { useState } from "react"
import { Search, MoreVertical } from "lucide-react"

const users = [
{
name:"Sarah Smith",
email:"sarah.smith@example.com",
role:"Premium",
status:"Active",
datasets:28,
analyses:342,
join:"Jan 15, 2026",
active:"2 hours ago"
},
{
name:"John Doe",
email:"john.doe@example.com",
role:"Premium",
status:"Active",
datasets:24,
analyses:298,
join:"Jan 8, 2026",
active:"5 hours ago"
},
{
name:"Emma Wilson",
email:"emma.wilson@example.com",
role:"Free",
status:"Active",
datasets:22,
analyses:276,
join:"Dec 20, 2025",
active:"1 day ago"
},
{
name:"Mike Johnson",
email:"mike.johnson@example.com",
role:"Enterprise",
status:"Active",
datasets:19,
analyses:251,
join:"Dec 12, 2025",
active:"3 hours ago"
},
{
name:"David Brown",
email:"david.brown@example.com",
role:"Free",
status:"Inactive",
datasets:18,
analyses:234,
join:"Nov 28, 2025",
active:"1 week ago"
},
{
name:"Lisa Anderson",
email:"lisa.anderson@example.com",
role:"Premium",
status:"Active",
datasets:15,
analyses:189,
join:"Nov 15, 2025",
active:"4 hours ago"
},
{
name:"Robert Garcia",
email:"robert.garcia@example.com",
role:"Free",
status:"Suspended",
datasets:12,
analyses:145,
join:"Oct 30, 2025",
active:"2 weeks ago"
},
{
name:"Jennifer Martinez",
email:"jennifer.martinez@example.com",
role:"Enterprise",
status:"Active",
datasets:32,
analyses:412,
join:"Oct 22, 2025",
active:"1 hour ago"
}
]

export default function UserTable(){

const [status,setStatus] = useState("All")

const filteredUsers =
status === "All"
? users
: users.filter(user => user.status === status)

return(

<div className="bg-white rounded-xl shadow p-6">

{/* Search + Filter */}

<div className="flex justify-between items-center mb-6">

<div className="flex items-center gap-3">

<div className="flex items-center border rounded-lg px-3 py-2 w-80">

<Search size={16}/>

<input
placeholder="Search users by name or email..."
className="ml-2 outline-none w-full text-sm"
/>

</div>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
className="border px-3 py-2 rounded-lg text-sm"
>

<option value="All">All Status</option>
<option value="Active">Active</option>
<option value="Inactive">Inactive</option>
<option value="Suspended">Suspended</option>

</select>

</div>

<button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
+ Add User
</button>

</div>

{/* Table */}

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="text-gray-500 border-b bg-gray-50">

<tr>

<th className="text-left py-3 px-4 font-medium">
User
</th>

<th className="text-center py-3 px-4 font-medium">
Role
</th>

<th className="text-center py-3 px-4 font-medium">
Status
</th>

<th className="text-right py-3 px-4 font-medium">
Datasets
</th>

<th className="text-right py-3 px-4 font-medium">
Analyses
</th>

<th className="text-left py-3 px-4 font-medium">
Join Date
</th>

<th className="text-left py-3 px-4 font-medium">
Last Active
</th>

<th className="py-3 px-4"></th>

</tr>

</thead>

<tbody>

{filteredUsers.map((user,i)=>(

<tr key={i} className="border-b hover:bg-gray-50 transition">

<td className="py-4 px-4">

<p className="font-medium">
{user.name}
</p>

<p className="text-gray-500 text-xs">
{user.email}
</p>

</td>

<td className="text-center px-4">

<span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
{user.role}
</span>

</td>

<td className="text-center px-4">

<span className={`px-2 py-1 rounded text-xs
${user.status === "Active" ? "bg-green-100 text-green-600" : ""}
${user.status === "Inactive" ? "bg-gray-200 text-gray-600" : ""}
${user.status === "Suspended" ? "bg-red-100 text-red-600" : ""}
`}>
{user.status}
</span>

</td>

<td className="text-right px-4 font-medium">
{user.datasets}
</td>

<td className="text-right px-4 font-medium">
{user.analyses}
</td>

<td className="px-4">
{user.join}
</td>

<td className="px-4 text-gray-500">
{user.active}
</td>

<td className="px-4 text-right">

<MoreVertical size={16} className="cursor-pointer"/>

</td>

</tr>

))}

</tbody>

</table>

</div>

{/* Bottom Section */}

<div className="flex justify-between items-center mt-6 text-sm text-gray-500">

<p>
Showing 8 of 8 users
</p>

<div className="flex items-center gap-2">

<button className="border px-3 py-1 rounded hover:bg-gray-100">
Previous
</button>

<button className="border px-3 py-1 rounded bg-blue-600 text-white">
1
</button>

<button className="border px-3 py-1 rounded hover:bg-gray-100">
2
</button>

<button className="border px-3 py-1 rounded hover:bg-gray-100">
3
</button>

<button className="border px-3 py-1 rounded hover:bg-gray-100">
Next
</button>

</div>

</div>

</div>

)

}