"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

import {
  LayoutDashboard,
  Bot,
  Database,
  History,
  Settings,
  LogOut
} from "lucide-react"

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "AI Analyst", icon: Bot, path: "/ai" },
  { name: "Datasets", icon: Database, path: "/datasets" },
  { name: "Analysis History", icon: History, path: "/history" },
  { name: "Settings", icon: Settings, path: "/settings" }
]

export default function Sidebar() {

  const pathname = usePathname()
  const router = useRouter()

  function handleLogout(){

    localStorage.clear()

    router.push("/")

  }

  return (

    <aside className="w-64 h-screen bg-black border-r border-gray-800 p-6 flex flex-col">

      <h1 className="text-xl font-bold text-purple-400 mb-8">
        EDA AI
      </h1>


      <nav className="space-y-2">

        {menu.map((item)=>{

          const Icon = item.icon
          const active = pathname === item.path

          return(

            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
              ${active ? "bg-[#0f172a] text-white" : "text-gray-400 hover:bg-[#0f172a]"}`}
            >

              {active && (
                <span className="absolute left-0 h-6 w-1 bg-blue-500 rounded-r"/>
              )}

              <Icon size={18}/>

              {item.name}

            </Link>

          )

        })}

      </nav>


      {/* BOTTOM SECTION */}

      <div className="mt-auto space-y-4">

        {/* USER */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            N
          </div>

          <span className="text-gray-400 text-sm">
            User
          </span>

        </div>


        {/* LOGOUT */}

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 hover:text-red-500 transition"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>

  )

}