"use client"

import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip
} from "recharts"

export default function BeautifulCharts({data}:{data:any[]}){

if(!data?.length) return null

const keys = Object.keys(data[0])

return(

<div className="bg-white p-6 rounded-xl border shadow-sm">

<h3 className="font-semibold mb-4">
Dataset Trend
</h3>

<ResponsiveContainer width="100%" height={300}>

<LineChart data={data.slice(0,10)}>

<XAxis dataKey={keys[0]}/>
<YAxis/>
<Tooltip/>

<Line
type="monotone"
dataKey={keys[1]}
stroke="#2563eb"
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}