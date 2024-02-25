import React, { useState } from 'react';
import { CustomBarChart, CustomPieChart, Popup } from './component';
import { barData, generateSubjectData, pieData } from './constant/data/chart';

const App = () => {
  const data = generateSubjectData(8)
  console.log(data)
  console.log(barData)
  const [showPopup, setShowPopup] = useState(false);
  
  return (
    <div style={{ width: "100%" }}>
      <CustomPieChart data={pieData} />
      <CustomBarChart chartData={data} dataKey="attendancePercentage" />
      <CustomBarChart chartData={barData} dataKey="marksObtained" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => setShowPopup(!showPopup)}>Toogle</button>
        <Popup message="Done Successfully!" setShowPopup={setShowPopup} showPopup={showPopup} />
      </div>
    </div>
  );
}

export default App