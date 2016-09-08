/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.WinAuth.NG.Controllers {
    import C = DeBiese.WinAuth.NG.Common;

    export class NavigationController {
        static $inject: string[] = [DeBiese.WinAuth.NG.NavigationConfiguration.id];
        static id: string = 'navigationController';

        navConfig: DeBiese.WinAuth.NG.NavigationConfiguration;

        constructor(navigationConfiguration: DeBiese.WinAuth.NG.NavigationConfiguration) {
            this.navConfig = navigationConfiguration;
            this.activate();
        }

        activate(): void {

        }
    }

    app.controller(DeBiese.WinAuth.NG.Controllers.NavigationController.id, DeBiese.WinAuth.NG.Controllers.NavigationController);
}