import Kinetic from 'kinetic';
import Hero from './modules/Hero';
import Enemy from './modules/Enemy';
import EnemyGroup from './modules/EnemyGroup';
import Platform from './modules/Platform';
import PlatformGroup from './modules/PlatformGroup';
import Controller from './modules/Controller';
import CollisionDetector from './modules/CollisionDetector';

class Game {

    constructor() {
        this.stage = new Kinetic.Stage({
            container: "game",
            width: 960,
            height: 500
        });

        this.controller = new Controller();
        this.hero = new Hero();

        // Declare variables that change with each level.
        this.enemies = undefined;
        this.platforms = undefined;
        this.background = undefined;

        this.configPlayer();
        this.drawBackground();

        this.self = setInterval(this.frameLoop.bind(this), 1000/24);
    }

    configPlayer() {
        // Positions the player at the bottom of the screen
        this.hero.setY(this.stage.getHeight() - this.hero.getHeight());

        // Sets the player right limit (so that he cannot move outside the canvas!)
        this.hero.rightLimit = this.stage.getWidth() - this.hero.getWidth();

        // Sets the player bottom limit (so that he cannot fall down of the canvas!)
        this.hero.bottomLimit = this.stage.getHeight();
    }

    drawBackground() {
        this.background = new Kinetic.Layer({});

        // Create the platforms
        this.platforms = new PlatformGroup();

        // Creates the floor
        var floor = new Platform(0, this.stage.getHeight() - 15);
        floor.setWidth(this.stage.getWidth() * 2);

        this.platforms.add(floor);
        this.platforms.add(new Platform(20, this.stage.getHeight() / 1.5));
        this.platforms.add(new Platform(190, this.stage.getHeight() / 3));

        // Create the enemies
        this.enemies = new EnemyGroup();

        this.enemies.add(new Enemy(200, this.stage.getHeight() - 75));
        this.enemies.add(new Enemy(850, this.stage.getHeight() / 3.9 - 60));
        this.enemies.add(new Enemy(170, this.stage.getHeight() / 3 - 60));
        this.enemies.add(new Enemy(1020, this.stage.getHeight() - 75));
        this.enemies.add(new Enemy(1120, this.stage.getHeight() - 75));
        this.enemies.add(new Enemy(1220, this.stage.getHeight() - 75));

        this.background.add(this.platforms);
        this.background.add(this.enemies);
        this.background.add(this.hero);

        this.stage.add(this.background);
    }

    frameLoop() {
        this.enemies.moveEnemies();
        this.movePlayer();
        this.stage.draw();
    }

    movePlayer() {
        // Emulate gravity (always pushes down the player).
        this.hero.fallDown();

        if(this.controller.right()){
            this.hero.walk();
        }

        if(this.controller.left()) {
            this.hero.goBack();
        }

        if(this.controller.up()) {
            this.hero.jump();
        }
    }
}

new Game();
