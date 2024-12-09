// Function to get users from localStorage
function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

// Function to save users to localStorage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to handle sign-up
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Basic validation
  if (!username || !email || !password) {
    message.textContent = "All fields are required!";
    return;
  }

  // Check if email is already registered
  const users = getUsers();
  const emailExists = users.some((user) => user.email === email);

  if (emailExists) {
    message.textContent = "Email is already registered!";
    return;
  }

  // Add new user to localStorage
  users.push({ username, email, password });
  saveUsers(users);

  // Show success message and redirect link
  message.style.color = "#337357";
  message.innerHTML = `
    Registration successful! Redirecting to <a id="redirect-link" href="login.html">Login</a> in 10 seconds...
  `;

  // Reset the form
  document.getElementById("signupForm").reset();
});

let count = 10;
const countDownSpan = document.getElementById("count-down");
const countDown = setInterval(() => {
  count--;
  if (count < 0) {
    clearInterval(countDown);
    window.location.href = "login.html";
    return;
  }
  countDownSpan.textContent = count;
}, count * 1000);
