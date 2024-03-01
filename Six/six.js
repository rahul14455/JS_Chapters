/*
let c = document.getElementById("head");
function change() {
  c.innerHTML = "RCB";
  c.style.backgroundColor = "red";
}

function myfunction() {
  c.innerHTML = "James";
  c.style.color = "pink";
}
*/

let element = document.getElementById("box");
console.log(element);
let id = element.getAttribute("id");
let name = element.getAttribute("name");
console.log(id);
console.log(name);
/*
let e = document.getElementsByClassName("para");
console.log(e);

let cname = e.getAttribute("class");
console.log(cname);
*/
// let cname = e.getAttribute("class");
// console.log(cname);

// console.log(id.setAttribute("id", "b"));
id.setAttribute("id", "123");
