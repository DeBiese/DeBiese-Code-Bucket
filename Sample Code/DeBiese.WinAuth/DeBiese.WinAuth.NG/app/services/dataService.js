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
                var C = DeBiese.WinAuth.NG.Common;
                var M = DeBiese.WinAuth.NG.Models;
                var DataService = (function () {
                    function DataService($http, $filter, logService) {
                        this.$http = $http;
                        this.$filter = $filter;
                        this.logSvc = logService;
                        this.activate();
                    }
                    DataService.prototype.activate = function () {
                        var self = this;
                    };
                    DataService.prototype.save = function (data) {
                        var self = this;
                        self.logSvc.log('Calling getUser');
                        var defer = Q.defer();
                        var serviceUrl = C.Configuration.AppConfig.serviceBaseUrl + "data/save";
                        self.$http.post(serviceUrl, data)
                            .success(function (data, status, headers, config) {
                            defer.resolve(data);
                        })
                            .error(function (data, status, headers, config) {
                            self.logSvc.log(data);
                            defer.reject(new M.RejectMessage({ Message: data }));
                        });
                        return defer.promise;
                    };
                    DataService.$inject = ['$http', '$filter', 'logService'];
                    DataService.id = "dataService";
                    return DataService;
                }());
                Services.DataService = DataService;
                NG.app.service(DeBiese.WinAuth.NG.Services.DataService.id, DeBiese.WinAuth.NG.Services.DataService);
            })(Services = NG.Services || (NG.Services = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=dataService.js.map