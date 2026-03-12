"use client"

import { useState, useEffect } from "react"

export default function AdminSettings(){

const [tab,setTab] = useState("general")

const [settings,setSettings] = useState({
platformName:"",
supportEmail:"",
timezone:"UTC",
language:"English",
country:"United States",
currency:"USD",
maintenanceMode:false,

require2FA:false,
sessionTimeout:30,
passwordPolicy:"strong",

smtpHost:"",
smtpPort:587,
smtpUser:"",
smtpPassword:"",

emailAlerts:true,
systemNotifications:true,
weeklyReports:false,

enablePublicAPI:true,
rateLimit:1000,

debugMode:false,
logRetention:30
})

const [loading,setLoading] = useState(true)
const [saving,setSaving] = useState(false)

useEffect(()=>{

async function loadSettings(){

try{

const res = await fetch("/api/admin/settings")

if(res.ok){

const data = await res.json()

setSettings(prev => ({
...prev,
...data
}))

}

}catch(err){

console.log("Settings API not ready",err)

}

setLoading(false)

}

loadSettings()

},[])

async function saveSettings(){

setSaving(true)

try{

await fetch("/api/admin/settings",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(settings)
})

}catch(err){

console.log("Save failed",err)

}

setSaving(false)

}

if(loading){
return(

<div className="p-10 text-center text-gray-500">
Loading settings...
</div>
)
}

