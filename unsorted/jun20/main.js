// console.log("connected");

// function defaultParams(x, y = 5) {
//   return x * y;
// }

// console.log(defaultParams());

// function checkAge(age, granted, denied) {
//   if (age < 18) denied();
//   else granted();
// }

// let age = prompt('what is your age', 18);

// let granted = () => alert("Access granted");

// let denyAccess = () => alert("Access not granted");

// checkAge(age, granted, denyAccess);

//massives
let years = new Array(10);
let years2 = [];

console.log(years.length);
years.length = 5;
console.log(years2.length);

let fruits = ['apple', "banana", "cherry"];

console.log(fruits.length);

fruits.forEach(function(fruit){
  console.log(fruit);
});

let arr = ['Apple', {name:"john"}, true, () => {alert("Hello from array")}];

console.log(arr[3]);

// arr[3]();

let numbers = [];
 numbers.push(1);
 numbers.push(3);
 numbers.push(8);
 numbers.push(13);
//push/pop  - lifo
// numbers.pop()
// //shift/unshift  - fifo slower
// numbers.unshift(3);
// numbers.shift();

let n = numbers;
console.log(n);
n.push(33);
// let clone = Object.assign({}, numbers);
let clone = numbers.slice();
console.log(numbers);

clone.age = 11;

for(let index = 0; index < numbers.length; index+=1 ) {
  console.log(numbers[index]);
}
// for i
// for (number of numbers) {
//   console.log(number);
// }

// for (number in numbers) {
//   console.log(numbers[number]);
// }

numbers.toString()
numbers.join("-")

let matrix = [
  [1,2,3],
  [4,5,6,],
  [7, 8, 9],
]