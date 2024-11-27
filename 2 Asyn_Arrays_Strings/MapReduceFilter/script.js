document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementsByTagName("header")[0];
  const main = document.getElementsByTagName("main")[0];

  // Get the height of the header using offsetHeight
  const headerHeight = header.offsetHeight + "px"; // Convert to string with 'px' unit

  // Set the margin-top of <main> to the height of the <header>
  main.style.marginTop = headerHeight;
});

// Expanded example data
const employees = [
  { name: "Alice", department: "Engineering", salary: 80000 },
  { name: "Bob", department: "Marketing", salary: 50000 },
  { name: "Charlie", department: "Engineering", salary: 70000 },
  { name: "David", department: "HR", salary: 60000 },
  { name: "Eve", department: "Engineering", salary: 75000 },
  { name: "Fay", department: "Marketing", salary: 55000 },
  { name: "George", department: "Sales", salary: 65000 },
  { name: "Hannah", department: "Sales", salary: 62000 },
  { name: "Ivy", department: "HR", salary: 58000 },
  { name: "Jack", department: "Engineering", salary: 72000 },
  { name: "Karen", department: "Marketing", salary: 53000 },
  { name: "Leo", department: "Sales", salary: 71000 },
  { name: "Mia", department: "HR", salary: 62000 },
  { name: "Nina", department: "Sales", salary: 60000 },
  { name: "Oscar", department: "Engineering", salary: 79000 },
  { name: "Paul", department: "Marketing", salary: 54000 },
  { name: "Quinn", department: "Sales", salary: 69000 },
];

// Function to update results based on the selected department
function updateResults() {
  const targetDept = document.getElementById("departmentSelect").value;

  //filter
  const filteredEmp = employees.filter((emp) => emp.department === targetDept);

  //reduce
  const totalSalary = filteredEmp.reduce((total, emp) => {
    total + emp.salary;
  }, 0);

  //map
  const salaries = filteredEmp.map((emp) => emp.salary);

  console.log(filteredEmp);
  const empTable = `
    <div class="table-container">
    <table id="employeeTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        ${filteredEmp
          .map(
            (emp) =>
              `<tr>
              <td>${emp.name}</td>
              <td>${emp.department}</td>
              <td>${emp.salary}</td>
            </tr>`
          )
          .join("")}
      <tbody>
    </table>
    </div>
  `;

  //display the table
  const result = document.getElementById("result");
  result.innerHTML = empTable;

  $("#employeeTable").DataTable();
}

// Add event listener to button
document.getElementById("processData").addEventListener("click", updateResults);

// Initialize with default department
updateResults();
