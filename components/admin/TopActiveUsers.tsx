"use client"

interface User{
 name:string
 email:string
 analyses:number
}

interface Props{
 users?: User[]
}

export default function TopActiveUsers({users=[]}:Props){

 if(users.length === 0){
  return(

   <div className="bg-white p-6 rounded-xl shadow">

    <div className="flex justify-between items-center mb-6">

     <h3 className="font-semibold">
      Top Active Users
     </h3>

     <button className="text-sm border px-3 py-1 rounded-lg">
      View All
     </button>

    </div>

    <div className="text-center py-8 text-gray-500 text-sm">
     No active users yet.
     User activity rankings will appear here once analyses are performed.
    </div>

   </div>

  )
 }

 return(

 <div className="bg-white p-6 rounded-xl shadow">

 <div className="flex justify-between items-center mb-6">

 <h3 className="font-semibold">
 Top Active Users
 </h3>

 <button className="text-sm border px-3 py-1 rounded-lg">
 View All
 </button>

 </div>

 <div className="space-y-4">

 {users.map((user,i)=>(

 <div key={i} className="flex items-center justify-between border p-4 rounded-lg">

 <div className="flex items-center gap-4">

 <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-semibold">
 {i+1}
 </div>

 <div>

 <p className="font-medium text-sm">
 {user.name}
 </p>

 <p className="text-gray-500 text-xs">
 {user.email}
 </p>

 </div>

 </div>

 <div className="text-right">

 <p className="font-semibold">
 {user.analyses}
 </p>

 <p className="text-xs text-gray-500">
 analyses
 </p>

 </div>

 </div>

 ))}

 </div>

 </div>

 )

}