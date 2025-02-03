const container = document.querySelector(".container");

let defaultGridSize = 16;

function generateGrid(gridSize) {
    for (let i = 0; i < (gridSize*gridSize); i++) {
        const div = document.createElement("div");
        div.setAttribute("class","square");
        div.style.flexBasis = `${100/gridSize}%`;
        div.addEventListener("mouseover",() => div.style.backgroundColor = randomColor());
        container.appendChild(div);
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function randomColor() {
    function rgb() {
        return Math.floor(Math.random()*255);
    } 
    return `rgb(${rgb()},${rgb()},${rgb()})`
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