"use client"

import Sidebar from "@/components/Sidebar"

export default function HistoryPage(){

  return(

    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold">
          Dataset History
        </h1>

      </main>

    </div>

  )

}