import Kinetic from 'kinetic';

class PlatformGroup extends Kinetic.Group {

    constructor(originX, originY) {
        super({
          x: originX,
          y: originY
        });
    }

}

export default PlatformGroup;
