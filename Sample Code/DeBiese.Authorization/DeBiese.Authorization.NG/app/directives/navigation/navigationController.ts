/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.Authorization.NG.Controllers {
    import C = DeBiese.Authorization.NG.Common;

    export class NavigationController {
        static $inject: string[] = [DeBiese.Authorization.NG.NavigationConfiguration.id];
        static id: string = 'navigationController';

        navConfig: DeBiese.Authorization.NG.NavigationConfiguration;
        

        constructor(navigationConfiguration: DeBiese.Authorization.NG.NavigationConfiguration) {
            this.navConfig = navigationConfiguration;
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.Authorization.NG.Controllers.NavigationController.id, DeBiese.Authorization.NG.Controllers.NavigationController);
}