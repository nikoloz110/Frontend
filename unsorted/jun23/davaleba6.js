function  Calculator() {
  this.calculate = function (str) {
     let val1 = str[0];
     let val2 = str[4];
     let operator = str[2];
     let result = JSON.parse(val1+operator+val2);
     alert(result);
  }

  // this.addMethod = function(name, func) {

  // }
}

let powerCalc = new Calculator();
powerCalc.calculate('1 + 2');