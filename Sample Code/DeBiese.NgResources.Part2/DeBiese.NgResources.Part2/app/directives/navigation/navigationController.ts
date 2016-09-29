/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.NgResources.Part2.Controllers {
    import NavMessages = DeBiese.NgResources.Part2.Resources.Navigation;
    import C = DeBiese.NgResources.Part2.Common;

    export class NavigationController {
        static $inject: string[] = [DeBiese.NgResources.Part2.NavigationConfiguration.id];
        static id: string = 'navigationController';

        navConfig: DeBiese.NgResources.Part2.NavigationConfiguration;

        navResources: NavMessages = NavMessages;

        constructor(navigationConfiguration: DeBiese.NgResources.Part2.NavigationConfiguration) {
            this.navConfig = navigationConfiguration;
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.NgResources.Part2.Controllers.NavigationController.id, DeBiese.NgResources.Part2.Controllers.NavigationController);
}