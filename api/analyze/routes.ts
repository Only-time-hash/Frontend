import { NextResponse } from "next/server"

export async function POST(req:Request){

  const formData = await req.formData()

  const file = formData.get("file") as File

  if(!file){

    return NextResponse.json({
      analysis:"No file received."
    })

  }

  const text = await file.text()

  const rows = text.split("\n")
  const columns = rows[0].split(",")

  const analysis = `
Dataset Analysis

Rows detected: ${rows.length - 1}
Columns detected: ${columns.length}

Columns:
${columns.join(", ")}

You can now ask questions like:
• show correlations
• detect missing values
• generate charts
`

  return NextResponse.json({
    analysis
  })

}