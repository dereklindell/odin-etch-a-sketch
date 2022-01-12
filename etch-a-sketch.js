const divContainer = document.getElementById('divcontainer');

function setGrid() {
    let gridNumber = prompt("How big do you want your grid? (Max 100)", "64");
    
    if (gridNumber <= 100) {
        let gridSize = gridNumber * gridNumber - 1;

        divContainer.setAttribute('style', `grid-template-columns:repeat(${gridNumber}, 1fr);
        grid-template-rows:repeat(${gridNumber}, 1fr);`)
        
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
    //Adds in event listener for 
    newDiv.addEventListener('mouseenter', () => newDiv.setAttribute('style', `filter:brightness(.2)`))
    divContainer.appendChild(newDiv);

}

setGrid();

