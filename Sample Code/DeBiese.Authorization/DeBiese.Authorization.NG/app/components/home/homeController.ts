/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.Authorization.NG.Controllers {
   import C = DeBiese.Authorization.NG.Common;
    import M = DeBiese.Authorization.NG.Models;
    import S = DeBiese.Authorization.NG.Services;

    export interface IHomeController {

    }

    export class HomeController implements IHomeController {
        static $inject: string[] = ['$state', '$timeout', S.ToastService.id, S.LogService.id];
        static id: string = 'homeController';
                

        pageSize: number = C.Configuration.DefaultGridPagerConfig.pageSize;
        pagesToShow: number = C.Configuration.DefaultGridPagerConfig.pagesToShow;

        constructor(
            private $state: angular.ui.IStateService,            
            private $timeout: ng.ITimeoutService,
            private toastSvc: S.IToastService,
            private logSvc: S.ILogService) {

            this.activate();
        }


        private activate(): void {
            const self = this;

            //Test Toasts
            //self.$timeout(() => {
            //    self.toastSvc.toastError('Hello World!')
            //}, 0, true);
            //self.$timeout(() => {
            //    self.toastSvc.toastInfo('Hello World!');
            //}, 1000, true);
            //self.$timeout(() => {
            //    self.toastSvc.toastSuccess('Hello World!');
            //}, 2000, true);
            //self.$timeout(() => {
            //    self.toastSvc.toastWarning('Hello World!');
            //}, 3000, true);
            //self.$timeout(() => {
            //    self.toastSvc.toastCustom({
            //        className: 'info',
            //        content: `<h1>Hello World!</h1>`,
            //    });
            //}, 4000, true);
        }

    }

    app.controller(DeBiese.Authorization.NG.Controllers.HomeController.id, DeBiese.Authorization.NG.Controllers.HomeController);
}
