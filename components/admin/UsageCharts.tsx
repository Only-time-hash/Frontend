"use client"

import {LineChart,Line,XAxis,YAxis,Tooltip,BarChart,Bar} from "recharts"

const userData=[
 {month:"Jan",users:1600},
 {month:"Feb",users:2000},
 {month:"Mar",users:2400},
 {month:"Apr",users:2600},
 {month:"May",users:2800},
 {month:"Jun",users:3000},
]

const aiUsage=[
 {day:"Mon",value:200},
 {day:"Tue",value:350},
 {day:"Wed",value:280},
 {day:"Thu",value:400},
 {day:"Fri",value:370},
 {day:"Sat",value:190},
 {day:"Sun",value:220},
]

export default function UsageCharts(){

 return(

  <div className="grid grid-cols-2 gap-6">

   <div className="bg-white p-6 rounded-xl shadow">

     <h3 className="font-semibold mb-4">
       User Growth
     </h3>

     <LineChart width={420} height={250} data={userData}>
        <XAxis dataKey="month"/>
        <YAxis/>
        <Tooltip/>
        <Line dataKey="users" stroke="#2563eb"/>
     </LineChart>

   </div>

   <div className="bg-white p-6 rounded-xl shadow">

     <h3 className="font-semibold mb-4">
       AI Analyses Per Day
     </h3>

     <BarChart width={420} height={250} data={aiUsage}>
        <XAxis dataKey="day"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="value" fill="#2563eb"/>
     </BarChart>

   </div>

  </div>

 )

}