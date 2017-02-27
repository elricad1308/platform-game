import Kinetic from 'kinetic';

class Platform extends Kinetic.Rect {

    constructor(spawnX, spawnY) {
        super({
          x: spawnX,
          y: spawnY
        });

        this.setHeight(40);
        this.setFill('fuchsia');
        this.setWidth(200);
    }
}

export default Platform;
