/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.NgResources.Part1.Controllers {
    import C = DeBiese.NgResources.Part1.Common;

    export class HelpController {
        static $inject: string[] = [];
        static id: string = 'helpController';

        $resourceHelper: C.Resources.IResourceHelper;

        constructor() {
            this.$resourceHelper = new C.Resources.ResourceHelper('Help');
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.NgResources.Part1.Controllers.HelpController.id, DeBiese.NgResources.Part1.Controllers.HelpController);
}