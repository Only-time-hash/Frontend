"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Logo from "@/components/Logo"
import Image from "next/image"
import Link from "next/link"

export default function Login() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

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

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

      {/* Animated glow background */}

      <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{opacity:0,y:40}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
        className="relative w-full max-w-md p-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >

        <div className="flex justify-center mb-8">
          <Logo/>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-2">
          Welcome back
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Sign in to continue to your dashboard
        </p>


        {/* Google login */}

        <button
          onClick={()=>router.push("/dashboard")}
          className="w-full flex items-center justify-center gap-3 border border-white/20 py-3 rounded-lg hover:bg-white/10 transition"
        >

          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            width={20}
            height={20}
          />

          Continue with Google

        </button>


        {/* Divider */}

        <div className="flex items-center my-6">

          <div className="flex-1 border-t border-white/20"></div>

          <span className="px-3 text-gray-400 text-sm">
            or
          </span>

          <div className="flex-1 border-t border-white/20"></div>

        </div>


        {error && (
          <p className="text-red-400 text-sm text-center mb-4">
            {error}
          </p>
        )}


        {/* Form */}

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:border-purple-400"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-[1.02] transition"
          >
            Sign In
          </button>

        </form>


        <p className="text-center text-gray-400 mt-6">

          Don't have an account?

          <Link
            href="/register"
            className="text-purple-400 ml-2 hover:underline"
          >
            Create one
          </Link>

        </p>

      </motion.div>

    </div>
  )
}