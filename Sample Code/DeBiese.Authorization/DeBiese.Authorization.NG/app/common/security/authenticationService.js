'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Services;
            (function (Services) {
                var C = DeBiese.Authorization.NG.Common;
                var M = DeBiese.Authorization.NG.Models;
                var S = DeBiese.Authorization.NG.Services;
                var AuthenticationService = (function () {
                    function AuthenticationService($http, $filter, logSvc) {
                        this.$http = $http;
                        this.$filter = $filter;
                        this.logSvc = logSvc;
                        this._hasAuthenticated = false;
                        this._isAuthenticating = false;
                        this.activate();
                    }
                    AuthenticationService.prototype.activate = function () {
                        var self = this;
                    };
                    AuthenticationService.prototype.authenticate = function (forceAuthentication) {
                        var self = this;
                        var defer = Q.defer();
                        if ((!self.isAuthenticated && !self._hasAuthenticated) || (forceAuthentication != null && forceAuthentication === true)) {
                            var serviceUrl = C.Configuration.AppConfig.serviceBaseUrl + "auth/login";
                            self._hasAuthenticated = false;
                            self._isAuthenticating = true;
                            //Initiate promise that will resolve when authentication process is complete.
                            //This is usefull when authorization is being checked when the authentication is not yet complete.
                            var authDefer_1 = Q.defer();
                            self.authenticatingPromise = authDefer_1.promise;
                            self.$http.get(serviceUrl)
                                .success(function (data, status, headers, config) {
                                self._identity = data;
                                defer.resolve(true);
                            })
                                .error(function (data, status, headers, config) {
                                self.logSvc.log(data);
                                defer.reject(new M.RejectMessage({ Message: data }));
                            })
                                .finally(function () {
                                self._hasAuthenticated = true;
                                self._isAuthenticating = false;
                                //Let any code waiting for the authentication to finish know that authentication finished!
                                authDefer_1.resolve();
                            });
                        }
                        else {
                            defer.resolve(self.isAuthenticated());
                        }
                        return defer.promise;
                    };
                    AuthenticationService.prototype.getUser = function () {
                        var self = this;
                        return self._identity;
                    };
                    AuthenticationService.prototype.isAuthenticated = function () {
                        var self = this;
                        return self._identity != null;
                    };
                    AuthenticationService.prototype.isAuthenticating = function () {
                        var self = this;
                        return self._isAuthenticating;
                    };
                    AuthenticationService.$inject = ['$http', '$filter', 'logService'];
                    AuthenticationService.id = "authenticationService";
                    return AuthenticationService;
                }());
                Services.AuthenticationService = AuthenticationService;
                angular.module('debiese.security')
                    .service(S.AuthenticationService.id, S.AuthenticationService);
            })(Services = NG.Services || (NG.Services = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));
