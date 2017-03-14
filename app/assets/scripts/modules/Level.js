import Kinetic from 'kinetic';
import EnemyGroup from './EnemyGroup';
import PlatformGroup from './PlatformGroup';

class Level extends Kinetic.Layer {

    constructor() {
        super({});

        this.platforms = new PlatformGroup();
        this.enemies = new EnemyGroup();
    }
}

export default Level;
