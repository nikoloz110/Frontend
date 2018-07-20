let minNum = Number(prompt('enter number min'));
let maxNum = Number(prompt('enter number max'));
if(minNum > maxNum) {
  let a = minNum;
  minNum = maxNum;
  maxNum = a;
}
for (i = minNum; i < maxNum; i++) {
  if(i%2==0) {
    console.log(i);
  }
}