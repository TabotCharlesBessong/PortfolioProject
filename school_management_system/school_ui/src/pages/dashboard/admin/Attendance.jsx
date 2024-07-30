import React, { useState } from "react";
import styled from "styled-components";
import { Sidebar } from "../../../component";

const AttendanceContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
`;

const AttendanceContent = styled.div`
  padding: 20px;
`;

const AttendanceHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AttendanceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AttendanceItem = styled.li`
  margin-bottom: 10px;
`;

const Attendance = () => {
  // Sample attendance data
  const attendanceData = [
    { id: 1, name: "John Doe", status: "Present" },
    { id: 2, name: "Jane Smith", status: "Absent" },
    { id: 3, name: "Michael Johnson", status: "Present" },
  ];

  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            {attendanceData.map((student) => (
              <AttendanceItem key={student.id}>
                {student.name}: {student.status}
              </AttendanceItem>
            ))}
          </AttendanceList>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  );
};

export default Attendance;
