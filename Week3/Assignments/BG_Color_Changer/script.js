let colors = ["red", "green", "blue", "yellow", "Purple", "Black", "Default"];
// let color = document.querySelectorAll("colorDiv");
let prevBgColor = "";

function renderHomepage() {
  let homepage = document.querySelector("#homepage");
  let colorsDiv = document.createElement("div");
  colorsDiv.setAttribute("id", "colorsDiv");

  // let colorDiv = "";

  for (let i = 0; i < colors.length; i++) {
    let colorDiv = createColorDiv(colors[i]);
    colorsDiv.appendChild(colorDiv);
    // console.log(colors[i]);
    colorDiv.setAttribute("id", colors[i] + "");
    colorDiv.addEventListener("click", changeBackgroundColor);

    colorDiv.addEventListener("mouseenter", () => {
      homepage.style.backgroundColor = colors[i];
    });
    colorDiv.addEventListener("mouseleave", () => {
      console.log(prevBgColor);
      homepage.style.backgroundColor = prevBgColor;
    });
  }

  homepage.appendChild(colorsDiv);
}
function createColorDiv(color) {
  let colorDiv = document.createElement("div");
  colorDiv.classList.add("colorDiv");
  colorDiv.innerHTML = color;
  colorDiv.style.backgroundColor = color;

  return colorDiv;
}
renderHomepage();

function changeBackgroundColor(event) {
  event.preventDefault();
  let element = event.target.closest("div");
  let homepage = document.querySelector("#homepage");

  if (element.innerHTML === "Default") {
    homepage.style.backgroundColor = "white";
    prevBgColor = "white";
  } else {
    homepage.style.backgroundColor = element.innerHTML;
    prevBgColor = element.innerHTML;
  }

  console.log("It is working");
}
