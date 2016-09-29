/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.NgResources.Part2.Controllers {
    import HelpMessages = DeBiese.NgResources.Part2.Resources.Help;
    import C = DeBiese.NgResources.Part2.Common;

    export class HelpController {
        static $inject: string[] = [];
        static id: string = 'helpController';

        helpResources: HelpMessages = HelpMessages;

        constructor() {
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.NgResources.Part2.Controllers.HelpController.id, DeBiese.NgResources.Part2.Controllers.HelpController);
}