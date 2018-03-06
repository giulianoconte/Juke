
function getResource(fileName) {
    var path = "res/";
    if (LOCAL_BUILD == false) path = "https://giulianoconte.github.io/Juke/" + path;
    return loadImage(path + fileName);
}

function GameObject(x, y, imageName) {
    this.s = createSprite(-666, -666);
    this.s.addImage(getResource(imageName));
    this.position = createVector(x, y);
    this.offset = createVector(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2);

    this.init = function() {
        this.s.position.x = this.position.x;
        this.s.position.y = this.position.y;
    }

    this.orient = function() {
        this.s.position = this.position;
    }

    this.init();
    this.orient();
}