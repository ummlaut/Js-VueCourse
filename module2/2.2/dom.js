const isParent = function (parent, child) {
  if (parent instanceof Node && child instanceof Node) {
    return parent === child.parentNode ? true : false;
  }
};

const links = document.querySelectorAll("a");
const linksArray = Array.from(links);
for (let i = 0; i < linksArray.length; i++) {
  if (linksArray[i].parentElement == "ul") {
    linksArray.removeChild(linksArray[i]);
  }
}
console.log(linksArray);
const ul = document.querySelector("ul");
ulPrev = ul.previousElementSibling;
ulNext = ul.nextElementSibling;
