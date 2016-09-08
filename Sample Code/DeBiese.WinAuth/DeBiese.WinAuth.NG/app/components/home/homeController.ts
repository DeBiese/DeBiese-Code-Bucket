/// <reference path="../../_app.ts" />
'use strict';
module DeBiese.WinAuth.NG.Controllers {
    import C = DeBiese.WinAuth.NG.Common;
    import M = DeBiese.WinAuth.NG.Models;
    import S = DeBiese.WinAuth.NG.Services;

    export interface IHomeController {

    }

    export class HomeController implements IHomeController {
        static $inject: string[] = ['$state', '$timeout', S.ToastService.id, S.LogService.id, S.AuthenticationService.id, S.DataService.id];
        static id: string = 'homeController';
        
        constructor(
            private $state: angular.ui.IStateService,            
            private $timeout: ng.ITimeoutService,
            private toastSvc: S.IToastService,
            private logSvc: S.ILogService,
            private authSvc: S.IAuthenticationService,
            private dataSvc: S.IDataService) {

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
            //        content: `<h1>${'Hello World!'}</h1>`,
            //    });
            //}, 4000, true);
        }

        testAuthentication(): void {
            const self = this;

            self.authSvc.getUser()
                .then((rslt) => {
                    self.toastSvc.toastSuccess(rslt);
                })
                .catch((err) => {
                    self.logSvc.log(err);
                    self.toastSvc.toastError('An unexpected error occurred.');
                });
        }

        testPostData(): void {
            const self = this;

            self.dataSvc.save(new M.PostDataModel({ Id: 1, Name: 'DeBiese', IsTrue: false, CreatedOn: new Date() }))
                .then((rslt) => {
                    self.toastSvc.toastSuccess(rslt);
                })
                .catch((err) => {
                    self.logSvc.log(err);
                    self.toastSvc.toastError('An unexpected error occurred.');
                });
        }

    }

    app.controller(DeBiese.WinAuth.NG.Controllers.HomeController.id, DeBiese.WinAuth.NG.Controllers.HomeController);
}
