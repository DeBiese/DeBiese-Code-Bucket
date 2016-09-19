'use strict';
module DeBiese.Authorization.NG.Services {
    import C = DeBiese.Authorization.NG.Common;
    import M = DeBiese.Authorization.NG.Models;
    import S = DeBiese.Authorization.NG.Services;

    export interface IAuthorizationService {
        isAuthorized: (requiredRole: string) => boolean;
    }

    export class AuthorizationService implements IAuthorizationService {
        static $inject: string[] = ['$timeout', S.AuthenticationService.id];
        static id: string = "AuthorizationService";

        constructor(private $timeout: ng.ITimeoutService, private authSvc: S.IAuthenticationService) {

        }

        isAuthorized(requiredRole: string): boolean {
            const self = this;

            return (self.authSvc.isAuthenticated() && self.authSvc.getUser().Role === requiredRole);
        }
    }

    angular.module('debiese.security')
        .service(S.AuthorizationService.id, S.AuthorizationService);
}