const container = document.querySelector(".container");

let defaultGridSize = 16;

function generateGrid(gridSize) {
    for (let i = 0; i < (gridSize*gridSize); i++) {
        const div = document.createElement("div");
        div.setAttribute("class","square");
        div.style.flexBasis = `${100/gridSize}%`;
        div.addEventListener("mouseover",() => div.style.backgroundColor = "black");
        container.appendChild(div);
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

generateGrid(defaultGridSize);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let newGridSize = +prompt('Enter new grid size',defaultGridSize);
    if (newGridSize && newGridSize <= 100) {
        removeGrid();
        generateGrid(newGridSize);
    }
})