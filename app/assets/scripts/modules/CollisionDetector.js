import EndOfGameEvent from "../events/EndOfGameEvent";

class CollisionDetector {

    constructor(scoreMgr) {
        this.scoreManager = scoreMgr;
    }

    detectAll(hero, platforms, enemies) {
        var that = this;
        var collided = false;

        // Detects collisions with enemies
        enemies.getChildren().forEach(function(enemy){
            // There are two types of collisions with enemies:
            //   1. If player is falling (hero.ySpeed > 0 [1.a]
            //      AND hero.getY() < enemy.getY() [1.b]),
            //      then the player kills the enemy
            //   2. Else, the enemy kills the player
            if(that.detectCollision(enemy, hero)
              && hero.ySpeed > 2                                // 1.a
              && hero.getY() < enemy.getY()) {                  // 1.b
                that.scoreManager.scoreEnemy();
                enemy.remove();
            } else if(that.detectCollision(enemy, hero)) {      // 2
                throw new EndOfGameEvent('Game Over!');
            }
        });

        // Detects collisions with platforms
        platforms.getChildren().forEach(function(platform){
            // We're interested in collisions that:
            //   1. Actually occurs (detectCollision(a, b) is true)
            //   2. Player is over the platform (hero.getY() < platform.getY())
            //   3. Player is falling over (hero.ySpeed > 0)
            if(that.detectCollision(platform, hero) // 1
              && hero.getY() < platform.getY()      // 2
              && hero.ySpeed >= 0) {                // 3
                hero.ySpeed *= hero.bounce;
                hero.counter = 0;
                hero.setY(platform.getY() - hero.getHeight());
            }
        });
    }

    detectCollision(a, b) {
        var hit = false;

        // Horizontal collisions
        if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth()) {
            // Vertical collisions
            if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight()) {
                hit = true;
            }
        }

        // A gets inside B horizontally
        if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth()) {
            // A is completely inside B
            if(b.getY() <= a.getY() && b.getY() + b.getHeight() >= a.getY() + a.getHeight()) {
                hit = true;
            }
        }

        // B collides with A
        if(a.getX() <= b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth()) {
            if(a.getY() <= b.getY() && a.getY() + a.getHeight() >= b.getY() + b.getHeight()) {
                hit = true;
            }
        }

        return hit;
    }
}

export default CollisionDetector;
