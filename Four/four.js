let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);

let heros = ["Thor", "CaptainAmerica", "BlackPanther", "IronMan", "Hulk"];
console.log(heros);

// Array Indices

// console.log(heros[1]);
// console.log(heros[4]);
for (let i = 0; i < heros.length; i++) {
  console.log(heros[i]);
}

for (let mark of marks) {
  console.log(mark);
}

let cites = ["Bangalore", "Hyderabad", "Delhi", "Pune", "Goa", "Mumbai"];
for (let city of cites) {
  console.log(city.toLocaleUpperCase());
}

let arr = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of arr) {
  sum += val;
}
let avg = sum / marks.length;
console.log(avg);
