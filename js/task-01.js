const list = document.querySelector("ul");
const childrenCollection = list.children;

console.log(`Number of categories: ${childrenCollection.length}`);

for (const child of childrenCollection) {
  console.log(`Category: ${child.firstElementChild.textContent}`);
  console.log(`Elements: ${child.lastElementChild.children.length}`);
}
