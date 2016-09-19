/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.NgResources.Part1.Controllers {
    import C = DeBiese.NgResources.Part1.Common;

    export class NavigationController {
        static $inject: string[] = [DeBiese.NgResources.Part1.NavigationConfiguration.id];
        static id: string = 'navigationController';

        navConfig: DeBiese.NgResources.Part1.NavigationConfiguration;

        $resourceHelper: C.Resources.IResourceHelper;

        constructor(navigationConfiguration: DeBiese.NgResources.Part1.NavigationConfiguration) {
            this.navConfig = navigationConfiguration;
            this.$resourceHelper = new C.Resources.ResourceHelper('Navigation');
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.NgResources.Part1.Controllers.NavigationController.id, DeBiese.NgResources.Part1.Controllers.NavigationController);
}