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

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    gameover.style.display = "none";
    block.classList.add("blockActive");
    road.firstElementChild.style.animation = "roadAnimation 1.5s linear infinite";
    playerScore = 0;
    interval = setInterval(scoreCounter, 200);
  } else if (e.key === "ArrowUp") {
    if (!dino.classList.contains("dinoActive")) {
      dino.classList.add("dinoActive");
    }
    setTimeout(() => {
      dino.classList.remove("dinoActive");
    }, 500);
  }
});

setInterval(() => {
  let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));



  if (dinoBottom <= 50 && blockLeft >= 20 && blockLeft <= 105) {

    gameover.style.display = "block";
    block.classList.remove("blockActive");
    road.firstElementChild.style.animation = "none";
    clearInterval(interval)
    playerScore = 0;

   
  }
}, 10);
