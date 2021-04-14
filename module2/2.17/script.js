const items = document.querySelectorAll(".dropdown-item");
console.log(items);
for (item of items) {
  item.addEventListener("click", function (e) {
    const menu = item.querySelector(".dropdown-menu");
    menu.classList.toggle("d-none");
    if (e.target !== item) {
      eMenu = e.target.querySelector(".dropdown-menu");
      eMenu.classList.remove("d-none");
      menu.querySelector(".dropdown-menu").classList.add("d-none");
    }
  });
}
