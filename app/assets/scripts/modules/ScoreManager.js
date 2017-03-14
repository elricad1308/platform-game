
// Score rewarded for killing an enemy
const ENEMY_VALUE = 500;

class ScoreManager {

    constructor() {
        this.score = 0;
    }

    scoreEnemy() {
        this.score += ENEMY_VALUE;
        console.log('+' + ENEMY_VALUE + '!');
    }
}

export default ScoreManager;
