const gridDisplay = document.querySelector(".grid-display");
const clearBtn = document.querySelector(".clear-btn");

let startPointSet = false;
let endPointSet = false;
let mouseDown = false;
let algorithmStarted = false;

let startNode = null;
let endNode = null;

function gridClickHandler (event) {
    let targetNode = event.target;
    if (!startPointSet) {
        startPointSet = true;
        startNode = targetNode;
        targetNode.classList.add("start-node");
    }
    else if (startPointSet && !endPointSet) {
        endPointSet = true;
        endNode = targetNode;
        targetNode.classList.add("end-node");
    }
}

function gridDragHandler (event) {
    if (mouseDown) {
        event.target.classList.add("obstacle-node");
    }
}

function gridMouseDownHandler (event) {
    if (startPointSet && endPointSet) {
        mouseDown = true;
    }
}

function gridMouseUpHandler (event) {
    if (startPointSet && endPointSet) {
        mouseDown = false;
    }
}

function clearButtonHandler (event) {
    if (startNode !== null) {
        startNode.classList.remove("start-node");
    }
    if (endNode !== null) {
        endNode.classList.remove("end-node");
    }
    
    startPointSet = false;
    endPointSet = false;
    algorithmStarted = false;
    startNode = null;
    endNode = null;

    let gridNodes = document.querySelectorAll(".grid-square");
    gridNodes.forEach(element => element.classList.remove("obstacle-node"));
}

gridDisplay.addEventListener("click", gridClickHandler);
gridDisplay.addEventListener("mousemove", gridDragHandler);
gridDisplay.addEventListener("mousedown", gridMouseDownHandler);
gridDisplay.addEventListener("mouseup", gridMouseUpHandler);
clearBtn.addEventListener("click", clearButtonHandler);