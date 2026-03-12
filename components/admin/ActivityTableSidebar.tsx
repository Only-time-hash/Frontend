"use client"

interface Props{
logs:any[]
loading:boolean
}

export default function ActivityTable({logs,loading}:Props){

return(

<div className="bg-white rounded-xl border">

{/* Table */}

<table className="w-full text-sm">

<thead className="bg-gray-50 text-gray-500">

<tr>
<th className="p-3 text-left">Timestamp</th>
<th className="p-3 text-left">Level</th>
<th className="p-3 text-left">Category</th>
<th className="p-3 text-left">Message</th>
<th className="p-3 text-left">User</th>
<th className="p-3 text-left">IP Address</th>
</tr>

</thead>

<tbody>

{/* Loading */}

{loading && (

<tr>
<td colSpan={6} className="text-center p-8 text-gray-400">
Loading system activity...
</td>
</tr>

)}

{/* No logs */}

{!loading && logs.length === 0 && (

<tr>
<td colSpan={6} className="text-center p-10">

<p className="text-gray-500 font-medium">
No activity logs yet
</p>

<p className="text-gray-400 text-sm mt-1">
System events and user activities will appear here once actions occur.
</p>

</td>
</tr>

)}

{/* Real logs */}

{logs.map((log,index)=>(

<tr key={index} className="border-t">

<td className="p-3">{log.timestamp}</td>
<td className="p-3">{log.level}</td>
<td className="p-3">{log.category}</td>
<td className="p-3">{log.message}</td>
<td className="p-3">{log.user}</td>
<td className="p-3">{log.ip}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}