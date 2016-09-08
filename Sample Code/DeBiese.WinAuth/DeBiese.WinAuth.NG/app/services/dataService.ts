/// <reference path="../_app.ts" />
'use strict';
module DeBiese.WinAuth.NG.Services {
    import C = DeBiese.WinAuth.NG.Common;
    import M = DeBiese.WinAuth.NG.Models;

    export interface IDataService {
        save: (data: M.IPostDataModel) => ng.IPromise<string>;
    }

    export class DataService implements IDataService {
        static $inject: string[] = ['$http', '$filter', 'logService'];
        static id: string = "dataService";

        private logSvc: ILogService;


        constructor(private $http: ng.IHttpService, private $filter: ng.IFilterService, logService: ILogService) {
            this.logSvc = logService;

            this.activate();
        }

        private activate(): void {
            const self = this;
        }


        save(data: M.IPostDataModel): ng.IPromise<string> {
            const self = this;
            self.logSvc.log('Calling getUser');

            let defer = Q.defer();
            let serviceUrl: string = `${C.Configuration.AppConfig.serviceBaseUrl}data/save`;

            self.$http.post(serviceUrl, data)
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

    app.service(DeBiese.WinAuth.NG.Services.DataService.id, DeBiese.WinAuth.NG.Services.DataService);
}