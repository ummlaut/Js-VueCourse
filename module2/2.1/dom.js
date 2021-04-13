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

//prepod solution
//1
console.log(document.head);
//2
console.log(document.body);
//3
console.log(document.body.children);
//4.а
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.children);
// 4.б
const div = document.body.firstElementChild;
// При помощи оператора ... мы получаем из коллекции массив который фильтруем сравнивая каждый элемент с первым и последним элементом в div.
const filteredArticles = [...div.children].filter(
  (p) => p !== div.firstElementChild && p !== div.lastElementChild
);
console.log(filteredArticles);
