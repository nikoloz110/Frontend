// console.log("CONNECTED!");

// let box = document.querySelector('.box');
// box.style.backgroundColor = 'red';

// //window.onload
// //DOMcontentLoaded

// function DOMContentLoaded() {
//     alert('DOMContentLoaded');
// }
// document.addEventListener('DOMContentLoaded', DOMContentLoaded);

// window.onload = function() {
//   alert('window.onload');
// }
// hoisted
function getName(name) {
  console.log(name);
}

let getNameV2 = function(name) {
  console.log(name);
} 

// x = 8;
// ( function(x) {
//   alert(x);
// } )(8);

function showMessage(from, text) {
  from = `* ${from}*`;
  alert(`${form}: ${text}`);
}
let from = 'john';
showMessage(from, 'john');

function sum(x, y) {
  return x + y;
}
let result = sum(5, 8);

function checkMovie(age) {
  if (age < 18 ) return;
}

function nothing() {
  
}