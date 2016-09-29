/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.NgResources.Part2.Controllers {
    import ErrorMessages = DeBiese.NgResources.Part2.Resources.Errors;
    import HomeMessages = DeBiese.NgResources.Part2.Resources.Home;
    import C = DeBiese.NgResources.Part2.Common;
    import M = DeBiese.NgResources.Part2.Models;
    import S = DeBiese.NgResources.Part2.Services;

    export interface IHomeController {

    }

    export class HomeController implements IHomeController {
        static $inject: string[] = ['$state', '$timeout', S.ToastService.id, S.LogService.id, S.DummyService.id];
        static id: string = 'homeController';

        private logSvc: S.ILogService;
        private dummySvc: S.IDummyService;

        homeResources: HomeMessages = HomeMessages;

        pageSize: number = C.Configuration.DefaultGridPagerConfig.pageSize;
        pagesToShow: number = C.Configuration.DefaultGridPagerConfig.pagesToShow;

        constructor(
            private $state: angular.ui.IStateService,            
            private $timeout: ng.ITimeoutService,
            private toastSvc: S.IToastService,
            logService: S.ILogService,
            dummyService: S.DummyService) {

            this.logSvc = logService;
            this.dummySvc = dummyService;

            this.activate();
        }


        private activate(): void {
            const self = this;

            //Test Toasts
            self.$timeout(() => {
                self.toastSvc.toastError(HomeMessages.helloWorld)
            }, 0, true);
            self.$timeout(() => {
                self.toastSvc.toastInfo(HomeMessages.helloWorld);
            }, 1000, true);
            self.$timeout(() => {
                self.toastSvc.toastSuccess(HomeMessages.helloWorld);
            }, 2000, true);
            self.$timeout(() => {
                self.toastSvc.toastWarning(HomeMessages.helloWorld);
            }, 3000, true);
            self.$timeout(() => {
                self.toastSvc.toastCustom({
                    className: 'info',
                    content: `<h1>${HomeMessages.helloWorld}</h1>`,
                });
            }, 4000, true);
        }

    }

    app.controller(DeBiese.NgResources.Part2.Controllers.HomeController.id, DeBiese.NgResources.Part2.Controllers.HomeController);
}
