import { data } from "./data.js";
let homepage = document.querySelector("#homepage");
let noOfQue = data.length;
let currentQueIndex = 0;
let answers = [];
let score = 0;
let hasRun = false;

function renderHomepage() {
  currentQueIndex = 0;
  answers = [];
  score = 0;

  let startPage = document.createElement("div");
  let Title = document.createElement("div");
  let startQuizDiv = document.createElement("div");

  let startBtn = document.createElement("button");

  Title.innerHTML = `Basic <br> Quiz`;
  Title.setAttribute("id", "title");

  startBtn.innerHTML = "Start";
  startBtn.addEventListener("click", renderQuestion);
  startBtn.setAttribute("id", "startBtn");
  startBtn.classList.add("btn");

  startQuizDiv.setAttribute("id", "startBtnDiv");
  startQuizDiv.appendChild(startBtn);

  startPage.appendChild(Title);
  startPage.appendChild(startQuizDiv);
  startPage.setAttribute("id", "startPage");

  homepage.appendChild(startPage);
}

renderHomepage();

function renderQuestion() {
  homepage.replaceChildren();
  let queCard = generateQueCard(currentQueIndex);
  homepage.appendChild(queCard);
}

function generateQueCard(i) {
  let queCard = document.createElement("div");
  queCard.setAttribute("id", "queCard");
  let queDiv;
  let btnDiv;

  queDiv = generateQueDiv(i);
  btnDiv = generateBtnDiv(i);

  queDiv.setAttribute("id", "queDiv");

  queCard.appendChild(queDiv);
  queCard.appendChild(btnDiv);

  if (hasRun);
  else {
    hasRun = true;
    setInterval(timer, 1000);
  }

  return queCard;
}

function generateQueDiv(i) {
  let queDiv = document.createElement("div");
  let queNoTimerDiv = document.createElement("div");
  let queNo = document.createElement("h1");
  let Timer = document.createElement("span");
  let que = document.createElement("div");
  let options = document.createElement("div");

  queNoTimerDiv.setAttribute("id", "queNoTimerDiv");

  queNo.setAttribute("id", "queNo");
  que.setAttribute("id", "que");
  options.setAttribute("id", "options");

  Timer.setAttribute("id", "timer");
  Timer.innerHTML =
    `Time left\n${String(Math.floor(timeleft / 60)).padStart(2, "0")}:` +
    `${String(timeleft % 60).padStart(2, "0")}`;
  que.innerHTML = data[i].question;
  queNo.innerHTML = `Question ${i + 1}/${data.length}`;

  ["a", "b", "c", "d"].forEach((opt) => {
    let optDiv = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");

    input.setAttribute("type", "radio");
    input.setAttribute("name", `question-${i}`);
    input.setAttribute("value", opt);

    input.addEventListener("change", () => {
      answers[i] = opt;
      // let btn = document.querySelector("#nextBtn");
      // btn.disabled = false;
    });
    label.innerText = data[i][opt];
    optDiv.append(input, label);
    options.append(optDiv);
  });

  queNoTimerDiv.append(queNo, Timer);
  queDiv.append(queNoTimerDiv, que, options);

  return queDiv;
}

function generateBtnDiv() {
  let btnDiv = document.createElement("div");
  btnDiv.setAttribute("id", "btnDiv");

  if (currentQueIndex === data.length - 1) {
    let submitBtn = document.createElement("Button");
    submitBtn.innerHTML = "Submit";
    // submitBtn.disabled = true;
    submitBtn.setAttribute("id", "submitBtn");
    submitBtn.classList.add("btn");
    submitBtn.addEventListener("click", (event) => {
      currentQueIndex++;
      calculateScore();
      showScores();
    });
    btnDiv.append(submitBtn);
    return btnDiv;
  } else {
    let nextBtn = document.createElement("Button");
    nextBtn.innerHTML = "Next";
    // nextBtn.disabled = true;
    nextBtn.setAttribute("id", "nextBtn");
    nextBtn.classList.add("btn");
    nextBtn.addEventListener("click", (event) => {
      currentQueIndex++;
      renderQuestion();
    });
    btnDiv.append(nextBtn);
    return btnDiv;
  }
}

function calculateScore() {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === data[i].correct) {
      score++;
    }
  }
}

function showScores() {
  console.log(`Your Score is ${score}/${answers.length}`);
  homepage.replaceChildren();

  let div = document.createElement("div");
  div.setAttribute("id", "scoreDiv");

  let scoreDiv = document.createElement("h2");

  let startAgainBtn = document.createElement("button");
  startAgainBtn.setAttribute("id", "startAgainBtn");
  startAgainBtn.classList.add("btn");

  scoreDiv.innerHTML = `Your Score is ${score}/${answers.length}`;
  startAgainBtn.innerHTML = "Start Again";
  startAgainBtn.addEventListener("click", () => {
    homepage.replaceChildren();
    renderHomepage();
  });
  div.append(scoreDiv, startAgainBtn);
  homepage.append(div);
}

let timeleft = noOfQue * 60;
function timer(sec) {
  if (timeleft === noOfQue * 60) {
    timeleft--;
  }
  let Timer = document.querySelector("#timer");
  Timer.innerHTML =
    `Time left\n${String(Math.floor(timeleft / 60)).padStart(2, "0")}:` +
    `${String(timeleft % 60).padStart(2, "0")}`;

  // console.log(
  //   `Time left\n${String(Math.floor(timeleft / 60)).padStart(2, "0")}:` +
  //     `${String(timeleft % 60).padStart(2, "0")}`
  // );
  timeleft--;
}
