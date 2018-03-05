/*
Simple level logic
*/

// input flags
// 0 means button is up, 1 means button is pressed, 2 means button is held
let KEY_W = 0;
let KEY_S = 0;
let KEY_A = 0;
let KEY_D = 0;
let MOUSE_LEFT = 0;
let MOUSE_RIGHT = 0;

let circle;

function initialize() {
    circle = createSprite(50, 50);
}

function getMouseInput() {
    switch (MOUSE_LEFT) {
        case 0:
            if (mouseIsPressed) {
                MOUSE_LEFT = 1;
            }
            break;
        case 1:
            if (mouseIsPressed) {
                MOUSE_LEFT = 2;
            } else {
                MOUSE_LEFT = 0;
            }
            break;
        case 2:
            if (mouseIsPressed) {
                MOUSE_LEFT = 2;
            } else {
                MOUSE_LEFT = 0;
            }
            break;
    }
}

function getKeyInput() {
    KEY_W = 0; KEY_S = 0; KEY_A = 0; KEY_D = 0;

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

function getInput() {
    getMouseInput();
    getKeyInput();
}

function update() {
    if (KEY_W >= 1) {
        circle.position.y -= 2;
    }
    if (KEY_S >= 1) {
        circle.position.y += 2;
    }
    if (KEY_A >= 1) {
        circle.position.x -= 2;
    }
    if (KEY_D >= 1) {
        circle.position.x += 2;
    }
    if (MOUSE_LEFT == 1) {
        circle.position.x = mouseX;
        circle.position.y = mouseY;
    }
}

function render() {
    drawSprites();
}