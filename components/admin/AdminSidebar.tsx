"use client"

import { LayoutDashboard, Users, Database, Activity, Settings, FileText } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AdminSidebar() {

const pathname = usePathname()

const menu = [
{
name:"Overview",
icon:LayoutDashboard,
path:"/admin"
},
{
name:"User Management",
icon:Users,
path:"/admin/users"
},
{
name:"Datasets",
icon:Database,
path:"/admin/datasets"
},
{
name:"System Analytics",
icon:Activity,
path:"/admin/analytics"
},
{
name:"Activity Logs",
icon:FileText,
path:"/admin/logs"
},
{
name:"Settings",
icon:Settings,
path:"/admin/settings"
}
]

return(

<div className="fixed left-0 top-0 h-screen w-64 bg-white border-r p-6">

<h1 className="text-xl font-bold mb-8">
Admin Panel
</h1>

<nav className="space-y-2">

{menu.map((item,i)=>{

const Icon = item.icon
const active = pathname === item.path

return(

<Link key={i} href={item.path}>

<div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
${active
? "bg-blue-50 text-blue-600 font-semibold"
: "text-gray-600 hover:bg-gray-100"
}`}>

<Icon size={18}/>

{item.name}

</div>

</Link>

)

})}

</nav>

</div>

)

}