// let btn1 = document.getElementById("btn1");
// btn1.onclick = (evt) => {
/*
  console.log("btn1 was clicked");
  console.log(evt);
  let a = 25;
  a++;
  console.log(a); //26
  console.log(evt.type); //
  console.log(evt.target); //
  console.log(evt.clientX, evt.clientY); //
  
};
/*
let div = document.getElementById("box");
box.onmouseover = (evt) => {
  /* console.log(evt);
  console.log("You are inside the div");
  console.log(evt.type); //
  console.log(evt.target); //
  console.log(evt.clientX, evt.clientY); 
};
/*
btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler2");
});

const handler3 = () => {
  console.log("button1 was clicked - handler3");
};

btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler4");
});

btn1.removeEventListener("click", handler3);
*/

//Create a toggle button that change the state screen to dark mode when the user clicks the toggle button to the light mode

let modebtn = document.getElementById("mode");
let currentmode = "light";

modebtn.addEventListener("click", () => {
  // console.log("You are trying to change the Mode");
  if (currentmode === "light") {
    currentmode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currentmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currentmode);
});
