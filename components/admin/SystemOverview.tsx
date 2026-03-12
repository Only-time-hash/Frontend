"use client"

import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts"

interface Props{
 datasetData?: {name:string,value:number}[]
 systemHealth?: {name:string,value:number}[]
}

const colors=["#2563eb","#10b981","#f59e0b","#6b7280"]

export default function SystemOverview({
 datasetData=[],
 systemHealth=[]
}:Props){

 const noData = datasetData.length === 0 && systemHealth.length === 0

 if(noData){
  return(

   <div className="bg-white p-8 rounded-xl shadow text-center">

     <h3 className="font-semibold text-lg mb-2">
       System Overview
     </h3>

     <p className="text-gray-500 text-sm">
       No system metrics available yet.
       Dataset distribution and system health will appear when the backend starts sending data.
     </p>

   </div>

  )
 }

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
 <Cell key={index} fill={colors[index % colors.length]} />
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