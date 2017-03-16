import Kinetic from 'kinetic';

class Door extends Kinetic.Rect {

    constructor(spawnX, spawnY) {
        super({});

        this.setFill('darkred');
        this.setHeight(70);
        this.setWidth(30);
        this.setX(spawnX);
        this.setY(spawnY);
    }
}

export default Door;
