export const generateRandomData = (n) => {
  const data = [];

  for (let i = 1; i <= n; i++) {
    const id = i;
    const name = `Name ${i}`;
    const age = Math.floor(Math.random() * 50) + 20;
    const email = `email${i}@example.com`;

    data.push({ id, name, age, email });
  }

  return data;
};

export const groupAttendanceBySubject = (subjectAttendance) => {
  const attendanceBySubject = {};
  subjectAttendance.forEach((attendance) => {
    const subName = attendance.subName.subName;
    const sessions = attendance.subName.sessions;
    const subId = attendance.subName._id;

    if (!attendanceBySubject[subName]) {
      attendanceBySubject[subName] = {
        present: 0,
        absent: 0,
        sessions,
        allData: [],
        subId,
      };
    }
    if (attendance.status === "Present") attendanceBySubject[subName].present++;
    else if (attendance.status === "Absent")
      attendanceBySubject[subName].absent++;
    attendanceBySubject[subName].allData.push({
      data: attendance.data,
      status: attendance.status,
    });
  });

  return attendanceBySubject;
};

export const generateRandomAttendanceData = (n) => {
  const randomData = generateRandomData(n);

  const subjectAttendance = randomData.map((data, index) => ({
    subName: {
      subName: `Subject ${index + 1}`,
      sessions: Math.floor(Math.random() * 20) + 10,
      _id: `subject_${index + 1}`,
    },
    status: Math.random() < 0.5 ? "Present" : "Absent",
    data: data,
  }));

  return groupAttendanceBySubject(subjectAttendance);
};

// Example usage:
const randomAttendanceData = generateRandomAttendanceData(10); // Generate 10 random attendance data points

console.log(randomAttendanceData);
