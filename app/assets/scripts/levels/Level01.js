import Level from '../modules/Level';
import Platform from '../modules/Platform';
import Enemy from '../modules/Enemy';

class Level01 extends Level {

    constructor(width, height) {
        super({});

        // Creates the platforms
        var floor = new Platform(0, height - 15);
        floor.setWidth(width * 2);

        this.platforms.add(floor);
        this.platforms.add(new Platform(20, height / 1.5));
        this.platforms.add(new Platform(190, height / 3));

        // Create the enemies
        this.enemies.add(new Enemy(200, height - 75));
        this.enemies.add(new Enemy(850, height / 3.9 - 60));
        this.enemies.add(new Enemy(170, height / 3 - 60));
        this.enemies.add(new Enemy(1020, height - 75));
        this.enemies.add(new Enemy(1120, height - 75));
        this.enemies.add(new Enemy(1220, height - 75));

        this.add(this.platforms);
        this.add(this.enemies);
    }
}

export default Level01;
