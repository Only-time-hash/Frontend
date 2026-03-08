"use client"

import { useState } from "react"
import Papa from "papaparse"
import { motion } from "framer-motion"

export default function DatasetUpload({ setData }: any) {

  const [drag, setDrag] = useState(false)

  const handleFile = (file: File) => {

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data)
      }
    })
  }

  return (

    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`border-2 border-dashed rounded-xl p-10 text-center transition
      ${drag ? "border-purple-500 bg-purple-500/10" : "border-white/10"}`}
      onDragOver={(e) => {
        e.preventDefault()
        setDrag(true)
      }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDrag(false)
        const file = e.dataTransfer.files[0]
        handleFile(file)
      }}
    >

      <p className="text-lg font-semibold">
        Drag & Drop Dataset
      </p>

      <p className="text-gray-400 text-sm mt-2">
        Upload CSV file to analyze your data
      </p>

      <input
        type="file"
        accept=".csv"
        className="mt-4"
        onChange={(e:any)=>handleFile(e.target.files[0])}
      />

    </motion.div>
  )
}