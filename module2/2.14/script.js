//1
const ul = document.querySelector("p");
ul.classList.add("list");
//2
ul.nextElementSibling.setAttribute("id", "link");
//3
for (let i = 0; i < ul.children.length; i++) {
  if (!ul.children[i] === 0) {
    ul.children[i].classList.add("item");
  }
}
//4
const [...links] = document.querySelectorAll("a") || [];
links.map((a) => a.classList.add("custom-link"));
