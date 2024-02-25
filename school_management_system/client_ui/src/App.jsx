import React from 'react'
import { CustomBarChart, CustomPieChart } from './component';
import { barData, generateSubjectData, pieData } from './constant/data/chart';

const App = () => {
  const data = generateSubjectData()
  console.log(data)
  console.log(barData)
  
  return (
    <div style={{ width: "100%" }}>
      <CustomPieChart data={pieData} />
      <CustomBarChart chartData={data} dataKey="attendancePercentage" />
      <CustomBarChart chartData={barData} dataKey="marksObtained" />
    </div>
  );
}

export default App