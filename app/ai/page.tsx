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

     


        {/* Chat */}

        <div className="flex-1">

          <AIChat/>

        </div>

      </main>

    </div>

  )

}