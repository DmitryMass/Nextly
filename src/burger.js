let burgerMenu = document.getElementById("burger");

burgerMenu.addEventListener("click", showMenu);
function showMenu() {
  burgerMenu.classList.toggle("active");
}
