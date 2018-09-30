window.onload = () => {
  //------------Update UI fields from localStorage-------------
  //---difficulty
  if (localStorage.getItem("difficulty") === null) {
    difficultyElement.value = "intermediate";
  } else {
    if (localStorage.getItem("difficulty") === "hard") {
      document.getElementById("hard").setAttribute("checked", "checked");
    } else if (localStorage.getItem("difficulty") === "intermediate") {
      document
        .getElementById("intermediate")
        .setAttribute("checked", "checked");
    } else if (localStorage.getItem("difficulty") === "novice") {
      document.getElementById("novice").setAttribute("checked", "checked");
    }
  }
  //---board
  if (localStorage.getItem("boardColor") === null) {
    boardColorElement.value = "white";
  } else {
    boardColorElement.value = localStorage.getItem("boardColor");
  }

  if (localStorage.getItem("width") === null) {
    widthElement.value = 500;
  } else {
    widthElement.value = localStorage.getItem("width");
  }

  if (localStorage.getItem("height") === null) {
    heightElement.value = 500;
  } else {
    heightElement.value = localStorage.getItem("height");
  }

  //---snake
  if (localStorage.getItem("snakeColor") === null) {
    snakeColorElement.value = "black";
  } else {
    snakeColorElement.value = localStorage.getItem("snakeColor");
  }

  if (localStorage.getItem("length") === null) {
    lengthElement.value = 10;
  } else {
    lengthElement.value = localStorage.getItem("length");
  }

  if (localStorage.getItem("speed") === null) {
    speedElement.value = "normal";
  } else {
    speedElement.value = localStorage.getItem("speed");
  }
  //--apple
  if (localStorage.getItem("appleColor") === null) {
    appleColorElement.value = "red";
  } else {
    appleColorElement.value = localStorage.getItem("appleColor");
  }
  if (localStorage.getItem("quantity") === null) {
    quantityElement.value = 3;
  } else {
    quantityElement.value = localStorage.getItem("quantity");
  }
  //------------finished updating UI fields from localStorage-------------

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
  //difficulty
  difficulty = localStorage["difficulty"] = document.querySelector(
    'input[name="difficulty"]:checked'
  ).value;
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

  boardColor = localStorage["boardColor"] = boardColorElement.value;

  //snake settings
  if (lengthElement.value <= 0 || lengthElement.value > 40) {
    length = lengthElement.value = localStorage["length"] = 5;
  } else {
    localStorage.setItem("length", lengthElement.value);
    length = localStorage.getItem("length");
  }

  snakeColor = localStorage["snakeColor"] = snakeColorElement.value;

  speed = localStorage["speed"] = document.getElementById("speed").value;

  //apple settings
  if (quantityElement.value <= 0 || quantityElement.value > 500) {
    quantity = quantityElement.value = localStorage["quantity"] = 5;
  } else {
    quantity = localStorage["quantity"] = quantityElement.value;
  }

  appleColor = localStorage["appleColor"] = appleColorElement.value;
};
