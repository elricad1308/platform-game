import Kinetic from 'kinetic';

class Coin extends Kinetic.Rect {

    constructor(spawnX, spawnY) {
        super({});

        this.setFill('goldenrod');
        this.setHeight(30);
        this.setWidth(30);
        this.setX(spawnX);
        this.setY(spawnY);
    }
}

export default Coin;
