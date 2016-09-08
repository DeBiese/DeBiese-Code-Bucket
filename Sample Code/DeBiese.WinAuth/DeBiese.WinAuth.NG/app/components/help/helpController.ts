/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.WinAuth.NG.Controllers {
    import C = DeBiese.WinAuth.NG.Common;

    export class HelpController {
        static $inject: string[] = [];
        static id: string = 'helpController';

        constructor() {
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.WinAuth.NG.Controllers.HelpController.id, DeBiese.WinAuth.NG.Controllers.HelpController);
}