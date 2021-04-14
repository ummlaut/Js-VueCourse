//1
const btnMsg = document.querySelector("#btn-msg");
btnMsg.addEventListener("click", () => {
  alert(btnMsg.getAttribute("data-text"));
});

//2
btnMsg.addEventListener("mouseover", () => {
  btnMsg.classList.add("red");
});

btnMsg.addEventListener("mouseleave", () => {
  btnMsg.classList.remove("red");
});

//3
/*const tagElem = document.querySelector("#tag");
document.addEventListener("click", function (e) {
  tagElem.textContent = e.target.tagName;
});
*/
//4

btnGen = document.querySelector("#btn-generate");
const ul = document.querySelector("ul");
let number = ul.children.length + 1;
btnGen.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `Item ${number}`;
  ul.insertAdjacentElement("beforeend", li);
  number++;
});
