class Game {
  constructor(board, snake, apple) {
    this.board = board;
    this.snake = snake;
    this.apple = apple;
    this.score = 0;
  }
  updateSettings() {
    retrieveSettings();
    board = new Board(width, height, boardColor, canvas);
    apple = new Apple(board, quantity, appleColor);
    snake = new Snake(length, speed, snakeColor, board, apple, difficulty);
    game.board = board;
    game.apple = apple;
    game.snake = snake;
  }

  run() {
    this.updateSettings();
    this.keyboardInput();
    this.startScreen();
    this.board.canvas.addEventListener(
      "click",
      () => this.countDownThenLoop(),
      {
        once: true
      }
    );
    window.localStorage.setItem("lastScore", "0");
  }

  countDownThenLoop() {
    this.updateSettings();
    drawTimer();
    setTimeout(this.gameLoop.bind(this), 4000);

    function drawTimer() {
      let i = 4;
      let myInt = setInterval(countdown, 1000);
      function countdown() {
        i--;
        this.board.clear();
        this.board.ctx.font = "100px gothamRounded";
        this.board.ctx.fillText(
          i,
          this.board.width / 2 - 20,
          this.board.height / 2 - 10
        );
        if (i < 0) {
          clearInterval(myInt);
        }
      }
    }
  }

  drawScore() {
    this.board.ctx.save();
    this.board.ctx.fillStyle = "black";
    this.board.ctx.fill();
    this.board.ctx.font = "30px gothamRounded";
    this.board.ctx.fillText(`score: ${this.score}`, 10, 30);
    this.board.ctx.restore();
  }

  gameLoop() {
    this.board.clear();
    this.board.draw();
    this.snake.updatePosition();
    this.snake.draw();
    this.drawScore();
    this.apple.draw();
    if (
      this.snake.testCollisionToFood(
        this.snake.snakeList[0],
        this.apple.appleList
      )
    ) {
      this.apple.generateRandApplePos();
      this.snake.grow();
      this.score += 10;
      window.localStorage.setItem("lastScore", this.score);
    }
    if (!(this.snake.hitBorder() || this.snake.testCollisionOnItself())) {
      window.requestAnimationFrame(this.gameLoop.bind(this));
    } else {
      firstTimePlaying = false;
      this.checkForHighestScore();
      this.startScreen();
      this.score = 0;
      this.run();
    }
  }

  keyboardInput() {
    document.addEventListener("keydown", event => {
      if (event.keyCode == 37 && this.snake.direction != 2) {
        this.snake.direction = 0;
      } else if (event.keyCode == 38 && this.snake.direction != 3) {
        this.snake.direction = 1;
      } else if (event.keyCode == 39 && this.snake.direction != 0) {
        this.snake.direction = 2;
      } else if (event.keyCode == 40 && this.snake.direction != 1) {
        this.snake.direction = 3;
      }
    });
  }
  checkForHighestScore() {
    if (this.score > window.localStorage.getItem("highestScore")) {
      window.localStorage.setItem("highestScore", this.score);
    }
  }
  startScreen() {
    this.board.ctx.font = "30px gothamRounded";
    if (!firstTimePlaying) {
      this.board.clear();
      this.board.ctx.fillText(
        "GAME OVER",
        this.board.width / 2 - 100,
        this.board.height / 2 - 100
      );
      this.board.ctx.fillText(
        `max score - ${localStorage.getItem("highestScore")}`,
        this.board.width / 2 - 120,
        this.board.height / 2 - 50
      );
      this.board.ctx.fillText(
        `your score - ${localStorage.getItem("lastScore")}`,
        this.board.width / 2 - 105,
        this.board.height / 2 - 10
      );

      this.board.ctx.fillText(
        "click to play again",
        this.board.width / 2 - 145,
        this.board.height / 2 + 60
      );
    } else {
      this.board.clear();
      this.board.ctx.fillText(
        "click to play!",
        this.board.width / 2 - 110,
        this.board.height / 2 - 10
      );
    }
  }
}
