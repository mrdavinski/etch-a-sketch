const containerDiv = document.querySelector(".container");


function createGridBlock(){

    const squareConatiner = document.createElement("div");
    squareConatiner.className="grid";
    squareConatiner.style.backgroundColor="black";
    squareConatiner.style.height = "16px";
    squareConatiner.style.width = "16px";
    containerDiv.appendChild(squareConatiner);
}


function ChangeColor(target){ //Pencil

    target.style.backgroundColor ="white";
}

addEventListener("mouseover", e => {
    if(e.target.className === "grid")
    ChangeColor(e.target);
});


function RemoveCurrentGrid(){

    const gridBlocks = document.querySelectorAll(".grid");

    if(gridBlocks.length > 1){
        gridBlocks.forEach(gridblock => {

            gridblock.remove();
        });
    }


}

function NewGrid(){ //Make a new grid

    RemoveCurrentGrid();
    let gridHeight = prompt("Height: (In squares)");
    let gridWidth = prompt("Width: (In squares)");
    
    console.log(gridHeight);
    console.log(gridWidth);
   
    CalculateGridSize(parseInt(gridHeight),parseInt(gridWidth));
}


function CalculateGridSize(gridHeight,gridWidth){ 
// Calculate how many squares to put out

let height = gridHeight * 16;
let width = gridWidth * 16;

//Set new height and width
containerDiv.style.width = `${height}px`;
containerDiv.style.height = `${width}px`;

let squaresToGenerate = gridHeight * gridWidth;
console.log(squaresToGenerate);
for(let i = 0; i< squaresToGenerate; i++){  //Generate grid
    createGridBlock();
}


}


