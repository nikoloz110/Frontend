let userInput = prompt("enter the year please", "");

if(userInput % 4 == 0 && ( !(userInput % 100 == 0) || userInput % 400 == 0)) {
  alert("leap year");
 } else {
  alert(" not leap year")
 }
