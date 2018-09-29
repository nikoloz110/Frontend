let foodList = [];
function generateRandApplePos() {
  //make food spawn like every 10px, so snake can not partially intercept that.
    let pos_x = Math.random() * 250 + 10;
    let pos_y = Math.random() * 250 + 10;
    foodList.push({x: pos_x, y: pos_y });
  
}
function generateAppleArray() {
  for(let i = 0; i > quantity; i++) {
    console.log(i);
    generateRandApplePos();
  }
}



