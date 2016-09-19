'use strict';
module DeBiese.Authorization.NG.Services {
    import C = DeBiese.Authorization.NG.Common;
    import M = DeBiese.Authorization.NG.Models;
    import S = DeBiese.Authorization.NG.Services;

    export interface IAuthenticationService {
        authenticatingPromise: ng.IPromise<any>;

        authenticate: (forceAuthentication?: boolean) => ng.IPromise<boolean>;
        getUser: () => M.IAppUser;
        isAuthenticated: () => boolean;
        isAuthenticating: () => boolean;
    }

    export class AuthenticationService implements IAuthenticationService {
        static $inject: string[] = ['$http', '$filter', 'logService'];
        static id: string = "authenticationService";

        private _identity: M.IAppUser;
        private _hasAuthenticated: boolean = false;
        private _isAuthenticating: boolean = false;

        public authenticatingPromise: ng.IPromise<any>;

        constructor(private $http: ng.IHttpService, private $filter: ng.IFilterService, private logSvc: ILogService) {

            this.activate();
        }

        private activate(): void {
            const self = this;
        }

        authenticate(forceAuthentication?: boolean): ng.IPromise<boolean> {
            const self = this;
            let defer = Q.defer();

            if ((!self.isAuthenticated && !self._hasAuthenticated) || (forceAuthentication != null && forceAuthentication === true)) {
                let serviceUrl: string = `${C.Configuration.AppConfig.serviceBaseUrl}auth/login`;
                self._hasAuthenticated = false;
                self._isAuthenticating = true;

                //Initiate promise that will resolve when authentication process is complete.
                //This is usefull when authorization is being checked when the authentication is not yet complete.
                let authDefer = Q.defer();
                self.authenticatingPromise = authDefer.promise;

                self.$http.get(serviceUrl)
                    .success((data, status, headers, config) => {
                        self._identity = data as M.IAppUser;
                        defer.resolve(true);
                    })
                    .error((data, status, headers, config) => {
                        self.logSvc.log(data);
                        defer.reject(new M.RejectMessage({ Message: data }));
                    })
                    .finally(() => {
                        self._hasAuthenticated = true;
                        self._isAuthenticating = false;

                        //Let any code waiting for the authentication to finish know that authentication finished!
                        authDefer.resolve();
                    });
            } else {
                defer.resolve(self.isAuthenticated());
            }

            return defer.promise;
        }

        getUser(): M.IAppUser {
            const self = this;
            return self._identity;
        }

        isAuthenticated(): boolean {
            const self = this;
            return self._identity != null;
        }

        isAuthenticating(): boolean {
            const self = this;
            return self._isAuthenticating;
        }
    }

    angular.module('debiese.security')
        .service(S.AuthenticationService.id, S.AuthenticationService);

}