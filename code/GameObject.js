
function getResource(fileName) {
    let path = "res/";
    if (LOCAL_BUILD == false) path = "https://giulianoconte.github.io/Juke/" + path;
    return loadImage(path + fileName);
}

class GameObject {
    constructor(x, y, imageName) {
        this.s = createSprite(-666, -666);
        this.s.addImage(getResource(imageName));
        this.position = createVector(x, y);
        this.rotation = 0;
        this.offset = createVector(WINDOW_WIDTH / 2, WINDOW_HEIGHT / 2);

        this.init();
        this.orient();
    }

    init() {
        this.s.position.x = this.position.x;
        this.s.position.y = this.position.y;
    }

    orient() {
        this.s.position = this.position;
        this.s.rotation = this.rotation;
    }

    // Function to drive forwards and backwards
    // Parameters: speed (number) - Positive = forward / Negative = backwards
    drive(speed) {
        // Convert the rotational degrees into radians
        let radianRotation = this.rotation / 57.2958;

        // Change set the X and Y speed based off our rotation
        let xSpeed = Math.sin(radianRotation) * speed * -1;
        let ySpeed = Math.cos(radianRotation) * speed;

        // Increment our X and Y positions based off our speed
        this.position.x += xSpeed;
        this.position.y += ySpeed;
    }

    // Change the rotation of our sprite
    // Parameters: degrees (number) - Positive = tilt degree CW / Negative = tilt degrees CCW
    tilt(degrees) {
        this.rotation += degrees;
    }
}