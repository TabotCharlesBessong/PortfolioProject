export const pieData = [
  { name: "A", value: 79 },
  { name: "B", value: 41 },
  { name: "C", value: 59 },
  { name: "D", value: 81 },
  { name: "E", value: 49 },
  { name: "F", value: 54 },
];


export const barData = [
  {
    subject: "Math",
    attendancePercentage: 80,
    totalClasses: 20,
    attendanceClasses: 16,
    marksObtained: 85,
    subName: "Mathematics",
  },
  {
    subject: "English",
    attendancePercentage: 75,
    totalClasses: 20,
    attendanceClasses: 15,
    marksObtained: 80,
    subName: "English Language",
  },
  // Add more data points as needed
];

export const generateSubjectData = (n) => {
  const subjects = ["Math", "English", "Science", "History", "Geography","Philosophy"];
  const data = [];
  // n = 6

  for (let i = 0; i < n; i++) {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const totalClasses = Math.floor(Math.random() * 31);
    const attendanceClasses = Math.floor(Math.random() * (totalClasses + 1));
    const attendancePercentage = Math.round(((attendanceClasses/totalClasses) * 101),2);
    const marksObtained = Math.floor(Math.random() * 101);
    const subName = subject + " Subject";

    data.push({
      subject,
      attendancePercentage,
      totalClasses,
      attendanceClasses,
      marksObtained,
      subName,
    });
  }

  return data;
}

