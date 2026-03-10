"use client"

import Sidebar from "@/components/Sidebar"
import { useState } from "react"
import { motion } from "framer-motion"
import Papa from "papaparse"
import { useRouter } from "next/navigation"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts"

import {
  Database,
  Activity,
  Columns,
  BarChart3
} from "lucide-react"

export default function Dashboard() {

  const router = useRouter()

  const [data, setData] = useState<any[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [datasetCount, setDatasetCount] = useState(0)

  const handleFile = (file: File | undefined) => {

    if (!file) return

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: any) => {

        const parsed = results.data

        setData(parsed)
        setHistory(prev => [file.name, ...prev])
        setDatasetCount(prev => prev + 1)

      }
    })

  }

  const columns = data.length > 0 ? Object.keys(data[0]) : []

  const xKey = columns[0]
  const yKey = columns[1]

  const columnsAnalyzed = columns.length
  const visualizationsGenerated = columns.length > 1 ? 2 : 0
  const analysesRun = history.length

  return (

    <div className="flex h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">

      <Sidebar />

      <main className="flex-1 p-10 space-y-10 overflow-y-auto">

        {/* Greeting */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-3xl font-bold">
            Hello 👋 Ready to analyze your data?
          </h1>

          <p className="text-gray-400 mt-2">
            Here's an overview of your data analysis activity
          </p>

        </motion.div>


        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6">

          <StatCard title="Total Datasets" value={datasetCount} icon={Database} />

          <StatCard title="Analyses Run" value={analysesRun} icon={Activity} />

          <StatCard title="Columns Analyzed" value={columnsAnalyzed} icon={Columns} />

          <StatCard title="Visualizations Generated" value={visualizationsGenerated} icon={BarChart3} />

        </div>


        {/* Action Cards */}

        <div className="grid md:grid-cols-3 gap-6">

          {/* Start New Analysis */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/ai-analyst")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-xl cursor-pointer"
          >

            <h3 className="text-xl font-semibold">
              Start New Analysis
            </h3>

            <p className="text-gray-200 text-sm mt-2">
              Ask questions about your data
            </p>

          </motion.div>


          {/* Upload Dataset */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/datasets")}
            className="bg-white/5 border border-white/10 p-8 rounded-xl cursor-pointer"
          >

            <h3 className="text-xl font-semibold">
              Upload Dataset
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Add a new CSV file
            </p>

          </motion.div>


          {/* View History */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/history")}
            className="bg-white/5 border border-white/10 p-8 rounded-xl cursor-pointer"
          >

            <h3 className="text-xl font-semibold">
              View History
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Browse past analyses
            </p>

          </motion.div>

        </div>


        {/* Dataset Preview */}

        {data.length > 0 && (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 overflow-auto"
          >

            <h3 className="text-xl font-semibold mb-4">
              Dataset Preview
            </h3>

            <table className="w-full text-sm">

              <thead className="bg-white/5">

                <tr>
                  {columns.map((col) => (
                    <th key={col} className="p-3 text-left">{col}</th>
                  ))}
                </tr>

              </thead>

              <tbody>

                {data.slice(0, 10).map((row: any, i) => (
                  <tr key={i} className="border-t border-white/10">

                    {columns.map((col) => (
                      <td key={col} className="p-3">{row[col]}</td>
                    ))}

                  </tr>
                ))}

              </tbody>

            </table>

          </motion.div>

        )}


        {/* Charts */}

        {columns.length > 1 && (

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >

              <h3 className="mb-4 text-lg font-semibold">
                Data Trends
              </h3>

              <ResponsiveContainer width="100%" height={250}>

                <LineChart data={data.slice(0, 10)}>
                  <XAxis dataKey={xKey} />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey={yKey} stroke="#a855f7" />
                </LineChart>

              </ResponsiveContainer>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >

              <h3 className="mb-4 text-lg font-semibold">
                Distribution
              </h3>

              <ResponsiveContainer width="100%" height={250}>

                <BarChart data={data.slice(0, 10)}>
                  <XAxis dataKey={xKey} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey={yKey} fill="#6366f1" />
                </BarChart>

              </ResponsiveContainer>

            </motion.div>

          </div>

        )}
		
		{/* Recent History */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  className="bg-white/5 border border-white/10 rounded-xl p-6"
>

  <h3 className="text-xl font-semibold mb-4">
    Recent History
  </h3>

  {history.length === 0 ? (

    <p className="text-gray-400 text-sm">
      No analyses yet. Upload a dataset to begin.
    </p>

  ) : (

    <ul className="space-y-3">

      {history.slice(0, 5).map((item, index) => (

        <li
          key={index}
          className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-lg"
        >

          <span className="text-sm text-gray-300">
            {item}
          </span>

          <span className="text-xs text-purple-400">
            Dataset
          </span>

        </li>

      ))}

    </ul>

  )}

</motion.div>

      </main>

    </div>

  )
}


function StatCard({
  title,
  value,
  icon: Icon
}: {
  title: string
  value: number
  icon: any
}) {

  return (

    <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center justify-between">

      <div>

        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <h3 className="text-3xl font-bold mt-2">
          {value}
        </h3>

      </div>

      <Icon className="w-8 h-8 text-purple-400" />

    </div>

  )

}