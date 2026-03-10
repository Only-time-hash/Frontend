"use client"

import Sidebar from "@/components/Sidebar"
import AIChat from "@/components/AIChat"

export default function AIPage(){

  return(

    <div className="flex min-h-screen text-white">

      <Sidebar/>

      <main
className="flex-1 flex flex-col bg-black"
style={{
backgroundImage:"url('/ai-data-pattern.svg')",
backgroundSize:"320px",
backgroundRepeat:"repeat"
}}
>

        {/* Header */}

        <div className="px-12 py-8 border-b border-white/10">

          <h1 className="text-4xl font-bold mb-2">
            AI Assistant
          </h1>

          <p className="text-gray-400">
            Ask AI anything about your datasets and analytics.
          </p>

        </div>


        {/* Chat */}

        <div className="flex-1">

          <AIChat/>

        </div>

      </main>

    </div>

  )

}