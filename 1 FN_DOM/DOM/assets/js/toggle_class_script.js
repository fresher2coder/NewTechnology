// Selecting the checkbox input and body element
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Adding event listener to the checkbox to toggle dark mode
themeToggle.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});
