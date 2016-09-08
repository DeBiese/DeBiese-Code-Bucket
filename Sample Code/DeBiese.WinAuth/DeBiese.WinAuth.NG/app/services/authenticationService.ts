/// <reference path="../_app.ts" />
'use strict';
module DeBiese.WinAuth.NG.Services {
    import C = DeBiese.WinAuth.NG.Common;
    import M = DeBiese.WinAuth.NG.Models;

    export interface IAuthenticationService {
        getUser: () => ng.IPromise<string>;
    }

    export class AuthenticationService implements IAuthenticationService {
        static $inject: string[] = ['$http', '$filter', 'logService'];
        static id: string = "authenticationService";

        private logSvc: ILogService;


        constructor(private $http: ng.IHttpService, private $filter: ng.IFilterService, logService: ILogService) {
            this.logSvc = logService;

            this.activate();
        }

        private activate(): void {
            const self = this;
        }


        getUser(): ng.IPromise<string> {
            const self = this;
            self.logSvc.log('Calling getUser');

            let defer = Q.defer();
            let serviceUrl: string = `${C.Configuration.AppConfig.serviceBaseUrl}auth/getuser`;

            self.$http.get(serviceUrl)
                .success((data, status, headers, config) => {
                    defer.resolve(data as string);
                })
                .error((data, status, headers, config) => {
                    self.logSvc.log(data);
                    defer.reject(new M.RejectMessage({ Message: data }));
                });

            return defer.promise;
        }
    }

    app.service(DeBiese.WinAuth.NG.Services.AuthenticationService.id, DeBiese.WinAuth.NG.Services.AuthenticationService);

}