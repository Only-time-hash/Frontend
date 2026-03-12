"use client"

import { useState } from "react"

export default function EmailSettings(){

const [email,setEmail] = useState({
smtpHost:"",
smtpPort:587,
smtpUser:"",
smtpPassword:""
})

async function save(){

await fetch("/api/admin/settings/email",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify(email)
})

alert("Email settings saved")

}

return(

<div className="w-full space-y-6">

<h1 className="text-3xl font-bold">
Email Settings
</h1>

<p className="text-gray-500">
Configure SMTP email delivery
</p>

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<div>

<label className="text-sm">SMTP Host</label>

<input
value={email.smtpHost}
onChange={(e)=>setEmail({...email,smtpHost:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>

</div>

<div>

<label className="text-sm">SMTP Port</label>

<input
type="number"
value={email.smtpPort}
onChange={(e)=>setEmail({...email,smtpPort:Number(e.target.value)})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>

</div>

<div>

<label className="text-sm">SMTP Username</label>

<input
value={email.smtpUser}
onChange={(e)=>setEmail({...email,smtpUser:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>

</div>

<div>

<label className="text-sm">SMTP Password</label>

<input
type="password"
value={email.smtpPassword}
onChange={(e)=>setEmail({...email,smtpPassword:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>

</div>

<button
onClick={save}
className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
>

Save Email Settings

</button>

</div>

</div>

)

}