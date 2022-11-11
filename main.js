const containerDiv = document.querySelector(".container");


//User should decied size
const squareSize = 64;

// Calculate how many squares to put out

let witdhAndHeight = (squareSize * 16);

containerDiv.style.width = `${witdhAndHeight}px`;
containerDiv.style.height = `${witdhAndHeight}px`;



let squaresToGenerate = (witdhAndHeight/16) * (witdhAndHeight/16);


for(let i = 0; i< squaresToGenerate; i++){  //Generate grid
    createGridBlock();
}


function createGridBlock(){
    const squareConatiner = document.createElement("div");
    squareConatiner.setAttribute("color", "blue");
    
    squareConatiner.className="grid";
    containerDiv.appendChild(squareConatiner);
}


function ChangeColor(target){

    target.style.backgroundColor =" red";
}

addEventListener("mouseover", e => {
    if(e.target.className === "grid")
    ChangeColor(e.target);
});




