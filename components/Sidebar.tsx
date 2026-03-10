"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  Bot,
  Database,
  BarChart3,
  History,
  Settings
} from "lucide-react"

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "AI Assistant", icon: Bot, path: "/ai" },
  { name: "Datasets", icon: Database, path: "/datasets" },
  { name: "Insights", icon: BarChart3, path: "/insights" },
  { name: "History", icon: History, path: "/history" },
  { name: "Settings", icon: Settings, path: "/settings" }
]

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-black border-r border-gray-800 p-6 flex flex-col">

      <h1 className="text-xl font-bold text-purple-400 mb-8">
        EDA AI
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#0f172a]"
            >
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          N
        </div>
      </div>

    </aside>
  )
}