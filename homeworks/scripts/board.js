class Board {
  constructor(width, height, color, canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = width;
    this.height = height;
    this.color = color;
  }
  setSize() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
  setBackgroundColor() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  draw() {
    this.ctx.save();
    this.setSize();
    this.setBackgroundColor();
    this.ctx.restore();
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
