let squareButton = document.createElement("button");
let squareButtonText = document.createTextNode("Add Square");
let divContainer = document.createElement("div");
let numberOfSquares = document.getElementsByClassName("black-square");
let colors = [
  "red",
  "blue",
  "yellow",
  "green",
  "orange",
  "purple",
  "pink",
  "black",
];

document.body.appendChild(squareButton);
squareButton.appendChild(squareButtonText);
document.body.appendChild(divContainer);
divContainer.style.display = "flex";
divContainer.style.flexFlow = "row wrap";

squareButton.addEventListener("click", createSquare);

function createSquare() {
  let newDiv = document.createElement("div");
  divContainer.appendChild(newDiv);

  newDiv.className = "black-square";
  newDiv.style.width = "250px";
  newDiv.style.height = "250px";
  newDiv.style.backgroundColor = "black";
  newDiv.style.border = "thick solid white";
  newDiv.style.display = "flex";
  newDiv.id = numberOfSquares.length - 1;

  newDiv.addEventListener("mouseover", displayId);
  newDiv.addEventListener("mouseout", removeId);
  newDiv.addEventListener("click", changeColors);
  newDiv.addEventListener("dblclick", evenOrOdd);
}

function displayId() {
  let idText = document.createTextNode(event.target.id);
  event.target.appendChild(idText);
  event.target.style.color = "white";
  event.target.style.justifyContent = "center";
  event.target.style.alignItems = "center";
}

function removeId() {
  event.target.textContent = "";
}

function changeColors() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  event.target.style.backgroundColor = randomColor;
}

function evenOrOdd() {
  if (event.target.id % 2 === 0) {
    let targetId = event.target.id;
    let targetSquare = document.getElementById(targetId + 1);
    targetSquare.remove();
  }
}
