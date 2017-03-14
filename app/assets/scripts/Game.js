import Kinetic from 'kinetic';
import Hero from './modules/Hero';
import Enemy from './modules/Enemy';
import EnemyGroup from './modules/EnemyGroup';
import Platform from './modules/Platform';
import PlatformGroup from './modules/PlatformGroup';
import Controller from './modules/Controller';
import CollisionDetector from './modules/CollisionDetector';
import ScoreManager from './modules/ScoreManager';
import Level01 from './levels/Level01';

class Game {

    constructor() {
        // Initializes the game stage
        this.stage = new Kinetic.Stage({
            container: "game",
            width: 960,
            height: 500
        });

        // Initializes the Game global variables
        this.controller = new Controller();
        this.hero = new Hero();
        this.level = undefined;
        this.currentLevel = 1;
        this.scoreManager = new ScoreManager();
        this.collisionDetector = new CollisionDetector(this.scoreManager);

        // Performs the initial setup
        this.configPlayer();
        this.drawBackground();

        // All things set. Ready to go!
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
        // Draws the background accordingly to the level
        switch(this.currentLevel) {
            case 1:
                this.level = new Level01(this.stage.getWidth(), this.stage.getHeight());
                break;
        }

        // Adds the player to the background
        this.level.add(this.hero);

        // Adds the background (with the player) to the stage.
        this.stage.add(this.level);
    }

    endGame(gameEvent) {
        alert(gameEvent.message);
    }

    frameLoop() {
        try {
            this.level.enemies.moveEnemies();
            this.collisionDetector.detectAll(this.hero, this.level.platforms, this.level.enemies);
            this.movePlayer();
            this.stage.draw();
        } catch(gameEvent) {
            this.endGame(gameEvent);
        }
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
