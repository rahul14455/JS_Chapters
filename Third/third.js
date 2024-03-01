// print 1 - 5 numbers
/*
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("Loop has Ended");
*/

// Caliculate sum of 1 to 5
/*
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum);
*/
// Caliculate sum of 1 to n
/*
let sum = 0;
let n = 100;
for (let i = 0; i <= n; i++) {
  sum = sum + i;
}
console.log(sum);
*/

//while
/*
let i = 1;
while (i <= 15) {
  console.log(i);
  i++;
}
*/

//do while loop
/*
let i = 20;
do {
  console.log(i);
  i++;
} while (i <= 25);
*/
/*
let size = 0;
let str = "RahulKumar";
for (let i of str) {
  console.log("i = " + i);
  size++;
}
console.log("String size is = ", size);
*/

/*
let student = {
  name: "K Rahul Kumar",
  age: 25,
  cgpa: 7.35,
  isPass: true,
};

for (let i in student) {
  console.log(i);
}
// console.log(student);
*/

// print all even numbers from 0 to 100;
/*
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/
/*
let gamenum = 25;

let userNum = prompt("Guess Game Number :");
while (userNum != gamenum) {
  userNum = prompt("You Entered Wrong Number. Guess Again :");
}
console.log("Congratulations You Enter the Right Number");
*/

//Strings

let str = "Royal Challengers Bangalore";
let str2 = "Rahul Kumar";
/*
console.log(str.length);
console.log(str2.length);

console.log(str[0]);
console.log(str[27]);

let sentance = `This is Temlate literal`;

let obj = {
  item: "pen",
  price: 20,
};

console.log("The cost of", obj.item, "is", obj.price);
console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
*/
/*
console.log(str.toUpperCase());
console.log(str2.toLocaleLowerCase());
console.log(str.trim());

console.log(str.slice(6, 17));
console.log(str.concat(str2));
console.log(str.replace("C", "c"));
charAt(0);
*/
/* Generating Usernames 
let Fullname = prompt("Enter the FullName without spaces: ");
username = "@" + Fullname + Fullname.length;
console.log(username);
*/
