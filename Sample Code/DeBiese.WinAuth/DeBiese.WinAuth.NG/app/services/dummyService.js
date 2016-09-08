/// <reference path="../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var WinAuth;
    (function (WinAuth) {
        var NG;
        (function (NG) {
            var Services;
            (function (Services) {
                var DummyService = (function () {
                    function DummyService($http, $filter, logService) {
                        this.$http = $http;
                        this.$filter = $filter;
                        this.logSvc = logService;
                        this.activate();
                    }
                    DummyService.prototype.activate = function () {
                        var self = this;
                    };
                    DummyService.$inject = ['$http', '$filter', 'logService'];
                    DummyService.id = "dummyService";
                    return DummyService;
                }());
                Services.DummyService = DummyService;
                NG.app.service(DeBiese.WinAuth.NG.Services.DummyService.id, DeBiese.WinAuth.NG.Services.DummyService);
            })(Services = NG.Services || (NG.Services = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=dummyService.js.map