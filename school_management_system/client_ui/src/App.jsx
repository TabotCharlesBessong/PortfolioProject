import React from 'react'
import { CustomPieChart } from './component';

const App = () => {
  const chartData = [
    { name: "A", value: 79 },
    { name: "B", value: 41 },
    { name: "C", value: 59 },
    { name: "D", value: 81 },
    { name: "E", value: 49 },
    { name: "F", value: 54 },
  ];
  return (
    <div style={{width:'100%'}} >
      <CustomPieChart data={chartData} />
    </div>
  )
}

export default App