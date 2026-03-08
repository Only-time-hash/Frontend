"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Logo from "@/components/Logo"

export default function Login() {

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function handleLogin(e:any){
e.preventDefault()

localStorage.setItem("eda_user","true")

router.push("/dashboard")
}

return(

<div className="min-h-screen flex items-center justify-center text-white px-6">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="w-full max-w-md p-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
>

{/* Logo */}

<div className="mb-8">
<Logo/>
</div>

<h2 className="text-center text-gray-300 mb-6">
Sign in to your AI analytics workspace
</h2>


{/* Google Login */}

<button
onClick={()=>router.push("/dashboard")}
className="w-full flex items-center justify-center gap-3 border border-white/20 py-3 rounded-lg hover:bg-white/10 transition"
>

<img
src="https://www.svgrepo.com/show/475656/google-color.svg"
width="20"
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


<form onSubmit={handleLogin} className="space-y-5">

<input
type="email"
placeholder="Email address"
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
className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition"
>

Login

</button>

</form>

<p className="text-center text-gray-300 mt-6">

Don't have an account?

<a href="/register" className="text-purple-400 ml-2">
Create one
</a>

</p>

</motion.div>

</div>

)

}