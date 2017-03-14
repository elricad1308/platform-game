import GameEvent from "./GameEvent";

class EndOfGameEvent extends GameEvent {

    constructor(msg) {
        super({});
        
        this.type = 1;
        this.message = msg;
    }

}

export default EndOfGameEvent;
