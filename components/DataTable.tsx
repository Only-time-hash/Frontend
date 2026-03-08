"use client"

export default function DataTable({ data }: any) {

  if (!data || data.length === 0) return null

  const columns = Object.keys(data[0])

  return (

    <div className="overflow-auto border border-white/10 rounded-xl">

      <table className="w-full text-sm">

        <thead className="bg-white/5">
          <tr>
            {columns.map((col)=>(
              <th key={col} className="p-3 text-left">{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>

          {data.slice(0,10).map((row:any,i:number)=>(
            <tr key={i} className="border-t border-white/10">
              {columns.map(col=>(
                <td key={col} className="p-3">{row[col]}</td>
              ))}
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )
}