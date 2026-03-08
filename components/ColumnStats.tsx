"use client"

export default function ColumnStats({ data }: any) {

  if (!data || data.length === 0) return null

  const columns = Object.keys(data[0])

  return (

    <div className="grid md:grid-cols-3 gap-6">

      {columns.map((col)=>{

        const values = data.map((d:any)=>Number(d[col])).filter(v=>!isNaN(v))

        if(values.length === 0) return null

        const avg = values.reduce((a,b)=>a+b,0)/values.length
        const max = Math.max(...values)
        const min = Math.min(...values)

        return (

          <div key={col} className="p-6 bg-white/5 border border-white/10 rounded-xl">

            <h3 className="font-semibold mb-2">{col}</h3>

            <p className="text-sm text-gray-400">Avg: {avg.toFixed(2)}</p>
            <p className="text-sm text-gray-400">Max: {max}</p>
            <p className="text-sm text-gray-400">Min: {min}</p>

          </div>

        )

      })}

    </div>
  )
}