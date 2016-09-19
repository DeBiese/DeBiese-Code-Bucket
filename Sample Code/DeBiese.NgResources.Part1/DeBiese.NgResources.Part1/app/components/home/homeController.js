/// <reference path="../../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var NgResources;
    (function (NgResources) {
        var Part1;
        (function (Part1) {
            var Controllers;
            (function (Controllers) {
                var HomeMessages = DeBiese.NgResources.Part1.Resources.Home.Messages;
                var C = DeBiese.NgResources.Part1.Common;
                var S = DeBiese.NgResources.Part1.Services;
                var HomeController = (function () {
                    function HomeController($state, $timeout, toastSvc, logService, dummyService) {
                        this.$state = $state;
                        this.$timeout = $timeout;
                        this.toastSvc = toastSvc;
                        this.pageSize = C.Configuration.DefaultGridPagerConfig.pageSize;
                        this.pagesToShow = C.Configuration.DefaultGridPagerConfig.pagesToShow;
                        this.$resourceHelper = new C.Resources.ResourceHelper('Home');
                        this.logSvc = logService;
                        this.dummySvc = dummyService;
                        this.activate();
                    }
                    HomeController.prototype.activate = function () {
                        var self = this;
                        //Test Toasts
                        self.$timeout(function () {
                            self.toastSvc.toastError(HomeMessages.helloWorld);
                        }, 0, true);
                        self.$timeout(function () {
                            self.toastSvc.toastInfo(HomeMessages.helloWorld);
                        }, 1000, true);
                        self.$timeout(function () {
                            self.toastSvc.toastSuccess(HomeMessages.helloWorld);
                        }, 2000, true);
                        self.$timeout(function () {
                            self.toastSvc.toastWarning(HomeMessages.helloWorld);
                        }, 3000, true);
                        self.$timeout(function () {
                            self.toastSvc.toastCustom({
                                className: 'info',
                                content: "<h1>" + HomeMessages.helloWorld + "</h1>",
                            });
                        }, 4000, true);
                    };
                    HomeController.$inject = ['$state', '$timeout', S.ToastService.id, S.LogService.id, S.DummyService.id];
                    HomeController.id = 'homeController';
                    return HomeController;
                }());
                Controllers.HomeController = HomeController;
                Part1.app.controller(DeBiese.NgResources.Part1.Controllers.HomeController.id, DeBiese.NgResources.Part1.Controllers.HomeController);
            })(Controllers = Part1.Controllers || (Part1.Controllers = {}));
        })(Part1 = NgResources.Part1 || (NgResources.Part1 = {}));
    })(NgResources = DeBiese.NgResources || (DeBiese.NgResources = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=homeController.js.map