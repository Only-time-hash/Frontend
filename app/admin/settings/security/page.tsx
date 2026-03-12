"use client"

import { useState } from "react"

export default function SecuritySettings(){

const [settings,setSettings] = useState({
require2FA:false,
sessionTimeout:30,
passwordPolicy:"strong"
})

async function save(){

await fetch("/api/admin/settings/security",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify(settings)
})

alert("Security settings saved")

}

return(

<div className="w-full space-y-6">

<h1 className="text-3xl font-bold">
Security Settings
</h1>

<p className="text-gray-500">
Manage authentication and platform security
</p>

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<div className="flex justify-between items-center">

<div>
<p className="font-medium">Require 2FA for Admins</p>
<p className="text-xs text-gray-400">
Force two factor authentication for administrators
</p>
</div>

<input
type="checkbox"
checked={settings.require2FA}
onChange={(e)=>setSettings({...settings,require2FA:e.target.checked})}
/>

</div>

<div>

<label className="text-sm text-gray-600">
Session Timeout (minutes)
</label>

<input
type="number"
value={settings.sessionTimeout}
onChange={(e)=>setSettings({...settings,sessionTimeout:Number(e.target.value)})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>

</div>

<div>

<label className="text-sm text-gray-600">
Password Policy
</label>

<select
value={settings.passwordPolicy}
onChange={(e)=>setSettings({...settings,passwordPolicy:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
>

<option value="basic">Basic</option>
<option value="strong">Strong</option>
<option value="enterprise">Enterprise</option>

</select>

</div>

<button
onClick={save}
className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
>

Save Security Settings

</button>

</div>

</div>

)

}