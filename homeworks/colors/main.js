const showBtn = document.querySelector('.showBtn');
const colorsTable = document.querySelector('.wrapper');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');

colorsTable.addEventListener('click', saveColor);
showBtn.addEventListener('click', showColors);
let color1, color2, color3;
function saveColor(e) {
 if((parseInt(e.target.textContent)) < 6) {
  color1 = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
 } else if((parseInt(e.target.textContent)) < 11) {
  color2 = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
 } else {
  color3 = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
 }
}

function showColors(e) {
  e.preventDefault();
  b1.style.backgroundColor = color1;
  b2.style.backgroundColor = color2;
  b3.style.backgroundColor = color3;
}