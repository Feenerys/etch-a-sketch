const container = document.querySelector(".container");

let gridSize = 16*16;

function generateGrid(gridSize) {
for (let i = 0; i < (gridSize); i++) {
    const div = document.createElement("div");
    div.setAttribute("class","square");
    div.addEventListener("mouseover",() => div.style.backgroundColor = "black");
    container.appendChild(div);
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
