/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Controllers;
            (function (Controllers) {
                var C = DeBiese.Authorization.NG.Common;
                var S = DeBiese.Authorization.NG.Services;
                var HomeController = (function () {
                    function HomeController($state, $timeout, toastSvc, logSvc) {
                        this.$state = $state;
                        this.$timeout = $timeout;
                        this.toastSvc = toastSvc;
                        this.logSvc = logSvc;
                        this.pageSize = C.Configuration.DefaultGridPagerConfig.pageSize;
                        this.pagesToShow = C.Configuration.DefaultGridPagerConfig.pagesToShow;
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
                        //        content: `<h1>Hello World!</h1>`,
                        //    });
                        //}, 4000, true);
                    };
                    HomeController.$inject = ['$state', '$timeout', S.ToastService.id, S.LogService.id];
                    HomeController.id = 'homeController';
                    return HomeController;
                }());
                Controllers.HomeController = HomeController;
                NG.app.controller(DeBiese.Authorization.NG.Controllers.HomeController.id, DeBiese.Authorization.NG.Controllers.HomeController);
            })(Controllers = NG.Controllers || (NG.Controllers = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));
