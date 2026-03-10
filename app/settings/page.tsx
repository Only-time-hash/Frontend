"use client"

import Sidebar from "@/components/Sidebar"
import { useState } from "react"

export default function SettingsPage(){

  const [exportFormat,setExportFormat] = useState("excel")

  const [includeRaw,setIncludeRaw] = useState(true)
  const [includeCharts,setIncludeCharts] = useState(true)

  const [emailNotif,setEmailNotif] = useState(true)
  const [analysisComplete,setAnalysisComplete] = useState(true)
  const [weeklyDigest,setWeeklyDigest] = useState(false)
  const [productUpdates,setProductUpdates] = useState(true)

  return(

    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <main className="flex-1 p-10 max-w-5xl mx-auto">

        {/* Page Title */}

        <div className="mb-10">

          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="text-gray-400">
            Manage your account preferences and settings
          </p>

        </div>


        {/* PROFILE INFORMATION */}

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">

          <h2 className="font-semibold mb-6">
            Profile Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10"
              />
            </div>

          </div>

          <div className="mt-4">

            <label className="text-sm text-gray-400">
              Company
            </label>

            <input
              type="text"
              placeholder="Enter company name"
              className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10"
            />

          </div>

          <div className="mt-4">

            <label className="text-sm text-gray-400">
              Role
            </label>

            <input
              type="text"
              placeholder="Data Analyst"
              className="w-full mt-1 p-3 rounded-lg bg-black/40 border border-white/10"
            />

          </div>

          <button className="mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90">
            Save Changes
          </button>

        </div>



        {/* EXPORT PREFERENCES */}

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">

          <h2 className="font-semibold mb-6">
            Export Preferences
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            Choose your default format for exporting analysis results.
          </p>

          <div className="flex gap-3 mb-6">

            {["csv","pdf","excel"].map((format)=>(
              <button
                key={format}
                onClick={()=>setExportFormat(format)}
                className={`px-4 py-2 rounded-lg border text-sm ${
                  exportFormat===format
                  ? "bg-blue-600 border-blue-500"
                  : "border-white/20"
                }`}
              >
                {format.toUpperCase()}
              </button>
            ))}

          </div>

          <div className="space-y-4">

            <label className="flex justify-between items-center">

              <div>
                <p>Include Raw Data</p>
                <p className="text-gray-400 text-sm">
                  Include source data in exports
                </p>
              </div>

              <input
                type="checkbox"
                checked={includeRaw}
                onChange={()=>setIncludeRaw(!includeRaw)}
              />

            </label>


            <label className="flex justify-between items-center">

              <div>
                <p>Include Visualizations</p>
                <p className="text-gray-400 text-sm">
                  Export charts as images
                </p>
              </div>

              <input
                type="checkbox"
                checked={includeCharts}
                onChange={()=>setIncludeCharts(!includeCharts)}
              />

            </label>

          </div>

        </div>



        {/* NOTIFICATION SETTINGS */}

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">

          <h2 className="font-semibold mb-6">
            Notification Settings
          </h2>

          <div className="space-y-5">

            <label className="flex justify-between items-center">

              <div>
                <p>Email Notifications</p>
                <p className="text-gray-400 text-sm">
                  Receive notifications about your analyses
                </p>
              </div>

              <input
                type="checkbox"
                checked={emailNotif}
                onChange={()=>setEmailNotif(!emailNotif)}
              />

            </label>


            <label className="flex justify-between items-center">

              <div>
                <p>Analysis Complete</p>
                <p className="text-gray-400 text-sm">
                  Get notified when long-running analysis finishes
                </p>
              </div>

              <input
                type="checkbox"
                checked={analysisComplete}
                onChange={()=>setAnalysisComplete(!analysisComplete)}
              />

            </label>


            <label className="flex justify-between items-center">

              <div>
                <p>Weekly Digest</p>
                <p className="text-gray-400 text-sm">
                  Receive weekly summary of your activity
                </p>
              </div>

              <input
                type="checkbox"
                checked={weeklyDigest}
                onChange={()=>setWeeklyDigest(!weeklyDigest)}
              />

            </label>


            <label className="flex justify-between items-center">

              <div>
                <p>Product Updates</p>
                <p className="text-gray-400 text-sm">
                  Stay informed about new features
                </p>
              </div>

              <input
                type="checkbox"
                checked={productUpdates}
                onChange={()=>setProductUpdates(!productUpdates)}
              />

            </label>

          </div>

        </div>



        {/* DANGER ZONE */}

        <div className="border border-red-500/40 bg-red-500/10 rounded-xl p-6">

          <h2 className="font-semibold text-red-400 mb-3">
            Danger Zone
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            Permanently delete your account and all associated data.
            This action cannot be undone.
          </p>

          <button className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700">
            Delete Account
          </button>

        </div>

      </main>

    </div>

  )

}