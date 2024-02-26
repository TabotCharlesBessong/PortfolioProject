import React, { useState } from "react";
import {
  AccountMenu,
  CustomBarChart,
  CustomPieChart,
  Popup,
  SpeedDialTemplate,
  TableTemplate,
} from "./component";
import { barData, generateSubjectData, pieData } from "./constant/data/chart";
import { columns, generateTableData } from "./constant/data/table";
import { IconButton } from "@mui/material";
import { BlueButton, PurpleButton } from "./component/styles/buttonStyles";
import { PersonRemove } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PostAdd } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import { generateRandomAttendanceData } from "./constant/data/utils";
import { groupAttendanceBySubject } from "./utils/attendanceCalculator";

const App = () => {
  const data = generateSubjectData(8);
  console.log(data);
  console.log(barData);
  const [showPopup, setShowPopup] = useState(false);
  const table = generateTableData(37);
  console.log({ table, columns });
  // const navigate = useNavigate()
  const deleteHandler = () => {
    console.log("Ouch deleted");
  };
  const attendance = generateRandomAttendanceData(17)
  console.log(attendance)
  // const subjectAttendance = groupAttendanceBySubject(attendance)
  // console.log(subjectAttendance)
  const UserHaver = ({ row }) => {
    return (
      <>
        <IconButton onClick={() => deleteHandler(row.id, "Student")}>
          <PersonRemove color="error" />
        </IconButton>
        <BlueButton variant="contained" onClick={{}}>
          View
        </BlueButton>
        <PurpleButton
          variant="contained"
          onClick={() =>
            navigate("/Admin/students/student/attendance/" + row.id)
          }
        >
          Attendance
        </PurpleButton>
      </>
    );
  };

  const subjectActions = [
    {
      icon: <PostAdd color="primary" />,
      name: "Add New Subject",
      action: () => {},
    },
    {
      icon: <Delete color="error" />,
      name: "Delete All Subjects",
      action: () => deleteHandler(),
    },
  ];

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
        <Popup
          message="Done Successfully!"
          setShowPopup={setShowPopup}
          showPopup={showPopup}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <TableTemplate buttonHaver={UserHaver} columns={columns} rows={table} />
      </div>
      <div>
        <SpeedDialTemplate actions={subjectActions} />
      </div>
      <div>
        <AccountMenu />
      </div>
    </div>
  );
};

export default App;
