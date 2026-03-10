"use client"

import Sidebar from "@/components/Sidebar"

export default function DatasetsPage(){

  return(

    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold">
          Datasets
        </h1>

        <p className="text-gray-400 mt-4">
          Upload and manage your datasets here.
        </p>

      </main>

    </div>

  )

}