// Fetch JSON data using Axios
axios
  .get("./data.json")
  .then((response) => {
    const students = response.data.students;
    displayStudentList(students);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Display the list of students
function displayStudentList(students) {
  const studentListDiv = document.getElementById("student-list");
  studentListDiv.innerHTML = ""; // Clear previous content

  students.forEach((student) => {
    const studentItem = document.createElement("div");
    studentItem.className = "student-item";
    studentItem.textContent = student.name;
    studentItem.addEventListener("click", () => showStudentDetails(student));
    studentListDiv.appendChild(studentItem);
  });
}

// Show details of a specific student
function showStudentDetails(student) {
  const detailsDiv = document.getElementById("student-details");
  detailsDiv.innerHTML = `
    <h2>${student.name}</h2>
    <p><strong>Age:</strong> ${student.age}</p>
    <p><strong>Email:</strong> ${student.email}</p>
    <p><strong>Course:</strong> ${student.course}</p>
    <button class="button" onclick="goBack()">Go Back</button>
  `;
  detailsDiv.classList.remove("hidden");
  document.getElementById("student-list").classList.add("hidden");
}

// Go back to the student list
function goBack() {
  document.getElementById("student-list").classList.remove("hidden");
  document.getElementById("student-details").classList.add("hidden");
}
