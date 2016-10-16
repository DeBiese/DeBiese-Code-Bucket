/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.NgResources.Part2.Controllers {
    import C = DeBiese.NgResources.Part2.Common;

    export class NavigationController {
        static $inject: string[] = [DeBiese.Common.Resources.ResourceProvider.id, DeBiese.NgResources.Part2.NavigationConfiguration.id];
        static id: string = 'navigationController';

        navConfig: DeBiese.NgResources.Part2.NavigationConfiguration;

        constructor(
            private resourceSvc: DeBiese.Common.Resources.IResourceService,
            navigationConfiguration: DeBiese.NgResources.Part2.NavigationConfiguration
        ) {
            this.navConfig = navigationConfiguration;
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.NgResources.Part2.Controllers.NavigationController.id, DeBiese.NgResources.Part2.Controllers.NavigationController);
}