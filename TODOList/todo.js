let input = document.getElementById("inputfield");
let list = document.getElementById("list");

function myfunc() {
  const listitem = document.createElement("li");
  listitem.innerText = input.value;
  list.appendChild(listitem);

  const removebtn = document.createElement("button");
  removebtn.innerText = "Remove";
  removebtn.onclick = () => {
    list.removeChild(listitem);
  };
  listitem.appendChild(removebtn);
}
