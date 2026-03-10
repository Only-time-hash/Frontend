"use client"

import Sidebar from "@/components/Sidebar"
import { useEffect, useState } from "react"
import { MessageSquare, FileText, Calendar } from "lucide-react"

export default function HistoryPage(){

  const [history,setHistory] = useState<any[]>([])

  useEffect(()=>{

    const stored = localStorage.getItem("analysisHistory")

    if(stored){
      setHistory(JSON.parse(stored))
    }

  },[])


  return(

    <div className="flex min-h-screen bg-black text-white">

      <Sidebar/>

      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-2">
          Analysis History
        </h1>

        <p className="text-gray-400 mb-8">
          Review your past analyses and conversations
        </p>


        <div className="space-y-6">

          {history.length === 0 && (

            <div className="text-gray-500">
              No analysis history yet
            </div>

          )}


          {history.map((item,i)=>(

            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex justify-between hover:bg-white/10 transition"
            >

              <div className="flex gap-4">

                <div className="bg-blue-500/10 p-3 rounded-lg">

                  <MessageSquare size={20} className="text-blue-400"/>

                </div>


                <div>

                  <h3 className="text-lg font-semibold mb-1">
                    "{item.question}"
                  </h3>

                  <p className="text-gray-400 text-sm mb-3">
                    {item.summary}
                  </p>


                  <div className="flex gap-6 text-gray-500 text-sm">

                    <span className="flex items-center gap-2">
                      <FileText size={14}/>
                      {item.dataset}
                    </span>

                    <span className="flex items-center gap-2">
                      <Calendar size={14}/>
                      {item.date}
                    </span>

                  </div>

                </div>

              </div>


              <button className="text-blue-400 hover:underline">
                Open
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>

  )

}