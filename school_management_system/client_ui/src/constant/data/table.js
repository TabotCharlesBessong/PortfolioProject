

export const generateTableData = (n) => {
  const data = [];

  for (let i = 1; i <= n; i++) {
    const id = i;
    const name = `Name ${i}`;
    const age = Math.floor(Math.random() * 50) + 20;
    const email = `email${i}@example.com`;

    data.push({ id, name, age, email });
  }

  return data;
}

export const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 100 },
  { id: "age", label: "Age", minWidth: 50 },
  { id: "email", label: "Email", minWidth: 150 },
];

