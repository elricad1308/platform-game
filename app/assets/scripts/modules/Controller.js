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
            console.log(self.keyboard);
        });

        this.document.keyup(function(e){
            self.keyboard[e.which] = false;
        });
    }

}

export default Controller;
