import React from "react"
import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {
  const dataPointValues = props.chartData.map(data => data.value)
  const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {props.chartData.map((data) => {
        return (
          <ChartBar
            key={data.label}
            label={data.label}
            value={data.value}
            maxValue={totalMaximum}
          />
        )
      })}
    </div>
  )
}

export default Chart
