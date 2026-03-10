"use client"

import Sidebar from "@/components/Sidebar"
import { useState, useEffect } from "react"
import { Upload } from "lucide-react"

export default function DatasetsPage(){

  const [datasets,setDatasets] = useState<any[]>([])

  useEffect(()=>{

    const stored = localStorage.getItem("datasets")

    if(stored){
      setDatasets(JSON.parse(stored))
    }

  },[])


  function handleUpload(file:any){

    if(!file) return

    const dataset = {

      name:file.name,
      rows:0,
      columns:0,
      size:(file.size / 1024 / 1024).toFixed(2) + " MB",
      date:new Date().toLocaleDateString()

    }

    const updated = [...datasets,dataset]

    setDatasets(updated)

    localStorage.setItem("datasets",JSON.stringify(updated))

  }


  function handleFileInput(e:any){

    const file = e.target.files[0]

    handleUpload(file)

  }


  function deleteDataset(index:number){

    const updated = datasets.filter((_,i)=>i!==index)

    setDatasets(updated)

    localStorage.setItem("datasets",JSON.stringify(updated))

  }



  return(

    <div className="flex min-h-screen bg-black text-white">

      <Sidebar/>

      <main className="flex-1 p-10">

        {/* HEADER */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              Datasets
            </h1>

            <p className="text-gray-400">
              Manage your uploaded data files
            </p>

          </div>

          <label className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg cursor-pointer">

            Upload Dataset

            <input
              type="file"
              accept=".csv,.xlsx"
              className="hidden"
              onChange={handleFileInput}
            />

          </label>

        </div>



        {/* UPLOAD AREA */}

        <div className="border border-dashed border-white/20 rounded-xl p-12 text-center mb-10 bg-white/5">

          <div className="flex justify-center mb-4">

            <div className="bg-white/10 p-4 rounded-full">

              <Upload size={28} />

            </div>

          </div>

          <p className="text-gray-300 mb-1">
            Drag and drop your files here
          </p>

          <p className="text-gray-500 text-sm mb-4">
            or click to browse • CSV and Excel files supported
          </p>

          <label className="border border-white/20 px-4 py-2 rounded-lg cursor-pointer hover:bg-white/10">

            Browse Files

            <input
              type="file"
              accept=".csv,.xlsx"
              className="hidden"
              onChange={handleFileInput}
            />

          </label>

        </div>



        {/* DATASET TABLE */}

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">

          <table className="w-full text-left">

            <thead className="bg-white/10 text-gray-300 text-sm">

              <tr>

                <th className="p-4">Dataset Name</th>
                <th className="p-4">Rows</th>
                <th className="p-4">Columns</th>
                <th className="p-4">Size</th>
                <th className="p-4">Date Uploaded</th>
                <th className="p-4">Actions</th>

              </tr>

            </thead>

            <tbody>

              {datasets.length === 0 && (

                <tr>

                  <td colSpan={6} className="p-10 text-center text-gray-500">

                    No datasets uploaded yet

                  </td>

                </tr>

              )}


              {datasets.map((d,i)=>(

                <tr key={i} className="border-t border-white/10">

                  <td className="p-4">{d.name}</td>

                  <td className="p-4">{d.rows || 0}</td>

                  <td className="p-4">{d.columns || 0}</td>

                  <td className="p-4">{d.size}</td>

                  <td className="p-4">{d.date}</td>

                  <td className="p-4 flex gap-4">

                    <button className="text-blue-400 hover:underline">
                      View
                    </button>

                    <button
                      onClick={()=>deleteDataset(i)}
                      className="text-red-400 hover:underline"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>

  )

}