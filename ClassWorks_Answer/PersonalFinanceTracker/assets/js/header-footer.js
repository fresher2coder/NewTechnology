const headerHtml = `
<nav class="navbar">
  <div class="logo">FinanceBuddy</div>
  <ul class="nav-links" id="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#faq">FAQ</a></li>    
  </ul>
  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>
`;

const footerHtml = `
<div class="footer-container">
  <!-- Column 1: About Us, Help, Careers -->
  <div class="footer-column">
    <h3>About Us</h3>
    <ul>
      <li><a href="#">Careers</a></li>
      <li><a href="#">About Amazon</a></li>
      <li><a href="#">Investor Relations</a></li>
      <li><a href="#">Amazon Devices</a></li>
      <li><a href="#">Amazon Science</a></li>
    </ul>
  </div>

  <!-- Column 2: Get to Know Us -->
  <div class="footer-column">
    <h3>Get to Know Us</h3>
    <ul>
      <li><a href="#">Our Story</a></li>
      <li><a href="#">Press Releases</a></li>
      <li><a href="#">Amazon Blog</a></li>
      <li><a href="#">Sustainability</a></li>
      <li><a href="#">Affiliate Program</a></li>
    </ul>
  </div>

  <!-- Column 3: Make Money with Us -->
  <div class="footer-column">
    <h3>Make Money with Us</h3>
    <ul>
      <li><a href="#">Sell on Amazon</a></li>
      <li><a href="#">Amazon Payment Products</a></li>
      <li><a href="#">Host an Amazon Hub</a></li>
      <li><a href="#">Advertise Your Products</a></li>
      <li><a href="#">Amazon Pay</a></li>
    </ul>
  </div>

  <!-- Column 4: Social Media & News -->
  <div class="footer-column">
    <h3>Follow Us</h3>
    <ul class="social-media">
      <li><a href="#" class="social-icon">Facebook</a></li>
      <li><a href="#" class="social-icon">Twitter</a></li>
      <li><a href="#" class="social-icon">Instagram</a></li>
      <li><a href="#" class="social-icon">YouTube</a></li>
      <li><a href="#" class="social-icon">LinkedIn</a></li>
    </ul>
  </div>
</div>

<!-- Bottom Footer: Privacy, Terms, etc. -->
<div class="footer-bottom">
  <p>&copy; 2024 Amazon.com, Inc. or its affiliates</p>
  <ul class="footer-bottom-links">
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Conditions of Use</a></li>
    <li><a href="#">Site Map</a></li>
    <li><a href="#">Help</a></li>
  </ul>
</div>
`;

document.getElementById("header").innerHTML = headerHtml;
document.getElementById("footer").innerHTML = footerHtml;

// Dynamically toggle nav links based on login status
const links = document.getElementById("nav-links");
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) {
  // Add Dashboard and Sign Out if user is logged in
  links.innerHTML += `
    <li><a href="dashboard.html">Dashboard</a></li>
    <li><a href="#" id="signOutLink">Sign Out</a></li>
  `;

  // Handle Sign Out
  document.getElementById("signOutLink").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html"; // Redirect to Home page
  });
} else {
  // Add Sign Up and Sign In if user is not logged in
  links.innerHTML += `
    <li><a href="register.html">Sign Up</a></li>
    <li><a href="login.html">Sign In</a></li>
  `;
}
