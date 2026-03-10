import { NextResponse } from "next/server"
import { runAnalysis } from "@/lib/analysis"
import { generateChart } from "@/lib/charts"

export async function POST(req: Request) {

  const body = await req.json()
  const message = body.message

  /* Chart request */

  if (message.includes("chart")) {

    const chart = generateChart()

    return NextResponse.json({
      type: "chart",
      data: chart
    })

  }

  /* EDA request */

  if (message.includes("analyze") || message.includes("dataset")) {

    const analysis = runAnalysis()

    return NextResponse.json({
      type: "analysis",
      data: analysis
    })

  }

  /* Default */

  return NextResponse.json({
    type: "text",
    message:
      "Ask me to analyze your dataset, generate charts, or detect correlations."
  })
}