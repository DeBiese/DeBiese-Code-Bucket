/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.NgResources.Part3.Controllers {
    import C = DeBiese.NgResources.Part3.Common;

    export class HelpController {
        static $inject: Array<string> = [DeBiese.Common.Resources.ResourceProvider.id];
        static id: string = 'helpController';
        
        constructor(private resourceSvc: DeBiese.Common.Resources.IResourceService) {
            
        }

        $onInit(): void {
            const self = this;
            self.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.NgResources.Part3.Controllers.HelpController.id, DeBiese.NgResources.Part3.Controllers.HelpController);
}