let userNum = Number(prompt('enter number'));
let sum = 0;
while (userNum) {
  sum += userNum % 10;
  userNum = Math.floor(userNum/10);
  
}
alert(sum);