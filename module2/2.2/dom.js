//2.2
const isParent = function (parent, child) {
  if (parent instanceof Node && child instanceof Node) {
    return parent === child.parentNode ? true : false;
  }
};
//2.3
const links = document.querySelectorAll("a");
const linksArray = Array.from(links);
for (let i = 0; i < linksArray.length; i++) {
  if (linksArray[i].parentElement == "ul") {
    linksArray.removeChild(linksArray[i]);
  }
}
console.log(linksArray);

//2.4
const ul = document.querySelector("ul");
ulPrev = ul.previousElementSibling;
ulNext = ul.nextElementSibling;

//prepod solutions
 function isParent(parent, child) {
   // Проверяем что переданные элементы являются HTML элементами
   if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement))
     return;

   let isParent = false;
   let currentParent = child.parentElement;

   while (currentParent) {
     isParent = currentParent === parent;
     if (isParent) {
       break;
     }

     currentParent = currentParent.parentElement;
   }

   return isParent;
 }

 isParent(document.body.children[0], document.querySelector("mark"));

 //3
const filteredLinks = [...document.links].filter((a) => !a.closest("ul"));
console.log(filteredLinks);

//const ul = document.querySelector('ul');
const prev = ul.previousElementSibling;
const next = ul.nextElementSibling;