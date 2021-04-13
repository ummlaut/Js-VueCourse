//1
const pText = document.querySelector("p").textContent;
//2
const DOMInformation = (node) => console.dir(node);
//3
const filteredLinks = [...document.links].filter((a) => a.closest("ul"));
filterText = filteredLinks.map(filteredLinks.textContent);

//prepod solutions
//2
function getNodeInfo(node) {
  if (!(node instanceof Element)) return;

  return {
    nodeType: node.nodeType,
    tagName: node.tagName,
    childNodes: node.childNodes.length,
  };
}

const info = getNodeInfo(p);
console.log(info);

//3
const list = document.querySelector("ul");

function getTextFromUl(ul) {
  if (!(ul instanceof HTMLElement)) return;
  const [...links] = ul.querySelectorAll("a") || [];
  return links.map((a) => a.textContent);
}

console.log(getTextFromUl(list));

//4
const [...pChildNodes] = document.querySelector("p").childNodes;
pChildNodes.forEach((child) => {
  if (child.nodeType === 3) {
    child.textContent = "-text-";
  }
});
