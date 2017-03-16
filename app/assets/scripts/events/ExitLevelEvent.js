import GameEvent from './GameEvent';

class ExitLevelEvent extends GameEvent {

    constructor() {
        super({});

        this.type = 2;
    }

}

export default ExitLevelEvent;
