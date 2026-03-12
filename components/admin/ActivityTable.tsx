const logs=[
 {user:"John",action:"Uploaded Dataset",time:"2 min ago"},
 {user:"Anna",action:"Ran AI Analysis",time:"10 min ago"},
 {user:"Mike",action:"Deleted Dataset",time:"30 min ago"},
]

export default function ActivityLogs(){

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