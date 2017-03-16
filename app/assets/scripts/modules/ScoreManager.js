import Kinetic from 'kinetic';

// Score rewarded for killing an enemy
const ENEMY_VALUE = 500;

// Score rewarded for collecting a coin
const COIN_VALUE = 10;

class ScoreManager {

    constructor() {
        this.score = 0;
        this.text = undefined;
    }

    drawScore(width) {
        var that = this;

        this.text = new Kinetic.Text({
            text: 'Score: ' + that.score,
            fill: '#222',
            fontFamily: 'Helvetica',
            fontSize: 20,
            height: 25,
            width: 150,
            x: width - 150,
            y: 0
        });

        return that.text;
    }

    scoreCoin() {
        this.score += COIN_VALUE;
        console.log('+' + COIN_VALUE);
    }

    scoreEnemy() {
        this.score += ENEMY_VALUE;
        console.log('+' + ENEMY_VALUE + '!');
    }

    updateScore() {
        this.text.setText('Score: ' + this.score);
    }
}

export default ScoreManager;
