"use client"

import { useState } from "react"

export default function NotificationSettings(){

const [settings,setSettings] = useState({
emailAlerts:true,
systemNotifications:true,
weeklyReports:false
})

async function save(){

await fetch("/api/admin/settings/notifications",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify(settings)
})

alert("Notification settings saved")

}

return(

<div className="w-full space-y-6">

<h1 className="text-3xl font-bold">
Notification Settings
</h1>

<p className="text-gray-500">
Configure system notifications
</p>

<div className="bg-white rounded-xl shadow p-6 space-y-6">

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

<button
onClick={save}
className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
>

Save Notification Settings

</button>

</div>

</div>

)

}