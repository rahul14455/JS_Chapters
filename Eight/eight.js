let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turn0 = true; //Player X, Player O

let winningPattren = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      //Player O
      box.innerText = "O";
      turn0 = false;
    } else {
      // Player X
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
  });
});

const checkWinner = () => {
  for (let pattren of winningPattren) {
    //   console.log(pattren[0], pattren[1], pattren[2]);

    let pos1value = boxes[pattren[0]].innerText;
    let pos2value = boxes[pattren[1]].innerText;
    let pos3value = boxes[pattren[2]].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        console.log("winner", pos1value);
      }
    }
  }
};
