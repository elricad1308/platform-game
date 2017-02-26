import Kinetic from 'kinetic';

class Hero extends Kinetic.Rect {

    constructor() {
        super({});

        this.xSpeed = 15;
        this.ySpeed = 0;
        this.direction = 1;
        this.counter = 0;

        this.rightLimit = 0;

        this.setHeight(70);
        this.setFill('#184164');
        this.setWidth(40);
        this.setX(0);
        this.setY(0);

        console.log('Hero created!')
    }

    goBack() {
        this.move({x:-this.xSpeed, y:0});

        // Prevents the hero to escaping from screen!
        if(this.getX() < 0) {
            this.move({x:-this.getX(), y:0});
        }
    }

    fallDown() {

    }

    jump() {

    }

    walk() {
        this.move({x:this.xSpeed, y:0});

        // Prevents the hero to escaping from screen!
        if(this.getX() > this.rightLimit) {
            this.move({x: this.rightLimit - this.getX(), y:0});
        }
    }
}

export default Hero;
