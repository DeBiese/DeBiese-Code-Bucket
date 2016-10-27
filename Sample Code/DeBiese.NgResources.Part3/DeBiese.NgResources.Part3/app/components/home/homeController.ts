/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.NgResources.Part3.Controllers {
    import C = DeBiese.NgResources.Part3.Common;
    import M = DeBiese.NgResources.Part3.Models;
    import S = DeBiese.NgResources.Part3.Services;

    export interface IHomeController {

    }

    export class HomeController implements IHomeController {
        static $inject: string[] = [
            '$state',
            '$timeout',
            S.ToastService.id,
            S.LogService.id,
            S.DummyService.id,
            DeBiese.Common.Resources.ResourceProvider.id
        ];
        static id: string = 'homeController';
        

        pageSize: number = C.Configuration.DefaultGridPagerConfig.pageSize;
        pagesToShow: number = C.Configuration.DefaultGridPagerConfig.pagesToShow;

        constructor(
            private $state: angular.ui.IStateService,            
            private $timeout: ng.ITimeoutService,
            private toastSvc: S.IToastService,
            private logSvc: S.ILogService,
            private dummySvc: S.DummyService,
            private resourceSvc: DeBiese.Common.Resources.IResourceService
        ) {
            

        }

        $onInit(): void {
            const self = this;
            self.resourceSvc.addResourceFile(new DeBiese.Common.Resources.ResourceFile({ keyPrefix: 'Home', fileLocation: '/app/resources/components/home/', languages: ['en', 'nl'] }));

            self.activate();
        }

        private activate(): void {
            const self = this;

            //Test Toasts
            self.$timeout(() => {
                self.toastSvc.toastError(self.resourceSvc.getLocalResource('Home.helloWorld'))
            }, 500, true);
            self.$timeout(() => {
                self.toastSvc.toastInfo(self.resourceSvc.getLocalResource('Home.helloWorld'));
            }, 1000, true);
            self.$timeout(() => {
                self.toastSvc.toastSuccess(self.resourceSvc.getLocalResource('Home.helloWorld'));
            }, 2000, true);
            self.$timeout(() => {
                self.toastSvc.toastWarning(self.resourceSvc.getLocalResource('Home.helloWorld'));
            }, 3000, true);
            self.$timeout(() => {
                self.toastSvc.toastCustom({
                    className: 'info',
                    content: `<h1>${self.resourceSvc.getLocalResource('Home.helloWorld')}</h1>`,
                });
            }, 4000, true);            
        }

    }

    app.controller(DeBiese.NgResources.Part3.Controllers.HomeController.id, DeBiese.NgResources.Part3.Controllers.HomeController);
}
