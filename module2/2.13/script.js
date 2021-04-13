//1
const pText = document.querySelector("p").textContent;
//2
const DOMInformation = (node) => console.dir(node);
//3
const filteredLinks = [...document.links].filter((a) => a.closest("ul"));
filterText = filteredLinks.map(filteredLinks.textContent);
