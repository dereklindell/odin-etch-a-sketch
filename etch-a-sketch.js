let divContainer = document.getElementById('divcontainer');

function setGrid() {
    let gridNumber = prompt("How big do you want your grid?", "Max 100");
    
    if (gridNumber <= 100) {
        let gridSize = gridNumber * gridNumber - 1;

        divContainer.setAttribute('style', `grid-template-columns:repeat(${gridNumber}, 23px);
        grid-template-rows:repeat(${gridNumber}, 23px);`)
        
        for (let i = 0; i <= gridSize; i++) {
            addDiv();
        }
    } else if (gridNumber >= 100 || gridNumber <= 0) {
        gridNumber = prompt("Pick a number between 1 and 100")
    }
}

function addDiv() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("canvassquare")
    newDiv.addEventListener('mouseenter', () => newDiv.setAttribute('style', 'background-color: rgb(96, 95, 110);'))

    divContainer.appendChild(newDiv);

}

setGrid();
