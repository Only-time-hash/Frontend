"use client"

import { CheckCircle, Clock } from "lucide-react"

const activities = [
{
email:"john.doe@example.com",
action:"Uploaded new dataset",
file:"sales_q1_2026.csv",
time:"2 min ago"
},
{
email:"sarah.smith@example.com",
action:"Completed analysis",
file:"customer_data.xlsx",
time:"8 min ago"
},
{
email:"mike.johnson@example.com",
action:"Started correlation analysis",
file:"marketing_metrics.csv",
time:"15 min ago"
}
]

export default function RecentActivities(){

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