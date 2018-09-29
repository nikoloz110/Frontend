class Apple {
  constructor(board, quantity, color) {
    this.board = board;
    this.radius = 6;
    this.color = color;
    this.ctx = board.ctx;
    this.quantity = quantity;
    this.appleList = [];
    this.generateAppleArray();
  }
  generateRandApplePos() {
    let pos_x = Math.random() * (this.board.width - this.radius) + this.radius;
    let pos_y = Math.random() * (this.board.height - this.radius) + this.radius;
    this.appleList.push({ x: pos_x, y: pos_y });
  }
  generateAppleArray() {
    for (let i = 0; i < this.quantity; i++) {
      this.generateRandApplePos();
    }
  }
  draw() {
    this.appleList.forEach(apple => {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(apple.x, apple.y, this.radius, 0, 2 * Math.PI);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();
    });
  }
}
