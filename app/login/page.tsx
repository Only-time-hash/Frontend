"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Logo from "@/components/Logo"
import Image from "next/image"
import Link from "next/link"
import { TrendingUp, PieChart, BarChart3, Activity } from "lucide-react"

export default function Login() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [remember,setRemember] = useState(false)

  function handleLogin(e:any){

    e.preventDefault()

    if(!email || !password){
      setError("Please enter your email and password")
      return
    }

    localStorage.setItem("eda_user","true")

    router.push("/dashboard")
  }

  return(

    <div className="min-h-screen grid md:grid-cols-2">

      {/* LEFT SIDE */}

      <div className="relative flex flex-col justify-center px-12 text-white bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">

        <div className="absolute top-8 left-10 flex items-center gap-2">
          <Logo/>
          
        </div>

        <motion.div
          initial={{opacity:0,x:-40}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.6}}
        >

          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Turn Raw Data into <br/> Actionable Insights.
          </h1>

          <p className="text-blue-100 max-w-md mb-10">
            Upload your datasets, ask questions in plain English,
            and get instant AI-powered visualizations and analysis.
          </p>

          {/* Feature boxes */}

          <div className="grid grid-cols-2 gap-5 max-w-md">

            <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur">
              <TrendingUp className="mb-2"/>
              <p className="text-sm">Trend Analysis</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur">
              <PieChart className="mb-2"/>
              <p className="text-sm">Distribution</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur">
              <Activity className="mb-2"/>
              <p className="text-sm">Correlation</p>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur">
              <BarChart3 className="mb-2"/>
              <p className="text-sm">Comparison</p>
            </div>

          </div>

        </motion.div>

      </div>


      {/* RIGHT SIDE LOGIN */}

      <div className="flex items-center justify-center bg-gray-50 px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="w-full max-w-md bg-white rounded-xl shadow-xl p-8"
        >

          <h2 className="text-2xl font-semibold mb-1 text-gray-800">
            Login to EDA AI
          </h2>

          <p className="text-gray-500 mb-6 text-sm">
            Welcome back! Please enter your details.
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">

            <div>
              <label className="text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            {/* Remember + Forgot */}

            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={()=>setRemember(!remember)}
                />
                Remember me
              </label>

              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>

            </div>


            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
            >
              Login
            </button>

          </form>


          <p className="text-sm text-center text-gray-500 mt-6">
            Don't have an account?
            <Link
              href="/register"
              className="text-blue-600 ml-1 hover:underline"
            >
              Sign up
            </Link>
          </p>


          <p className="text-xs text-gray-400 text-center mt-6">
            By continuing, you agree to EDA AI's Terms of Service and Privacy Policy
          </p>

        </motion.div>

      </div>

    </div>
  )
}