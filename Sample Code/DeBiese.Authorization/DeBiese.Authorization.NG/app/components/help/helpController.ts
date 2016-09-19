/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.Authorization.NG.Controllers {
    import C = DeBiese.Authorization.NG.Common;

    export class HelpController {
        static $inject: string[] = [];
        static id: string = 'helpController';
        

        constructor() {
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.Authorization.NG.Controllers.HelpController.id, DeBiese.Authorization.NG.Controllers.HelpController);
}