return(

<div className="w-full space-y-6">

{/* HEADER */}

<div>

<h1 className="text-3xl font-bold">
Admin Settings
</h1>

<p className="text-gray-500">
Configure platform settings and preferences
</p>

</div>

{/* TABS */}

<div className="flex gap-6 border-b text-sm">

{["general","security","email","notifications","api","advanced"].map((item)=>(
<button
key={item}
onClick={()=>setTab(item)}
className={`pb-2 capitalize ${tab===item?"border-b-2 border-blue-600 font-semibold":""}`}

>

{item==="api"?"API Settings":item} </button>
))}

</div>

{/* GENERAL SETTINGS */}

{tab==="general" && (

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<h3 className="font-semibold text-lg">General Settings</h3>

<div>
<label className="text-sm">Platform Name</label>
<input
value={settings.platformName}
onChange={(e)=>setSettings({...settings,platformName:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>
</div>

<div>
<label className="text-sm">Support Email</label>
<input
value={settings.supportEmail}
onChange={(e)=>setSettings({...settings,supportEmail:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>
</div>

<div>
<label className="text-sm">Timezone</label>
<select
value={settings.timezone}
onChange={(e)=>setSettings({...settings,timezone:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
>
<option>UTC</option>
<option>GMT</option>
<option>EST</option>
<option>PST</option>
<option>CET</option>
<option>IST</option>
<option>JST</option>
<option>AEST</option>
</select>
</div>

<div>
<label className="text-sm">Language</label>
<select
value={settings.language}
onChange={(e)=>setSettings({...settings,language:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
>

<option>English</option>
<option>Spanish</option>
<option>French</option>
<option>German</option>
<option>Portuguese</option>
<option>Italian</option>
<option>Arabic</option>
<option>Hindi</option>
<option>Chinese</option>
<option>Japanese</option>
<option>Korean</option>

</select>
</div>

<div>
<label className="text-sm">Country</label>
<select
value={settings.country}
onChange={(e)=>setSettings({...settings,country:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
>

<option>United States</option>
<option>United Kingdom</option>
<option>India</option>
<option>Canada</option>
<option>Australia</option>
<option>France</option>
<option>Germany</option>
<option>Spain</option>
<option>Italy</option>

</select>
</div>

<div>
<label className="text-sm">Currency</label>
<select
value={settings.currency}
onChange={(e)=>setSettings({...settings,currency:e.target.value})}
className="w-full border rounded-lg px-3 py-2 mt-1"
>

<option value="USD">USD — US Dollar</option>
<option value="EUR">EUR — Euro</option>
<option value="GBP">GBP — British Pound</option>
<option value="INR">INR — Indian Rupee</option>
<option value="JPY">JPY — Japanese Yen</option>

</select>
</div>

<div className="flex justify-between items-center">
<p>Maintenance Mode</p>
<input
type="checkbox"
checked={settings.maintenanceMode}
onChange={(e)=>setSettings({...settings,maintenanceMode:e.target.checked})}
/>
</div>

<button
onClick={saveSettings}
disabled={saving}
className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"

>

{saving ? "Saving..." : "Save General Settings"} </button>

</div>

)}

{/* SECURITY */}

{tab==="security" && (

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<h3 className="font-semibold text-lg">Security Settings</h3>

<div className="flex justify-between">
<p>Require 2FA for Admins</p>
<input
type="checkbox"
checked={settings.require2FA}
onChange={(e)=>setSettings({...settings,require2FA:e.target.checked})}
/>
</div>

<div>
<label className="text-sm">Session Timeout (minutes)</label>
<input
type="number"
value={settings.sessionTimeout}
onChange={(e)=>setSettings({...settings,sessionTimeout:Number(e.target.value)})}
className="w-full border rounded-lg px-3 py-2 mt-1"
/>
</div>

<div>
<label className="text-sm">Password Policy</label>
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

</div>

)}

{/* EMAIL */}

{tab==="email" && (

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<h3 className="font-semibold text-lg">Email (SMTP)</h3>

<input
placeholder="SMTP Host"
value={settings.smtpHost}
onChange={(e)=>setSettings({...settings,smtpHost:e.target.value})}
className="w-full border rounded-lg px-3 py-2"
/>

<input
type="number"
placeholder="SMTP Port"
value={settings.smtpPort}
onChange={(e)=>setSettings({...settings,smtpPort:Number(e.target.value)})}
className="w-full border rounded-lg px-3 py-2"
/>

<input
placeholder="SMTP Username"
value={settings.smtpUser}
onChange={(e)=>setSettings({...settings,smtpUser:e.target.value})}
className="w-full border rounded-lg px-3 py-2"
/>

<input
type="password"
placeholder="SMTP Password"
value={settings.smtpPassword}
onChange={(e)=>setSettings({...settings,smtpPassword:e.target.value})}
className="w-full border rounded-lg px-3 py-2"
/>

</div>

)}

{/* NOTIFICATIONS */}

{tab==="notifications" && (

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<h3 className="font-semibold text-lg">Notifications</h3>

<div className="flex justify-between">
<p>Email Alerts</p>
<input
type="checkbox"
checked={settings.emailAlerts}
onChange={(e)=>setSettings({...settings,emailAlerts:e.target.checked})}
/>
</div>

<div className="flex justify-between">
<p>System Notifications</p>
<input
type="checkbox"
checked={settings.systemNotifications}
onChange={(e)=>setSettings({...settings,systemNotifications:e.target.checked})}
/>
</div>

<div className="flex justify-between">
<p>Weekly Reports</p>
<input
type="checkbox"
checked={settings.weeklyReports}
onChange={(e)=>setSettings({...settings,weeklyReports:e.target.checked})}
/>
</div>

</div>

)}

{/* API */}

{tab==="api" && (

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<h3 className="font-semibold text-lg">API Settings</h3>

<div className="flex justify-between">
<p>Enable Public API</p>
<input
type="checkbox"
checked={settings.enablePublicAPI}
onChange={(e)=>setSettings({...settings,enablePublicAPI:e.target.checked})}
/>
</div>

<input
type="number"
value={settings.rateLimit}
onChange={(e)=>setSettings({...settings,rateLimit:Number(e.target.value)})}
className="w-full border rounded-lg px-3 py-2"
/>

</div>

)}

{/* ADVANCED */}

{tab==="advanced" && (

<div className="bg-white rounded-xl shadow p-6 space-y-6">

<h3 className="font-semibold text-lg">Advanced</h3>

<div className="flex justify-between">
<p>Debug Mode</p>
<input
type="checkbox"
checked={settings.debugMode}
onChange={(e)=>setSettings({...settings,debugMode:e.target.checked})}
/>
</div>

<input
type="number"
value={settings.logRetention}
onChange={(e)=>setSettings({...settings,logRetention:Number(e.target.value)})}
className="w-full border rounded-lg px-3 py-2"
/>

</div>

)}

</div>

)

}
