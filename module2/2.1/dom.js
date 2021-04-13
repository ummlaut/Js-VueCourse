const head = document.querySelector("head");
const body = document.querySelector("body");
const bodyChildren = document.сhildNodes("body");
const firstDiv = document.querySelector("div");
const firstDivChildren = firstDiv.children;
const firstDivFirstChild = firstDiv.firstChild;
const firstDivLastChild = firstDiv.lastChild;
const firstDivWithout = firstDivChildren
  .removeChild(firstDivFirstChild)
  .removeChild(firstDivLastChild);
console.log(head);
console.log(body);
console.log(bodyChildren);
console.log(firstDiv, firstDivChildren);
