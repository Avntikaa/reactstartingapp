import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props) => {
  const datavaluearray=props.datapoints.map((datapoint)=>datapoint.value);
  const maxvalue=Math.max(...datavaluearray);
  return (
    <div className='chart'>
{props.datapoints.map(datapoint=><ChartBar value={datapoint.value} maxvalue={maxvalue} label={datapoint.label}/>)}
    </div>
  )
}

export default Chart