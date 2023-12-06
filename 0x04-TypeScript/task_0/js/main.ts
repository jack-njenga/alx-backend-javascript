export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Jack",
  lastName: "Njenga",
  age: 29,
  location: "Uzbekistan",
};

const studentB: Student = {
  firstName: "Nina",
  lastName: "Simone",
  age: 30.2,
  location: ".",
};

const studentsList: Student[] = [studentA, studentB];

const renderTableTemplate = (): void => {
  const table = document.getElementById("studentsTable");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
  });
};

renderTableTemplate();
