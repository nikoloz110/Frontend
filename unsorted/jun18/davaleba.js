let x = Number(prompt("enter the number"));
let y = Number(prompt("how many times"));
  while(x < 1 || x % 1 != 0) {
    x = Number(prompt("enter valid number"));
  }

function pow(x, y) {
  let result = 1;
  for (i = 0; i < y ; i++ ) {
    result *= x;
  }
  return result;
}

alert(pow(x,y));







