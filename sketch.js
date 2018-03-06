/*
The engine
*/

let LOCAL_BUILD = false;

// the window where stuff is rendered
let canvas;
let WINDOW_WIDTH = 400
let WINDOW_HEIGHT = 400

// p5 function: preload() is called before page starts loading
function preload() {
}

// p5 function: setup() is called on page load
function setup() {
    canvas = createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
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