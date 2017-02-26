import $ from 'jquery';

class Controller {

    constructor() {
        this.keyboard = {};
        this.document = $(document);

        this.addEvents();
    }

    addEvents() {
        self = this;

        this.document.keydown(function(e){
            self.keyboard[e.which] = true;
        });

        this.document.keyup(function(e){
            self.keyboard[e.which] = false;
        });
    }

    down() {
        return this.keyboard[40];
    }

    left() {
        return this.keyboard[37];
    }

    right() {
        return this.keyboard[39];
    }

    up() {
        return this.keyboard[38];
    }
}

export default Controller;
