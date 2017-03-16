import Kinetic from 'kinetic';

class CoinGroup extends Kinetic.Group {

    constructor(originX, originY) {
        super({
          x: originX,
          y: originY
        });
    }
}

export default CoinGroup;
