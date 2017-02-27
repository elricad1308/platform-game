import Kinetic from 'kinetic';

class EnemyGroup extends Kinetic.Group {

    constructor(originX, originY) {
        super({
          x: originX,
          y: originY
        });
    }

    moveEnemies() {
        this.getChildren().forEach(function(enemy){
            enemy.move();
        });
    }
}

export default EnemyGroup;
