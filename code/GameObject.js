
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

    // Initialization
    init() {
        this.s.position.x = this.position.x;
        this.s.position.y = this.position.y;
    }

    // Updates sprite positioning and rotation
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

class Meteor extends GameObject {
    constructor(x, y, imageName) {
        super(x, y, imageName);

        this.size = 0.7;

        // +z means above the surface
        // 0 means at the surface
        // -z means below the surface
        this.position.z = 5;

        let randomX = Math.random() - 0.5;
        let randomY = Math.random() - 0.5;
        randomX *= 1.8;
        randomY *= 1.8;
        this.velocity = createVector(randomX, randomY, -0.04);

        let randomRotation = Math.random() - 0.5;
        randomRotation *= 10;
        this.rotationVelocity = randomRotation;
    }

    update() {
        if (this.position.z < 0.0) {
            this.position.z = 0.0;
            this.velocity = roadVelocity;
            this.rotationVelocity = 0;
            this.s = createSprite();
            this.s.addImage(getResource("Meteor.png"));
        }

        // Update position based on velocity
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.position.z += this.velocity.z;

        this.rotation += this.rotationVelocity;

        // Update sprite size based on depth and size
        this.s.scale = this.size * (1 / (1 + this.position.z));
    }
}