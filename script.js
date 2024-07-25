const gridDisplay = document.querySelector(".grid-display");

let startPointSet = false;
let endPointSet = false;
let mouseDown = false;

function gridClickHandler (event) {
    let targetNode = event.target;
    if (!startPointSet) {
        startPointSet = true;
        targetNode.classList.add("start-node");
    }
    else if (startPointSet && !endPointSet) {
        endPointSet = true;
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

gridDisplay.addEventListener("click", gridClickHandler);
gridDisplay.addEventListener("mousemove", gridDragHandler);
gridDisplay.addEventListener("mousedown", gridMouseDownHandler);
gridDisplay.addEventListener("mouseup", gridMouseUpHandler);

