const container = document.querySelector("#container");
const dino = document.querySelector("#dino");
const block = document.querySelector("#block");
const road = document.querySelector("#road");
const score = document.querySelector("#score");
const gameover = document.querySelector("#gameover");

let interval = null;
let playerScore = 0;

let scoreCounter = () => {
  playerScore++;
  score.innerHTML = `Score: <b>${playerScore}</b>`;
};

const startGame = () => {
  gameover.style.display = "none";
  block.classList.add("blockActive");
  road.firstElementChild.style.animation = "roadAnimation 3s linear infinite";
  playerScore = 0;
  interval = setInterval(scoreCounter, 1000); // Adjust interval duration here
};

const jump = () => {
  if (!dino.classList.contains("dinoActive")) {
    dino.classList.add("dinoActive");
  }
  setTimeout(() => {
    dino.classList.remove("dinoActive");
  }, 500);
};

window.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Spacebar") {
    startGame();
  } else if (event.key === "ArrowUp") {
    jump();
  }
});

window.addEventListener("click", () => {
  startGame();
});

dino.addEventListener("click", () => {
  jump();
});

setInterval(() => {
  let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

  if (dinoBottom <= 50 && blockLeft >= 20 && blockLeft <= 105) {
    gameover.style.display = "block";
    block.classList.remove("blockActive");
    road.firstElementChild.style.animation = "none";
    clearInterval(interval);
    playerScore = 0;
  }

  if (playerScore === 100) {
    road.firstElementChild.style.animation = "roadAnimation 2.6s linear infinite";
    container.style.backgroundImage = "url(/images/backround1.webp)";
  }

  if (playerScore === 300) {
    road.firstElementChild.style.animation = "roadAnimation 1.6s linear infinite";
    container.style.backgroundImage = "url(/images/background2.webp)";
  }
}, 10);
