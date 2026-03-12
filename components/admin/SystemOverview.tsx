"use client"

import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts"

const datasetData=[
 {name:"CSV",value:8234},
 {name:"Excel",value:6842},
 {name:"JSON",value:2318},
 {name:"Other",value:1000},
]

const colors=["#2563eb","#10b981","#f59e0b","#6b7280"]

const systemHealth=[
 {name:"CPU",value:45},
 {name:"Memory",value:62},
 {name:"Storage",value:38},
 {name:"Network",value:28},
]

export default function SystemOverview(){

return(

<div className="grid grid-cols-2 gap-6 mt-6">

{/* Dataset Distribution */}

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
Dataset Distribution
</h3>

<PieChart width={400} height={250}>
<Pie
data={datasetData}
dataKey="value"
cx="50%"
cy="50%"
outerRadius={80}
label
>

{datasetData.map((entry,index)=>(
<Cell key={index} fill={colors[index]} />
))}

</Pie>

<Tooltip/>

</PieChart>

</div>

{/* System Health */}

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold mb-4">
System Health Metrics
</h3>

<BarChart width={400} height={250} data={systemHealth} layout="vertical">

<XAxis type="number"/>
<YAxis type="category" dataKey="name"/>
<Tooltip/>

<Bar dataKey="value" fill="#10b981"/>

</BarChart>

</div>

</div>

)

}