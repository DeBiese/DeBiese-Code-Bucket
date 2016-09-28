/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.NgResources.Part1.Controllers {
    import HelpMessages = DeBiese.NgResources.Part1.Resources.Help;
    import C = DeBiese.NgResources.Part1.Common;

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

    app.controller(DeBiese.NgResources.Part1.Controllers.HelpController.id, DeBiese.NgResources.Part1.Controllers.HelpController);
}