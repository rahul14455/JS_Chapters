/*
function myfun() {
  console.log("Welcomr To JavaScript");
  console.log("We are Learning Functions");
}
myfun();

function myfunction(msg, n) {
  console.log(msg * n);
}
console.log("I Love Js", 100);
*/

/*
function sum(x, y) {
  console.log(x + y);
}
sum(5, 5);
sum(121, 892);
*/
/*
var sum = function (x, y) {
  console.log(x + y);
};
sum(10, 10);
*/

// Arrow Functions
/*
const functionname = () => {
  console.log("Arrow Functions");
};
functionname();
*/
/*
const mul = (a, b) => {
  console.log(a + b);
};
mul(10, 10);
*/
/*
function countvowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countvowels("Rahul");
*/
/*
const countvar = (str) => {

  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countvar("aeiou");
*/
/*
function sum(a, b) {
  console.log(a + b);
}
sum(7, function fun(a, b) {
  console.log(a - b);
});

fun();
*/
/*
function greet(fname) {
  const myName = "RahulKumar";
  console.log(`Good Morning ${fname}, My name is ${myName}`);
}

greet("James");

function greetAfternoon(fname) {
  const myName = "RahulKumar";
  console.log(`Good Afternoon ${fname}, My name is ${myName}`);
}

greetAfternoon("Harry");
*/

//Call Back

function morning() {
  console.log("Good Morning Hermonine");
  return "Good Morning";
}

//Higher order function
/*
function greet(fname, MorningCB) {
  const myName = "RahulKumar";
  console.log(`Good Morning ${fname}, My name is ${myName}`);
  MorningCB();
}

greet("Emma", morning);
greet("Harry", morning);

function m1(a) {
  console.log("This is M1");
}

function m2(a) {
  console.log("This is M2");
}

m2(m1);
*/
/*
let companies = [
  { name: "Infosys", category: "IT", start: 1981, end: 2004 },
  { name: "Apollo", category: "Hospital", start: 1992, end: 2008 },
  { name: "TataMotors", category: "Automobile", start: 1999, end: 2007 },
  { name: "Apple", category: "Mobile", start: 1989, end: 2010 },
  { name: "Capgemini", category: "IT", start: 2001, end: 2014 },
];

//ForEach()

companies.forEach(function (Somevalue) {
  console.log(Somevalue.name);
});

*/
/*
const arr = ["James", "John", "Machyo", "psych"];
console.log(arr);

arr.forEach(function printval(value) {   // Each value at each index
  console.log(value);
});

arr.forEach((value) => {
  console.log(value.toUpperCase()); // console);
});
*/
/*const square = [1, 2, 3, 4, 5, 6];

square.forEach(function sqre(value) {
  console.log(value * value);
});

square.forEach((value) => {
  console.log(value * value);
});
*/

// Map Method
/*
let nums = [1, 2, 3, 4, 5, 6];

newarr = nums.map(function value(val) {
  return val * val;
});

console.log(newarr);
console.log(nums);
*/
// Filter Method
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newarr = num.filter(function value(val) {
  // return val % 2 === 0;
  return val > 3;
});
console.log(num);
console.log(newarr);
*/

// Reduce Method
/*
let arr = [1, 2, 3, 4, 501, 6, 7, 8, 9, 10];


const output = arr.reduce((res, curr) => {
  return res + curr;
});
console.log(output);


//largest number

const largest = arr.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log(largest);

const smallest = arr.reduce((prev, curr) => {
  return prev < curr ? prev : curr;
});
console.log(smallest);
*/

let arr = [87, 93, 64, 99, 86, 96];

newar = arr.filter((value) => {
  return value > 90;
});

console.log(newar);

let n = prompt("Enter the Number: ");
let arr2 = [];
for (let i = 1; i <= n; i++) {
  arr2[i - 1] = i;
}
console.log(arr2);

let nr = arr2.reduce((prev, curr) => {
  return prev + curr;
});

console.log(nr);

let product = arr2.reduce((prev, curr) => {
  return prev * curr;
});
console.log(product);

/* 
I Rahul Kumar, originally from Andhra Pradesh, and currently residing in Bangalore. I take pride in my academic journey, having graduated from RV College of Engineering and Ms Ramaiah College of Arts, Science, and Commerce, both prestigious institutions in Bangalore. Presently, I am furthering my skills by pursuing a "Full Stack Developer" course at Newton School.
*/
