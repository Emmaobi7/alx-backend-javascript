interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  };

const student0: Student = {
  firstName: 'Emma',
  lastName: 'okenwa',
  age: 22,
  location: 'zaria',
  };

const student1: Student = {
  firstName: 'obinna',
  lastName: 'okenwa',
  age: 23,
  location: 'kano',
  };

const studentsList = [student0, student1];


let table = document.createElement('table');
const tableHead = document.createElement('thead');
const headRow = document.createElement('tr');

const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');
firstNameHeader.textContent = 'First name';
locationHeader.textContent = 'Location';


headRow.appendChild(firstNameHeader);
headRow.appendChild(locationHeader);

tableHead.appendChild(headRow);

table.appendChild(tableHead);


const tableBody = document.createElement('tbody');

studentsList.forEach(student => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});
table.appendChild(tableBody);

document.body.appendChild(table);
