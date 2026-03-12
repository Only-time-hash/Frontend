"use client"

import { CheckCircle } from "lucide-react"

interface Activity{
 email:string
 action:string
 file:string
 time:string
}

interface Props{
 activities?: Activity[]
}

export default function RecentActivities({activities=[]}:Props){

 if(activities.length === 0){
  return(

   <div className="bg-white p-6 rounded-xl shadow">

    <div className="flex justify-between items-center mb-6">

     <h3 className="font-semibold">
      Recent Activities
     </h3>

     <button className="text-sm border px-3 py-1 rounded-lg">
      View All
     </button>

    </div>

    <div className="text-center py-8 text-gray-500 text-sm">
     No activity recorded yet.
     User uploads and analyses will appear here.
    </div>

   </div>

  )
 }

 return(

 <div className="bg-white p-6 rounded-xl shadow">

 <div className="flex justify-between items-center mb-6">

 <h3 className="font-semibold">
 Recent Activities
 </h3>

 <button className="text-sm border px-3 py-1 rounded-lg">
 View All
 </button>

 </div>

 <div className="space-y-4">

 {activities.map((activity,i)=>(

 <div key={i} className="flex items-start gap-4 p-4 border rounded-lg">

 <CheckCircle className="text-green-500" size={18}/>

 <div className="flex-1">

 <p className="font-medium text-sm">
 {activity.email}
 </p>

 <p className="text-gray-500 text-sm">
 {activity.action}
 </p>

 <p className="text-blue-600 text-sm">
 {activity.file}
 </p>

 </div>

 <span className="text-xs text-gray-400">
 {activity.time}
 </span>

 </div>

 ))}

 </div>

 </div>

 )

}