let squareButton = document.createElement("button");
let squareButtonText = document.createTextNode("Add Square");
document.body.appendChild(squareButton);
squareButton.appendChild(squareButtonText);

squareButton.addEventListener("click", createSquare);


function createSquare() {
    let newDiv = document.createElement("div");
    
    document.body.appendChild(newDiv);
}