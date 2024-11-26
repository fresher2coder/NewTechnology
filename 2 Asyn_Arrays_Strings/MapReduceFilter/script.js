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
  const targetDepartment = document.getElementById("departmentSelect").value;

  // 1. Filter employees by department
  const filteredEmployees = employees.filter(
    (employee) => employee.department === targetDepartment
  );

  // 2. Map to get an array of salaries
  const salaries = filteredEmployees.map((employee) => employee.salary);

  // 3. Reduce to calculate the total salary
  const totalSalary = salaries.reduce(
    (accumulator, currentSalary) => accumulator + currentSalary,
    0
  );

  // Create a table of employee details
  const employeeDetailsTable = `
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
                    ${filteredEmployees
                      .map(
                        (employee) => `
                        <tr>
                            <td>${employee.name}</td>
                            <td>${employee.department}</td>
                            <td>$${employee.salary}</td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `;

  // Display the result
  const resultSection = document.getElementById("result");
  resultSection.innerHTML = `
        <h2>Results for Department: ${targetDepartment}</h2>
        <p>Total Number of Employees: ${filteredEmployees.length}</p>
        <p>Total Salary: $${totalSalary}</p>
        <h3>Employee Salaries:</h3>
        <ul>
            ${salaries.map((salary) => `<li>$${salary}</li>`).join("")}
        </ul>
        <h3>Employee Details:</h3>
        ${employeeDetailsTable}
    `;

  // Initialize DataTables
  $("#employeeTable").DataTable();
}

// Add event listener to button
document.getElementById("processData").addEventListener("click", updateResults);

// Initialize with default department
updateResults();
