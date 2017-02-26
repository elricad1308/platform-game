import Kinetic from 'kinetic';
import Hero from './modules/Hero';
import Controller from './modules/Controller';
import CollisionDetector from './modules/CollisionDetector';

class Game {

    constructor() {
        this.stage = new Kinetic.Stage({
            container: "game",
            width: 960,
            height: 500
        });
        this.background = undefined;
        this.controller = new Controller();
        this.hero = new Hero();


        this.configPlayer();
        this.drawBackground();

        this.self = setInterval(this.frameLoop.bind(this), 1000/20);
    }

    configPlayer() {
        // Positions the player at the bottom of the screen
        this.hero.setY(this.stage.getHeight() - this.hero.getHeight());

        // Sets the player right limit (so that he cannot move outside the canvas!)
        this.hero.rightLimit = this.stage.getWidth() - this.hero.getWidth();
    }

    drawBackground() {
        this.background = new Kinetic.Layer({});
        this.background.add(this.hero);
        this.stage.add(this.background);
    }

    frameLoop() {
        this.movePlayer();
        this.stage.draw();
    }

    movePlayer() {
        if(this.controller.right()){
            this.hero.walk();
        }
        if(this.controller.left()) {
            this.hero.goBack();
        }
    }
}

new Game();
