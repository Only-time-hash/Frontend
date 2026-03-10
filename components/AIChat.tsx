"use client"

import { useState } from "react"
import { Send, Paperclip } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

type Props = {
  userEmail?: string
}

export default function AIChat({ userEmail }: Props) {

  const [messages,setMessages] = useState<Message[]>([])
  const [input,setInput] = useState("")
  const [loading,setLoading] = useState(false)

  // User avatar generated from email
  const userAvatar = userEmail
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(userEmail)}&background=random&color=fff`
    : "/user-avatar.png"

  const sendMessage = async () => {

    if(!input.trim()) return

    const userMessage:Message = {
      role:"user",
      content:input
    }

    setMessages(prev => [...prev,userMessage])
    setInput("")
    setLoading(true)

    try {

      const res = await fetch("/api/ai",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          message:input
        })
      })

      const data = await res.json()

      const aiMessage:Message = {
        role:"assistant",
        content:data.reply
      }

      setMessages(prev => [...prev,aiMessage])

    } catch(err){

      const aiMessage:Message = {
        role:"assistant",
        content:"AI could not respond right now."
      }

      setMessages(prev => [...prev,aiMessage])

    }

    setLoading(false)

  }

  const handleKey = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === "Enter") sendMessage()
  }

  // DATASET UPLOAD + ANALYSIS
  const handleFileUpload = async (e:React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0]

    if(!file) return

    const userMessage:Message = {
      role:"user",
      content:`📂 Uploaded dataset: ${file.name}`
    }

    setMessages(prev => [...prev,userMessage])
    setLoading(true)

    try{

      const formData = new FormData()
      formData.append("file",file)

      const res = await fetch("/api/analyze",{
        method:"POST",
        body:formData
      })

      const data = await res.json()

      const aiMessage:Message = {
        role:"assistant",
        content:data.analysis
      }

      setMessages(prev => [...prev,aiMessage])

    }catch(err){

      const aiMessage:Message = {
        role:"assistant",
        content:"Dataset uploaded but analysis service is not available."
      }

      setMessages(prev => [...prev,aiMessage])

    }

    setLoading(false)

  }

  return (

    <div className="flex flex-col h-full max-w-4xl mx-auto">

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-8 space-y-6">

        {messages.length === 0 && (

          <div className="text-center text-gray-400 mt-24">

            <h2 className="text-3xl font-semibold mb-4">
              AI Dataset Assistant
            </h2>

            <p>
              Upload a dataset or ask questions about correlations,
              trends, outliers, and statistical insights.
            </p>

          </div>

        )}

        {messages.map((msg,i)=>(

          <div
            key={i}
            className={`flex items-end gap-3 ${
              msg.role === "user"
              ? "justify-end"
              : "justify-start"
            }`}
          >

            {/* AI Avatar */}

            {msg.role === "assistant" && (
              <img
                src="/ai-avatar.png"
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
            )}

            {/* Bubble */}

            <div
              className={`max-w-[70%] px-5 py-3 rounded-2xl shadow-md text-sm ${
                msg.role === "user"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "bg-white text-black"
              }`}
            >
              {msg.content}
            </div>

            {/* User Avatar */}

            {msg.role === "user" && (
              <img
                src={userAvatar}
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
            )}

          </div>

        ))}

        {/* Typing indicator */}

        {loading && (

          <div className="flex items-center gap-3">

            <img
              src="/ai-avatar.png"
              className="w-10 h-10 rounded-full object-cover border border-white/20 animate-pulse"
            />

            <div className="bg-white text-black px-4 py-2 rounded-xl text-sm">
              AI is analyzing...
            </div>

          </div>

        )}

      </div>

      {/* Input */}

      <div className="border-t border-white/10 p-6 bg-black/60 backdrop-blur">

        <div className="flex items-center gap-4">

          {/* Upload dataset */}

          <label className="cursor-pointer p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">

            <Paperclip size={20}/>

            <input
              type="file"
              className="hidden"
              accept=".csv,.xlsx,.xls,.json,.txt,.pdf"
              onChange={handleFileUpload}
            />

          </label>

          {/* Input */}

          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask something about your dataset..."
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 py-3 outline-none"
          />

          {/* Send */}

          <button
            onClick={sendMessage}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 rounded-xl hover:scale-105 transition"
          >
            <Send size={18}/>
            Send
          </button>

        </div>

      </div>

    </div>

  )

}