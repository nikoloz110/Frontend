let userNumber1 = prompt("enter the number");
let userNumber2 = prompt("enter the number2");
let userOperator = prompt("enter operator");

switch (userOperator) {
  case '+':
    alert(Number(userNumber1) + Number(userNumber2));
    break;
    case '-':
    alert(Number(userNumber1) - Number(userNumber2));
    break;
    case '*':
    alert(Number(userNumber1) * Number(userNumber2));
    break;
    case '/':
    alert(Number(userNumber1) / Number(userNumber2));
    break;
}

