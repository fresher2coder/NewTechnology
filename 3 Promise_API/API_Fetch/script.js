const fetchBtn = document.getElementById("fetch-joke");
const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");

fetchBtn.addEventListener("click", () => {
  fetch("https://v2.jokeapi.dev/joke/Christmas")
    .then((response) => response.json())
    .then((data) => {
      setup.textContent = data.setup;
      delivery.textContent = data.delivery;
    })
    .catch((err) => {
      console.log(err);
    });
});
