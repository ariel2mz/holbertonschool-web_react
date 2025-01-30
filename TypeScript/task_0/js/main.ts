interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

const student1: Student = {
    firstName: "Pablito",
    lastName: "Queso",
    age: 20,
    location: "la S bro",
};
  
const student2: Student = {
    firstName: "Manuel",
    lastName: "Somma",
    age: 22,
    location: "sayago",
};


const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Location"];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    studentsList.forEach(student => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        table.appendChild(row);
    });

    document.body.appendChild(table);
});