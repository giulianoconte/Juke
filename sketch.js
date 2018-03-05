/*
The engine
*/

// the window where stuff is rendered
let canvas;

// p5 function: preload() is called before page starts loading
function preload() {
}

// p5 function: setup() is called on page load
function setup() {
    canvas = createCanvas(400, 400);
    centerCanvas();

    initialize();
}

// p5 function: draw() called on each tick
function draw() {
    background(25);
    fill(0);

    getInput();
    update();
    render();
}

function centerCanvas() {
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	canvas.position(x, y);
}

function windowResized() {
	centerCanvas();
}