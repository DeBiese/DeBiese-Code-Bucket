/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.NgResources.Part3.Controllers {
    import C = DeBiese.NgResources.Part3.Common;

    export class NavigationController {
        static $inject: string[] = [DeBiese.Common.Resources.ResourceProvider.id, DeBiese.NgResources.Part3.NavigationConfiguration.id];
        static id: string = 'navigationController';

        navConfig: DeBiese.NgResources.Part3.NavigationConfiguration;

        constructor(
            private resourceSvc: DeBiese.Common.Resources.IResourceService,
            navigationConfiguration: DeBiese.NgResources.Part3.NavigationConfiguration
        ) {
            this.navConfig = navigationConfiguration;
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.NgResources.Part3.Controllers.NavigationController.id, DeBiese.NgResources.Part3.Controllers.NavigationController);
}