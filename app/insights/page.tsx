"use client"

import Sidebar from "@/components/Sidebar"

export default function InsightsPage(){

  return(

    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-6">
          Dataset Insights
        </h1>

        <p className="text-gray-400">
          AI-generated analysis of your dataset will appear here.
        </p>

      </main>

    </div>

  )

}