let dkdlrhsks = 1;
const BtnSelected = () => {
  const BtnBox = document.querySelectorAll(".Difficulty");
  let currentBtn = "";
  for (const box of BtnBox) {
    const classList = box.className.split(" ");

    if (classList.includes("Selected")) {
      currentBtn = box.textContent;
    }
  }
  currentBtn = currentBtn.trim();
  console.log(currentBtn);
}; 

BtnSelected();

const selectBox = document.querySelectorAll(".Difficulty");
console.log(selectBox);
selectBox.forEach((box, i) => {
  let skill = "";
  box.addEventListener("click", (e) => {
    let boxs = document.querySelectorAll(".Difficulty");
    let skills = box.querySelectorAll(".Difficulty");
    let clicked = box.textContent;
    if (clicked.trim() === "쉬움") {
      dkdlrhsks = 1;
    } else {
      dkdlrhsks = 2;
    }
    console.log(dkdlrhsks);
    clicked = clicked.trim();
    console.log(clicked);
    for (const box of boxs) {
      if (box.textContent.trim() === clicked) {
        box.className = "Difficulty Selected";
      } else {
        box.className = "Difficulty";
      }
    }
  });
});

const MoveGamePage = () => {
  if (dkdlrhsks === 1) {
    window.location.href = "/rpdla";
  } else {
    window.location.href = "/hardrpdla";
  }
};
