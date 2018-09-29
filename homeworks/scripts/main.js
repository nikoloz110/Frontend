window.onload = () => {
  retrieveSettings();
  board = new Board(width, height, boardColor, canvas);
  apple = new Apple(board, quantity, appleColor);
  snake = new Snake(length, speed, snakeColor, board, apple, difficulty);
  game = new Game(board, snake, apple);
  game.run();
};

//Initialize global vars
let canvas,
  width,
  height,
  color,
  boardColor,
  length,
  snakeColor,
  speed,
  quantity,
  appleColor,
  difficulty;
let firstTimePlaying = true;

//Get UI Elements
canvas = document.getElementById("canvas");
widthElement = document.getElementById("width");
heightElement = document.getElementById("height");
boardColorElement = document.getElementById("boardColor");
lengthElement = document.getElementById("length");
snakeColorElement = document.getElementById("snakeColor");
speedElement = document.getElementById("speed");
quantityElement = document.getElementById("quantity");
appleColorElement = document.getElementById("appleColor");
difficultyElement = document.querySelector('input[name="difficulty"]:checked');

retrieveSettings = () => {
  //board settings
  canvas.width = width;
  canvas.height = height;
  if (widthElement.value < 300 || widthElement.value > 950) {
    width = widthElement.value = localStorage["width"] = 500;
  } else {
    width = localStorage["width"] = widthElement.value;
  }

  if (heightElement.value < 300 || heightElement.value > 950) {
    height = heightElement.value = localStorage["height"] = 500;
  } else {
    height = localStorage["height"] = heightElement.value;
  }

  if (boardColorElement.value == undefined || boardColorElement.value == "") {
    boardColor = boardColorElement.value = localStorage["boardColor"] = "white";
  } else {
    boardColor = localStorage["boardColor"] = boardColorElement.value;
  }

  //snake settings
  if (lengthElement.value <= 0 || lengthElement.value > 40) {
    length = lengthElement.value = localStorage["length"] = 5;
  } else {
    length = localStorage["length"] = lengthElement.value;
  }

  if (snakeColorElement.value == undefined || snakeColorElement.value == "") {
    snakeColor = snakeColorElement.value = localStorage["snakeColor"] = "black";
  } else {
    snakeColor = localStorage["snakeColor"] = snakeColorElement.value;
  }

  speed = localStorage["speed"] = document.getElementById("speed").value;

  //apple settings
  if (quantityElement.value <= 0 || quantityElement.value > 500) {
    quantity = quantityElement.value = localStorage["quantity"] = 5;
  } else {
    quantity = localStorage["quantity"] = quantityElement.value;
  }

  if (appleColorElement.value == undefined || appleColorElement.value == "") {
    appleColor = appleColorElement.value = localStorage["appleColor"] = "red";
  } else {
    appleColor = localStorage["appleColor"] = appleColorElement.value;
  }
  //difficulty settings
  difficulty = localStorage["difficulty"] = document.querySelector(
    'input[name="difficulty"]:checked'
  ).value;
};
