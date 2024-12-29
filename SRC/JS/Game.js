let a;
let Num = 1;
let randArr = [];
let clickedArr = [];
let level = 1;
let CrtLight = 0;
let status = false;
let ClickedReturn = 0;
let word;
let RTarget = document.querySelector(".ReadyGo");
let Over = false;
const OTarget = document.querySelector(".Submit");
const ReTarget = document.querySelector(".Reset");
ReTarget.style.display = "flex";
OTarget.textContent = "Complete";

function Ready() {
  RTarget.textContent = "Ready";
  RTarget.style.color = "red";
}

function Go() {
  RTarget.textContent = "Go";
  RTarget.style.color = "blue";
}

function Randint(Num) {
  randArr = [];
  for (let i = 0; i < Num; i++) {
    a = Math.floor(Math.random() * 5) + 1;
    randArr.push(a);
  }
  console.log(randArr);
}

function LightOn(Num) {
  const target = document.getElementById(`Btn ${Num}`);
  target.style.backgroundColor = "red";
  setTimeout(function () {
    target.style.backgroundColor = "#dfdfdf";
  }, 500);
}

function ShowExample(SendArr) {
  let len = SendArr.length;
  setTimeout(() => {
    status = true;
    Go();
  }, 1000 * (len + 1));
  for (let i = 0; i < len; i++) {
    (() => {
      setTimeout(() => {
        CrtLight = SendArr[i];
        LightOn(CrtLight);
      }, 1000 * (i + 1));
    })();
  }
}

function InsertExample() {
  let Btntarget = document.querySelectorAll(".Btn ");
  const Boardtarget = document.querySelector(".WhiteBoard");
  Btntarget.forEach((box, i) => {
    let boxs = document.querySelectorAll(".Btn ");
    box.addEventListener("click", (e) => {
      if (status) {
        clickedArr.push(ClickedReturn);
        Boardtarget.textContent = clickedArr;
      }
    });
  });
}

function GameOver() {
  Over = true;
  ReTarget.style.display = "none";
  OTarget.textContent = "ReTry";
  RTarget.textContent = "Game Over";
  RTarget.style.color = "black";
}

function checksubmit() {
  let target = document.querySelector(".HowLvl");
  if (status) {
    if (randArr.length == clickedArr.length) {
      console.log("length same");
      let result = randArr.filter((word, i) => word !== clickedArr[i]);
      if (result.length == 0) {
        level += 1;
        target.textContent = level;
        console.log(level);
        status = false;
        clickedArr = [];
        if (level % 2 == 0) {
          Num += 1;
        }
        Game();
      } else {
        GameOver();
      }
    } else {
      GameOver();
    }
  }
}

function Game() {
  Ready();
  Randint(Num);
  ShowExample(randArr);
}

InsertExample();
Game();

a = Math.floor(Math.random() * 5) + 1;

function BtnClicked1() {
  ClickedReturn = 1;
}

function BtnClicked2() {
  ClickedReturn = 2;
}

function BtnClicked3() {
  ClickedReturn = 3;
}

function BtnClicked4() {
  ClickedReturn = 4;
}

function BtnClicked5() {
  ClickedReturn = 5;
}

function Reset() {
  document.querySelector(".WhiteBoard").textContent = "";
  clickedArr = [];
}

function Submit() {
  if (Over) {
    window.location.reload();
  } else {
    checksubmit();
  }
}

const GoHome = () => {
  window.location.href = "/";
};
