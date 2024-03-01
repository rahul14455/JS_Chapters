function remove() {
  const list = document.getElementById("list");
  list.removeChild(list.children[2]);
}

function replace() {
  const element = document.getElementById("list").children[0];
  console.log(element);
  const newNode = document.createTextNode("Rahul");
  element.replaceChild(newNode, element.childNodes[0]);
}
