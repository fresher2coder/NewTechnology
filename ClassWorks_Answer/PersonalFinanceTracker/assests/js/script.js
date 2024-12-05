const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Get all accordion buttons
const accordions = document.querySelectorAll(".accordion");

// Add event listeners to each accordion button
accordions.forEach((accordion) => {
  accordion.addEventListener("click", function (event) {
    // Stop the click event from propagating to the window click listener
    event.stopPropagation();

    // Get the next sibling element (the panel)
    const panel = this.nextElementSibling;

    // Toggle the display of the panel
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      // Close all other panels before opening the clicked one
      document.querySelectorAll(".panel").forEach((openPanel) => {
        openPanel.style.display = "none";
      });
      panel.style.display = "block";
    }
  });
});

// Add event listener to close all panels when clicking outside the accordion
window.addEventListener("click", function () {
  document.querySelectorAll(".panel").forEach((panel) => {
    panel.style.display = "none";
  });
});
