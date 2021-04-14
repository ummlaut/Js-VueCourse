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
const tagElem = document.querySelector("#tag");
document.addEventListener("click", function (e) {
  tagElem.textContent = e.target;
});
