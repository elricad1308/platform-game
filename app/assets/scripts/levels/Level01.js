import Level from '../modules/Level';
import Platform from '../modules/Platform';
import Enemy from '../modules/Enemy';
import Coin from '../modules/Coin';
import Door from '../modules/Door';

class Level01 extends Level {

    constructor(width, height) {
        super({});

        // First level does not have a key
        this.key = true;

        // Creates the platforms
        var floor = new Platform(0, height - 15);
        floor.setWidth(width * 2);

        this.platforms.add(floor);
        this.platforms.add(new Platform(20, height / 1.5));
        this.platforms.add(new Platform(190, height / 3));
        this.platforms.add(new Platform(510, height / 1.6));
        this.platforms.add(new Platform(870, height / 3.9));

        // Create the enemies
        this.enemies.add(new Enemy(200, height - 75));
        this.enemies.add(new Enemy(850, height / 3.9 - 60));
        this.enemies.add(new Enemy(170, height / 3 - 60));
        this.enemies.add(new Enemy(1020, height - 75));
        this.enemies.add(new Enemy(1120, height - 75));
        this.enemies.add(new Enemy(1220, height - 75));

        // Create the coins
        this.coins.add(new Coin(350, height / 3 - 130));
        this.coins.add(new Coin(650, height / 2 - 130));
        this.coins.add(new Coin(80, height - 80));
        this.coins.add(new Coin(910, height / 6))
        this.coins.add(new Coin(1220, height - 80));

        // Creates the exit door
        this.door = new Door(910, height - 85);

        this.add(this.platforms);
        this.add(this.enemies);
        this.add(this.coins);
        this.add(this.door);
    }
}

export default Level01;
