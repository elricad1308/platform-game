import Kinetic from 'kinetic';

class Enemy extends Kinetic.Rect {

    constructor(spawnX, spawnY) {
        super({
          x: spawnX,
          y: spawnY
        });

        this.counter = 0;

        this.setHeight(60);
        this.setFill('darkred');
        this.setWidth(60);


    }

    generateRandomNumber(min, max) {
        var range = max - min;
        var random = Math.random() * range;
        random = Math.floor(random);

        return parseInt(min) + random;
    }

    move() {
        this.counter++;

        this.setX(this.getX() + Math.sin(this.counter * Math.PI / 50) * 5);
    }

}

export default Enemy;
