export default function ActivityLogs(){

const logs=[
 {user:"John",action:"Uploaded dataset",time:"2 minutes ago"},
 {user:"Anna",action:"Ran AI analysis",time:"10 minutes ago"},
 {user:"Mike",action:"Deleted dataset",time:"30 minutes ago"}
]

return(

<div className="bg-white p-6 rounded-xl shadow mt-6">

<h3 className="font-semibold mb-4">
Activity Logs
</h3>

<table className="w-full text-sm">

<thead className="text-left text-gray-500">
<tr>
<th>User</th>
<th>Action</th>
<th>Time</th>
</tr>
</thead>

<tbody>

{logs.map((log,i)=>(
<tr key={i} className="border-t">

<td>{log.user}</td>
<td>{log.action}</td>
<td>{log.time}</td>

</tr>
))}

</tbody>

</table>

</div>

)

}