// Function to get users from localStorage
function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

// Handle Login
document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const users = getUsers();
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    message.textContent = "";
    localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store logged-in user
    window.location.href = "dashboard.html";
  } else {
    message.textContent = "Invalid email or password!";
  }
});
