// Check if the user is logged in
loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
  // Redirect to login page if not logged in
  window.location.href = "login.html";
} else {
  // Display user data
  const usernameElement = document.getElementById("username");
  const userDataList = document.getElementById("user-data");

  // Set the username in the header
  usernameElement.textContent = loggedInUser.username;

  // Example: Mock dynamic data for the dashboard
  const userFinancialData = [
    { date: "2024-12-01", description: "Groceries", amount: "-$50.00" },
    { date: "2024-12-02", description: "Salary", amount: "+$3000.00" },
    { date: "2024-12-03", description: "Electricity Bill", amount: "-$120.00" },
    { date: "2024-12-04", description: "Dining Out", amount: "-$75.00" },
  ];

  // Render the financial data dynamically
  userFinancialData.forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${entry.date}:</strong> ${entry.description} <span style="float: right;">${entry.amount}</span>`;
    userDataList.appendChild(li);
  });
}
