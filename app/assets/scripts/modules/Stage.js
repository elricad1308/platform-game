import Kinetic from 'kinetic';

class Stage {

    constructor() {
        this.stage = new Kinetic.Stage({
            container: "game",
            width: 960,
            height: 500
        });
    }
}

export default Stage;
