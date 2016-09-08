/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
            var Controllers;
            (function (Controllers) {
                var M = DeBiese.WinAuth.NG.Models;
                var S = DeBiese.WinAuth.NG.Services;
                var HomeController = (function () {
                    function HomeController($state, $timeout, toastSvc, logSvc, authSvc, dataSvc) {
                        this.$state = $state;
                        this.$timeout = $timeout;
                        this.toastSvc = toastSvc;
                        this.logSvc = logSvc;
                        this.authSvc = authSvc;
                        this.dataSvc = dataSvc;
                        this.activate();
                    }
                    HomeController.prototype.activate = function () {
                        var self = this;
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
                    };
                    HomeController.prototype.testAuthentication = function () {
                        var self = this;
                        self.authSvc.getUser()
                            .then(function (rslt) {
                            self.toastSvc.toastSuccess(rslt);
                        })
                            .catch(function (err) {
                            self.logSvc.log(err);
                            self.toastSvc.toastError('An unexpected error occurred.');
                        });
                    };
                    HomeController.prototype.testPostData = function () {
                        var self = this;
                        self.dataSvc.save(new M.PostDataModel({ Id: 1, Name: 'DeBiese', IsTrue: false, CreatedOn: new Date() }))
                            .then(function (rslt) {
                            self.toastSvc.toastSuccess(rslt);
                        })
                            .catch(function (err) {
                            self.logSvc.log(err);
                            self.toastSvc.toastError('An unexpected error occurred.');
                        });
                    };
                    HomeController.$inject = ['$state', '$timeout', S.ToastService.id, S.LogService.id, S.AuthenticationService.id, S.DataService.id];
                    HomeController.id = 'homeController';
                    return HomeController;
                }());
                Controllers.HomeController = HomeController;
                NG.app.controller(DeBiese.WinAuth.NG.Controllers.HomeController.id, DeBiese.WinAuth.NG.Controllers.HomeController);
            })(Controllers = NG.Controllers || (NG.Controllers = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=homeController.js.map