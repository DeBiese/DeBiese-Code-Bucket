/// <reference path="../../_app.ts" />
'use strict';

module DeBiese.NgResources.Part3.Controllers {
    import C = DeBiese.NgResources.Part3.Common;
    import M = DeBiese.NgResources.Part3.Models;

    export class NavigationController {
        static $inject: string[] = [DeBiese.Common.Resources.ResourceProvider.id, DeBiese.NgResources.Part3.NavigationConfiguration.id];
        static id: string = 'navigationController';

        navConfig: DeBiese.NgResources.Part3.NavigationConfiguration;
        languageList: Array<M.ILanguage> = [
            { Code: 'nl', DisplayText: 'Nederlands' },
            { Code: 'en', DisplayText: 'English' }
        ];
        languageCode: string = 'en';

        constructor(
            private resourceSvc: DeBiese.Common.Resources.IResourceService,
            navigationConfiguration: DeBiese.NgResources.Part3.NavigationConfiguration
        ) {
            this.navConfig = navigationConfiguration;
        }

        $onInit(): void {
            const self = this;
            self.activate();
        }

        private activate(): void {
        }

        setLanguage(): void {
            const self = this;
            //Make the resource service translate clientside
            self.resourceSvc.setLanguage(self.languageCode);
        }
    }

    app.controller(DeBiese.NgResources.Part3.Controllers.NavigationController.id, DeBiese.NgResources.Part3.Controllers.NavigationController);
}