'use strict';
module DeBiese.Authorization.NG.Controllers {
    export class NotAuthorizedController {
        static $inject: string[] = [];
        static id: string = 'notAuthorizedController';

        constructor() {

            this.activate();
        }


        private activate(): void {
            const self = this;


        }

    }

    app.controller(NotAuthorizedController.id, NotAuthorizedController);
}