/// <reference path="../_app.ts" />
'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
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
                NG.app.service(DeBiese.Authorization.NG.Services.DummyService.id, DeBiese.Authorization.NG.Services.DummyService);
            })(Services = NG.Services || (NG.Services = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));
