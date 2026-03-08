"use client"

import { useState } from "react"

export default function AIChat({ data }: any) {

  const [messages,setMessages]=useState<any[]>([])
  const [input,setInput]=useState("")

  const askAI=()=>{

    const answer = "AI analysis will appear here once backend is connected."

    setMessages([
      ...messages,
      {role:"user",text:input},
      {role:"ai",text:answer}
    ])

    setInput("")
  }

  return (

    <div className="bg-white/5 border border-white/10 rounded-xl p-6">

      <h3 className="text-lg font-semibold mb-4">
        🤖 Ask AI About Your Data
      </h3>

      <div className="space-y-2 h-40 overflow-auto mb-4">

        {messages.map((m,i)=>(
          <p key={i} className={m.role==="user"?"text-blue-400":"text-purple-400"}>
            {m.text}
          </p>
        ))}

      </div>

      <div className="flex gap-2">

        <input
          className="flex-1 bg-black/30 border border-white/10 rounded-lg px-3 py-2"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder="Ask about your dataset..."
        />

        <button
          onClick={askAI}
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 rounded-lg"
        >
          Ask
        </button>

      </div>

    </div>
  )
}