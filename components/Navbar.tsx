"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {

  const [open,setOpen] = useState(false)

  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          EDA AI
        </a>


        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm items-center">

          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#features" className="hover:text-purple-400 transition">
            Features
          </a>

          <a href="#develop" className="hover:text-purple-400 transition">
            Develop
          </a>

          <a href="#community" className="hover:text-purple-400 transition">
            Community
          </a>

          <a href="#blog" className="hover:text-purple-400 transition">
            Blog
          </a>

        </div>


        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center">

          <a href="/login">

            <button className="hover:text-purple-400 transition">
              Login
            </button>

          </a>

          <a href="/register">

            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition">
              Register
            </button>

          </a>

        </div>


        {/* Mobile Button */}
        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (

        <motion.div
          initial={{opacity:0,y:-20}}
          animate={{opacity:1,y:0}}
          className="md:hidden px-6 pb-6 space-y-4 text-sm"
        >

          <a href="#about" className="block hover:text-purple-400">
            About
          </a>

          <a href="#features" className="block hover:text-purple-400">
            Features
          </a>

          <a href="#develop" className="block hover:text-purple-400">
            Develop
          </a>

          <a href="#community" className="block hover:text-purple-400">
            Community
          </a>

          <a href="#blog" className="block hover:text-purple-400">
            Blog
          </a>

          <div className="pt-4 flex gap-4">

            <a href="/login">
              <button className="hover:text-purple-400">
                Login
              </button>
            </a>

            <a href="/register">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full">
                Register
              </button>
            </a>

          </div>

        </motion.div>

      )}

    </nav>

  )

}