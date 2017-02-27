import Kinetic from 'kinetic';

// Gravity force that pushes the player towards the bottom.
const GRAVITY = 0.8;

// Heigth that the player moves upward when jumping
const JUMP_HEIGHT = -15;

// Max number of times a player can jump in a row
const JUMP_LIMIT = (2*2);

class Hero extends Kinetic.Rect {

    constructor() {
        super({});

        this.xSpeed = 15;
        this.ySpeed = 0;
        this.direction = 1;
        this.counter = 0;

        this.bottomLimit = 0;
        this.rightLimit = 0;

        this.setHeight(70);
        this.setFill('#184164');
        this.setWidth(40);
        this.setX(0);
        this.setY(0);

        console.log('Hero created!')
    }

    goBack() {
        this.move({x: -this.xSpeed, y: 0});

        // Prevents the hero to escaping from screen!
        if(this.getX() < 0) {
            this.move({x: -this.getX(), y: 0});
        }
    }

    fallDown() {
        this.ySpeed += GRAVITY;
        this.move({x: 0, y: this.ySpeed});

        // Prevents the hero to falling down of screen!
        if(this.getY() + this.getHeight() > this.bottomLimit) {
            this.setY(this.bottomLimit - this.getHeight());

            // Once in floor, stop falling down.
            this.ySpeed = 0;
            this.counter = 0;
        }
    }

    jump() {
        if(this.counter < JUMP_LIMIT) {
            this.ySpeed = JUMP_HEIGHT;
            this.counter++;
        }
    }

    walk() {
        this.move({x: this.xSpeed, y: 0});

        // Prevents the hero to escaping from screen!
        if(this.getX() > this.rightLimit) {
            this.move({x: this.rightLimit - this.getX(), y: 0});
        }
    }
}

export default Hero;
