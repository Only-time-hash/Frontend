"use client"

import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts"

const data = [
{feature:"Price",value:0.8},
{feature:"Demand",value:0.6},
{feature:"Ads",value:0.4},
{feature:"Season",value:0.2}
]

export default function ChatChart(){

return(

<div className="w-[300px] h-[200px]">

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="feature"/>
<YAxis/>
<Tooltip/>

<Bar dataKey="value" fill="#7c3aed"/>

</BarChart>

</ResponsiveContainer>

</div>

)

}