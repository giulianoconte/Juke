/*
Game
*/

// input flags
// 0 means button is up, 1 means button is pressed, 2 means button is held
let KEY_W = 0;
let KEY_S = 0;
let KEY_A = 0;
let KEY_D = 0;
let MOUSE_LEFT = 0;

let square;

function initialize() {
    square = new GameObject(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2, "triangleGreen1.png");
}

function getInput() {
    KEY_W = 0; KEY_S = 0; KEY_A = 0; KEY_D = 0;
    MOUSE_LEFT = 0;

    if (mouseWentDown(LEFT))
        MOUSE_LEFT = 1;
    else if (mouseDown(LEFT))
        MOUSE_LEFT = 2;

    if (keyWentDown("w") || keyWentDown("W"))
        KEY_W = 1;
    else if (keyDown("w") || keyDown("W"))
        KEY_W = 2;

    if (keyWentDown("s") || keyWentDown("S"))
        KEY_S = 1;
    else if (keyDown("s") || keyDown("S"))
        KEY_S = 2;

    if (keyWentDown("a") || keyWentDown("A"))
        KEY_A = 1;
    else if (keyDown("a") || keyDown("A"))
        KEY_A = 2;

    if (keyWentDown("d") || keyWentDown("D"))
        KEY_D = 1;
    else if (keyDown("d") || keyDown("D"))
        KEY_D = 2;
}

function update() {
    if (KEY_W >= 1) {
        square.drive(-2);
    }
    if (KEY_S >= 1) {
        square.drive(2);
    }
    if (KEY_A >= 1) {
        //square.position.x -= 2;
        square.tilt(-2);
    }
    if (KEY_D >= 1) {
        //square.position.x += 2;
        square.tilt(2);
    }
    if (MOUSE_LEFT == 1) {
        square.position.x = mouseX;
        square.position.y = mouseY;
    }
}

function render() {
    square.orient();
    drawSprites();
}