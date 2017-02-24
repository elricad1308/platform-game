import Kinetic from 'kinetic';

class Hero extends Kinetic.Rect {

    constructor() {
        super({});

        this.xSpeed = 15;
        this.ySpeed = 0;
        this.direction = 1;
        this.counter = 0;

        this.setHeight(70);
        this.setWidth(40);

        console.log('Hero created!')
    }

    goBack() {

    }

    fallDown() {

    }

    jump() {

    }

    walk() {

    }
}

export default Hero;
