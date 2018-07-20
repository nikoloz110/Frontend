let inputArray = [];
let userInput = Number(prompt("enter number please"));
// debugger;
while((!isNaN(userInput)) && !(userInput == null)) {
  

  inputArray.push(userInput);
  userInput = Number(prompt("enter number please"));

}

console.log(inputArray);
function sumInput(userInput) {

}