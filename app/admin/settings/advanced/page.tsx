"use client"

import { useState } from "react"

export default function AdvancedSettings(){

const [advanced,setAdvanced] = useState({
debugMode:false,
logRetention:30
})

async function save(){

await fetch("/api/admin/settings/advanced",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify(advanced)
})

alert("Advanced settings saved")

}

return(

<div className="w-full space-y-6">

<h1 className="text-3xl font-bold">
Advanced Settings
</h1>

<p className="text-gray-500">
Advanced system configuration
</p>

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<div className="flex justify-between">

<p>Debug Mode</p>

<input
type="checkbox"
checked={advanced.debugMode}
onChange={(e)=>setAdvanced({...advanced,debugMode:e.target.checked})}
/>

</div>

<div>

<label className="text-sm">
Log Retention (days)
</label>

<input
type="number"
value={advanced.logRetention}
onChange={(e)=>setAdvanced({...advanced,logRetention:Number(e.target.value)})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>

</div>

<button
onClick={save}
className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
>

Save Advanced Settings

</button>

</div>

</div>

)
}