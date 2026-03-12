"use client"

import {LineChart,Line,XAxis,YAxis,Tooltip,BarChart,Bar} from "recharts"

interface Props{
 userData?: {month:string,users:number}[]
 aiUsage?: {day:string,value:number}[]
}

export default function UsageCharts({userData=[],aiUsage=[]}:Props){

 const noData = userData.length === 0 && aiUsage.length === 0

 if(noData){
  return(

   <div className="bg-white p-8 rounded-xl shadow text-center">

    <h3 className="font-semibold text-lg mb-2">
     Analytics
    </h3>

    <p className="text-gray-500 text-sm">
     No analytics data yet.
     User growth and AI usage charts will appear once activity begins.
    </p>

   </div>

  )
 }

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