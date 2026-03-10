"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Paperclip, Database } from "lucide-react"

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
  const [datasetName,setDatasetName] = useState<string | null>(null)

  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    chatEndRef.current?.scrollIntoView({behavior:"smooth"})
  },[messages,loading])

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

    try{

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

    }catch{

      setMessages(prev => [
        ...prev,
        {role:"assistant",content:"AI could not respond right now."}
      ])

    }

    setLoading(false)

  }

  const handleKey = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==="Enter") sendMessage()
  }

  const handleFileUpload = async (e:React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0]
    if(!file) return

    setDatasetName(file.name)

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

    }catch{

      setMessages(prev => [
        ...prev,
        {role:"assistant",content:"Dataset uploaded but analysis service is unavailable."}
      ])

    }

    setLoading(false)

  }

  return (

    <div className="flex flex-col h-full max-w-5xl mx-auto">

      {/* Header */}

      <div className="border-b border-white/10 p-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="p-2 rounded-lg bg-purple-500/20">
            <Database className="text-purple-400"/>
          </div>

          <div>

            <h1 className="text-lg font-semibold">
              AI Data Analyst
            </h1>

            <p className="text-sm text-gray-400">
              Upload a dataset and ask questions about it
            </p>

          </div>

        </div>

        {datasetName && (

          <div className="text-xs bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
            Analyzing: <span className="text-purple-400">{datasetName}</span>
          </div>

        )}

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-8 space-y-8">

        {messages.length === 0 && (

          <div className="text-center text-gray-400 mt-32">

            <h2 className="text-3xl font-semibold mb-4">
              Hello! I'm your AI data analyst
            </h2>

            <p>
              Select or upload a dataset and ask anything about your data.
            </p>

          </div>

        )}

        {messages.map((msg,i)=>(

          <div
            key={i}
            className={`flex gap-4 ${
              msg.role==="user"
              ? "justify-end"
              : "justify-start"
            }`}
          >

            {msg.role==="assistant" && (

              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                <img
                  src="/ai-avatar.png"
                  alt="AI"
                  className="w-full h-full object-cover"
                />
              </div>

            )}

            <div
              className={`max-w-[65%] px-5 py-3 rounded-2xl text-sm shadow-md ${
                msg.role==="user"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "bg-white/90 text-black"
              }`}
            >
              {msg.content}
            </div>

            {msg.role==="user" && (

              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                <img
                  src={userAvatar}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>

            )}

          </div>

        ))}

        {loading && (

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full overflow-hidden animate-pulse flex-shrink-0">
              <img
                src="/ai-avatar.png"
                alt="AI"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white text-black px-4 py-2 rounded-xl text-sm">
              AI is analyzing...
            </div>

          </div>

        )}

        <div ref={chatEndRef} />

      </div>

      {/* Input */}

      <div className="border-t border-white/10 p-6 bg-black/60 backdrop-blur">

        <div className="flex items-center gap-4">

          {/* Upload */}

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
            placeholder="Ask the AI about trends, correlations, or anomalies..."
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-purple-500"
          />

          {/* Send */}

          <button
            onClick={sendMessage}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl hover:scale-105 transition"
          >

            <Send size={18}/>
            Send

          </button>

        </div>

      </div>

    </div>

  )

}