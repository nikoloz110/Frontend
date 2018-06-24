function Calculator() {
  //creating object containing operators as keys and values as its functions
  this.operatorsObject = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  //splitting string into array, match "operator" to key in operatorsObject, and fire its function
  this.calculate = function(str) {
    let strArray = str.split(" ");
    let num1 = Number(strArray[0]);
    let num2 = Number(strArray[2]);
    let operator = strArray[1];
    for (let propertyName in this.operatorsObject) {
      if (propertyName === operator) {
        return this.operatorsObject[propertyName](num1, num2);
      }
    }
  };
  this.addMethod = function(name, func) {
    this.operatorsObject[name] = func;
  };
}
//test cases
let calc = new Calculator();
alert(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

