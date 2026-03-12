"use client"

import { useState } from "react"

export default function APISettings(){

const [api,setApi] = useState({
enablePublicAPI:true,
rateLimit:1000
})

async function save(){

await fetch("/api/admin/settings/api",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify(api)
})

alert("API settings saved")

}

return(

<div className="w-full space-y-6">

<h1 className="text-3xl font-bold">
API Settings
</h1>

<p className="text-gray-500">
Manage API access and limits
</p>

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<div className="flex justify-between">

<p>Enable Public API</p>

<input
type="checkbox"
checked={api.enablePublicAPI}
onChange={(e)=>setApi({...api,enablePublicAPI:e.target.checked})}
/>

</div>

<div>

<label className="text-sm">
API Rate Limit (requests/min)
</label>

<input
type="number"
value={api.rateLimit}
onChange={(e)=>setApi({...api,rateLimit:Number(e.target.value)})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>

</div>

<button
onClick={save}
className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
>

Save API Settings

</button>

</div>

</div>

)

}