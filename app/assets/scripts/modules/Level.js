import Kinetic from 'kinetic';
import EnemyGroup from './EnemyGroup';
import PlatformGroup from './PlatformGroup';
import CoinGroup from './CoinGroup';

class Level extends Kinetic.Layer {

    constructor() {
        super({});

        // Key is used to advance to the next level.
        this.key = false;

        // Door is the exit point from the level.
        this.door = undefined;

        this.platforms = new PlatformGroup(0, 0);
        this.enemies = new EnemyGroup(0, 0);
        this.coins = new CoinGroup(0, 0);
    }
}

export default Level;
