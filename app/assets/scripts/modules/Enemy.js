class Enemy {

    constructor(spawnX, spawnY) {
        this.width = 60;
        this.height = 60;
        this.counter = 0;
        this.x = spawnX;
        this.y = spawnY;
    }

    generateRandomNumber(min, max) {
        var range = max - min;
        var random = Math.random() * range;
        random = Math.floor(random);

        return parseInt(min) + random;
    }

    move() {

    }

}

export default Enemy;
