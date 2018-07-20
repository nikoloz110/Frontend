// let calc = {
//   read: function() {
//     this.val1 = Number(prompt("enter number"));
//     this.val2 = Number(prompt("enter number"));
//   },
//   sum: function() {
//     return this.val1 + this.val2;
//   },
//   mul: function() {
//     return this.val1  * this.val2;
//   }
// }

function Calc() {
  this.val1 = 0;
  this.val2 = 0;
  this.read = function() {
    this.val1 = Number(prompt("enter number"));
    this.val2 = Number(prompt("enter number"));
  };
  this.sum = function() {
    return this.val1 + this.val2;
  };
  this.mul =  function() {
    return this.val1  * this.val2;
    
    
  }
}

let calc1 = new Calc();
alert(calc1.sum());
calc1.read();

alert(calc1.mul());