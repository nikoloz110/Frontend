function Car() {
  this.setName =  function(nameInp) {
    this.name = nameInp;
    return this;
  }

  this.setColor = function(colorInp){
    this.color = colorInp;
    return this;
  }
    
  this.setBrand =  function(brandInp){
    this.brand = brandInp;
    return this;
  }
  this.save = function() {
    console.log(`saving ${this.name}, color - ${this.color}, brand - ${this.brand}`)
  }
}

car = new Car();
car.setName('m5');
car.setColor('black');
car.setBrand('BMW');
car.save();