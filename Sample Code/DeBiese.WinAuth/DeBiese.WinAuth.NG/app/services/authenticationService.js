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
                var AuthenticationService = (function () {
                    function AuthenticationService($http, $filter, logService) {
                        this.$http = $http;
                        this.$filter = $filter;
                        this.logSvc = logService;
                        this.activate();
                    }
                    AuthenticationService.prototype.activate = function () {
                        var self = this;
                    };
                    AuthenticationService.prototype.getUser = function () {
                        var self = this;
                        self.logSvc.log('Calling getUser');
                        var defer = Q.defer();
                        var serviceUrl = C.Configuration.AppConfig.serviceBaseUrl + "auth/getuser";
                        self.$http.get(serviceUrl)
                            .success(function (data, status, headers, config) {
                            defer.resolve(data);
                        })
                            .error(function (data, status, headers, config) {
                            self.logSvc.log(data);
                            defer.reject(new M.RejectMessage({ Message: data }));
                        });
                        return defer.promise;
                    };
                    AuthenticationService.$inject = ['$http', '$filter', 'logService'];
                    AuthenticationService.id = "authenticationService";
                    return AuthenticationService;
                }());
                Services.AuthenticationService = AuthenticationService;
                NG.app.service(DeBiese.WinAuth.NG.Services.AuthenticationService.id, DeBiese.WinAuth.NG.Services.AuthenticationService);
            })(Services = NG.Services || (NG.Services = {}));
        })(NG = WinAuth.NG || (WinAuth.NG = {}));
    })(WinAuth = DeBiese.WinAuth || (DeBiese.WinAuth = {}));
})(DeBiese || (DeBiese = {}));
//# sourceMappingURL=authenticationService.js.map