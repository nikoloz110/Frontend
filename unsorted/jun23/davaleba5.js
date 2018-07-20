function Accumulator(startingValue) {
  this.startingValue = startingValue;


  this.read = function() {
    this.startingValue +=Number(prompt('enter value'));
  }
}

let accumulator = new Accumulator(1);
accumulator.read();
alert(accumulator.startingValue);