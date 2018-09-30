class Snake {
  constructor(length, speedLevel, color, board, apple, difficulty) {
    this.width = 15;
    this.height = 15;
    this.color = color;
    this.difficulty = difficulty;
    this.speedLevel = speedLevel;
    this.speed = this.calculateSpeed(difficulty, speedLevel);
    this.board = board;
    this.apple = apple;
    this.direction = 2;
    this.size = length;
    this.createSnakeBody(this.size);
    this.ctx = board.ctx;
  }
  createSnakeBody(size) {
    this.snakeList = [];
    for (let i = 0; i < size; i++) {
      this.snakeList.unshift({ x: 0 + i * 10, y: 0 });
    }
  }
  calculateSpeed(difficulty, speedLevel) {
    let level;
    if (speedLevel == "slow") {
      level = 0;
    } else if (speedLevel == "normal") {
      level = 1;
    } else {
      level = 2;
    }
    let speed;
    if (difficulty === "novice") {
      level = level / 2;
      speed = 1 + level;
    } else if (difficulty === "intermediate") {
      speed = 3 + level;
    } else if (difficulty === "hard") {
      speed = 6 + level;
    }
    return speed;
  }
  draw() {
    this.snakeList.forEach((snakePiece, i) => {
      this.ctx.save();
      if (i == 0) this.ctx.fillStyle = "red";
      else this.ctx.fillStyle = this.color;
      this.ctx.fillRect(snakePiece.x, snakePiece.y, this.width, this.height);
      this.ctx.restore();
    });
  }
  updatePosition() {
    for (var i = this.snakeList.length - 1; i >= 0; i--) {
      if (this.direction == 0) {
        if (i == 0) {
          this.snakeList[i].x = this.snakeList[i].x - this.speed;
        } else {
          this.snakeList[i].x = this.snakeList[i - 1].x;
          this.snakeList[i].y = this.snakeList[i - 1].y;
        }
      } else if (this.direction == 1) {
        if (i == 0) {
          this.snakeList[i].y = this.snakeList[i].y - this.speed;
        } else {
          this.snakeList[i].x = this.snakeList[i - 1].x;
          this.snakeList[i].y = this.snakeList[i - 1].y;
        }
      } else if (this.direction == 2) {
        if (i == 0) {
          this.snakeList[i].x = this.snakeList[i].x + this.speed;
        } else {
          this.snakeList[i].x = this.snakeList[i - 1].x;
          this.snakeList[i].y = this.snakeList[i - 1].y;
        }
      } else if (this.direction == 3) {
        if (i == 0) {
          this.snakeList[i].y = this.snakeList[i].y + this.speed;
        } else {
          this.snakeList[i].x = this.snakeList[i - 1].x;
          this.snakeList[i].y = this.snakeList[i - 1].y;
        }
      }
    }
  }
  hitBorder() {
    if (
      this.snakeList[0].x > this.board.width ||
      this.snakeList[0].x < 0 ||
      this.snakeList[0].y < 0 ||
      this.snakeList[0].y > this.board.height
    ) {
      return true;
    }
  }
  testCollisionToFood(snakeHead, foodArr) {
    let collided = false;
    foodArr.forEach((apple, index, arr) => {
      if (
        snakeHead.x <= apple.x + this.apple.radius &&
        apple.x <= snakeHead.x + this.width &&
        snakeHead.y <= apple.y + this.apple.radius &&
        apple.y <= snakeHead.y + this.height
      ) {
        arr.splice(index, 1);
        collided = true;
      }
    });
    return collided;
  }

  testCollisionOnItself() {
    for (let i in this.snakeList) {
      if (i == 0) continue;

      if (
        Math.abs(this.snakeList[0].x - this.snakeList[i].x) < 1 &&
        Math.abs(this.snakeList[0].y - this.snakeList[i].y) < 1
      ) {
        return true;
      }
    }
  }

  grow() {
    let new_X, new_Y;
    if (this.direction == 0) {
      new_X = this.snakeList[0].x - this.apple.radius * 2;
      new_Y = this.snakeList[0].y;
    } else if (this.direction == 1) {
      new_X = this.snakeList[0].x;
      new_Y = this.snakeList[0].y - this.apple.radius * 2;
    } else if (this.direction == 2) {
      new_X = this.snakeList[0].x + this.apple.radius * 2;
      new_Y = this.snakeList[0].y;
    } else if (this.direction == 3) {
      new_X = this.snakeList[0].x;
      new_Y = this.snakeList[0].y + this.apple.radius * 2;
    }
    this.snakeList.unshift({ x: new_X, y: new_Y });
  }
}
