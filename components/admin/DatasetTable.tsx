"use client"

import { useState } from "react"
import { Search, MoreVertical } from "lucide-react"

interface Dataset{
name:string
owner:string
type:string
size:string
rows:number
columns:number
uploadDate:string
analyses:number
}

interface Props{
datasets?:Dataset[]
}

export default function DatasetTable({datasets=[]}:Props){

const [type,setType] = useState("All")

const filteredDatasets =
type === "All"
? datasets
: datasets.filter(d=>d.type === type)

return(

<div className="p-6">

{/* Search + Filter */}

<div className="flex justify-between items-center mb-6">

<div className="flex items-center gap-3">

<div className="flex items-center border rounded-lg px-3 py-2 w-80">

<Search size={16}/>

<input
placeholder="Search datasets by name or owner..."
className="ml-2 outline-none w-full text-sm"
/>

</div>

<select
value={type}
onChange={(e)=>setType(e.target.value)}
className="border px-3 py-2 rounded-lg text-sm"
>

<option value="All">All Types</option>
<option value="CSV">CSV</option>
<option value="Excel">Excel</option>

</select>

</div>

<button className="border px-4 py-2 rounded-lg text-sm">
Export Report
</button>

</div>

{/* Empty State */}

{filteredDatasets.length === 0 ?(

<div className="text-center py-16 text-gray-500 text-sm">

No datasets uploaded yet.
Datasets will appear here when users upload them.

</div>

):( 

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="border-b bg-gray-50 text-gray-500">

<tr>

<th className="text-left px-4 py-3">Dataset Name</th>
<th className="px-4 py-3 text-left">Owner</th>
<th className="px-4 py-3 text-center">Type</th>
<th className="px-4 py-3 text-right">Size</th>
<th className="px-4 py-3 text-right">Rows</th>
<th className="px-4 py-3 text-right">Columns</th>
<th className="px-4 py-3 text-left">Upload Date</th>
<th className="px-4 py-3 text-right">Analyses</th>
<th className="px-4 py-3"></th>

</tr>

</thead>

<tbody>

{filteredDatasets.map((d,i)=>(

<tr key={i} className="border-b hover:bg-gray-50">

<td className="px-4 py-4 font-medium">
{d.name}
</td>

<td className="px-4">
{d.owner}
</td>

<td className="text-center px-4">
<span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
{d.type}
</span>
</td>

<td className="text-right px-4">
{d.size}
</td>

<td className="text-right px-4">
{d.rows}
</td>

<td className="text-right px-4">
{d.columns}
</td>

<td className="px-4">
{d.uploadDate}
</td>

<td className="text-right px-4 font-medium">
{d.analyses}
</td>

<td className="text-right px-4">
<MoreVertical size={16}/>
</td>

</tr>

))}

</tbody>

</table>

</div>

)}

</div>

)

}