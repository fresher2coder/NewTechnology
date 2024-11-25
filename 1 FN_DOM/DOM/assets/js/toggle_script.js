// Get the element with the ID "title" and assign it to the variable 'title'
const title = document.getElementById("title");

// Get the element with the ID "toggle-btn" and assign it to the variable 'toggleButton'
const toggleButton = document.getElementById("toggle-btn");

// Log the 'title' element to the console
console.log(title);

// Log the 'toggleButton' element to the console
console.log(toggleButton);

// Define a function named 'toggleTitle' that will toggle the text case of the 'title' element
function toggleTitle() {
    // Check if the text content of 'title' is in uppercase
    if (title.textContent === title.textContent.toUpperCase()) {
        // If it is, change the text content to lowercase
        title.textContent = title.textContent.toLowerCase();
    } else {
        // If it is not, change the text content to uppercase
        title.textContent = title.textContent.toUpperCase();
    }
}

// The 'toggleTitle' function can be called when the button with the ID 'toggle-btn' is clicked.
// To make this functional, add the following line to attach the 'toggleTitle' function to the button's click event:

// toggleButton.addEventListener("click", toggleTitle);
