var dropdown = document.querySelector(".dropdown");
var button = document.querySelector(".nav button");

button.addEventListener("click", function() {
  dropdown.classList.toggle("show");
});
