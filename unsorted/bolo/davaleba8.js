let userNum = Number(prompt("enter the number"));
let result ="";
for(i = 0; i < userNum; i++ ) {
  let userNum2 = userNum;
  for(j=0; j<userNum2; j++) {
    result+="*";
  }
  result+="\n";
}

console.log(result);