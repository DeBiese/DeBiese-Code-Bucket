'use strict';
var DeBiese;
(function (DeBiese) {
    var Authorization;
    (function (Authorization) {
        var NG;
        (function (NG) {
            var Services;
            (function (Services) {
                var S = DeBiese.Authorization.NG.Services;
                var AuthorizationService = (function () {
                    function AuthorizationService($timeout, authSvc) {
                        this.$timeout = $timeout;
                        this.authSvc = authSvc;
                    }
                    AuthorizationService.prototype.isAuthorized = function (requiredRole) {
                        var self = this;
                        return (self.authSvc.isAuthenticated() && self.authSvc.getUser().Role === requiredRole);
                    };
                    AuthorizationService.$inject = ['$timeout', S.AuthenticationService.id];
                    AuthorizationService.id = "AuthorizationService";
                    return AuthorizationService;
                }());
                Services.AuthorizationService = AuthorizationService;
                angular.module('debiese.security')
                    .service(S.AuthorizationService.id, S.AuthorizationService);
            })(Services = NG.Services || (NG.Services = {}));
        })(NG = Authorization.NG || (Authorization.NG = {}));
    })(Authorization = DeBiese.Authorization || (DeBiese.Authorization = {}));
})(DeBiese || (DeBiese = {}));
