"use client"

import { useState } from "react"
import { Search, MoreVertical } from "lucide-react"

interface User{
name:string
email:string
role:string
status:string
datasets:number
analyses:number
join:string
active:string
}

interface Props{
users?:User[]
}

export default function UserTable({users=[]}:Props){

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

{/* Empty State */}

{filteredUsers.length === 0 ? (

<div className="text-center py-16 text-gray-500 text-sm">
No users registered yet.
Users will appear here once they create accounts.
</div>

) : (

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="text-gray-500 border-b bg-gray-50">

<tr>

<th className="text-left py-3 px-4 font-medium">User</th>
<th className="text-center py-3 px-4 font-medium">Role</th>
<th className="text-center py-3 px-4 font-medium">Status</th>
<th className="text-right py-3 px-4 font-medium">Datasets</th>
<th className="text-right py-3 px-4 font-medium">Analyses</th>
<th className="text-left py-3 px-4 font-medium">Join Date</th>
<th className="text-left py-3 px-4 font-medium">Last Active</th>
<th className="py-3 px-4"></th>

</tr>

</thead>

<tbody>

{filteredUsers.map((user,i)=>(

<tr key={i} className="border-b hover:bg-gray-50 transition">

<td className="py-4 px-4">

<p className="font-medium">{user.name}</p>

<p className="text-gray-500 text-xs">{user.email}</p>

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

<td className="text-right px-4 font-medium">{user.datasets}</td>
<td className="text-right px-4 font-medium">{user.analyses}</td>

<td className="px-4">{user.join}</td>

<td className="px-4 text-gray-500">{user.active}</td>

<td className="px-4 text-right">
<MoreVertical size={16} className="cursor-pointer"/>
</td>

</tr>

))}

</tbody>

</table>

</div>

)}

{/* Bottom Section */}

<div className="flex justify-between items-center mt-6 text-sm text-gray-500">

<p>
Showing {filteredUsers.length} users
</p>

<div className="flex items-center gap-2">

<button className="border px-3 py-1 rounded hover:bg-gray-100">
Previous
</button>

<button className="border px-3 py-1 rounded bg-blue-600 text-white">
1
</button>

<button className="border px-3 py-1 rounded hover:bg-gray-100">
Next
</button>

</div>

</div>

</div>

)

}