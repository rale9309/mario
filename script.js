var body = document.querySelector("body");
var image = document.querySelector("img");

var counter = 150;
var isRotated = false;
var counterX = 0;
var isRunning = false;

body.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    image.style.bottom = 250 + "px";
  }
});

body.addEventListener("keyup", function (event) {
  if (event.key === "ArrowUp") {
    setTimeout(function () {
      image.style.bottom = "150px";
      counter = 150;
    }, 100);
  }
});

body.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    if (isRotated === true) {
      image.style.transform = "rotateY(0)";
    }

    if (isRunning === false) {
      image.setAttribute("src", "./mario_running.gif");
      isRunning = true;
    }

    setTimeout(function () {
      counterX -= 10;
      body.style.backgroundPositionX = counterX + "px";
    }, 10);
  } else if (event.key === "ArrowLeft") {
    // image.setAttribute("src", "./mario_running.gif");
    image.style.transform = "rotateY(180deg)";
    isRotated = true;
    if (isRunning === false) {
      image.setAttribute("src", "./mario_running.gif");
      isRunning = true;
    }
    setTimeout(function () {
      counterX += 10;
      body.style.backgroundPositionX = counterX + "px";
    }, 10);
  }
});

body.addEventListener("keyup", function (event) {
  if (event.key === "ArrowRight") {
    isRunning = false;
    image.setAttribute("src", "./mario.png");
  } else if (event.key === "ArrowLeft") {
    isRunning = false;
    image.setAttribute("src", "./mario.png");
  }
});